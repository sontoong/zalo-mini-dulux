import React from "react";
import { DateFilter } from "./date-filter";
import { StatusFilter } from "./status-filter";

const Filters = () => {
  return (
    <div className="flex h-[29px] items-center gap-2">
      <DateFilter />
      <StatusFilter />
    </div>
  );
};

export default Filters;
