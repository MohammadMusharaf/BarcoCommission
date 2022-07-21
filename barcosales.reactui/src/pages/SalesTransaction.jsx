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
  const [checkValue, setCheckValue] = useState("");
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
    });

    return formatter.format(num);
  };

  const [getCommRules, setGetCommRules] = useState([]);
  const [getCustomers, setGetCustomers] = useState([]);
  const [getCommrulesId, setGetCommrulesId] = useState();

  useEffect(() => {
    getCommissionRules();
    getAllCustomers();
  }, []);

  const getAllCustomers = () => {
    fetch("http://localhost:57636/api/Customer/GetCustomer")
      .then((res) => res.json())
      .then((result) => {
        debugger;
        setGetCustomers(result);
      });
  };
  const getCommissionRules = () => {
    fetch("http://localhost:57636/api/CommissionRules/GetCommissionRules")
      .then((res) => res.json())
      .then((result) => {
        debugger;
        setGetCommRules(result);
      });
  };

  const getcommRate = (row) => {
    debugger;

    let rowData = {};
    if (row) {
      // myObj = myArrayOfObjects.find(obj => obj.prop === 'something');
      var custInfo = getCustomers.find(
        (item) => item.CustomerName === row["Sold-To Name"]
      );
      var commRate = getCommRules.find(
        (item) =>
          item.CustId === custInfo.Cid &&
          item.SalesmanId === selectedSalesmanValue &&
          item.FactoryId === selectedFactoryValue
      );
      debugger;
      if (commRate) {
        rowData = commRate;
        debugger;
      } else {
        var commRate1 = getCommRules.find(
          (Ruleid) =>
            Ruleid.SalesmanId === selectedSalesmanValue &&
            Ruleid.FactoryId === selectedFactoryValue
        );
        debugger;
        commRate = commRate1;
      }
    }
    return rowData.CommisionRate;
  };

  const handleClick = () => {
    const transformedArray = [];
    data.forEach((d, i) => {
      let comRate = getcommRate(d);
      if (comRate) {
        debugger;
        const InvoiceNo = i; // Will come from API
        const SaleAmount = d["Sale Amount"];
        const commRate = comRate; //i % 2 ? 5 : 7; // Will come from API
        const grossComm = (
          (Number(SaleAmount.replace(/[^0-9.-]+/g, "")) * commRate) /
          100
        ).toFixed(2);
        debugger;
        const salesmanComm = grossComm / 2;
        const obj = {
          TrasactionId: 0,
          SalesmId: 1,
          SalesmanName: d["Sold-To Name"],
          CustId: 1,
          CommissionRulesId: 1,
          SoldToName: d["Sold-To Name"],
          SoldToAddress: d["Sold-To Address"],
          SoldToState: d["Sold-To State"],
          ShipToAddress: d["Ship-To Address"],
          ShipToCity: d["Ship-To City"],
          ShipToState: d["Ship-To State"],
          Factory: selectedFactoryValue,
          Check: checkValue,
          Month: selectedSalesMonthsValue,
          salesman: selectedSalesmanValue,
          InvoiceNo,
          SaleAmount,
          GrossCommRate: commRate,
          GrossCommAmt: grossComm,
          SalesmanCommAmt: salesmanComm,
          // GrossCommRate: `${commRate}%`,
          // GrossCommAmt: numberToCurrency(grossComm),
          // SalesmanCommAmt: numberToCurrency(salesmanComm),
        };
        debugger;
        let res = JSON.stringify(obj);
        transformedArray.push(obj);

        fetch("http://localhost:57636/api/SalesTrasaction/AddTrasaction", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        })
          .then((res) => res.json())
          .then((result) => {
            //   alert(obj);
            if (result["status"] === "ok") {
              window.location.href = "/";
            }
          });
      }
    });
    debugger;
    localStorage.setItem(
      "salesComissionData",
      JSON.stringify(transformedArray)
    );
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
