/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
import { App as AntdApp, ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import dayjs from "dayjs";
import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import { AnimationRoutes, App, Box, SnackbarProvider, ZMPRouter } from "zmp-ui";
import { validateMessages } from "./presentation/constants/validate-messages";
import ConstructionDetailsPage from "./presentation/pages/ConstructionDetailsPage";
import ConstructionListPage from "./presentation/pages/ConstructionListPage";
import HomePage from "./presentation/pages/HomePage";
import NotificationPage from "./presentation/pages/NotificationPage";
import ReportStatisticsPage from "./presentation/pages/ReportStatisticsPage";

import "dayjs/locale/vi";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
//change to vietnamese
dayjs.locale("vi");
//add plugins
dayjs.extend(utc);
dayjs.extend(timezone);

import { AppProvider } from "./presentation/context/AppContext";

const AppRoutes = () => {
  return (
    <AnimationRoutes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/cong-trinh" element={<ConstructionListPage />}></Route>
      <Route
        path="/cong-trinh/:id"
        element={<ConstructionDetailsPage />}
      ></Route>
      <Route path="/thong-ke" element={<ReportStatisticsPage />}></Route>
      <Route path="/chat-zalo" element={<HomePage />}></Route>
      <Route path="/thong-bao" element={<NotificationPage />}></Route>
    </AnimationRoutes>
  );
};

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#005AE0",
              fontFamily:
                "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            },
          }}
          form={{ validateMessages }}
          locale={viVN}
        >
          <AntdApp>
            <SnackbarProvider>
              <ZMPRouter>
                <AppProvider>
                  <Box flex flexDirection="column" className="h-screen">
                    <Box className="flex flex-1 flex-col overflow-hidden">
                      <AppRoutes />
                      <ToastContainer style={{ marginTop: "48px" }} />
                    </Box>
                  </Box>
                </AppProvider>
              </ZMPRouter>
            </SnackbarProvider>
          </AntdApp>
        </ConfigProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
