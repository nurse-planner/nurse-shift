import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "@/feature/error/NotFound";
import { Breadcrumb, Layout } from "antd";
import MySider from "@/layouts/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { theme } from "antd";
import Main from "@/feature/main/Main";
import "@/App.css";

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="App">
      <BrowserRouter>
        <Layout style={{ minHeight: "100vh" }}>
          <MySider />
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }} />
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <Routes>
                <Route path="/" element={<Main />}></Route>
                {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2023 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
