import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { context } from "./usecontext";
import { useHistory } from "react-router";

export function Adduser() {
  const history = useHistory();
  const { users, setusers } = useContext(context);
  const [name, setname] = useState();
  const [avatar, setavatar] = useState();
  const [jobtitle, setjobtitle] = useState();
  const [city, setcity] = useState();
  const [salary, setsalary] = useState();
  const [domain, setdomain] = useState();
  const adduser = () => {
    const newuser = {
      name: name,
      avatar: avatar,
      jobtitle: jobtitle,
      city: city,
      salary: salary,
      domain: domain,
    };
    // using spread
    setusers([...users, newuser]);
    history.push("/users");
  };
  return (
    <div className="adduser">
      <TextField
        id="name"
        label="Name"
        variant="standard"
        onChange={(event) => setname(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="avatar"
        label="Avatar"
        variant="standard"
        onChange={(event) => setavatar(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="jobtitle"
        label="Job Title"
        variant="standard"
        onChange={(event) => setjobtitle(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="city"
        label="City"
        variant="standard"
        onChange={(event) => setcity(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="salary"
        label="Salary"
        variant="standard"
        onChange={(event) => setsalary(event.target.value)}
        fullWidth
        required
      />
      <TextField
        id="domain"
        label="Domain"
        variant="standard"
        onChange={(event) => setdomain(event.target.value)}
        fullWidth
        required
      />

      <Button
        variant="contained"
        color="success"
        sx={{ margin: "10px" }}
        onClick={adduser}
      >
        Add User
      </Button>
    </div>
  );
}
