import React from "react";
import { ReportCard } from "./report-card";
import { ReportBrief } from "./report-brief";

const ReportList = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-title text-xl font-bold">Báo cáo tháng 1 - 2024</div>
      <ReportBrief />
      <div className="flex flex-col gap-3">
        <ReportCard />
      </div>
    </div>
  );
};

export default ReportList;
