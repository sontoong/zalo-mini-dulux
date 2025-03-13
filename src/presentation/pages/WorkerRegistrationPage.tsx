import React from "react";
import { Header, Page } from "zmp-ui";
import { RegistrationForm } from "../components/WorkerRegistration";

const WorkerRegistrationPage = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-white">
      <Header
        title="Đăng ký thầu thợ"
        className="topbar h-auto flex-none pl-4"
      />
      <div className="flex flex-1 flex-col gap-3 overflow-auto bg-surface px-3 py-5">
        <RegistrationForm />
      </div>
    </Page>
  );
};

export default WorkerRegistrationPage;
