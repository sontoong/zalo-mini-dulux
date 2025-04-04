import { Card } from "antd";
import React, { FC } from "react";
import { useNavigate } from "zmp-ui";
import { RightOutlined } from "@ant-design/icons";

export const ToolButton: FC<Props> = ({ image, linkTo, name, brief }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="shadow"
      onClick={() => navigate(linkTo)}
      styles={{ body: { padding: "16px 12px " } }}
    >
      <div className="grid grid-flow-row grid-cols-6 items-center gap-11">
        <div className="col-span-1 size-[54px] shrink-0 rounded-md bg-green3 p-2">
          <img src={image} className="size-full object-cover" />
        </div>
        <div className="col-span-4 flex flex-col gap-1">
          <div className="text-[15px] font-semibold">{name}</div>
          <div className="text-xs font-normal text-gray5">{brief}</div>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <RightOutlined />
        </div>
      </div>
    </Card>
  );
};

type Props = {
  name: string;
  image: string;
  brief: string;
  linkTo: string;
};
