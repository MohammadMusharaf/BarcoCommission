import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FactoriesDropdownlist({ ddlOnchang }) {
  const [Factory, setFactory] = React.useState([]);
  let dropdownItems = [
    <MenuItem value="1">Alpha Fittings</MenuItem>,
    <MenuItem value="2">Kentak</MenuItem>,
    <MenuItem value="3">Kentak</MenuItem>,
  ];

  const createSelectItems = () => {
    let items = [];

    //  GetFactory();
    Factory.forEach((d, i) => {
      debugger;
      items.push(
        <MenuItem value={d["FactoryId"]}> {d["FactoryName"]}</MenuItem>
      );
    });
    //here I will be creating my options dynamically based on
    //what props are currently passed to the parent component
  };
  useEffect(() => {
    GetFactory();
    createSelectItems();
  }, []);

  const GetFactory = () => {
    fetch("http://localhost:57636/api/Factory/GetFactory")
      .then((res) => res.json())
      .then((result) => {
        debugger;
        setFactory(result);
      });
  };

  const handleChange = (event) => {
    debugger;
    alert(Factory);
    setFactory(event.target.value);
    console.log(event.target.value);
    ddlOnchang(event.target.value);
  };
  debugger;
  console.log(Factory);
  return (
    <Box sx={{ minWidth: 20 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Select Factory / Princ Code
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Factory}
          label="Select Factory / Princ Code"
          onChange={handleChange}
        >
          <MenuItem value={1}>Alpha Fittings</MenuItem>
          <MenuItem value={2}>Kentak</MenuItem>
          <MenuItem value={3}>Kentak</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
