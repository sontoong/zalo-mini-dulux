import React from "react";
import { Header, Page } from "zmp-ui";
import {
  ConstructionList,
  ConstructionListFilters,
} from "../components/ConstructionListPage";
import { SearchBar } from "../components/common/search-bar";

const ConstructionListPage = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-surface">
      <Header
        title="Danh sách công trình"
        className="topbar h-auto flex-none pl-4"
      />
      <div className="flex flex-1 flex-col gap-3 overflow-auto px-3 py-5">
        <SearchBar placeholder="Tìm thông tin công trình" />
        <ConstructionListFilters />
        <ConstructionList />
      </div>
    </Page>
  );
};

export default ConstructionListPage;
