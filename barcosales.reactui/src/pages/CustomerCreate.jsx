import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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

  const handleSubmit = event => {
    event.preventDefault();
    var data = {
      'custName': custName,
      'custCompanyName': custCompanyName,
      'custCompanyCode': custCompanyCode,
      'custEmailId': custEmailId
     // 'avatar': avatar,
    }

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

  const [custName, setCustName] = useState('');
  const [custCompanyName, setCustCompanyName] = useState('');
  const [custCompanyCode, setCustCompanyCode] = useState('');
  const [custEmailId, setCustEmailId] = useState('');
 // const [avatar, setAvatar] = useState('');
  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create Customer
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="custName"
                name="custName"
                variant="outlined"
                required
                fullWidth
                id="custName"
                label="Customer Name"
                onChange={(e) => setCustName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="custCompanyName"
                label="Company Name"
                onChange={(e) => setCustCompanyName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="custCompanyCode"
                label="Company Code"
                onChange={(e) => setCustCompanyCode(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="custEmailId"
                label="Email"
                onChange={(e) => setCustEmailId(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="avatar"
                label="Avatar"
                onChange={(e) => setAvatar(e.target.value)}
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create
          </Button>
        </form>
      </div>
    </Container>
  );
}
