import React from "react";
import Construction from "../../static/construction-logo.svg";
import {
  ConstructionInfo,
  ConstructionInfoCard,
} from "./construction-info-card";

const ConstructionList = () => {
  const features: ConstructionInfo[] = [
    {
      id: "123434",
      contractor: "Quỳnh Trâm",
      image: Construction,
      name: "456 Hai Bà Trưng, quận 1, HCM",
      status: "Đang theo dõi",
      linkTo: "/cong-trinh/1",
    },
    {
      id: "2",
      contractor: "Quỳnh Trâm",
      image: Construction,
      name: "456 Hai Bà Trưng, quận 1, HCM",
      status: "Thành công",
      linkTo: "/cong-trinh/1",
    },
    {
      id: "3",
      contractor: "Quỳnh Trâm",
      image: Construction,
      name: "456 Hai Bà Trưng, quận 1, HCM",
      status: "Thất bại",
      linkTo: "/cong-trinh/1",
    },
    {
      id: "4",
      contractor: "Quỳnh Trâm",
      image: Construction,
      name: "456 Hai Bà Trưng, quận 1, HCM",
      status: "Quá hạn",
      linkTo: "/cong-trinh/1",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {features.map(
        ({ name, image, linkTo, contractor, id, status }, index) => (
          <ConstructionInfoCard
            key={index}
            image={image}
            name={name}
            linkTo={linkTo}
            contractor={contractor}
            id={id}
            status={status}
          />
        ),
      )}
    </div>
  );
};

export default ConstructionList;
