import React from "react";
import { ReportCard } from "./report-card";

const ReportList = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl font-bold">Báo cáo tháng 1 - 2024</div>
      <ReportCard />
    </div>
  );
};

export default ReportList;
