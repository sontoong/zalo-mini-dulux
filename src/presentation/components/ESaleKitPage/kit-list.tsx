import React from "react";
import CatalogueImage from "../../static/catalogue.png";
import { KitButton } from "./kit-button";

const KitList = () => {
  const totalItems = kits.length;
  const isLastItemAlone = totalItems % 2 === 1;

  return (
    <div className="grid grid-flow-row grid-cols-2 gap-x-3 gap-y-5">
      {kits.map(({ name, image, linkTo, brief }, index) => (
        <KitButton
          key={index}
          image={image}
          name={name}
          linkTo={linkTo}
          brief={brief}
          className={
            isLastItemAlone && index === totalItems - 1 ? "col-span-2" : ""
          }
        />
      ))}
    </div>
  );
};

export default KitList;

const kits = [
  {
    image: CatalogueImage,
    name: "Catalogue sản phẩm",
    brief: "Lorem ipsum dolor sit amet, consectetur",
    linkTo: "/product-catalogue",
  },
  {
    image: CatalogueImage,
    name: "Bảng màu",
    brief: "Lorem ipsum dolor sit amet, consectetur",
    linkTo: "/chat",
  },
  {
    image: CatalogueImage,
    name: "Ý tưởng",
    brief: "Lorem ipsum dolor sit amet, consectetur",
    linkTo: "/chat",
  },
  {
    image: CatalogueImage,
    name: "Kết hoạch sơn nhà",
    brief: "Lorem ipsum dolor sit amet, consectetur",
    linkTo: "/chat",
  },
  {
    image: CatalogueImage,
    name: "Tính khối lượng vật tư công trình",
    brief: "Lorem ipsum dolor sit amet, consectetur",
    linkTo: "/chat",
  },
];
