import "./sidebar.css"
import { Home, Timeline, TrendingUp } from "@material-ui/icons"

export default function Sidebar() {
  return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <li className="sibebarListItem active">
                <Home className="sidebarIcon"/>
                Home
              </li>
              <li className="sibebarListItem">
                <Timeline className="sidebarIcon"/>
                Analytics
              </li>
              <li className="sibebarListItem">
                <TrendingUp className="sidebarIcon"/>
                Vendas
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
