import React, { useState } from "react";
import { QueryClientProvider } from "react-query";
import { NavBar } from "./components/Navbar";
import { People } from "./components/People";
import { Planets } from "./components/Planets";
import { queryClient } from "./services/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const [page, setPage] = useState("planets");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Star Wars Info</h1>
        <NavBar setPage={setPage} />
        <div className="content">
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
