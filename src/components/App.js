import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import CargoList from "./Cargo/CargoList/CargoList";
import CargoInfo from "./Cargo/CargoInfo/CargoInfo";
import TopNavigation from "./TopNavigation/TopNavigation";
import Modal from "./shared/Modal/Modal";
import "./App.scss";

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const localStore = window.localStorage;
    if (localStore.length !== 0) {
      const parsedData = JSON.parse(localStore.getItem("cargo"));
      setData(parsedData);
    } else {
      setMessage("There is no locally saved data! Hit OK to load new data.");
    }
  }, [setData]);

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSave = (id, value) => {
    if (value) {
      const newData = data.map((item) => {
        if (item.id === id) {
          item.boxes = value;
          return item;
        } else {
          return item;
        }
      });
      setData(newData);
      setMessage("Changes saved successfully.");
    } else {
      setMessage("All changes saved locally..");
      window.localStorage.setItem("cargo", JSON.stringify(data));
    }
  };

  const handleLoad = () => {
    setLoading(true);
    fetch(
      "https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Could not load data, try again later!");
        }
      })
      .then((data) => {
        setLoading(false);
        setError(null);
        setMessage("Data loaded successfully");
        setData(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        setMessage(error.message);
      });
  };

  return (
    <Router>
      <header>
        <TopNavigation
          searchHandler={searchHandler}
          saveHandler={handleSave}
          loadHandler={handleLoad}
        />
      </header>
      {data.length === 0 && message ? (
        <Modal
          loading={loading}
          error={error}
          message={message}
          onAgree={handleLoad}
        />
      ) : (
        <div className="main-container">
          {message ? (
            <Modal
              loading={loading}
              error={error}
              message={message}
              onAgree={() => {
                setMessage(null);
                setError(null);
              }}
              onDrop={() => {
                setError(null);
                setMessage(null);
              }}
            />
          ) : null}
          <CargoList data={data} searchTerm={searchTerm} />
          <Switch>
            <Route path="/:cargoId" exact>
              <CargoInfo data={data} saveHandler={handleSave} />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      )}
    </Router>
  );
};

export default App;
