import { Layout } from "antd";
import MySider from "@/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { theme } from "antd";
import "@/assets/boilerplate.css";
import "@/assets/App.scss";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <MySider />
        <Layout>
          <Header
            className="header"
            style={{ padding: 0, background: colorBgContainer }}
          >
            <h1>Nurse planner</h1>
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
