import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <p className="text-sm uppercase">Stock center</p>
      <p className="text-sm font-bold text-red-500">Items in stock</p>
      <button>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
