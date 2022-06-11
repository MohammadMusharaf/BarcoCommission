import React, { useState, Component, useEffect } from 'react';
import MaterialTable, { Column } from "@material-table/core";
import { Link } from "react-router-dom";

import * as XLSX from 'xlsx'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import PrintIcon from '@material-ui/icons/Print'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { StyledEngineProvider } from '@mui/material/styles';

import Dropdownlist from "./Dropdownlist";



const EXTENSIONS = ['xlsx', 'xls', 'csv']
export default function Transaction() {

  // const Transaction = (props) =>



  const [colDefs, setColDefs] = useState()
  const [data, setData] = useState()

  // const data1 = [
  //   { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  //   { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
  // ];

  const data1 = [
    { customer: "AIR HYDRAULICS SYSTEMS", invoiceNo: "10001", saleAmount: '$145.00', commRate: "5", grossComm: "$7.25", salesmanComm: "$3.63" },
    { customer: "APPLIED IND", invoiceNo: "10002", saleAmount: '$30.25', commRate: "5", grossComm: "7.25", salesmanComm: "3.63" },
    { customer: "CREST INDUSTRIES", invoiceNo: "10003", saleAmount: '$689.80', commRate: "5", grossComm: "$34.49", salesmanComm: "$17.25" },
    { customer: "DAKOTA FLUID POWER", invoiceNo: "10003", saleAmount: '$120.45', commRate: "5", grossComm: "$6.02", salesmanComm: "$3.01" },
    { customer: "FASTENAL MISC IA", invoiceNo: "10004", saleAmount: '$2, 106.64', commRate: "2.5", grossComm: "$52.67", salesmanComm: "$26.34" },
    { customer: "FASTENAL MISC IL", invoiceNo: "10005", saleAmount: '$642.33', commRate: "2.5", grossComm: "$51.60", salesmanComm: "$8.03" },
    { customer: "FASTENAL MISC KANSAS", invoiceNo: "2001132", saleAmount: '$2, 064.05', commRate: "2.5", grossComm: "$51.60", salesmanComm: "$25.80" },
    { customer: "FASTENAL MISC MO", invoiceNo: "2001132", saleAmount: '$5, 065.96', commRate: "2.5", grossComm: "$126.65", salesmanComm: "$63.33" },
    { customer: "FASTENAL MISC NE", invoiceNo: "2001132", saleAmount: '1, 451.66', commRate: "2.5", grossComm: "$36.29", salesmanComm: "$18.15" },
    { customer: "FASTENAL MISC SD", invoiceNo: "2001132", saleAmount: '$710.21', commRate: "2.5", grossComm: "$17.76", salesmanComm: "$8.88" },
    { customer: "FRANK FLORI EQUIPMENT MARYLAND HGTS MO", invoiceNo: "2001132", saleAmount: '$260.70', commRate: "5", grossComm: "$13.04", salesmanComm: "$6.52" },
    { customer: "HYSPECO INC", invoiceNo: "2001132", saleAmount: '$73.50', commRate: "5", grossComm: "$3.68", salesmanComm: "$1.84" },
    { customer: "IBT MISC KS", invoiceNo: "2001132", saleAmount: '$627.98', commRate: "5", grossComm: "$31.40", salesmanComm: "$15.70" },
    { customer: "JOHNSON AUTOMATION COMPONENTS", invoiceNo: "2001132", saleAmount: '$136.98', commRate: "5", grossComm: "$6.85", salesmanComm: "$3.43" },
    { customer: "KAMAN INDUSTRIAL TECHNOLOGIES", invoiceNo: "2001132", saleAmount: '$118.78', commRate: "5", grossComm: "$5.94", salesmanComm: "$2.97" },
    { customer: "LESSIN SUPPLY", invoiceNo: "2001132", saleAmount: '$60.90', commRate: "5", grossComm: "$3.05", salesmanComm: "$1.53" },
    { customer: "Midland Metal KANSAS CITY MO", invoiceNo: "2001132", saleAmount: '$8, 901.29', commRate: "2.5", grossComm: "$222.53", salesmanComm: "$111.27" },
    { customer: "PEERLESS SUPPLY INC", invoiceNo: "2001132", saleAmount: '$132.03', commRate: "5", grossComm: "$6.60", salesmanComm: "$3.30" },
    { customer: "Quad Power Products LLC", invoiceNo: "2001132", saleAmount: '$186.65', commRate: "5", grossComm: "$9.33", salesmanComm: "$4.67" },
    { customer: "Tompkins OLATHE", invoiceNo: "2001132", saleAmount: '$308.80', commRate: "5", grossComm: "$15.44", salesmanComm: "$7.7" },

    { customer: "Total for Principal", invoiceNo: " ", saleAmount: '$23,773.46', commRate: " ", grossComm: "$665.14", salesmanComm: "$332.57" }














  ];

  // const columns1 = [
  //   { title: "Name", field: "name" },
  //   { title: "Surname", field: "surname" },
  //   { title: "Birth Year", field: "birthYear", type: "numeric" },
  // ];



  const columns1 = [
    { title: "Customer", field: "customer" },
    { title: "Invoice No", field: "invoiceNo" },
    { title: "Sale Amount", field: "saleAmount" },
    { title: "Gross CommRate", field: "commRate" },
    { title: "Gross Comm", field: "grossComm" },
    { title: "Salesman Comm", field: "salesmanComm" },
  ];


  //   Customer 
  // Invoice No
  // Sale Amount
  // Gross Comm.Rate
  // Gross Comm.
  // Salesman. Comm

  // localStorage.setItem('colum', JSON.stringify(colDefs));


  // localStorage.setItem('data', JSON.stringify(data));
  localStorage.setItem('data', data1);
  localStorage.setItem('colDefs', columns1);

  const getExention = (file) => {
    const parts = file.name.split('.')
    const extension = parts[parts.length - 1]
    return EXTENSIONS.includes(extension) // return boolean
  }

  const convertToJson = (headers, data) => {
    const rows = []
    data.forEach(row => {
      let rowData = {}
      row.forEach((element, index) => {
        // console.log(element);

        rowData[headers[index]] = element
      })
      rows.push(rowData)

    });
    return rows
  }
  const downloadExcel = () => {
    const newData = data.map(row => {
      delete row.tableData
      return row
    })
    const workSheet = XLSX.utils.json_to_sheet(newData)
    const workBook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workBook, workSheet, "SalesCommissionDetails")
    //Buffer
    XLSX.write(workBook, { bookType: "xlsx", type: "buffer" })
    //Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" })
    //Download
    XLSX.writeFile(workBook, "SalesCommissionDetails.xlsx")


  }
  const downloadPdf = () => {
    const doc = new jsPDF()
    doc.text("SalesCommissionDetails", 20, 10)
    doc.autoTable({
      theme: "grid",
      columns: colDefs.map(col => ({ ...col, dataKey: col.field })),
      body: data
    })
    doc.save('SalesCommissionDetails.pdf')
  }

  const importExcel = (e) => {
    const file = e.target.files[0]

    const reader = new FileReader()
    reader.onload = (event) => {
      //parse data

      const bstr = event.target.result
      const workBook = XLSX.read(bstr, { type: "binary" })

      //get first sheet
      const workSheetName = workBook.SheetNames[0]
      // console.log(workSheetName)
      const workSheet = workBook.Sheets[workSheetName]
      //convert to array
      // console.log(workSheet)
      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 })
      // console.log(fileData)
      const headers = fileData[0]
      const heads = headers.map(head => ({ title: head, field: head }))
      // console.log(heads)
      setColDefs(heads)

      fileData.splice(0, 1)


      setData(convertToJson(headers, fileData))
      // console.log(setData)


      // localStorage.setItem('columns1', JSON.stringify(columns));
      // localStorage.setItem('data1', JSON.stringify(convertToJson(columns, cdata)));

      localStorage.setItem('columns1', JSON.stringify(columns1));
      localStorage.setItem('data1', JSON.stringify(data1));


    }



    if (file) {
      if (getExention(file)) {
        reader.readAsBinaryString(file)
      }
      else {
        alert("Invalid file input, Select Excel, CSV file")
      }
    } else {
      setData([])
      setColDefs([])
    }

  }

  const handleClick = () => {
    debugger;
    console.log(data);
    // transformer over data
    //transformed data passed through local storage
  }

  return (

    <>
      <div  >


        <Box display="flex">
          <Box flexGrow={1}>
            <Dropdownlist />
          </Box>
          <Box>

          </Box>
        </Box>

        <Box display="flex">
          <Box flexGrow={1}>

          </Box>
          <Box>
            <Link to="/transaction/addsales">
              <Button variant="contained" color="primary">
                Add New Sales
              </Button>
            </Link>
          </Box>
        </Box>

        <input type="file" onChange={importExcel} />

        <MaterialTable
          title="Customer Sales Details"

          columns={colDefs}
          data={data}
          actions={[
            // {
            //   icon: () => <button >Export</button>,// you can pass icon too
            //   tooltip: "Export to Excel",
            //   onClick: () => downloadExcel(),
            //   isFreeAction: true
            // },
            {
              icon: () => <PrintIcon />,// you can pass icon too
              tooltip: "Export to Pdf",
              onClick: () => downloadPdf(),
              isFreeAction: true
            }
          ]}

          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setData([...data, newData]);

                  resolve();
                }, 1000)
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);

                  resolve();
                }, 1000)
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);

                  resolve()
                }, 1000)
              }),
          }}
          options={{
            sorting: true, search: true,
            searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
            filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
            paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
            exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: true,
            showSelectAllCheckbox: false,
            rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
            headerStyle: { background: "#f44336", color: "#fff" }
          }}

        />

        {/* 
        <MaterialTable title="Sales Details" data={data} columns={colDefs}
          actions={[
            {
              icon: () => <button >Export</button>,// you can pass icon too
              tooltip: "Export to Excel",
              onClick: () => downloadExcel(),
              isFreeAction: true
            },
            {
              icon: () => <PrintIcon />,// you can pass icon too
              tooltip: "Export to Pdf",
              onClick: () => downloadPdf(),
              isFreeAction: true
            }
          ]}

        /> */}
        <Typography component="h2" variant="h6" color="primary" gutterBottom>

        </Typography>

        <Box display="flex">
          <Box flexGrow={1}>

          </Box>
          <Box>
            {/* <Link to={{ pathname: '/route', state: { foo: 'bar'} }}>My route</Link> */}
            <Link to="/transaction/calculate">
              <Button variant="contained" color="primary" onClick={() => handleClick()}>
                Calculate Sales Commission
              </Button>
            </Link>

          </Box>
        </Box>
      </div>

    </>


  )

}


