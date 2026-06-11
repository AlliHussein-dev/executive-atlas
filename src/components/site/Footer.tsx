import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-navy text-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-4 gap-16">
        <div className="lg:col-span-2 max-w-md">
          <div className="font-display text-2xl font-bold tracking-widest mb-6">
            ETIHAD <span className="italic font-light opacity-60">Consultancy</span>
          </div>
          <p className="text-sand/60 text-sm leading-relaxed mb-8">
            Corporate formation, strategic advisory, licensing, and government
            relations for ambitious investors establishing presence in the United
            Arab Emirates.
          </p>
          <div className="space-y-3 text-sm text-sand/70">
            <p>Electra Street (Zayed 2nd Street)</p>
            <p>Abu Dhabi, United Arab Emirates</p>
            <p className="text-gold tracking-wider">+971 2 000 0000</p>
            <p className="text-sand/50">advisory@etihadconsultancy.ae</p>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-6">
            Practice
          </h4>
          <ul className="space-y-3 text-sm text-sand/70">
            <li>
              <Link to="/legacy" className="hover:text-gold transition-colors">
                Legacy
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/industries" className="hover:text-gold transition-colors">
                Industries
              </Link>
            </li>
            <li>
              <Link to="/leadership" className="hover:text-gold transition-colors">
                Leadership
              </Link>
            </li>
            <li>
              <Link to="/case-studies" className="hover:text-gold transition-colors">
                Case Studies
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-6">
            Engage
          </h4>
          <ul className="space-y-3 text-sm text-sand/70">
            <li>
              <Link to="/contact" className="hover:text-gold transition-colors">
                Schedule Consultation
              </Link>
            </li>
            <li>
              <Link to="/journey" className="hover:text-gold transition-colors">
                Client Journey
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gold transition-colors">
                Corporate Gallery
              </Link>
            </li>
            <li>
              <Link to="/portal" className="hover:text-gold transition-colors">
                Private Portal
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-sand/40">
          <p>© {new Date().getFullYear()} Etihad Consultancy & Business Services LLC</p>
          <p>Abu Dhabi · Licensed by Department of Economic Development</p>
        </div>
      </div>
    </footer>
  );
}
