import { Circle } from "@mui/icons-material";
import React from "react";
import { Tag } from "../common/tag";
import clsx from "clsx";

const ConstructionStatus = () => {
  const status = Object.keys(statusColor)[0];
  const date = ["", "10/2/2025"][0];

  return (
    <div className="absolute left-0 top-0 flex size-full px-3 py-2">
      <div className="ml-auto mt-auto flex size-fit flex-col items-end">
        {/* Tag bottom right */}
        <Tag
          icon={
            <Circle
              className="!text-[8px]"
              style={{ color: statusColor[status] }}
            />
          }
          color={statusColor[status]}
          className={clsx("m-0 flex items-center gap-1", {
            "!bg-gray1": status === "Quá hạn",
          })}
          style={{ borderColor: statusColor[status] }}
        >
          {status}
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
  "Đang theo dõi": "#FFD800",
  "Thành công": "#31CE80",
  "Thất bại": "#FB5B5B",
  "Quá hạn": "#798174",
} as const;
