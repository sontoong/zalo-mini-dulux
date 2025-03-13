import React from "react";
import successLogo from "../../static/success.svg";

const Success = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-2">
      <div className="size-[80px]">
        <img src={successLogo} className="size-full object-contain" />
      </div>
      <div className="text-lg font-semibold">Đăng ký thầu thợ thành công</div>
      <div className="text-sm">Đơn đăng ký của bạn đã được phê duyệt</div>
    </div>
  );
};

export default Success;
