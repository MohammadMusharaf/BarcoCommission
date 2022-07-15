import React, { useState, Component, useEffect, forwardRef } from "react";
import MaterialTable, { Column } from "material-table";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";

import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

import jsPDF from "jspdf";
import "jspdf-autotable";
import FactoriesDropdownlist from "./FactoriesDropdownlist";
import PriorYearDropdownlist from "./PriorYearDropdownlist";
import Customerddl from "./Customerddl";

import Checkbox from "@mui/material/Checkbox";
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
export default function CommissonRules(props) {
  const [priorYear, setPriorYear] = React.useState("");

  const handleChange = (event) => {
    setPriorYear(event.target.value);
    debugger;
    console.log(priorYear);
  };

  const [selectedFactoryValue, setSelectedFactoryValue] = useState("");
  const [selectedPriorYearValue, setSelectedPriorYearValue] = useState("");
  const [selectedCustomerValue, setSelectedCustomerValue] = useState("");

  const FactoryOnchange = (value) => {
    setSelectedFactoryValue(value);
    debugger;
    console.log(selectedFactoryValue);
  };
  const PriorYearOnchange = (value) => {
    setSelectedPriorYearValue(value);
    debugger;
    console.log(selectedPriorYearValue);
  };
  const CustomerOnchange = (value) => {
    setSelectedCustomerValue(value);
    debugger;
    console.log(selectedCustomerValue);
  };

  const [checked, setChecked] = useState(false);
  const checkChanged = (state) => {
    setChecked(!checked);
  };

  const classes = useStyles();

  const [data, setData] = useState([]);
  const columns = [
    { title: "Rules Id", field: "commRuleId" },
    { title: "Fin Year", field: "finYear" },
    { title: "Factory Name", field: "factoryName" },
    { title: "Customer Name", field: "customerName" },
    { title: "Comm. Rate", field: "commRate" },
    { title: "IsActive", field: "isActive" },
  ];

  const [finYear, setFinYear] = useState("");
  const [factoryName, setFactoryName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [commissionRate, setCommissionRate] = useState("");
  const [isActive, setIsActive] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const rows = [];
    var CommRule = {
      commRuleId: 1,
      finYear: selectedPriorYearValue,
      factoryName: selectedCustomerValue,
      customerName: selectedCustomerValue,
      commRate: commissionRate,
      isActive: checked,
    };
    rows.push(CommRule);

    // debugger;
    // if (data) {
    //   debugger;

    //   setData(data.concat(rows));
    // } else {
    //   setData(rows);
    // }

    debugger;
    console.log(CommRule);

    fetch(
      "http://localhost:57636/api/CommissionRules/AddCommissionRules",

      {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(CommRule),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/";
        }
      });
  };

  useEffect(() => {
    GetCummRules();
  }, []);

  const GetCummRules = () => {
    fetch("http://localhost:57636/api/CommissionRules/GetCommissionRules")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Sales Commission Details", 20, 10);
    doc.autoTable({
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: data,
    });
    doc.save("SalesCommission.pdf");
  };

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    // DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    // FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    // LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    // ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  <Grid item xs={12} sm={6}>
    <FactoriesDropdownlist ddlOnchang={FactoryOnchange} />
  </Grid>;
  return (
    <>
      <div>
        <h3>Create Commission Rules</h3>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <PriorYearDropdownlist ddlOnchang={PriorYearOnchange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Customerddl ddlOnchang={CustomerOnchange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FactoriesDropdownlist ddlOnchang={FactoryOnchange} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="commissionRate"
                name="commissionRate"
                variant="outlined"
                fullWidth
                id="commissionRate"
                label="Commission Rate"
                onChange={(e) => setCommissionRate(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label>IsActive</label>
              {/* <Checkbox

                {...label}
                defaultChecked
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              /> */}

              <Checkbox
                {...label}
                checked={checked}
                onChange={checkChanged}
                color="primary"
                size="medium"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create
          </Button>
        </form>
        <MaterialTable
          title=""
          columns={columns}
          data={data}
          icons={tableIcons}
          options={{
            sorting: true,
            search: true,
            searchFieldAlignment: "right",
            searchAutoFocus: true,
            searchFieldVariant: "standard",
            filtering: true,
            paging: true,
            pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
            pageSize: 5,
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            paginationPosition: "both",
            exportButton: true,
            exportAllData: true,
            exportFileName: "SalesCommission",
            addRowPosition: "first",
            actionsColumnIndex: -1,
            selection: true,
            showSelectAllCheckbox: false,
            showTextRowsSelected: false,
            selectionProps: (rowData) => ({
              disabled: rowData.age == null,
              // color:"primary"
            }),
            grouping: true,
            columnsButton: true,
            rowStyle: (data, index) =>
              index % 2 === 0 ? { background: "#f5f5f5" } : null,
            headerStyle: { background: "#f44336", color: "#fff" },
          }}
        />
      </div>
    </>
  );
}
