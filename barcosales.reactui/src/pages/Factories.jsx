import React, {
  useState,
  Component,
  useEffect,
  forwardRef,
  useRef,
} from "react";
import Checkbox from "@mui/material/Checkbox";
import MaterialTable, { Column } from "material-table";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
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
import FactoryCategoryddl from "./FactoryCategoryddl";

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
export default function Factories(props) {
  const classes = useStyles();

  // const [columns, setColDefs] = useState()

  const [selectedFactCategoryValue, setSelectedFactCategoryValue] =
    useState("");
  const [factoryName, setFactoryName] = useState("");
  const [princcode, setPrinccode] = useState("");
  const [commissionRate, setCommissionRate] = useState("");

  const FactoryCategoryOnchange = (value) => {
    setSelectedFactCategoryValue(value);
    debugger;
    console.log(selectedFactCategoryValue);
  };

  const [checked, setChecked] = useState(false);
  const checkChanged = (state) => {
    setChecked(!checked);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const rows = [];
    var factories = {
      FactoryId: 0,
      FactoryName: factoryName,
      PrincCode: princcode,
      // commRate: commissionRate,
      FactoryCategoryId: selectedFactCategoryValue,
      IsActive: checked,
    };
    rows.push(factories);

    // if (data) {
    //   debugger;

    //   setData(data.concat(rows));
    // } else {
    //   setData(rows);
    // }

    debugger;
    console.log(factories);

    fetch("http://localhost:57636/api/Factory/AddFactory", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(factories),
    })
      .then((res) => res.json())
      .then((result) => {
        GetFactory();
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/";
        }
      });
  };
  const [data, setData] = useState([]);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    GetFactory();
  }, []);

  const GetFactory = () => {
    fetch("http://localhost:57636/api/Factory/GetFactory")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };

  const columns = [
    { title: "FactoryId", field: "FactoryId" },
    { title: "FactoryCategoryId", field: "FactoryCategoryId" },
    { title: "FactoryName", field: "FactoryName" },
    { title: "PrincCode", field: "PrincCode" },
    { title: "IsActive", field: "IsActive" },
  ];

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

  return (
    <>
      <div>
        <h3> Add Factory</h3>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FactoryCategoryddl ddlOnchang={FactoryCategoryOnchange} />
              {/* <FactoriesDropdownlist ddlOnchang={FactoryOnchange} /> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="factoryName"
                name="factoryName"
                variant="outlined"
                fullWidth
                id="factoryName"
                label="Factory Name"
                onChange={(e) => setFactoryName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="princcode"
                name="princcode"
                variant="outlined"
                fullWidth
                id="princcode"
                label="Princ Code"
                onChange={(e) => setPrinccode(e.target.value)}
                autoFocus
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
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
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <label>IsActive</label>
              <Checkbox
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
            Submit
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
