import React from "react";

export const Navbar = () => {
  return (
    <nav className="grid grid-cols-4 text-center">
      {[
        ["Home", "/home"],
        ["Last Entry", "/last"],
        ["All Entries", "/all"],
        ["About Me", "/about"],
      ].map(([title, url]) => (
        <a
          href={url}
          className="px-3 py-3 m-0 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 hover:font-bold">
          {title}
        </a>
      ))}
    </nav>
  );
};
