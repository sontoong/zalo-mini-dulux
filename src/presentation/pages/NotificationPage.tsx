import React from "react";
import { Header, Page } from "zmp-ui";
import { SearchBar } from "../components/common/search-bar";
import { NotificationList } from "../components/NotificationPage";

const NotificationPage = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-white">
      <Header title="Thông báo" className="topbar h-auto flex-none pl-4" />
      <div className="flex flex-1 flex-col gap-3 overflow-auto px-3 py-5">
        <SearchBar placeholder="Tìm thông báo" />
        <NotificationList />
      </div>
    </Page>
  );
};

export default NotificationPage;
