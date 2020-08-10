import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

function UserCard({ userList }) {
  const { id } = useParams();
  const history = useHistory();
  const selectedUser = userList.find((user) => user.login.uuid === id);
  return (
    <>
    <div className='container'>
      {selectedUser && (
       
        <Card>
           <Button variant="contained" color="secondary" onClick={() => history.goBack()} >Go Back</Button>
          <CardContent>
            <Avatar alt="Remy Sharp" src={selectedUser.picture.medium} />
            <Typography variant="h5" component="h2">
              {selectedUser.name.first} {selectedUser.name.last}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {selectedUser.email}
            </Typography>

            <Typography variant="body2" component="p">
              {selectedUser.cell}
              <br />
              {selectedUser.location.city}, {selectedUser.location.country}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div></>
  );
}

export default UserCard;
