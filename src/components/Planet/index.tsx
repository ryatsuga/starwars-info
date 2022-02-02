import React from "react";

export type PlanetProps = {
  planet: {
    name: string;
    population: string;
    terrain: string;
  };
};

export function Planet({ planet }: PlanetProps) {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
    </div>
  );
}
