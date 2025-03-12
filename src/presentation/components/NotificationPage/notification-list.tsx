import React from "react";
import { NotificationCard } from "./notification-card";
import { Divider } from "antd";

const NotificationList = () => {
  return (
    <div className="flex flex-col gap-3">
      <NotificationCard />
      <Divider className="m-0" />
    </div>
  );
};

export default NotificationList;
