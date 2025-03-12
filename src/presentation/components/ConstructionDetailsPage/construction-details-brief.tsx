import React from "react";
import Construction from "../../static/construction-logo.svg";

const ConstructionDetailsBrief = () => {
  const data = {
    id: "1",
    contractor: "Công ty TNHH ABC",
    image: Construction,
    name: "Công trình 1",
  };

  return (
    <div className="flex gap-4 border-0 border-b bg-white px-4 py-2">
      <div className="bg-blue2 size-[50px] shrink-0 overflow-hidden rounded-md p-2">
        <img src={data.image} className="size-full object-cover" />
      </div>
      <div className="flex size-full flex-col gap-1">
        <div className="text-sm font-semibold">{data.name}</div>
        <div className="text-gray5 text-xs">Mã công trình: {data.id}</div>
        <div className="text-gray6 text-xs">Nhà thầu: {data.contractor}</div>
      </div>
    </div>
  );
};

export default ConstructionDetailsBrief;
