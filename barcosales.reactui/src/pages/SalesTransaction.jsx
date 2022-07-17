import React, { useState, Component, useEffect, forwardRef } from "react";
import MaterialTable, { Column } from "material-table";
import { Link } from "react-router-dom";
import { findIndex } from "lodash";

import * as XLSX from "xlsx";

import Button from "@material-ui/core/Button";

import Box from "@material-ui/core/Box";

import PrintIcon from "@material-ui/icons/Print";

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

import jsPDF from "jspdf";
import "jspdf-autotable";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FactoriesDropdownlist from "./FactoriesDropdownlist";
import SalesmanDropdownlist from "./SalesmanDropdownlist";
import PriorYearDropdownlist from "./PriorYearDropdownlist";
import SalesMonthsDropdownlist from "./SalesMonthsDropdownlist";

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
export default function Transaction() {
  // const Transaction = (props) =>

  const classes = useStyles();

  const [colDefs, setColDefs] = useState([
    { title: "SoldToName", field: "Sold-To Name" },
    { title: "SoldToAddress", field: "Sold-To Address" },
    { title: "SoldToState", field: "Sold-To State" },
    { title: "ShipToName", field: "Ship-To Name" },
    { title: "ShipToAddress", field: "Ship-To Address" },
    { title: "ShipToCity", field: "Ship-To City" },
    { title: "ShipToState", field: "Ship-To State" },
    { title: "SaleAmt", field: "Sale Amount" },
  ]);
  const [data, setData] = useState();

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

  const data1 = [
    {
      customer: "AIR HYDRAULICS SYSTEMS",
      //  shipToAddress: "4037 CLARKS RIVER RD", shipToCity: "KY", shipToState: "WALLACE ELECTRICAL SYSTEMS",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "10001",
      saleAmount: "$145.00",
      commRate: "5",
      grossComm: "$7.25",
      salesmanComm: "$3.63",
    },
    {
      customer: "APPLIED IND",
      // shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "10002",
      saleAmount: "$30.25",
      commRate: "5",
      grossComm: "$7.25",
      salesmanComm: "$3.63",
    },
    {
      customer: "CREST INDUSTRIES",
      // shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "10003",
      saleAmount: "$689.80",
      commRate: "5",
      grossComm: "$34.49",
      salesmanComm: "$17.25",
    },
    {
      customer: "DAKOTA FLUID POWER",
      // shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "10004",
      saleAmount: "$120.45",
      commRate: "5",
      grossComm: "$6.02",
      salesmanComm: "$3.01",
    },
    {
      customer: "FASTENAL MISC IA",
      // shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "10005",
      saleAmount: "$2, 106.64",
      commRate: "2.5",
      grossComm: "$52.67",
      salesmanComm: "$26.34",
    },
    {
      customer: "FASTENAL MISC IL",
      // shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "10006",
      saleAmount: "$642.33",
      commRate: "2.5",
      grossComm: "$51.60",
      salesmanComm: "$8.03",
    },
    {
      customer: "FASTENAL MISC KANSAS",
      // shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "10007",
      saleAmount: "$2, 064.05",
      commRate: "2.5",
      grossComm: "$51.60",
      salesmanComm: "$25.80",
    },
    {
      customer: "FASTENAL MISC MO",
      // shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "10008",
      saleAmount: "$5, 065.96",
      commRate: "2.5",
      grossComm: "$126.65",
      salesmanComm: "$63.33",
    },
    {
      customer: "FASTENAL MISC NE",
      // shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "10009",
      saleAmount: "1, 451.66",
      commRate: "2.5",
      grossComm: "$36.29",
      salesmanComm: "$18.15",
    },
    {
      customer: "FASTENAL MISC SD",
      // shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "100010",
      saleAmount: "$710.21",
      commRate: "2.5",
      grossComm: "$17.76",
      salesmanComm: "$8.88",
    },
    {
      customer: "FRANK FLORI EQUIPMENT MARYLAND HGTS MO",
      // shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "100011",
      saleAmount: "$260.70",
      commRate: "5",
      grossComm: "$13.04",
      salesmanComm: "$6.52",
    },
    {
      customer: "HYSPECO INC",
      // shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "100012",
      saleAmount: "$73.50",
      commRate: "5",
      grossComm: "$3.68",
      salesmanComm: "$1.84",
    },
    {
      customer: "IBT MISC KS",
      // shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "100013",
      saleAmount: "$627.98",
      commRate: "5",
      grossComm: "$31.40",
      salesmanComm: "$15.70",
    },
    {
      customer: "JOHNSON AUTOMATION COMPONENTS",
      // shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "100014",
      saleAmount: "$136.98",
      commRate: "5",
      grossComm: "$6.85",
      salesmanComm: "$3.43",
    },
    {
      customer: "KAMAN INDUSTRIAL TECHNOLOGIES",
      // shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "100015",
      saleAmount: "$118.78",
      commRate: "5",
      grossComm: "$5.94",
      salesmanComm: "$2.97",
    },
    {
      customer: "LESSIN SUPPLY",
      // shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "100016",
      saleAmount: "$60.90",
      commRate: "5",
      grossComm: "$3.05",
      salesmanComm: "$1.53",
    },
    {
      customer: "Midland Metal KANSAS CITY MO",
      // shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: " February",
      salesman: "Barrett B",
      invoiceNo: "100017",
      saleAmount: "$8, 901.29",
      commRate: "2.5",
      grossComm: "$222.53",
      salesmanComm: "$111.27",
    },
    {
      customer: "PEERLESS SUPPLY INC",
      // shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "100018",
      saleAmount: "$132.03",
      commRate: "5",
      grossComm: "$6.60",
      salesmanComm: "$3.30",
    },
    {
      customer: "Quad Power Products LLC",
      // shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "100019",
      saleAmount: "$186.65",
      commRate: "5",
      grossComm: "$9.33",
      salesmanComm: "$4.67",
    },
    {
      customer: "Tompkins OLATHE",
      //   shipToName: "shipToName", shipToAddress: "shipToAddress", shipToCity: "shipToCity", shipToState: "shipToState",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "100020",
      saleAmount: "$308.80",
      commRate: "5",
      grossComm: "$15.44",
      salesmanComm: "$7.7",
    },

    {
      customer: "Total for Principal",
      //  shipToName: "shipToName1", shipToAddress: "shipToAddress1", shipToCity: "shipToCity1", shipToState: "shipToState1",
      factory: "AF ALPHA FITTINGS",
      check: "",
      month: "February",
      salesman: "Barrett B",
      invoiceNo: "100021",
      saleAmount: "$23,773.46",
      commRate: " ",
      grossComm: "$665.14",
      salesmanComm: "$332.57",
    },
  ];

  const columns1 = [
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
    { title: "Salesman Comm", field: "salesmanComm" },
  ];

  const getExention = (file) => {
    const parts = file.name.split(".");
    const extension = parts[parts.length - 1];
    return EXTENSIONS.includes(extension); // return boolean
  };

  const convertToJson = (headers, data) => {
    const rows = [];
    data.forEach((row) => {
      let rowData = {};
      row.forEach((element, index) => {
        // console.log(element);

        rowData[headers[index]] = element;
      });
      rows.push(rowData);
    });
    return rows;
  };
  const downloadExcel = () => {
    const newData = data.map((row) => {
      delete row.tableData;
      return row;
    });
    const workSheet = XLSX.utils.json_to_sheet(newData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "SalesCommissionDetails");
    //Buffer
    XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
    //Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    //Download
    XLSX.writeFile(workBook, "SalesCommissionDetails.xlsx");
  };
  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("SalesCommissionDetails", 20, 10);
    doc.autoTable({
      theme: "grid",
      columns: colDefs.map((col) => ({ ...col, dataKey: col.field })),
      body: data,
    });
    doc.save("SalesCommissionDetails.pdf");
  };

  const importExcel = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      //parse data

      const bstr = event.target.result;
      const workBook = XLSX.read(bstr, { type: "binary" });

      //get first sheet
      const workSheetName = workBook.SheetNames[0];
      // console.log(workSheetName)
      const workSheet = workBook.Sheets[workSheetName];
      //convert to array
      // console.log(workSheet)
      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
      // console.log(fileData)
      const headers = fileData[0];
      const heads = headers.map((head) => ({ title: head, field: head }));
      // console.log(heads)
      setColDefs(heads);

      fileData.splice(0, 1);

      setData(convertToJson(headers, fileData));
      // console.log(setData)
      // localStorage.setItem('columns1', JSON.stringify(columns));
      // localStorage.setItem('data1', JSON.stringify(convertToJson(columns, cdata)));
    };

    if (file) {
      if (getExention(file)) {
        reader.readAsBinaryString(file);
      } else {
        alert("Invalid file input, Select Excel, CSV file");
      }
    } else {
      setData([]);
      setColDefs([]);
    }
  };

  const numberToCurrency = (num) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",

      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return formatter.format(num);
  };

  const handleClick = () => {
    const transformedArray = [];
    data.forEach((d, i) => {
      const invoiceNo = i; // Will come from API
      const saleAmount = d["Sale Amount"];
      const commRate = i % 2 ? 5 : 7; // Will come from API
      const grossComm = (
        (Number(saleAmount.replace(/[^0-9.-]+/g, "")) * commRate) /
        100
      ).toFixed(2);
      const salesmanComm = grossComm / 2;
      const obj = {
        customer: d["Sold-To Name"],
        invoiceNo,
        saleAmount,
        commRate: `${commRate}%`,
        grossComm: numberToCurrency(grossComm),
        salesmanComm: numberToCurrency(salesmanComm),
      };
      transformedArray.push(obj);
    });

    localStorage.setItem("salesComissionData", JSON.stringify(data1));
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
        <form className={classes.form}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Link to="/transaction/addsales">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Add New Sales Commission
                </Button>
              </Link>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <PriorYearDropdownlist ddlOnchang={PriorYearOnchange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SalesMonthsDropdownlist ddlOnchang={SalesMonthsOnchange} />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <SalesmanDropdownlist ddlOnchang={SalesmanOnchange} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FactoriesDropdownlist ddlOnchang={FactoryOnchange} />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <input
                type="file"
                color="primary"
                title="Upload Sales Files"
                fullWidth
                onChange={importExcel}
              />
            </Grid>
          </Grid>
        </form>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <MaterialTable
              title="Customer Sales Details"
              columns={colDefs}
              data={data}
              icons={tableIcons}
              editable={{
                onRowAdd: (newData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      setData([...data, newData]);

                      resolve();
                    }, 1000);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      const dataUpdate = [...data];
                      const index = oldData.tableData.id;
                      dataUpdate[index] = newData;
                      setData([...dataUpdate]);

                      resolve();
                    }, 1000);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      const dataDelete = [...data];
                      const index = oldData.tableData.id;
                      dataDelete.splice(index, 1);
                      setData([...dataDelete]);

                      resolve();
                    }, 1000);
                  }),
              }}
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
                grouping: true,
                columnsButton: true,
                rowStyle: (data, index) =>
                  index % 2 === 0 ? { background: "#f5f5f5" } : null,
                headerStyle: { background: "#f44336", color: "#fff" },
              }}
            />
          </Grid>
        </Grid>

        <form className={classes.form}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Link to="/transaction/calculate">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => handleClick()}
                >
                  Calculate Sales Commission
                </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
}
