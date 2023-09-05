import React from "react";
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult.jsx";

export const SearchResultsList = ({ searchResults }) => {
  return (
    <div className="results-list">
      {searchResults.map((result) => {
        return <SearchResult result={result} key={result.ardaId} />;
      })}
    </div>
  );
};
