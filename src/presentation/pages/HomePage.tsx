import React, { FC, useContext, useState } from "react";
import { Header, Page, useNavigate } from "zmp-ui";
import { CompanyInfoCard, HomePageBanner } from "../components/Homepage";
import FeatureList from "../components/Homepage/feature-list";
import { Notifications } from "@mui/icons-material";
import { Badge } from "antd";

const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <Page className="relative flex flex-1 flex-col bg-surface">
      <Header
        title={
          (
            <div className="flex items-center justify-between pr-[90px]">
              <div>Dulux</div>
              <div
                className="cursor-pointer"
                onClick={() => navigate("thong-bao")}
              >
                <Badge count={5} offset={[0, 15]} size="small">
                  <Notifications />
                </Badge>
              </div>
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none pl-4"
        showBackIcon={false}
      />
      <div className="flex-1 overflow-auto">
        <HomePageBanner />
        <div className="flex flex-col gap-5 px-3 pb-3">
          <CompanyInfoCard />
          <FeatureList />
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
