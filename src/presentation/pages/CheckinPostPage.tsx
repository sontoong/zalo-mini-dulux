import React from "react";
import { Header, Page } from "zmp-ui";
import { PostForm } from "../components/CheckInPostPage";

const CheckinPostPage = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-surface">
      <Header title="Đăng bài" className="topbar h-auto flex-none pl-4" />
      <div className="flex flex-1 flex-col gap-3 overflow-auto px-3 py-5">
        <PostForm />
      </div>
    </Page>
  );
};

export default CheckinPostPage;
