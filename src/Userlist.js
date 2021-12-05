import { useContext } from "react";
import { context } from "./usecontext.js";
import { Users } from "./Users.js";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router";

export function Userlist() {
  const { users, setusers } = useContext(context);
  const history = useHistory();
  console.log(users);
  return (
    <section className="user-list">
      {/* mapping users array */}
      {users.map(({ name, avatar, jobtitle, city, salary, domain }, index) => (
        <Users
          key={index}
          id={index}
          name={name}
          avatar={avatar}
          jobtitle={jobtitle}
          city={city}
          salary={salary}
          domain={domain}
          deleteIcon={
            <IconButton
              className="user-show-button"
              color="error"
              aria-label="delete user"
              onClick={() => {
                console.log("deleting...", index);

                //assign the index as deleteindex so it refers to the particular we can easyly undersatand
                const deleteIndex = index;
                // const user = users[0];
                // the filter function also send two parameter one is user another one is index
                const remainingUsers = users.filter(
                  (mv, idx) => idx !== deleteIndex
                );

                //filtered user show in the window
                console.log(remainingUsers);
                setusers(remainingUsers);
              }}
            >
              <DeleteIcon />
            </IconButton>
          }
          editIcon={
            <IconButton
              className="user-show-button"
              color="secondary"
              aria-label="edit user"
              onClick={() => history.push("/users/edit/" + index)}
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </section>
  );
}
