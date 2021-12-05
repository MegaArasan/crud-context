import React, { useContext } from "react";
import { context } from "./usecontext.js";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

export function UserProfile() {
  const { users } = useContext(context);
  // creating history to push the url change
  const history = useHistory();
  // using params to get id from the url
  const { id } = useParams();
  console.log(id);
  const user = users[id];
  return (
    <div>
      <div className="user-profile-container">
        <div className="user-profile">
          <img src={user.avatar} alt={user.name} className="pro-pic" />
          <div style={{ display: "flex" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Pacifico",
                fontSize: { xs: "20px", sm: "30px" },
              }}
            >
              <b>Name:</b>
              {user.name}
            </Typography>
            <IconButton onClick={() => history.push("/users/edit/" + id)}>
              <EditIcon />
            </IconButton>
          </div>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Pacifico",
              fontSize: { xs: "20px", sm: "30px" },
            }}
          >
            <b>Job Title:</b>
            {user.jobtitle}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Pacifico",
              fontSize: { xs: "20px", sm: "30px" },
            }}
          >
            <b>Domain:</b>
            {user.domain}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Pacifico",
              fontSize: { xs: "20px", sm: "30px" },
            }}
          >
            <b>Salary:</b>
            {user.salary}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Pacifico",
              fontSize: { xs: "20px", sm: "30px" },
            }}
          >
            <b>City:</b>
            {user.city}
          </Typography>
        </div>
      </div>
      <div>
        <Button
          variant="contained"
          sx={{ display: { xs: "none", sm: "block" }, width: "100px" }}
          onClick={() => history.push("/users")}
        >
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <KeyboardBackspaceIcon />
            Back
          </Typography>
        </Button>
      </div>
    </div>
  );
}
