import React from "react";
import { ElevateButton } from "../common/button";
import { ConfirmOrderButton } from "./confirm-order-button";
import { FailOrderButton } from "./fail-order-button";

const ReportButtons = () => {
  return (
    <div className="sticky bottom-5 flex gap-3 px-3">
      <FailOrderButton />
      <ConfirmOrderButton />
    </div>
  );
};

export default ReportButtons;
