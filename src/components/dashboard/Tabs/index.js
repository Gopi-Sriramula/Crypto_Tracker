import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "../Grid";
import "./style.css";
import List from "../List";
const styles = {
  fontSize: "1rem",
  fontWeight: 600,
  color: "var(--white)",
};
export default function Tabs({ coinsData10 }) {
  const [value, setValue] = useState("grid");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="tabs">
      <TabContext value={value} variant="fullWidth">
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={styles} />
          <Tab label="List" value="list" sx={styles} />
        </TabList>
        <TabPanel value="grid">
          <div className="grid-container">
            {coinsData10.map((item, i) => {
              return <Grid item={item} key={item.id} i={i} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-container">
            {coinsData10.map((item, i) => {
              return <List item={item} key={item.id} i={i} />;
            })}
          </table>
        </TabPanel>
      </TabContext>
    </div>
  );
}
