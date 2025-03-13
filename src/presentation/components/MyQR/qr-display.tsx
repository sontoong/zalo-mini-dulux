import React, { useCallback, useEffect } from "react";
import background from "../../static/qr-banner.png";
import avatar from "../../static/avatar.jpg";
import logo from "../../static/dulux-logo.png";
import { notification, QRCode, Tag } from "antd";
import clsx from "clsx";
import { ScanOutlined } from "@ant-design/icons";

const numOfScan = [0, 4][0];

const QRDisplay = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = useCallback(() => {
    api.open({
      message: "Hết lượt quét mã QR",
      description: "Liên hệ với Admin nếu cần mở thêm lượt",
      icon: (
        <div className="-translate-x-3 translate-y-2 rounded-lg bg-gray-500 p-1">
          <ScanOutlined className="text-white" style={{ fontSize: "32px" }} />
        </div>
      ),
      placement: "bottom",
      duration: null,
      className: "bg-stroke2 rounded-lg overflow-hidden",
    });
  }, []);

  useEffect(() => {
    if (numOfScan === 0) {
      openNotification();
    }
  }, [numOfScan]);

  return (
    <>
      {contextHolder}
      <div className="flex size-full items-center justify-center px-4">
        {/* #Banner */}
        <div className="absolute inset-0">
          <img src={background} className="size-full object-cover" />
        </div>
        {/* Card */}
        <div className="z-10 flex flex-1 flex-col items-center gap-3 rounded-xl bg-white/90 pb-10 pt-5">
          {/* Logo */}
          <div className="w-[60px]">
            <img src={logo} className="size-full object-cover" />
          </div>
          {/* Avatar */}
          <div className="flex flex-col items-center gap-1">
            <div className="size-[48px] overflow-hidden rounded-full">
              <img src={avatar} className="size-full object-cover" />
            </div>
            <div className="text-sm font-bold">Văn Phúc</div>
          </div>
          {/* QR */}
          <div className="flex flex-col items-center gap-1">
            <div className="text-sm">Đưa mã này cho thầu thợ quét</div>
            <QRCode value={"abc"} size={200} bgColor="white" />
          </div>
          {/* Number of scan */}
          <div className="flex flex-col items-center gap-1">
            <Tag
              className={clsx("border-none text-xs", {
                "bg-yellow1 text-yellow6": numOfScan > 0,
                "bg-gray1 text-gray4": numOfScan === 0,
              })}
            >
              Bạn còn {numOfScan} lượt quét mã QR
            </Tag>
            <div className="text-2xs text-gray5">*5 lượt quét mã QR/ngày</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QRDisplay;
