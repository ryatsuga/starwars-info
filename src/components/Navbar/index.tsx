import React from "react";

type NavbarProps = {
  setPage: (id: string) => void;
};

export function NavBar({ setPage }: NavbarProps) {
  return (
    <nav>
      <button onClick={() => setPage("planets")}>Planets</button>
      <button onClick={() => setPage("people")}>People</button>
    </nav>
  );
}
