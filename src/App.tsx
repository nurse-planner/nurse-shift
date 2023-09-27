import "@/assets/boilerplate.css";
import "@/assets/App.scss";
import g from "@/util/global";
import { AppRoutes } from "@/routes";
import { AppProvider } from "./providers/app";
function App() {
  if (localStorage.getItem("g") === null) {
    localStorage.setItem("g", JSON.stringify(g));
  }

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
