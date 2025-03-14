import React from "react";
import CongTrinh from "../../static/cong-trinh.svg";
import ThongKe from "../../static/thong-ke.svg";
import Zalo from "../../static/zalo.svg";
import { FeatureButton } from "./feature-button";

const FeatureList = () => {
  const features = [
    {
      name: "Danh sách công trình",
      image: CongTrinh,
      linkTo: "/cong-trinh",
    },
    {
      name: "Thống kê kết quả",
      image: ThongKe,
      linkTo: "/thong-ke",
    },
    {
      name: "Chat Zalo OA",
      image: Zalo,
      linkTo: "/chat-zalo",
    },
  ];

  return (
    <div className="grid grid-flow-row grid-cols-2 gap-3">
      {features.map(({ name, image, linkTo }, index) => (
        <FeatureButton key={index} image={image} name={name} linkTo={linkTo} />
      ))}
    </div>
  );
};

export default FeatureList;
