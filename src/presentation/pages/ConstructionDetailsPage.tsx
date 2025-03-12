import React from "react";
import { Header, Page } from "zmp-ui";
import {
  ConstructionDetailsBrief,
  ConstructionDetails,
  ConstructionStatus,
  ReportButtons,
  OrderDetails,
} from "../components/ConstructionDetailsPage";

const ConstructionDetailsPage = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-surface">
      <Header
        title="Thông tin công trình"
        className="topbar h-auto flex-none pl-4"
      />
      <div className="flex-1 overflow-auto">
        <div className="relative">
          <ConstructionDetailsBrief />
          <ConstructionStatus />
        </div>
        <div className="mb-5 flex flex-col gap-3 p-3">
          <ConstructionDetails />
          <OrderDetails />
        </div>
        <ReportButtons />
      </div>
    </Page>
  );
};

export default ConstructionDetailsPage;
