import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Checkbox from "@mui/material/Checkbox";
import FactoriesDropdownlist from "./FactoriesDropdownlist";
import SalesmanDropdownlist from "./SalesmanDropdownlist";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link } from "react-router-dom";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CustomerCreate() {
  const classes = useStyles();
  const [data, setData] = useState();

  const [checked, setChecked] = useState(false);
  const checkChanged = (state) => {
    setChecked(!checked);
  };
  const [value, setValue] = useState("");
  const [customerId, setCustomerId] = useState();
  const [custId, setCustId] = useState();
  const [customer, setCustomer] = useState();
  const [custAliasName, setCustAliasName] = useState();

  const [branch, setBranch] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();

  const [contact, setContact] = useState();
  const [phone, setPhone] = useState();
  // const [fax, setFax] = useState();
  const [emailId, setEmailId] = useState();
  const [mobile, setMobile] = useState();
  const [territory, setTerritory] = useState();
  const [salesId, setSalesId] = useState();
  const [princCode, setPrincCode] = useState();
  const [createdDate, setCreatedDate] = useState();
  const [isActive, setIsActive] = useState();

  const [selectedFactoryValue, setSelectedFactoryValue] = useState("");
  const [selectedSalesmanValue, setSelectedSalesmanValue] = useState("");
  const FactoryOnchange = (value) => {
    setSelectedFactoryValue(value);
    debugger;
    console.log(selectedFactoryValue);
  };

  const SalesmanOnchange = (value) => {
    setSelectedSalesmanValue(value);
    debugger;
    console.log(selectedSalesmanValue);
  };

  const handleClick = () => {
    var custInfo = {
      CId: 0,
      CustId: custId,
      CustomerName: customer,
      CustAliasName: custAliasName,
      Branch: branch,
      Address: address,
      City: city,
      State: state,
      Zip: zip,
      Contact: contact,
      Phone: phone,
      // Fax: fax,
      EmailId: emailId,
      Mobile: mobile,
      Territory: territory,
      SalesmanId: selectedSalesmanValue,
      PrincCode: selectedFactoryValue,
      CreatedDate: createdDate,
      IsActive: checked,
    };
    debugger;
    console.log(custInfo);

    debugger;
    console.log(custInfo);

    fetch("http://localhost:57636/api/Customer/AddCustomer", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(custInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/";
        }
      });
  };

  return (
    <Container>
      <div>
        <form className={classes.form}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Link to="/Customers">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => handleClick()}
                >
                  Create Customer
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="custId"
                name="custId"
                variant="outlined"
                required
                fullWidth
                id="custId"
                label="Cust ID"
                onChange={(e) => setCustId(e.target.value)}
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Creation Date"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField variant="outlined" fullWidth {...params} />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="customer"
                name="customer"
                variant="outlined"
                required
                fullWidth
                id="customer"
                label="Customer Name"
                onChange={(e) => setCustomer(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="custAliasName"
                name="custAliasName"
                variant="outlined"
                fullWidth
                id="custAliasName"
                label="Customer Alias Name"
                onChange={(e) => setCustAliasName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="branch"
                label="Branch Name"
                onChange={(e) => setBranch(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="address"
                name="address"
                variant="outlined"
                fullWidth
                id="address"
                label="Address"
                onChange={(e) => setAddress(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="city"
                name="city"
                variant="outlined"
                fullWidth
                id="city"
                label="City"
                onChange={(e) => setCity(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="state"
                name="state"
                variant="outlined"
                fullWidth
                id="state"
                label="state"
                onChange={(e) => setState(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="zip"
                name="zip"
                variant="outlined"
                fullWidth
                id="zip"
                label="Zip"
                onChange={(e) => setZip(e.target.value)}
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="contact"
                name="contact"
                variant="outlined"
                fullWidth
                id="contact"
                label="Contact"
                onChange={(e) => setContact(e.target.value)}
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="phone"
                name="phone"
                variant="outlined"
                fullWidth
                id="phone"
                label="Phone"
                onChange={(e) => setPhone(e.target.value)}
                autoFocus
              />
            </Grid>
            {/* 
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fax"
                name="fax"
                variant="outlined"
                fullWidth
                id="fax"
                label="Fax"
                onChange={(e) => setFax(e.target.value)}
                autoFocus
              />
            </Grid> */}

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="emailId"
                name="emailId"
                variant="outlined"
                fullWidth
                id="emailId"
                label="Email"
                onChange={(e) => setEmailId(e.target.value)}
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="territory"
                name="territory"
                variant="outlined"
                fullWidth
                id="territory"
                label="Territory"
                onChange={(e) => setTerritory(e.target.value)}
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <SalesmanDropdownlist ddlOnchang={SalesmanOnchange} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FactoriesDropdownlist ddlOnchang={FactoryOnchange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label>IsActive</label>
              <Checkbox
                checked={checked}
                onChange={checkChanged}
                color="primary"
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <Link to="/Customers">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => handleClick()}
                >
                  Create Customer
                </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
