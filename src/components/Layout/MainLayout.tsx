import { Layout } from "antd";
import MySider from "@/components/Layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { theme } from "antd";
import "@/assets/boilerplate.css";
import "@/assets/App.scss";
import logo from "@/assets/logo.svg";
import { useNavigate } from "react-router-dom";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const goHome = () => {
    navigate("/nurse-shift");
  };

  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <MySider />
        <Layout>
          <Header
            className="header"
            style={{ padding: 0, background: colorBgContainer }}
          >
            <div
              onClick={goHome}
              aria-label="logo"
              className="flex space-x-2 items-center cursor-pointer"
            >
              <img className="h-8 ml-4 w-auto" src={logo} alt="Workflow" />
            </div>
          </Header>
          <Content style={{ margin: "0 16px" }}>{children}</Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};
