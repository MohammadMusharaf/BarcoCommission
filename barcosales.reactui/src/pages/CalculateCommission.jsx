import React, { useState, Component, useEffect, forwardRef } from "react";
import MaterialTable, { Column } from "material-table";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { StyledEngineProvider } from "@mui/material/styles";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

import PrintIcon from "@material-ui/icons/Print";
import jsPDF from "jspdf";
import "jspdf-autotable";

const EXTENSIONS = ["xlsx", "xls", "csv"];
export default function CalculateCommission(props) {
  //Sold-To Address	Sold-To State	Ship-To Name	Ship-To Address	Ship-To City	Ship-To State

  // TrasactionId:0,
  // SalesmId:d["Sold-To Name"],
  // SalesmanName:d["Sold-To Name"],
  // CustId:d["Sold-To Name"],
  // CommissionRulesId: d["Sold-To Name"],
  // SoldToName: d["Sold-To Name"],
  // SoldToAddress:d["Sold-To Address"],
  // SoldToState:d["Sold-To State"],
  // ShipToAddress:d["Ship-To Address"],
  // ShipToCity:d["Ship-To City"],
  // ShipToState:d["Ship-To State"],
  // Factory: selectedFactoryValue,
  // Check: checkValue,
  // Month: selectedSalesMonthsValue,
  // salesman: selectedSalesmanValue,
  // InvoiceNo,
  // SaleAmount,
  // GrossCommRate: `${commRate}%`,
  // GrossCommAmt: numberToCurrency(grossComm),
  // SalesmanCommAmt: numberToCurrency(salesmanComm),
  const handleClick = () => {
    salesComissiongridData.forEach((salesRecord, i) => {
      debugger;
      fetch(
        "http://localhost:57636/api/SalesTrasaction/AddTrasaction",

        {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(salesRecord),
        }
      )
        .then((res) => res.json())
        .then((result) => {
          //  alert(result["message"]);
          if (result["status"] === "ok") {
            window.location.href = "/";
          }
        });
    });
  };
  const columns = [
    { title: "Customer", field: "SoldToName" },
    { title: "Factory", field: "Factory" },
    { title: "Check", field: "Check" },
    { title: "Month", field: "Month" },
    { title: "Salesman", field: "SalesmanName" },
    { title: "Invoice No", field: "InvoiceNo" },
    { title: "Sale Amount", field: "SaleAmount" },
    { title: "Gross CommRate", field: "GrossCommRate" },
    { title: "Gross Comm", field: "GrossCommAmt" },
    { title: "Salesman Comm", field: "SalesmanCommAmt" },
  ];
  const [data, setData] = useState();
  const [salesComissiongridData, setSalesComissiongridData] = useState();
  useEffect(() => {
    GetSalesTransaction();
  }, []);

  const GetSalesTransaction = () => {
    fetch("http://localhost:57636/api/SalesTrasaction/GetTrasaction")
      .then((res) => res.json())
      .then((result) => {
        setData(JSON.parse(localStorage.getItem("salesComissionData")));
        setSalesComissiongridData(
          JSON.parse(localStorage.getItem("salesComissiongridData"))
        );
      });
  };

  //  const data = JSON.parse(localStorage.getItem("salesComissionData"));

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
        {/* <h4>Calculated Sales Commission </h4> */}
        <Button type="submit" fullWidth variant="contained" color="primary">
          Save Calculated Sales Commission
        </Button>
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
            grouping: true,
            columnsButton: true,
            rowStyle: (data, index) =>
              index % 2 === 0 ? { background: "#f5f5f5" } : null,
            headerStyle: { background: "#f44336", color: "#fff" },
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={() => handleClick()}
          color="primary"
        >
          Save Calculated Sales Commission
        </Button>
        {/* <Link to="/transaction/calculate">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => handleClick()}
                >
                  Calculate Sales Commission
                </Button>
              </Link> */}
      </div>
    </>
  );
}
