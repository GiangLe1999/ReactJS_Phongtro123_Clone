import { Routes, Route } from "react-router-dom";
import { paths } from "./utils/constants";
import Layout from "./pages/Public/Layout";
import Login from "./pages/Public/Login";

function App() {
  return (
    <div className="bg-primary">
      <Routes>
        <Route path={paths.LAYOUT} element={<Layout />}>
          <Route path={paths.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
