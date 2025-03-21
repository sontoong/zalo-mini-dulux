import { Card } from "antd";
import React, { FC } from "react";
import { Icon, useNavigate } from "zmp-ui";
import { Circle } from "@mui/icons-material";
import { Tag } from "../common/tag";
import clsx from "clsx";

export type ConstructionInfo = {
  image: string;
  name: string;
  id: string;
  contractor: string;
  status: string;
  linkTo: string;
};

export const ConstructionInfoCard: FC<ConstructionInfo> = ({
  contractor,
  id,
  image,
  linkTo,
  name,
  status,
}) => {
  const navigate = useNavigate();

  return (
    <Card
      styles={{ body: { padding: "10px 12px" } }}
      onClick={() => navigate(linkTo)}
    >
      <div className="flex size-full gap-3">
        <div className="size-[50px] shrink-0 overflow-hidden rounded-md bg-blue2 p-2">
          <img src={image} className="size-full object-cover" />
        </div>
        <div className="flex size-full flex-col gap-1">
          <div className="text-sm">{name}</div>
          <div className="text-xs font-normal text-gray5">
            Mã công trình: {id}
          </div>
          <div className="text-xs font-normal text-gray6">
            Nhà thầu: {contractor}
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 flex size-full flex-col justify-between px-3 py-3">
        {/* Chevron top right */}
        <div className="ml-auto size-fit font-bold">
          <Icon icon="zi-chevron-right" />
        </div>
        {/* Tag bottom right */}
        <div className="ml-auto size-fit">
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
        </div>
      </div>
    </Card>
  );
};

const statusColor = {
  "Đang theo dõi": "#FFD800",
  "Thành công": "#31CE80",
  "Thất bại": "#FB5B5B",
  "Quá hạn": "#798174",
} as const;
