import "./App.css";

import React, { useState } from "react";
import { AppBar, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import { Switch, Route } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Userlist } from "./Userlist.js";
import { UserProfile } from "./UserProfile.js";
import { context } from "./usecontext.js";
import { Adduser } from "./Adduser.js";
import { Edituser } from "./Edituser.js";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";

export default function App() {
  const userlist = [
    {
      name: "Rita Schneider",
      avatar:
        "http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Profile-Picture-4.jpg",
      jobtitle: "Investor Research Developer",
      city: "Redding",
      salary: "$990.44",
      domain: "Liaison",
    },
    {
      name: "Anderson",
      avatar:
        "https://1.bp.blogspot.com/-0ZUMPsBahSo/X0vuBttwtWI/AAAAAAAAdwM/_0Nuxi-PWUsgTsLdAmGZqILPiJf7N2bdACLcBGAsYHQ/s1600/best%2Bdp%2Bfor%2Bwhatsapp%2B%25281%2529.jpg",
      jobtitle: "Internal Integration Strategist",
      city: "DeSoto",
      salary: "$403.90",
      domain: "Facilitator",
    },
    {
      name: "Margarita Strosin",
      avatar:
        "https://lh3.googleusercontent.com/proxy/9PS1svCh2jBt4m7atuEcKU5ZbNWfWaxtCBxHor7w_wiR5Yv0VlDU2X_PGrM1UnasjpjRv5O6ye-1_fUJ5Ou_OnUBySIV1CyC0iyRZBNgE5Vx-1amQiplXJvi47Un5X-qOnYeJfm79T0=w1200-h630-p-k-no-nu",
      jobtitle: "Customer Markets Administrator",
      city: "Bend",
      salary: "$868.55",
      domain: "Director",
    },
    {
      name: "Kristine Hand",
      avatar: "https://cdn.sharechat.com/26809258_1599194162913.jpeg",
      jobtitle: "Internal Factors Administrator",
      city: "Burleson",
      salary: "$685.04",
      domain: "Assistant",
    },
    {
      name: "Patti Leuschke",
      avatar:
        "https://www.goodmorninghdloveimages.com/wp-content/uploads/2020/04/Whatsapp-Profile-Photo-Download-7.jpg",
      jobtitle: "Human Brand Administrator",
      city: "Schenectady",
      salary: "$163.22",
      domain: "Manager",
    },
    {
      name: "Dr. Lindsay Aufderhar",
      avatar:
        "https://st2.depositphotos.com/3280929/6099/v/600/depositphotos_60994299-stock-illustration-female-doctor-with-clipboard.jpg",
      jobtitle: "Doctor",
      city: "Iowa City",
      salary: "$779.75",
      domain: "Medical",
    },
    {
      name: "Berlin",
      avatar:
        "https://cdna.artstation.com/p/assets/images/images/029/075/126/large/soumik-choudhury-berlin.jpg?1596388689",
      jobtitle: "Robber",
      city: "El Centro",
      salary: "€ 1 billion",
      domain: "Heist",
    },
    {
      name: "Professor",
      avatar:
        "https://w0.peakpx.com/wallpaper/238/582/HD-wallpaper-the-professor-gaming-money-car-best-moneyheist-mobile-logo-iphone-anime-pubg.jpg",
      jobtitle: "Leader",
      city: "Riverview",
      salary: "€ 2.4 billons",
      domain: "Heist",
    },
  ];
  // const context = createContext(userlist);
  const [users, setusers] = useState(userlist);
  const [opened, setopened] = useState(false);
  const handleDrawerOpen = () => {
    setopened(true);
  };
  const handleDrawerClose = () => {
    setopened(false);
  };
  console.log(users);
  const history = useHistory();
  return (
    // prividing a created context in parent
    <context.Provider value={{ users, setusers }}>
      <div className="App">
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              size="large"
              aria-label="menu"
              color="inherit"
              onClick={handleDrawerOpen}
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 0.1, alignItems: "center", display: "flex" }}
            >
              <PersonIcon sx={{ display: { xs: "none", sm: "block" } }} />
              User List
            </Typography>
            <Button
              sx={{ display: { xs: "none", sm: "block" } }}
              variant="text"
              color="inherit"
              onClick={() => history.push("/")}
            >
              Home
            </Button>
            <Button
              sx={{ display: { xs: "none", sm: "block" } }}
              variant="text"
              color="inherit"
              onClick={() => history.push("/users")}
            >
              Userlist
            </Button>
            <Button
              sx={{ display: { xs: "none", sm: "block" } }}
              variant="text"
              color="inherit"
              onClick={() => history.push("/adduser")}
            >
              Add User
            </Button>
            {/* for mobile device drawer */}
            <Drawer
              sx={{
                width: "200px",
                height: "100%",
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: "200px",
                  height: "100%",
                  boxSizing: "border-box",
                  backgroundColor: "rgb(110,152,63)",
                  color: "white",
                },
              }}
              anchor="left"
              open={opened}
            >
              <IconButton
                color="inherit"
                aria-label="close"
                component="span"
                onClick={handleDrawerClose}
                sx={{ ml: "auto" }}
              >
                <CloseIcon />
              </IconButton>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/")}
              >
                Home
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/users")}
              >
                Userlist
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/adduser")}
              >
                Add User
              </Button>
            </Drawer>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users/edit/:id">
            <Edituser />
          </Route>
          <Route exact path="/users">
            <Userlist />
          </Route>
          <Route exact path="/users/profile/:id">
            <UserProfile />
          </Route>
          <Route exact path="/adduser">
            <Adduser />
          </Route>
          <Route path="**">
            <Notfound />
          </Route>
        </Switch>
      </div>
    </context.Provider>
  );
}

function Home() {
  return (
    <div className="homepage">
      <Typography variant="h1" sx={{ fontFamily: "Pacifico" }}>
        User List
      </Typography>
    </div>
  );
}
function Notfound() {
  const history = useHistory();
  return (
    <div>
      <img
        src="https://static.collectui.com/shots/4144886/pikabu-error-404-large"
        alt="notfound"
        className="notfound"
      />
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
    </div>
  );
}
