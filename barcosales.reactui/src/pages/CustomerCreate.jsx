import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Checkbox from '@mui/material/Checkbox';
import FactoriesDropdownlist from "./FactoriesDropdownlist";
import SalesmanDropdownlist from "./SalesmanDropdownlist";
import { Link } from "react-router-dom";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CustomerCreate() {
  const classes = useStyles();
  const [data, setData] = useState()
  const [checked, setChecked] = useState(false);
  const checkChanged = (state) => {
    setChecked(!checked);
  };
 

 const [customerId, setCustomerId] = useState();
 const [custId, setCustId] = useState();
 const [customer, setCustomer] = useState();
 const [branch, setBranch] = useState();
 const [address, setAddress] = useState();
 const [city, setCity] = useState();
 const [state, setState] = useState();
 const [zip, setZip] = useState(); 

 const [contact, setContact] = useState(); 
 const [phone, setPhone] = useState();
 const [fax, setFax] = useState(); 
 const [emailId, setEmailId] = useState();
 const [mobile, setMobile] = useState();
 const [territory, setTerritory] = useState();
 const [salesId, setSalesId] = useState();
 const [princCode, setPrincCode] = useState(); 
 const [createdDate, setCreatedDate] = useState();
 const [isActive, setIsActive] = useState();

 const [selectedFactoryValue, setSelectedFactoryValue] = useState('');
 const [selectedSalesmanValue, setSelectedSalesmanValue] = useState('');
 const FactoryOnchange = ((value) => {
  setSelectedFactoryValue(value)
  debugger;
  console.log(selectedFactoryValue);
})

const SalesmanOnchange = ((value) => {
  setSelectedSalesmanValue(value)
  debugger;
  console.log(selectedSalesmanValue);
})


  const handleSubmit = event => {
    event.preventDefault();
    
    var CustInfo = { 
      'custId': custId, 
      'customer': customer, 
      'branch': branch,
      'address': address, 
      'city': city, 
      'state': state, 
      'zip': zip,

      'contact': contact, 
      'phone': phone, 
      'fax': fax,
      'emailId': emailId, 
      'mobile': mobile,
      'territory': territory, 
      'salesId': selectedSalesmanValue, 

      'princCode': selectedFactoryValue, 
      'createdDate': createdDate,
      'isActive': checked
      
    }
    debugger;
    console.log(CustInfo);

    debugger;
    console.log(data);
    
    fetch('http://localhost:57636/api/Customer/AddCustomer',
   // fetch('https://www.mecallapi.com/api/users/create', 
    {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(
        (result) => {
          alert(result['message'])
          if (result['status'] === 'ok') {
            window.location.href = '/';
          }
        }
      )
  }

 
  return (
    <Container >
      <div >
        {/* <Typography component="h1" variant="h5">
          Create Customer
        </Typography> */}
      
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={1}>
          <Grid item xs={12} sm={12}> 
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create
          </Button> */}
           <Link to="/customers">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                // onClick={() => handleClick()}
                >
                  Create Customer
                </Button>
              </Link>
          </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="custId"
                name="custId"
                variant="outlined"
                required
                fullWidth
                id="custId"
                label="Cust ID"
                onChange={(e) => setCustId(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="createdDate"
                name="createdDate"
                variant="outlined"
                required
                fullWidth
                id="createdDate"
                label="creation Date"
                onChange={(e) => setCreatedDate(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="customer"
                name="customer"
                variant="outlined"
                required
                fullWidth
                id="customer"
                label="Customer Name"
                onChange={(e) => setCustomer(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="branch"
                label="Branch Name"
                onChange={(e) => setBranch(e.target.value)}
              />
            </Grid>
       
           
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="address"
                name="address"
                variant="outlined"
                fullWidth
                id="address"
                label="Address"
                onChange={(e) => setAddress(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="city"
                name="city"
                variant="outlined"
                fullWidth
                id="city"
                label="City"
                onChange={(e) => setCity(e.target.value)}
                autoFocus
              />
            </Grid>
       
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="zip"
                name="zip"
                variant="outlined"
                fullWidth
                id="zip"
                label="Zip"
                onChange={(e) => setZip(e.target.value)}
                autoFocus
              />
            </Grid>
        
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="contact"
                name="contact"
                variant="outlined"
                fullWidth
                id="contact"
                label="Contact"
                onChange={(e) => setContact(e.target.value)}
                autoFocus
              />
            </Grid>
        
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="phone"
                name="phone"
                variant="outlined"
                fullWidth
                id="phone"
                label="Phone"
                onChange={(e) => setPhone(e.target.value)}
                autoFocus
              />
            </Grid>
        
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fax"
                name="fax"
                variant="outlined"
                fullWidth
                id="fax"
                label="Fax"
                onChange={(e) => setFax(e.target.value)}
                autoFocus
              />
            </Grid>
        
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="emailId"
                name="emailId"
                variant="outlined"
                fullWidth
                id="emailId"
                label="EmailId"
                onChange={(e) => setEmailId(e.target.value)}
                autoFocus
              />
            </Grid>
        
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="territory"
                name="territory"
                variant="outlined"
                fullWidth
                id="territory"
                label="Territory"
                onChange={(e) => setTerritory(e.target.value)}
                autoFocus
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="salesId"
                name="salesId"
                variant="outlined"
                fullWidth
                id="salesId"
                label="SalesId"
                onChange={(e) => setSalesId(e.target.value)}
                autoFocus
              />
            </Grid> */}
            <Grid item xs={12} sm={6}>
              
              <SalesmanDropdownlist ddlOnchang={SalesmanOnchange} />
            </Grid>
        
            {/* <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="princCode"
                name="princCode"
                variant="outlined"
                fullWidth
                id="princCode"
                label="Princ Code"
                onChange={(e) => setPrincCode(e.target.value)}
                autoFocus
              />
            </Grid> */}
            <Grid item xs={12} sm={6}>
            <FactoriesDropdownlist ddlOnchang={FactoryOnchange} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <label>IsActive</label>
            <Checkbox    checked={checked} onChange={checkChanged} color='primary' size='medium' />
          
            </Grid>
        
            <Grid item xs={12} sm={12}> 
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create
          </Button> */}
             <Link to="/customers">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                // onClick={() => handleClick()}
                >
                  Create Customer
                </Button>
              </Link>
          </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
