import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import { CardMedia, Typography } from "@mui/material";
import { useHistory } from "react-router";
import InfoIcon from "@mui/icons-material/Info";

export function Users({ name, avatar, jobtitle, editIcon, deleteIcon, id }) {
  const history = useHistory();
  return (
    <Card sx={{ maxWidth: "290px", borderRadius: "10px", width: "100%" }}>
      <CardMedia
        component="img"
        height={250}
        image={avatar}
        alt={name}
        sx={{ overflow: "hidden", maxWidth: "290px" }}
      />
      <div className="card-head">
        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
          }}
        >
          {name}
        </Typography>
        <IconButton onClick={() => history.push("/users/profile/" + id)}>
          <InfoIcon />
        </IconButton>
      </div>
      <Typography variant="h6">
        <b>JOB:</b>
        {jobtitle}
      </Typography>
      {editIcon}
      {deleteIcon}
    </Card>
  );
}
