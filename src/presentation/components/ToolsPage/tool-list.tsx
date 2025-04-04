import React from "react";
import Zalo from "../../static/zalo.svg";
import { ToolButton } from "./tool-button";
import ESaleKitIcon from "../../static/e-sale-kit-icon.svg";
import FAQsIcon from "../../static/faqs-icon.svg";

const ToolList = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 gap-3">
      {tools.map(({ name, image, linkTo, brief }, index) => (
        <ToolButton
          key={index}
          image={image}
          name={name}
          linkTo={linkTo}
          brief={brief}
        />
      ))}
    </div>
  );
};

export default ToolList;

const tools = [
  {
    image: ESaleKitIcon,
    name: "E-Sale Kit",
    brief: "Bộ công cụ bán hàng dành cho sale man",
    linkTo: "/e-sale-kit",
  },
  {
    image: FAQsIcon,
    name: "FAQs",
    brief:
      "Danh sách câu hỏi và trả lời cho các vấn đề saleman thường gặp phải",
    linkTo: "/chat",
  },
  {
    image: Zalo,
    name: "Chat với akzoNobel OA",
    brief: "Trao đổi trực tiếp khi có vấn đề",
    linkTo: "/chat",
  },
];
