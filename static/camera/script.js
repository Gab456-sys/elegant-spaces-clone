/* Motore scena cinematica — vanilla, un solo requestAnimationFrame loop. */
(function () {
  if (window.top !== window.self) document.body.classList.add("is-embedded");
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("room") || "basic";
  const ROOM = (window.ROOMS && (window.ROOMS[slug] || window.ROOMS.basic)) || null;
  if (!ROOM) return;

  const PINS = {
    icon1: pin(
      '<rect x="6" y="26" width="52" height="18" /><path d="M6 26v-8h20v8" /><path d="M10 44v6M54 44v6" />'
    ),
    icon2: pin(
      '<path d="M12 30h40v6a20 20 0 0 1-40 0z" /><path d="M20 30V14a6 6 0 0 1 12 0" /><path d="M32 56v4" />'
    ),
    icon3: pin(
      '<path d="M14 22h30v16a15 15 0 0 1-30 0z" /><path d="M44 26h6a6 6 0 0 1 0 12h-6" /><path d="M12 54h38" />'
    ),
  };

  function pin(inner) {
    return (
      "data:image/svg+xml;utf8," +
      encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="%231c1917" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          inner +
          "</svg>"
      ).replace(/%25/g, "%")
    );
  }

  /* ---------- contenuti ---------- */
  document.title = "Camera " + ROOM.name + " — Villa Sesto";
  document.querySelectorAll("[data-layer]").forEach((img) => {
    const src = ROOM.layers[img.dataset.layer];
    if (src) img.src = src;
  });
  document.querySelector(".hero-title").textContent = ROOM.name;
  document.querySelector(".intro-copy p").textContent = ROOM.intro;
  document.querySelector(".hero-tags").innerHTML = ROOM.tags
    .map((t) => "<span>" + t + "</span>")
    .join("");
  document.querySelector(".facts").innerHTML = ROOM.facts
    .map((f) => "<div><dt>" + f.dt + "</dt><dd>" + f.dd + "</dd></div>")
    .join("");

  const track = document.querySelector(".amenities-track");
  track.innerHTML = ROOM.amenities
    .map(
      (a) =>
        '<article class="amenity-card" tabindex="0" role="button" aria-label="' +
        a.aria +
        '"><span class="amenity-kicker">' +
        a.kicker +
        '</span><img class="amenity-pin" src="' +
        (PINS[a.pin] || PINS.icon1) +
        '" alt="" /><h3>' +
        a.title +
        "</h3><p>" +
        a.text +
        "</p></article>"
    )
    .join("");

  /* ---------- stato ---------- */
  const section = document.querySelector(".room-scroll");
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const amControls = document.querySelector(".amenities-controls");
  const prevBtn = document.querySelector(".amenity-prev");
  const nextBtn = document.querySelector(".amenity-next");
  const originalCards = Array.from(track.querySelectorAll(".amenity-card"));

  let targetMouseX = 0,
    targetMouseY = 0,
    mouseX = 0,
    mouseY = 0;
  let targetScroll = 0,
    smoothScroll = 0,
    initialized = false,
    rafPending = false;
  let amenityCards = [];
  const originalCount = originalCards.length;
  let activeCard = originalCount;

  const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
  const smoothstep = (e0, e1, v) => {
    const x = clamp((v - e0) / (e1 - e0));
    return x * x * (3 - 2 * x);
  };
  const lerp = (a, b, t) => a + (b - a) * t;
  const segmentInOut = (s, a, b, c, d) => {
    const enter = smoothstep(a, b, s);
    const exit = smoothstep(c, d, s);
    return { enter, exit, active: enter * (1 - exit) };
  };
  const getScrollDistance = () =>
    clamp(
      -section.getBoundingClientRect().top,
      0,
      section.offsetHeight - window.innerHeight
    );
  const set = (name, value) => root.style.setProperty(name, value);

  /* ---------- slider ---------- */
  function setupSlider() {
    track.replaceChildren();
    for (let setIndex = 0; setIndex < 3; setIndex++) {
      originalCards.forEach((card, cardIndex) => {
        const clone = card.cloneNode(true);
        clone.dataset.cardIndex = String(setIndex * originalCount + cardIndex);
        track.appendChild(clone);
      });
    }
    amenityCards = Array.from(track.querySelectorAll(".amenity-card"));
    activeCard = originalCount;
    amenityCards.forEach((card) => {
      card.addEventListener("click", () => selectCard(card));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectCard(card);
        }
      });
    });
    track.addEventListener("transitionend", normalizeSlider);
    updateSlider();
  }

  function updateSlider() {
    if (!amenityCards.length) return;
    const cardWidth = amenityCards[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    set("--am-shift", -(cardWidth + gap) * activeCard + "px");
    amenityCards.forEach((card) =>
      card.classList.toggle("is-active", Number(card.dataset.cardIndex) === activeCard)
    );
  }

  function moveSlider(dir) {
    activeCard += dir;
    updateSlider();
  }
  function selectCard(card) {
    const index = Number(card.dataset.cardIndex);
    if (Number.isFinite(index)) activeCard = index;
    updateSlider();
  }
  function jumpSlider(index) {
    track.classList.add("is-jumping");
    activeCard = index;
    updateSlider();
    requestAnimationFrame(() =>
      requestAnimationFrame(() => track.classList.remove("is-jumping"))
    );
  }
  function normalizeSlider() {
    if (activeCard >= originalCount * 2) jumpSlider(activeCard - originalCount);
    else if (activeCard < originalCount) jumpSlider(activeCard + originalCount);
  }

  /* ---------- loop ---------- */
  function update() {
    rafPending = false;
    targetScroll = getScrollDistance();
    if (!initialized || reduceMotion.matches) {
      smoothScroll = targetScroll;
      initialized = true;
    } else {
      smoothScroll = lerp(smoothScroll, targetScroll, 0.14);
    }
    if (Math.abs(smoothScroll - targetScroll) < 0.08) smoothScroll = targetScroll;

    mouseX = lerp(mouseX, targetMouseX, 0.12);
    mouseY = lerp(mouseY, targetMouseY, 0.12);

    const doorPhase = segmentInOut(smoothScroll, 560, 900, 1300, 1620);
    const detailPhase = segmentInOut(smoothScroll, 1760, 2140, 2540, 2700);
    const progress = clamp(smoothScroll / 2700);
    const introExit = smoothstep(90, 650, smoothScroll);
    const amEnter = Math.pow(smoothstep(2760, 3560, smoothScroll), 1.55);
    const amControlsEnter = smoothstep(3360, 3660, smoothScroll);
    const blurActive = clamp(doorPhase.active + detailPhase.active);
    const detailOpacity = doorPhase.active * (1 - detailPhase.enter);
    const doorDrift = Math.pow(doorPhase.enter, 1.5);
    const panel2Opacity = doorPhase.active * (1 - doorPhase.exit);
    const panel3Opacity = detailPhase.active * (1 - detailPhase.exit);
    const backScale =
      0.76 + progress * 0.2 + doorPhase.enter * 0.18 + detailPhase.enter * 0.16;
    const sharedHeroY = progress * -74;
    const sharedHeroScale = progress * 0.23;
    const amScreenTop =
      Math.min(220, Math.max(112, window.innerHeight * 0.19)) - 50;
    const amParentTop =
      window.innerHeight - (window.innerHeight - amScreenTop) / backScale;

    set("--mx", (reduceMotion.matches ? 0 : mouseX).toFixed(4));
    set("--my", (reduceMotion.matches ? 0 : mouseY).toFixed(4));

    set("--back-opacity", (1 - doorPhase.active * 0.06).toFixed(4));
    set("--back-x", (mouseX * -12).toFixed(2) + "px");
    set("--back-y", (mouseY * -4).toFixed(2) + "px");
    set("--back-scale", backScale.toFixed(4));
    set("--light-y", (10 + progress * 10).toFixed(3) + "vh");
    set("--light-scale", (0.78 + progress * 0.16).toFixed(4));
    set("--furniture-y", (20 - progress * 8).toFixed(3) + "vh");
    set("--blur-px", (blurActive * 14).toFixed(2) + "px");
    set("--back-brightness", (1 + blurActive * 0.1).toFixed(4));
    set("--furniture-blur-px", (doorPhase.active * 14).toFixed(2) + "px");
    set(
      "--furniture-brightness",
      (1 + doorPhase.active * 0.1 - detailPhase.active * 0.04).toFixed(4)
    );
    set("--furniture-saturation", (1 - detailPhase.active * 0.12).toFixed(4));
    set("--shade-opacity", "1");
    set("--shade-z", doorPhase.active > 0.02 ? "2" : "0");
    set("--shade-top-alpha", (blurActive * 0.46).toFixed(4));
    set("--shade-mid-alpha", (blurActive * 0.4).toFixed(4));
    set("--shade-bottom-alpha", (blurActive * 0.52).toFixed(4));

    set("--title-y", (introExit * -210).toFixed(2) + "px");
    set("--title-scale", (1 - introExit * 0.08).toFixed(4));
    set("--title-opacity", (1 - introExit).toFixed(4));

    set("--bed-x", "calc(-50% + " + (mouseX * 18).toFixed(2) + "px)");
    set(
      "--bed-y",
      (mouseY * 8 + sharedHeroY - doorPhase.exit * 820).toFixed(2) + "px"
    );
    set("--bed-bottom", (5 - doorPhase.enter * 13).toFixed(3) + "vh");
    set("--bed-width", (67.2 + doorPhase.enter * 37.8).toFixed(3) + "vw");
    set("--bed-scale", (1.02 + sharedHeroScale + doorPhase.exit * 0.62).toFixed(4));

    const doorY = (mouseY * 10 + sharedHeroY - doorDrift * 140).toFixed(2) + "px";
    const doorScale = (1 + sharedHeroScale + doorPhase.enter * 0.74).toFixed(4);
    set(
      "--door-left-x",
      "calc(-100% + " +
        (-doorDrift * 82).toFixed(3) +
        "vw + " +
        (mouseX * 22).toFixed(2) +
        "px)"
    );
    set("--door-left-y", doorY);
    set("--door-left-scale", doorScale);
    set("--door-left-rot", (doorDrift * 26).toFixed(3) + "deg");
    set(
      "--door-right-x",
      "calc(0% + " +
        (doorDrift * 82).toFixed(3) +
        "vw + " +
        (mouseX * 22).toFixed(2) +
        "px)"
    );
    set("--door-right-y", doorY);
    set("--door-right-scale", doorScale);
    set("--door-right-rot", (-doorDrift * 26).toFixed(3) + "deg");

    set("--door-opacity", (1 - clamp((doorDrift - 0.55) / 0.35)).toFixed(4));
    set("--detail-opacity", detailOpacity.toFixed(4));
    set("--detail-x", "calc(-50% + " + (mouseX * 10).toFixed(2) + "px)");
    set(
      "--detail-y",
      "calc(-50% + " + (mouseY * 8 - doorPhase.exit * 150).toFixed(2) + "px)"
    );
    set(
      "--detail-scale",
      (1.06 + doorPhase.enter * 0.08 + doorPhase.exit * 0.08).toFixed(4)
    );

    set("--intro-copy-y", (introExit * 90).toFixed(2) + "px");
    set("--intro-copy-opacity", (1 - introExit).toFixed(4));
    set("--panel2-opacity", panel2Opacity.toFixed(4));
    set(
      "--panel2-y",
      "calc(-50% + " +
        (-doorPhase.exit * 86 + (1 - doorPhase.enter) * 58).toFixed(2) +
        "px)"
    );
    set("--panel3-opacity", panel3Opacity.toFixed(4));
    set(
      "--panel3-y",
      "calc(-50% + " +
        (-detailPhase.exit * 86 + (1 - detailPhase.enter) * 58).toFixed(2) +
        "px)"
    );

    set("--am-opacity", amEnter.toFixed(4));
    set("--am-controls-opacity", amControlsEnter.toFixed(4));
    amControls.classList.toggle("is-ready", amControlsEnter > 0.98);
    set("--am-visibility", amEnter > 0.01 ? "visible" : "hidden");
    set("--am-y", "0px");
    set("--am-enter-x", ((1 - amEnter) * 420).toFixed(3) + "vw");
    set("--am-scale", (1 / backScale).toFixed(4));
    set("--am-top", amParentTop.toFixed(2) + "px");
    set("--am-screen-top", amScreenTop.toFixed(2) + "px");

    if (
      Math.abs(smoothScroll - targetScroll) > 0.08 ||
      Math.abs(mouseX - targetMouseX) > 0.001 ||
      Math.abs(mouseY - targetMouseY) > 0.001
    ) {
      requestTick();
    }
  }

  function requestTick() {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(update);
  }

  window.addEventListener("scroll", requestTick, { passive: true });
  window.addEventListener("resize", () => {
    updateSlider();
    requestTick();
  });
  window.addEventListener(
    "pointermove",
    (event) => {
      targetMouseX = event.clientX / window.innerWidth - 0.5;
      targetMouseY = event.clientY / window.innerHeight - 0.5;
      requestTick();
    },
    { passive: true }
  );
  prevBtn.addEventListener("click", () => moveSlider(-1));
  nextBtn.addEventListener("click", () => moveSlider(1));
  document.querySelector(".note-button").addEventListener("click", () => {
    if (window.top !== window.self) window.top.location.href = ROOM.bookingUrl;
    else window.location.href = ROOM.bookingUrl;
  });

  setupSlider();
  requestTick();
})();
