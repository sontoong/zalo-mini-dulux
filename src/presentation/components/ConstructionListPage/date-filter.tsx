import { DatePicker } from "antd";
import React from "react";

const DateFilter = () => {
  return (
    <DatePicker.RangePicker
      format="DD/MM/YYYY"
      className="h-full min-w-[55dvw] rounded-lg text-sm shadow-sm"
    />
  );
};

export { DateFilter };
