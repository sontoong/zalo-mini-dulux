import React from "react";
import Construction from "../../static/construction-logo.svg";

const ConstructionDetailsBrief = () => {
  const data = {
    id: "1",
    contractor: "Quỳnh Trâm",
    image: Construction,
    name: "456 Hai Bà Trưng, quận 1, HCM",
  };

  return (
    <div className="flex gap-4 border-0 border-b bg-white px-4 py-[10px]">
      <div className="size-[50px] shrink-0 overflow-hidden rounded-md bg-blue2 p-2">
        <img src={data.image} className="size-full object-cover" />
      </div>
      <div className="flex size-full flex-col gap-1">
        <div className="text-sm text-black">{data.name}</div>
        <div className="text-xs font-normal text-gray5">
          Mã công trình: {data.id}
        </div>
        <div className="text-xs font-normal text-gray6">
          Nhà thầu: {data.contractor}
        </div>
      </div>
    </div>
  );
};

export default ConstructionDetailsBrief;
