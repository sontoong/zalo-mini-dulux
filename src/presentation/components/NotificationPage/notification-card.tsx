import React from "react";
import NotificationThumb from "../../static/cong-trinh.svg";
import { Badge } from "antd";

export const NotificationCard = () => {
  return (
    <div className="flex size-full gap-2">
      <Badge dot color="blue" offset={[-47, 3]}>
        <div className="size-[50px] shrink-0 overflow-hidden rounded-xl bg-blue2">
          <img src={NotificationThumb} className="size-full object-cover" />
        </div>
      </Badge>
      <div className="flex size-full flex-col gap-1">
        <div className="font-title text-sm font-bold">
          Nhận được công trình mới từ Nguyễn Văn Hà
        </div>
        <div className="text-xs font-normal">Mã công trình: 12344</div>
        <div className="text-xs font-normal text-gray4">19/2/2024, 9:42 PM</div>
      </div>
    </div>
  );
};
