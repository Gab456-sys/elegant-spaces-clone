import { useLanguage } from "@/lib/i18n/LanguageContext";

export function WhoWeAre() {
  const { t } = useLanguage();
  return (
    <section className="bg-background text-foreground px-6 md:px-10 py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-7xl mx-auto">
        <div className="order-2 md:order-1">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1400&q=80"
            alt=""
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="eyebrow text-muted-foreground mb-7">{t("who.eyebrow")}</p>
          <h2 className="serif text-5xl md:text-6xl mb-8 leading-[1.05] font-light">{t("who.title")}</h2>
          <p className="text-base md:text-[17px] leading-[1.75] text-foreground/75 mb-9 max-w-xl font-light">
            {t("who.body")}
          </p>
          <a href="#" className="pill text-foreground"><span>{t("who.cta")}</span></a>
        </div>
      </div>
    </section>
  );
}
