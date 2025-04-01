import { DownOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import React from "react";

const DateFilter = () => {
  return (
    <DatePicker.RangePicker
      format="DD/MM/YYYY"
      className="h-full min-w-[55dvw] text-sm"
      suffixIcon={<DownOutlined />}
      style={{ borderRadius: "6px" }}
    />
  );
};

export { DateFilter };
