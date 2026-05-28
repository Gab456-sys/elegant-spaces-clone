export function WhoWeAre() {
  return (
    <section className="bg-background text-foreground px-6 md:px-12 py-24 md:py-36">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-7xl mx-auto">
        <div className="order-2 md:order-1">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1400&q=80"
            alt="Hotel corridor with golden arches"
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="eyebrow text-muted-foreground mb-8">Overview</p>
          <h2 className="serif text-5xl md:text-7xl mb-10 leading-[1.05]">Who we are</h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-10 max-w-xl">
            For over half a century, HBA has been a leading voice in the world of hospitality and design.
            Today, we are a dynamic and multidisciplinary creative collective, bringing decades of
            experience to bear across specialisms, markets and industries.
          </p>
          <button className="pill pill-light text-foreground"><span>Our Practice</span></button>
        </div>
      </div>
    </section>
  );
}
