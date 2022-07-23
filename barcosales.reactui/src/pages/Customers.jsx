import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function Customers() {
  const classes = useStyles();

  const columns = [
    { title: "SN#", field: "CId" },
    { title: "CustId", field: "CustId" },
    { title: "CustomerName", field: "CustomerName" },
    { title: "CustAliasName", field: "CustAliasName" },
    { title: "Branch", field: "branch" },
    { title: "Address", field: "Address" },
    { title: "City", field: "City" },
    { title: "State", field: "State" },
    { title: "Zip", field: "Zip" },
    { title: "Contact", field: "Contact" },
    { title: "Phone", field: "Phone" },
    { title: "EmailId", field: "EmailId" },
    { title: "Mobile", field: "Mobile" },
    { title: "Territory", field: "Territory" },
    { title: "SalesmanCode", field: "SalesmanCode" },
    { title: "SalesmanName", field: "SalesmanName" },
    { title: "PrincCode", field: "PrincCode" },
    { title: "FactoryName", field: "FactoryName" },
    { title: "CreationDate", field: "CreatedDate" },
    { title: "IsActive", field: "IsActive" },
  ];

  // const objbody = {

  //   CId: 0,
  //   CustId: 0,
  //   CustomerName: '',
  //   CustAliasName: '',
  //   Branch: '',
  //   Address: '',
  //   City: '',
  //   State: '',
  //   Zip: '',
  //   Contact: '',
  //   Phone: '',
  //   FactoryId:'',
  //   FactoryName:'',
  //   PrincCode: '',
  //   EmailId: '',
  //   Mobile: '',
  //   Territory: '',
  //   SalesmanId: 0,
  //   SalesmanCode:'',
  //   SalesmanName:'',
  //   CreatedDate: '',
  //   IsActive: 0,

  // };

  const [data, setData] = useState();
  const [salesman, setSalesman] = useState();
  const [customers, setCustomers] = useState([]);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    GetCustomers();
  }, []);

  const GetCustomers = () => {
    fetch("http://localhost:57636/api/Customer/GetCustomer")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };
  const GetCustomersSearch = () => {
    fetch("http://localhost:57636/api/Customer/GetCustomerInfo", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(""),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          // UsersGet();
        }
      });
  };

  const UserDelete = (id) => {
    var data = {
      id: id,
    };
    fetch("https://www.mecallapi.com/api/users/delete", {
      method: "DELETE",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          // UsersGet();
        }
      });
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
        {/* <h3> Add Customer</h3> */}

        <form className={classes.form}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Link to="/customer/create">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Add New Customer
                </Button>
              </Link>
            </Grid>
          </Grid>
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
