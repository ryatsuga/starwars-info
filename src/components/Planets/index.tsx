import React, { useState } from "react";
import { useQuery } from "react-query";
import { Planet } from "../Planet";

const fetchPlanets = async (page: number) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

export function Planets() {
  const [page, setPage] = useState(1);
  const { data, status, isPreviousData, isFetched } = useQuery(
    ["planets", page],
    () => fetchPlanets(page),
    { keepPreviousData: true }
  );

  return (
    <div>
      <h2>Planets</h2>

      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          <span>Current Page: {isFetched ? page : "Loading..."}</span>
          <button
            type="button"
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Previous Page
          </button>
          <button
            type="button"
            onClick={() => {
              setPage((old) => (isPreviousData || !data.next ? old : old + 1));
            }}
            disabled={isPreviousData || !data.next}
          >
            Next Page
          </button>
          {data.results.map((planet: any) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
}
