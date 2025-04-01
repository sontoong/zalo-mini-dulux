import React from "react";
import { SearchBar } from "../common/search-bar";

const Search = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="font-title text-xl font-bold">Câu hỏi thường gặp</div>
      <SearchBar placeholder="Tìm câu trả lời" />
    </div>
  );
};

export default Search;
