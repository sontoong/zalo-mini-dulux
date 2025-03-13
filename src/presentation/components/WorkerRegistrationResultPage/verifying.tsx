import React from "react";
import verifyingLogo from "../../static/verifying.svg";

const Verifying = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-2">
      <div className="size-[80px]">
        <img src={verifyingLogo} className="size-full object-contain" />
      </div>
      <div className="text-lg font-semibold">Đang chờ phê duyệt</div>
      <div className="text-sm">Đơn đăng ký của bạn đang chờ phê duyệt.</div>
    </div>
  );
};

export default Verifying;
