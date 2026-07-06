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
                  <a
                    href="/"
                    onClick={onClose}
                    className="box-border caret-transparent block outline-[3px] no-underline"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-5">
                  <a
                    href="/#la-villa"
                    onClick={onClose}
                    className="box-border caret-transparent block outline-[3px] no-underline"
                  >
                    La Villa
                  </a>
                </li>
                <li className="mb-5">
                  <a
                    href="/suite"
                    onClick={onClose}
                    className="box-border caret-transparent block outline-[3px] no-underline"
                  >
                    Suite
                  </a>
                </li>
                <li className="mb-5">
                  <a
                    href="/#faq"
                    onClick={onClose}
                    className="box-border caret-transparent block outline-[3px] no-underline"
                  >
                    I nostri Consigli
                  </a>
                </li>
                <li>
                  <a
                    href="/#contatti"
                    onClick={onClose}
                    className="box-border caret-transparent block outline-[3px] no-underline"
                  >
                    Contatti
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
