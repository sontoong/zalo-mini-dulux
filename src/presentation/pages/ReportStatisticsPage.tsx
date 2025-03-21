import React from "react";
import { Header, Page } from "zmp-ui";
import { ReportFilters } from "../components/ReportStatistics";
import ReportList from "../components/ReportStatistics/report-list";

const ReportStatistics = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-surface">
      <Header
        title="Thống kê kết quả"
        className="topbar h-auto flex-none pl-4"
      />
      <div className="flex flex-1 flex-col gap-5 overflow-auto px-3 py-5">
        <ReportFilters />
        <ReportList />
      </div>
    </Page>
  );
};

export default ReportStatistics;
