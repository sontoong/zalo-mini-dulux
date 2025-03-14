import React from "react";
import NotificationThumb from "../../static/cong-trinh.svg";
import { Badge } from "antd";

export const NotificationCard = () => {
  return (
    <div className="flex size-full gap-2">
      <Badge dot color="blue" offset={[-50, 0]}>
        <div className="size-[50px] shrink-0 overflow-hidden rounded-xl bg-blue2">
          <img src={NotificationThumb} className="size-full object-cover" />
        </div>
      </Badge>
      <div className="flex size-full flex-col gap-1">
        <div className="text-sm font-semibold">
          Nhận được công trình mới từ Nguyễn Văn Hà
        </div>
        <div className="text-xs">Mã công trình: 12344</div>
        <div className="text-xs text-gray6">19/2/2024, 9:42 PM</div>
      </div>
    </div>
  );
};
