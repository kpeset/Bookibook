import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import("../styles/dashboard.css");

function Dashboard() {
  const navigate = useNavigate();

  const [toggleChange, setToggleChange] = useState(1);
  const [bookList, setBookList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .post("http://localhost:8080/api/getcurrentuser/", {
        email: localStorage.getItem("utilisateur"),
      })
      .then((res) => setBookList(res.data), setIsLoading(false))
      .catch((err) => console.log(err));
  }, []);

  const logout = () => {
    localStorage.removeItem("utilisateur");
    navigate("/");
    window.location.reload();
  };

  const myBookSection = () => {
    setToggleChange(1);
  };

  const myWishSection = () => {
    setToggleChange(2);
  };

  const myMessageSection = () => {
    setToggleChange(3);
  };

  const whatIshow = () => {
    if (toggleChange === 1 && isLoading === false) {
      return (
        <div className="dashboard-list-book-flex">
          {bookList.map((el) => (
            <div>
            {el.bookigot}
            </div>
          ))}
          <br />
        </div>
      );
    } else if (toggleChange === 2) {
      return <div>Mes souhaits</div>;
    } else {
      return <div>Mes messages</div>;
    }
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-menu">
        <div className="dashboard-menu-part1">
          <button type="button" onClick={myBookSection}>
            Vos Livres
          </button>
          <button type="button" onClick={myWishSection}>
            Vos Envies
          </button>
          <button type="button" onClick={myMessageSection}>
            Messagerie
          </button>
        </div>
        <div className="dashboard-menu-part2">
          {" "}
          <button type="button" onClick={logout}>
            Vous déconnecter
          </button>
        </div>
      </div>
      <div className="dashboard-result"> {whatIshow()}</div>
    </div>
  );
}

export default Dashboard;
