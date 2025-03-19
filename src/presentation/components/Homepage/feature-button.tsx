import { Card } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

export const FeatureButton: FC<{
  name: string;
  image: string;
  linkTo: string;
}> = ({ image, name, linkTo }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="shadow"
      onClick={() => navigate(linkTo)}
      styles={{ body: { padding: "10px " } }}
    >
      <div className="flex size-full flex-col items-center gap-2 pt-2">
        <div className="h-[40px] w-[50px] shrink-0 rounded-xl bg-blue2">
          <img src={image} className="size-full -translate-y-2 object-cover" />
        </div>
        <div className="text-xs font-semibold text-gray5">{name}</div>
      </div>
    </Card>
  );
};
