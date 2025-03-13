import React from "react";
import registeredLogo from "../../static/registered.svg";

const Registered = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-2">
      <div className="size-[80px]">
        <img src={registeredLogo} className="size-full object-contain" />
      </div>
      <div className="text-lg font-semibold">Thầu thợ đã đăng ký</div>
      <div className="text-sm">Thông tin thầu thợ đã được đăng ký trước đó</div>
    </div>
  );
};

export default Registered;
