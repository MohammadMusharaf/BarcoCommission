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



  // localStorage.setItem('colum', JSON.stringify(colDefs));


  // localStorage.setItem('data', JSON.stringify(data));
  localStorage.setItem('data', data);
  localStorage.setItem('colDefs', colDefs);

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
    XLSX.utils.book_append_sheet(workBook, workSheet, "CustomerSales")
    //Buffer
    XLSX.write(workBook, { bookType: "xlsx", type: "buffer" })
    //Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" })
    //Download
    XLSX.writeFile(workBook, "CustomerSales.xlsx")


  }
  const downloadPdf = () => {
    const doc = new jsPDF()
    doc.text("Customer Sales", 20, 10)
    doc.autoTable({
      theme: "grid",
      columns: colDefs.map(col => ({ ...col, dataKey: col.field })),
      body: data
    })
    doc.save('table.pdf')
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
      const workSheet = workBook.Sheets[workSheetName]
      //convert to array
      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 })
      // console.log(fileData)
      const headers = fileData[0]
      const heads = headers.map(head => ({ title: head, field: head }))
      setColDefs(heads)

      fileData.splice(0, 1)


      setData(convertToJson(headers, fileData))


      localStorage.setItem('columns1', JSON.stringify(heads));
      localStorage.setItem('data1', JSON.stringify(convertToJson(headers, fileData)));



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
            exportButton: true
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
              <Button variant="contained" color="primary">
                Calculate Sales Commission
              </Button>
            </Link>

          </Box>
        </Box>
      </div>

    </>


  )

}


