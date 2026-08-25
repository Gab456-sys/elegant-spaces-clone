import { Link } from "react-router-dom";

type MobileOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileOverlay = ({ isOpen, onClose }: MobileOverlayProps) => {
  return (
    <div
      id="mobile-overlay-menu"
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      className={`menu-overlay bg-transparent box-border caret-transparent text-stone-50 h-full outline-[3px] fixed no-underline w-full left-0 top-0 ${isOpen ? "is-open" : ""}`}
    >
      <button
        type="button"
        aria-label="Close menu overlay"
        onClick={onClose}
        className="absolute inset-0 bg-gray-900/70"
      />
      <div className="relative z-[9999] h-full w-full">
        <div className="menu-overlay-column bg-stone-100 box-border caret-transparent h-full outline-[3px] no-underline w-[calc(100%_+_1px)] overflow-auto -ml-px right-0">
          <div className="box-border caret-transparent h-full min-h-[1020px] outline-[3px] no-underline w-full px-6 pb-10 pt-6 md:min-h-[1030px]">
            <div className="mb-8 flex w-full justify-end">
              <button
                type="button"
                onClick={onClose}
                aria-label="Chiudi menu"
                className="appearance-none bg-transparent box-border caret-transparent text-gray-900 text-xs tracking-[1.2px] leading-[15px] outline-[3px] no-underline uppercase p-0"
              >
                Chiudi
              </button>
            </div>
            <nav aria-label="Mobile navigation" className="w-full">
              <ul className="box-border caret-transparent font-beausite_slick text-gray-900 text-[34px] leading-[40px] outline-[3px] no-underline pl-0">
                <li className="mb-5">
                  <Link
                    to="/"
                    onClick={onClose}
                    className="box-border caret-transparent block outline-[3px] no-underline"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-5">
                  <Link
                    to="/la-villa"
                    onClick={onClose}
                    className="box-border caret-transparent block outline-[3px] no-underline"
                  >
                    La Struttura
                  </Link>
                </li>
                <li className="mb-5">
                  <span className="box-border caret-transparent block outline-[3px] no-underline">
                    Suite
                  </span>
                  <ul className="mt-3 list-none pl-4 text-[22px] leading-[30px]">
                    <li className="mb-2">
                      <Link
                        to="/suite/family"
                        onClick={onClose}
                        className="box-border caret-transparent block outline-[3px] no-underline"
                      >
                        Family Suite
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        to="/suite/comfort"
                        onClick={onClose}
                        className="box-border caret-transparent block outline-[3px] no-underline"
                      >
                        Comfort Suite
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/suite/basic"
                        onClick={onClose}
                        className="box-border caret-transparent block outline-[3px] no-underline"
                      >
                        Basic Room
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="mb-5">
                  <Link
                    to="/consigli"
                    onClick={onClose}
                    className="box-border caret-transparent block outline-[3px] no-underline"
                  >
                    I nostri Consigli
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contatti"
                    onClick={onClose}
                    className="box-border caret-transparent block outline-[3px] no-underline"
                  >
                    Contatti
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
