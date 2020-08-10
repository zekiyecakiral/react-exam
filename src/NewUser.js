import React, { useState, useEffect } from "react";
import FetchedUserData from "./FetchedUserData";
import CircularProgress from "@material-ui/core/CircularProgress";
import UserCard from "./UserCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const END_POINT = "https://randomuser.me/api/?results=5";

function NewUser() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [userList, setUserList] = useState([]);

  const fetchUser = async () => {
    setLoading(true);
    setLoaded(false);
    const response = await fetch(END_POINT);
    response
      .json()
      .then((res) => {
        setUserList(res.results);
        setLoading(false);
        setLoaded(true);
      })
      .catch((error) => {
        setHasError(true);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            {loading && <CircularProgress color="secondary" />}
            {hasError && <p>Something went wrong ...</p>}
            {loaded && <FetchedUserData userList={userList} />}
          </Route>
          <Route exact path="/:id">
            {loaded && <UserCard userList={userList} />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default NewUser;
