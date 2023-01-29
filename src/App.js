import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Authentication from "./pages/authentication/Authentication";
import Database from "./pages/database/Database";
import Functions from "./pages/functions/Functions";
import Hosting from "./pages/hosting/Hosting";
import MachineLearning from "./pages/machineLearning/MachineLearning";
import Storage from "./pages/storage/Storage";
import Temp from "./Temp";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/database" element={<Database />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/functions" element={<Functions />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/machineLearning" element={<MachineLearning />} />
      </Route>
      <Route path="/Temp" element={<Temp />} />
    </Routes>
  );
}

export default App;
