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
      name: "Thống kê kết quả thầu thợ",
      image: ThongKe,
      linkTo: "/thong-ke-2",
    },
    {
      name: "Chat Zalo OA",
      image: Zalo,
      linkTo: "/chat-zalo",
    },
    {
      name: "QR",
      image: Zalo,
      linkTo: "/my-qr",
    },
    {
      name: "Đăng ký thầu thợ",
      image: Zalo,
      linkTo: "/worker-registration",
    },
    {
      name: "Đăng bài",
      image: Zalo,
      linkTo: "/checkin-post",
    },
    {
      name: "Đăng bài1",
      image: Zalo,
      linkTo: "/checkin-post1",
    },
    {
      name: "FAQs",
      image: Zalo,
      linkTo: "/faqs",
    },
    {
      name: "Tính khối lượng vật tư công trình",
      image: Zalo,
      linkTo: "/material-calculate",
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
