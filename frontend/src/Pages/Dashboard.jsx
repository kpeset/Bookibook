import { useNavigate } from "react-router-dom";
import ("../styles/dashboard.css")

function Dashboard() {

const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("utilisateur");
    navigate("/");
    window.location.reload();
  };

    return (
      <div className="dashboard-content">
        <h1>DASHBOARD</h1>
        <button type="button" onClick={logout}>DECO</button>
      </div>
    );
  }
  
  export default Dashboard;
  