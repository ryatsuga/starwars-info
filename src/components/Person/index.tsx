import React from "react";

type PersonProps = {
  person: {
    name: string;
    gender: string;
    birth_year: string;
  };
};

export function Person({ person }: PersonProps) {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <p>Gender: {person.gender}</p>
      <p>Birth year: {person.birth_year}</p>
    </div>
  );
}
