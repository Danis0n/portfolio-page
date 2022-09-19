import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="works" element={<WorksPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
