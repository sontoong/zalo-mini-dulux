import React from "react";
import { Header, Page } from "zmp-ui";
import { CatalogueList } from "../components/CataloguePage";

const CataloguePage = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-white">
      <Header
        title="Catalogue sản phẩm"
        className="topbar h-auto flex-none pl-4"
      />
      <div className="flex flex-1 flex-col gap-3 overflow-auto px-4 py-5">
        <CatalogueList />
      </div>
    </Page>
  );
};

export default CataloguePage;
