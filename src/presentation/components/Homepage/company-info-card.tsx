import { Card, Image, Space } from "antd";
import React from "react";
import { PhoneInTalk } from "@mui/icons-material";
import CompanyLogo from "../../static/company-logo.png";

const CompanyInfoCard = () => {
  return (
    <Card className="shadow" styles={{ body: { padding: "12px" } }}>
      <div className="flex gap-5">
        <div className="size-[100px] shrink-0 -translate-y-1/2 overflow-hidden rounded-lg border border-solid border-white">
          <img src={CompanyLogo} className="size-full object-cover" />
        </div>
        <div className="flex flex-col justify-start">
          <div className="text-lg font-bold">Cửa hàng sơn Dulux 1</div>
          <div className="text-xs text-gray5">
            Cửa hàng sơn C1 - Nguyễn Văn Trãi, Quận 1, HCM
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 py-3">
        <div className="flex items-center gap-1 text-gray5">
          <PhoneInTalk style={{ fontSize: "14px" }} />
          <div className="text-2xs">Số điện thoại</div>
        </div>
        <div className="text-sm">098345454</div>
      </div>
    </Card>
  );
};

export default CompanyInfoCard;
