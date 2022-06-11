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


  const columns = [
    { title: "Customer", field: "customer" },
    // { title: "Invoice No", field: "invoiceNo" },
    { title: "Sale Amount", field: "saleAmount" },
    { title: "Gross CommRate", field: "commRate" },
    { title: "Gross Comm", field: "grossComm" },
    { title: "Salesman Comm", field: "salesmanComm" },
  ];



  const data = JSON.parse(localStorage.getItem('data1'))
  //const columns = JSON.parse(localStorage.getItem('columns1'))

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
          options={{
            sorting: true, search: true,
            searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
            filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
            paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
            exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: true,
            showSelectAllCheckbox: false, showTextRowsSelected: false,
            grouping: true, columnsButton: true,
            rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
            headerStyle: { background: "#f44336", color: "#fff" }
          }}
        />
      </div>

    </>


  )

}


