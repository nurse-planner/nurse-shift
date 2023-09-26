import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "@/feature/error/NotFound";
import { Layout } from "antd";
import MySider from "@/layouts/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { theme } from "antd";
import Main from "@/feature/main/Main";
import "@/assets/boilerplate.css";
import "@/assets/App.scss";
import g from "@/util/global";
function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  if (localStorage.getItem("g") === null) {
    localStorage.setItem("g", JSON.stringify(g));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Layout style={{ minHeight: "100vh" }}>
          <MySider />
          <Layout>
            <Header
              className="header"
              style={{ padding: 0, background: colorBgContainer }}
            >
              <h1>Nurse planner</h1>
            </Header>
            <Content style={{ margin: "0 16px" }}>
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
