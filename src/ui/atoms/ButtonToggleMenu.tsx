"use client";

import { useIsMenuOpenStore } from "@/state/isMenuOpen";

const ButtonToggleMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useIsMenuOpenStore();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <button className="block lg:hidden">
      <div
        className={
          isMenuOpen ? "menu-button-container active" : "menu-button-container"
        }
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 200 200"
        >
          <g strokeWidth="4" strokeLinecap="square">
            <path
              d="M72 82.286h28.75"
              fill="#161616"
              fillRule="evenodd"
              stroke="#161616"
            />
            <path
              d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
              fill="none"
              stroke="#161616"
            />
            <path
              d="M72 125.143h28.75"
              fill="#161616"
              fillRule="evenodd"
              stroke="#161616"
            />
            <path
              d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
              fill="none"
              stroke="#161616"
            />
            <path
              d="M100.75 82.286h28.75"
              fill="#161616"
              fillRule="evenodd"
              stroke="#161616"
            />
            <path
              d="M100.75 125.143h28.75"
              fill="#161616"
              fillRule="evenodd"
              stroke="#161616"
            />
          </g>
        </svg>
      </div>
    </button>
  );
};

export default ButtonToggleMenu;
