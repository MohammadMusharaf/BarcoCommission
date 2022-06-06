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
import { StyledEngineProvider } from '@mui/material/styles';



import PrintIcon from '@material-ui/icons/Print'
import jsPDF from 'jspdf'
import 'jspdf-autotable'


const EXTENSIONS = ['xlsx', 'xls', 'csv']
export default function CalculateCommission(props) {

  // const [columns, setColDefs] = useState()
  // const [data, setData] = useState()

  // const data1 = [
  //   { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  //   { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
  // ];

  // const columns1 = [
  //   { title: "Name", field: "name" },
  //   { title: "Surname", field: "surname" },
  //   { title: "Birth Year", field: "birthYear", type: "numeric" },
  // ];

  // localStorage.setItem('data1', JSON.stringify(data1));
  // localStorage.setItem('columns1', JSON.stringify(columns1));

  const data = JSON.parse(localStorage.getItem('data1'))
  const columns = JSON.parse(localStorage.getItem('columns1'))

  //console.log(data)

  //console.log(columns)

  const downloadPdf = () => {
    const doc = new jsPDF()
    doc.text("Sales Commission Details", 20, 10)
    doc.autoTable({
      theme: "grid",
      columns: columns.map(col => ({ ...col, dataKey: col.field })),
      body: data
    })
    doc.save('SalesCommission.pdf')
  }

  return (
    <>
      <div  >
        <h4>Calculated Sales Commission </h4>
        <MaterialTable title="Commission Details"
          columns={columns}
          data={data}
          actions={[
            {
              icon: () => <PrintIcon />,// you can pass icon too
              tooltip: "Export to Pdf",
              onClick: () => downloadPdf(),
              isFreeAction: true
            }
          ]}
        />
      </div>

    </>


  )

}


