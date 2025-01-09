import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-router-dom";
export default function TemporaryDrawer() {
  const [state, setState] = useState(false);

  return (
    <div>
      {["right"].map((anchor) => (
        <div key={anchor}>
          <Button
            onClick={() => {
              setState(true);
            }}
          >
            <div className="link">
              <MenuRoundedIcon />
            </div>
          </Button>
          <Drawer
            anchor={anchor}
            open={state}
            onClose={() => {
              setState(false);
            }}
          >
            <div className="mobileDrawer">
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/compare">
                Compare
              </Link>
              <Link className="link" to="/watchlist">
                WatchList
              </Link>
              <Link className="link" to="/dashboard">
              Dashboard
              </Link>
            </div>
          </Drawer>
        </div>
      ))}
    </div>
  );
}
