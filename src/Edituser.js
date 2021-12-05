import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState, useContext } from "react";
import { context } from "./usecontext.js";
import { useParams } from "react-router";
import { useHistory } from "react-router";

export function Edituser() {
  // using usecontext
  const { users, setusers } = useContext(context);
  const { id } = useParams();
  const history = useHistory();

  const user = users[id];
  const [name, setname] = useState(user.name);
  const [avatar, setavatar] = useState(user.avatar);
  const [jobtitle, setjobtitle] = useState(user.jobtitle);
  const [city, setcity] = useState(user.city);
  const [salary, setsalary] = useState(user.salary);
  const [domain, setdomain] = useState(user.domain);
  const saveuser = () => {
    // adding user
    const updateduser = {
      name: name,
      avatar: avatar,
      jobtitle: jobtitle,
      city: city,
      salary: salary,
      domain: domain,
    };
    console.log(updateduser);
    const copyuserList = [...users];
    copyuserList[id] = updateduser;
    console.log(copyuserList);
    setusers(copyuserList);
    history.push("/users");
  };
  return (
    <div className="saveuser">
      <TextField
        id="name"
        label="Name"
        variant="standard"
        value={name}
        onChange={(event) => setname(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="avatar"
        label="Avatar"
        value={avatar}
        variant="standard"
        onChange={(event) => setavatar(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="jobtitle"
        label="Job Title"
        variant="standard"
        value={jobtitle}
        onChange={(event) => setjobtitle(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="city"
        label="City"
        variant="standard"
        value={city}
        onChange={(event) => setcity(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="salary"
        label="Salary"
        variant="standard"
        value={salary}
        onChange={(event) => setsalary(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="domain"
        label="Domain"
        variant="standard"
        value={domain}
        onChange={(event) => setdomain(event.target.value)}
        fullWidth
        required
      />

      <Button
        variant="contained"
        color="success"
        sx={{ margin: "10px" }}
        onClick={saveuser}
      >
        Save User
      </Button>
    </div>
  );
}
