import React from "react";
import { Header, Page } from "zmp-ui";
import { CalculateForm } from "../components/ContructionMaterialCalculatePage";

const ContructionMaterialCalculatePage = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-[#F5F7FA]">
      <Header
        title="Tính khối lượng vật tư công trình"
        className="topbar no-border h-auto flex-none pl-4"
      />
      <div className="flex flex-1 flex-col gap-2 overflow-auto pt-2">
        <CalculateForm />
      </div>
    </Page>
  );
};

export default ContructionMaterialCalculatePage;
