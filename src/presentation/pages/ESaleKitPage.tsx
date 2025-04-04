import React from "react";
import { Header, Page } from "zmp-ui";
import { KitList } from "../components/ESaleKitPage";

const ESaleKitPage = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-surface">
      <Header title="E-Sale Kit" className="topbar h-auto flex-none pl-4" />
      <div className="flex flex-1 flex-col gap-3 overflow-auto px-4 py-5">
        <KitList />
      </div>
    </Page>
  );
};

export default ESaleKitPage;
