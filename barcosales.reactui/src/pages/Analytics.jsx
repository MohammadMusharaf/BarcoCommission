import React, { useState, useEffect, forwardRef } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MaterialTable, { Column } from "material-table";
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

import "jspdf-autotable";
import FactoriesDropdownlist from "./FactoriesDropdownlist";
import SalesmanDropdownlist from "./SalesmanDropdownlist";
import PriorYearDropdownlist from "./PriorYearDropdownlist";
import SalesMonthsDropdownlist from "./SalesMonthsDropdownlist";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const EXTENSIONS = ["xlsx", "xls", "csv"];
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
export default function Analytics(props) {
  const classes = useStyles();

  const [selectedFactoryValue, setSelectedFactoryValue] = useState("");
  const [selectedPriorYearValue, setSelectedPriorYearValue] = useState("");
  const [selectedSalesMonthsValue, setSelectedSalesMonthsValue] = useState("");
  const [selectedSalesmanValue, setSelectedSalesmanValue] = useState("");

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
  const SalesMonthsOnchange = (value) => {
    setSelectedSalesMonthsValue(value);
    debugger;
    console.log(selectedSalesMonthsValue);
  };
  const SalesmanOnchange = (value) => {
    setSelectedSalesmanValue(value);
    debugger;
    console.log(selectedSalesmanValue);
  };
  const [startDatevalue, setStartDatevalue] = useState("");
  const [endDatevalue, setEndDatevalue] = useState("");

  const [data, setData] = useState();

  useEffect(() => {
    GetSalesTransaction();
  }, []);

  const GetSalesTransaction = () => {
    fetch("http://localhost:57636/api/SalesTrasaction/GetTrasaction")
      .then((res) => res.json())
      .then((result) => {
        debugger;
        setData(result);
      });
  };
  //  const data = JSON.parse(localStorage.getItem("salesComissionData"));

  const columns = [
    { title: "TrasactionId", field: "TrasactionId" },
    { title: "CustId", field: "CustId" },
    { title: "Customer", field: "SoldToName" },
    { title: "FactoryName", field: "FactoryName" },
    { title: "Check", field: "Check" },
    { title: "Month", field: "Month" },
    { title: "SalesmanName", field: "SalesmanName" },
    { title: "InvoiceNo", field: "InvoiceNo" },
    { title: "SaleAmount", field: "ExtPrice" },
    { title: "GrossCommRate", field: "GrossCommRate" },
    { title: "GrossCommAmt", field: "GrossCommAmt" },
    { title: "SalesmanCommAmt", field: "SalesmanCommAmt" },
    { title: "SoldToAddress", field: "ShipToAddress" },
    { title: "SoldToState", field: "ShipToCity" },
    { title: "ShipToName", field: "ShipToName" },
    { title: "ShipToAddress", field: "ShipToAddress" },
    { title: "ShipToCity", field: "ShipToCity" },
    { title: "ShipToState", field: "ShipToState" },
  ];

  //   t.TrasactionId ,
  // t.InvoiceNo,
  // t.CustId,
  // t.SoldToName,
  // t.SoldToAddress,
  // t.SoldToState ,
  // t.SalesmId ,
  // s.SalesmanName,
  // t.SalesmanName ,
  // t.FactoryId,
  // f.FactoryName,
  // t.CommissionRulesId,
  // t.ShipToName ,
  // t.ShipToAddress,
  // t.ShipToCity ,
  // t.ShipToState ,
  // t.ExtPrice,
  // t.GrossCommRate ,
  // t.GrossCommAmt ,
  // t.SalesmanCommAmt,
  // t.CreatedDate ,
  // t.CreatedBy ,
  // t.UpdatedDate ,
  // t.UpdatedBy ,
  // t.IsActive ,
  // t.FinYear

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

  return (
    <>
      <div>
        <h3> Sales Commission Reports</h3>

        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Start Date"
                  value={startDatevalue}
                  onChange={(newValue) => {
                    setStartDatevalue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField variant="outlined" fullWidth {...params} />
                  )}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="End Date"
                  value={endDatevalue}
                  onChange={(newValue) => {
                    setEndDatevalue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField variant="outlined" fullWidth {...params} />
                  )}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <PriorYearDropdownlist />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SalesMonthsDropdownlist />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <SalesmanDropdownlist />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FactoriesDropdownlist />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Search
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
            pageSize: 10,
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
