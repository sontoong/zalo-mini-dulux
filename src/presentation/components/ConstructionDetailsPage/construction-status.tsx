import { Circle } from "@mui/icons-material";
import { Tag } from "antd";
import React from "react";

const ConstructionStatus = () => {
  const status = Object.keys(statusColor)[3];
  const date = ["", "10/2/2025"][1];

  return (
    <div className="absolute left-0 top-0 flex size-full px-3 py-2">
      <div className="ml-auto mt-auto flex size-fit flex-col items-end">
        {/* Tag bottom right */}
        <Tag
          icon={<Circle fontSize="inherit" />}
          color={statusColor[status]}
          className="m-0 flex size-fit items-center gap-1 border-2"
        >
          <span className="text-2xs">{status}</span>
        </Tag>
        {/* Overdue date */}
        {date ? (
          <div className="text-2xs text-red5">Hết hạn từ {date}</div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ConstructionStatus;

const statusColor = {
  "Đang theo dõi": "gold",
  "Thành công": "green",
  "Thất bại": "volcano",
  "Quá hạn": "",
} as const;
