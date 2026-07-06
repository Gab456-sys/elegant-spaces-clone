type MobileMenuButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const MobileMenuButton = ({
  isOpen,
  onToggle,
}: MobileMenuButtonProps) => {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls="mobile-overlay-menu"
      aria-label="Toggle menu overlay"
      onClick={onToggle}
      className="appearance-none bg-transparent caret-transparent text-stone-50 block text-xs tracking-[1.2px] leading-[15px] opacity-100 outline-[3px] pointer-events-auto absolute text-center no-underline uppercase z-[1001] mb-3 p-0 right-[69px] top-6 md:opacity-0 md:pointer-events-none md:right-[77.8889px] md:top-[32.8889px]"
    >
      MENU
    </button>
  );
};
