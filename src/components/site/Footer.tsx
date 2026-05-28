import { offices } from "./data";

const socials = ["Instagram","Facebook","WeChat","LinkedIn","Pinterest","YouTube"];

export function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground px-6 md:px-12 pt-20 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 mb-20 pb-16 border-b border-white/15">
          <div>
            <div className="serif text-4xl mb-8">HB_<span className="italic">A</span></div>
            <p className="text-white/70 leading-relaxed max-w-md">
              With 1,500 professionals across 29 offices in four regions, HBA collaborates with
              clients in more than 80 countries each year.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
            {Object.entries(offices).map(([region, cities]) => (
              <div key={region}>
                <p className="eyebrow text-white/60 mb-4">{region}</p>
                <ul className="space-y-1.5 text-sm text-white/85">
                  {cities.map((c) => (
                    <li key={c}><a href="#" className="hover:text-[color:var(--gold)] transition-colors">{c}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2">
            <p className="eyebrow text-white/60 mb-6">Subscribe</p>
            <form className="flex flex-col gap-4 max-w-xl" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-b border-white/30 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:border-white"
              />
              <select className="bg-transparent border-b border-white/30 py-3 text-sm focus:outline-none focus:border-white text-white/80">
                <option className="bg-dark">Select country</option>
                <option className="bg-dark">United States</option>
                <option className="bg-dark">United Kingdom</option>
                <option className="bg-dark">United Arab Emirates</option>
                <option className="bg-dark">Singapore</option>
                <option className="bg-dark">Italy</option>
              </select>
              <label className="flex gap-3 items-start text-xs text-white/70 leading-relaxed mt-2">
                <input type="checkbox" className="mt-1 accent-[color:var(--gold)]" />
                <span>I consent to HBA collecting and using my personal information in accordance with the Privacy Policy.</span>
              </label>
              <div className="mt-4">
                <button className="pill text-white"><span>Sign Up</span></button>
              </div>
            </form>
          </div>
          <div className="space-y-12">
            <div>
              <p className="eyebrow text-white/60 mb-4">Enquire</p>
              <a href="#" className="serif text-2xl border-b border-white/40 pb-1 hover:text-[color:var(--gold)] hover:border-[color:var(--gold)] transition-colors">
                Contact Us
              </a>
            </div>
            <div>
              <p className="eyebrow text-white/60 mb-4">Follow Us</p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 eyebrow text-white/85">
                {socials.map((s) => (
                  <li key={s}><a href="#" className="hover:text-[color:var(--gold)] transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/15 flex flex-wrap gap-4 justify-between eyebrow text-white/50">
          <p>Copyright © 2026 HBA. All Rights Reserved</p>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
