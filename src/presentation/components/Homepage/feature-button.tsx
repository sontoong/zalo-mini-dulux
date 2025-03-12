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
    <Card className="shadow" onClick={() => navigate(linkTo)}>
      <div className="flex size-full flex-col items-center gap-2">
        <div className="bg-blue2 size-[50px] shrink-0 overflow-hidden rounded-xl">
          <img src={image} className="size-full object-cover" />
        </div>
        <div className="text-gray5 text-xs font-semibold">{name}</div>
      </div>
    </Card>
  );
};
