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
  // const [columns, setColDefs] = useState()
  // const [data, setData] = useState()

  const columns = [
    { title: "Customer", field: "customer" },
    // { title: "ShipToName", field: "shipToName" },
    // { title: "ShipToAddress", field: "shipToAddress" },
    // { title: "ShipToCity", field: "shipToCity" },
    // { title: "ShipToState", field: "shipToState" },
    { title: "Factory", field: "factory" },
    { title: "Check", field: "check" },
    { title: "Month", field: "month" },
    { title: "Salesman", field: "salesman" },
    { title: "Invoice No", field: "invoiceNo" },
    { title: "Sale Amount", field: "saleAmount" },
    { title: "Gross CommRate", field: "commRate" },
    { title: "Gross Comm", field: "grossComm" },
    { title: "Salesman Comm", field: "salesmanComm" }
  ];

  const data = JSON.parse(localStorage.getItem("salesComissionData"));
  //const columns = JSON.parse(localStorage.getItem('columns1'))

  console.log(data)

  console.log(columns)

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
        <h4>Calculated Sales Commission </h4>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Submit
        </Button>
        <MaterialTable
          title=""
          columns={columns}
          data={data}
          icons={tableIcons}
          // actions={[
          //   {
          //     icon: () => <PrintIcon />, // you can pass icon too
          //     tooltip: "Export to Pdf",
          //     onClick: () => downloadPdf(),
          //     isFreeAction: true,
          //   },
          // ]}
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
        <Button type="submit" fullWidth variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </>
  );
}
