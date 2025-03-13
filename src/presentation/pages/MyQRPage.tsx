import React from "react";
import { Header, Page } from "zmp-ui";
import { QRDisplay } from "../components/MyQR";

const MyQRPage = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-white">
      <Header title="Mã QR của tôi" className="topbar h-auto flex-none pl-4" />
      <div className="flex flex-1 flex-col gap-3 overflow-auto px-3 py-5">
        <QRDisplay />
      </div>
    </Page>
  );
};

export default MyQRPage;
