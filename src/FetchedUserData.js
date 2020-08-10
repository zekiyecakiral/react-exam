import React from "react";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";

function FetchedUserData({ userList }) {

  return (
    <div>
      <ul className="users">
        {userList.map((item, index) => (
          <div className="singleUser">
            <li>
              <Link
                className="linkClass"
                to={`/${item.login.uuid}`}
                style={{ textDecoration: "none" }}
              >
                <a href="">
                  <img src={item.picture.large} alt={item.name.first} />
                </a>
                <div className="singleUserInfo">
                  <p>
                    {" "}
                    {item.name.first} {item.name.last}{" "}
                  </p>
                </div>
              </Link>
              <UserCard userList={userList}/>
            </li>
          </div> 
        ))}
      </ul>
    </div>
  );
}

export default FetchedUserData;
