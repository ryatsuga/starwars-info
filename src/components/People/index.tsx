import React from "react";
import { useQuery } from "react-query";
import { Person } from "../Person";

const fetchPeople = async () => {
  const res = await fetch("https://swapi.dev/api/people/");
  return res.json();
};

export function People() {
  const { data, status } = useQuery("people", fetchPeople);

  return (
    <div>
      <h2>People</h2>
      {/* <p>{status}</p> */}
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((person: any) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
}
