import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React, { useState,  useEffect, forwardRef,useRef  } from "react";
import Checkbox from '@mui/material/Checkbox';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
 
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function SalesmanCreate() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const checkChanged = (state) => {
    setChecked(!checked);
  };

  const columns = [
    { title: "Salesman Id", field: "salesmanId" },
    { title: "Salesman Code", field: "salesmanCode" },
    { title: "Salesman Name", field: "salesmanName" },
    { title: "Designation", field: "designation" },
    { title: "EmailId", field: "emailId" },
    { title: "JoiningDate", field: "joiningDate" },
    { title: "Address", field: "address" },
    { title: "City", field: "city" },
    { title: "State", field: "state" },
    { title: "Zip", field: "zip" },
    { title: "Mobile", field: "mobile" },
    { title: "PrincCode", field: "princCode" },
    { title: "IsActive", field: "isActive" },
  ];
   
 const [data, setData] = useState()
 const [salesmanCode, setSalesmanCode] = useState();
 const [salesmanName, setSalesmanName] = useState();
 const [designation, setDesignation] = useState();
 const [emailId, setEmailId] = useState();
 const [joiningDate, setJoiningDate] = useState()
 const [address, setAddress] = useState();
 const [city, setCity] = useState();
 const [state, setState] = useState();
 const [zip, setZip] = useState();
 const [mobile, setMobile] = useState();
 const [princCode, setPrincCode] = useState();
 //const [isActive, setIsActive] = useState();
 
 
 const handleSubmit = event => {
  event.preventDefault();
  const rows = [];
  var salesmaninfo = { 
    'SalesId': 1, 
    'salesmanCode': salesmanCode, 
    'salesmanName': salesmanName, 
    'designation': designation,
    'emailId': emailId, 
    'joiningDate': joiningDate,
    'address': address, 
    'city': city, 
    'state': state, 
    'zip': zip,
    'mobile': mobile, 
    'princCode': princCode,
    'isActive': checked
    
  }
  debugger;
  console.log(salesmaninfo);
  rows.push(salesmaninfo);
  

if(data)
{
  debugger

  setData(data.concat(rows))
}
else{
  setData(rows);
}

  debugger;
  console.log(data);
  
  // fetch('http://localhost:57636/api/Customer/AddCustomer',
  // {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/form-data',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       alert(result['message'])
  //       if (result['status'] === 'ok') {
  //         window.location.href = '/';
  //       }
  //     }
  //   )
}
  const [users, setUsers] = useState([]);
  useEffect(() => {
    UsersGet()
  }, [])

  const UsersGet = () => {
    fetch("https://www.mecallapi.com/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          setUsers(result)
        }
      )
  }

  const UpdateUser = id => {
    window.location = '/update/' + id
  }

  const UserDelete = id => {
    var data = {
      'id': id
    }
    fetch('https://www.mecallapi.com/api/users/delete', {
      method: 'DELETE',
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
            UsersGet();
          }
        }
      )
  }

  return (
  
 
    <>
      <div>
        {/* <h3> Add Salesman</h3> */}

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
             <Link to="/salesman">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                // onClick={() => handleClick()}
                >
                  Create Salesman
                </Button>
              </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="salesmanName"
                name="salesmanName"
                variant="outlined"
                fullWidth
                id="salesmanName"
                label="Salesman Name"
                onChange={(e) => setSalesmanName(e.target.value)}
                autoFocus
              />
            </Grid>
       
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="salesmanCode"
                name="salesmanCode"
                variant="outlined"
                fullWidth
                id="salesmanCode"
                label="Salesman Code"
                onChange={(e) => setSalesmanCode(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="designation"
                name="designation"
                variant="outlined"
                fullWidth
                id="designation"
                label="Designation Name"
                onChange={(e) => setDesignation(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="joiningDate"
                name="joiningDate"
                variant="outlined"
                fullWidth
                id="joiningDate"
                label="Date of Joining "
                onChange={(e) => setJoiningDate(e.target.value)}
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
                label="Email Id"
                onChange={(e) => setEmailId(e.target.value)}
                autoFocus
              />
            </Grid>
         
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="mobile"
                name="mobile"
                variant="outlined"
                fullWidth
                id="mobile"
                label="Mobile"
                onChange={(e) => setMobile(e.target.value)}
                autoFocus
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
            <label>IsActive</label>
            <Checkbox    checked={checked} onChange={checkChanged} color='primary' size='medium' />
          
            </Grid>
          


          {/* <Grid item xs={12} sm={12}>

          <Button
            type="Create"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          </Grid> */}
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
             <Link to="/salesman">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                // onClick={() => handleClick()}
                >
                  Create Salesman
                </Button>
              </Link>
          </Grid>
          </Grid>
        </form>
         
      </div>
    </>
  );
}
