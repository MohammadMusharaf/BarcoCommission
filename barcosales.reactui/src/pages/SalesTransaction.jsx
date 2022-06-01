import React, { useState, Component } from 'react';
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

import Dropdownlist from "C:\\Users\\MohammadMusharaf\\source\\repos\\BarcoCommission\\barcosales.reactui\\src\\pages\\Dropdownlist";
import { StyledEngineProvider } from '@mui/material/styles';




const EXTENSIONS = ['xlsx', 'xls', 'csv']
export default function Transaction() {

  const [colDefs, setColDefs] = useState()
  const [data, setData] = useState()

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

      //removing header
      fileData.splice(0, 1)


      setData(convertToJson(headers, fileData))
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

        <h4>Add Sales Commission </h4>

        {/* <StyledEngineProvider injectFirst> */}

        {/* </StyledEngineProvider> */}
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


        <MaterialTable title="Sales Details" data={data} columns={colDefs} />
        <Typography component="h2" variant="h6" color="primary" gutterBottom>

        </Typography>

        <Box display="flex">
          <Box flexGrow={1}>

          </Box>
          <Box>
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


