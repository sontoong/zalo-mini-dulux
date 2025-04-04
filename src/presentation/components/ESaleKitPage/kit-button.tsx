import { Card } from "antd";
import React, { FC } from "react";
import { useNavigate } from "zmp-ui";

export const KitButton: FC<Props> = ({
  brief,
  image,
  linkTo,
  name,
  className,
}) => {
  const navigate = useNavigate();

  return (
    <Card
      className={`shadow-kit ${className}`}
      onClick={() => navigate(linkTo)}
      styles={{ body: { padding: "14px 6px 10px 6px " } }}
      cover={<img src={image} className="h-[120px] object-cover" />}
    >
      <div className="flex flex-col gap-[2px]">
        <div className="font-title text-[15px] font-bold">{name}</div>
        <div className="text-xs font-normal text-gray5">{brief}</div>
      </div>
    </Card>
  );
};

type Props = {
  name: string;
  image: string;
  brief: string;
  linkTo: string;
  className?: string;
};
