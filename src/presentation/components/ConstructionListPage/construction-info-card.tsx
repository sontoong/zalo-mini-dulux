import { Card, Tag } from "antd";
import React, { FC } from "react";
import { Icon, useNavigate } from "zmp-ui";
import { Circle } from "@mui/icons-material";

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
    <Card onClick={() => navigate(linkTo)}>
      <div className="flex size-full gap-2">
        <div className="bg-blue2 size-[50px] shrink-0 overflow-hidden rounded-md p-2">
          <img src={image} className="size-full object-cover" />
        </div>
        <div className="flex size-full flex-col gap-1">
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-gray5 text-xs">Mã công trình: {id}</div>
          <div className="text-gray6 text-xs">Nhà thầu: {contractor}</div>
        </div>
      </div>
      <div className="absolute left-0 top-0 flex size-full flex-col justify-between px-3 py-5">
        {/* Chevron top right */}
        <div className="ml-auto size-fit font-bold">
          <Icon icon="zi-chevron-right" />
        </div>
        {/* Tag bottom right */}
        <div className="ml-auto size-fit">
          <Tag
            icon={<Circle fontSize="inherit" />}
            color={statusColor[status]}
            className="m-0 flex items-center gap-1 border-2"
          >
            {status}
          </Tag>
        </div>
      </div>
    </Card>
  );
};

const statusColor = {
  "Đang theo dõi": "gold",
  "Thành công": "green",
  "Thất bại": "volcano",
  "Quá hạn": "",
} as const;
