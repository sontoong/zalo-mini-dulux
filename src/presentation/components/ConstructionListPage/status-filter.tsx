import { Circle } from "@mui/icons-material";
import { Select, SelectProps } from "antd";
import React from "react";

const StatusFilter = () => {
  return (
    <Select
      defaultValue="1"
      className="h-full min-w-[35dvw] rounded-lg text-sm"
      options={options}
    />
  );
};

export { StatusFilter };

const options: SelectProps["options"] = [
  {
    value: "1",
    label: (
      <div className="flex items-center gap-0.5">
        <Circle className="text-yellow4 !text-[8px]" />
        <div className="text-sm">Đang theo dõi</div>
      </div>
    ),
  },
  {
    value: "2",
    label: (
      <div className="flex items-center gap-0.5">
        <Circle className="text-success !text-[8px]" />
        <div className="text-sm">Thành công</div>
      </div>
    ),
  },
  {
    value: "3",
    label: (
      <div className="flex items-center gap-0.5">
        <Circle className="text-fail !text-[8px]" />
        <div className="text-sm">Thất bại</div>
      </div>
    ),
  },
  {
    value: "4",
    label: (
      <div className="flex items-center gap-0.5">
        <Circle className="!text-[8px] text-gray5" />
        <div className="text-sm">Quá hạn</div>
      </div>
    ),
  },
];
