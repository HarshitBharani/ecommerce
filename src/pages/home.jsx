import Main from "../components/Main";
import Sidebar from "../components/sidebar";

import "./home.css";

export default function Home() {
  return (
    <div className="container">
      <Sidebar />
      <Main />
    </div>
  );
}
