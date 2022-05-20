// import React, { Component } from "react";
// export default class Salesman extends Component {
//   render() {
//     return <h2>You are in Salesman page</h2>;
//   }
// }


import React, {Component} from 'react';
import axios from 'axios';

export default class Salesman extends  Component{

    handleSubmit = e => {
        e.preventDefault();
        const data={
          SalesmanFName:this.firstName,
          SalesmanLName:this.lastName,
          SalesmanCompanyName:this.companyName,
          SalesmanEmail:this.email,
          SalesmanAddress:this.address,
          SalesmanCity:this.city,
          SalesmanState:this.state,
          SalesmanZip:this.zip

        };
        console.log(data);
        axios.post("salesman",data).then(
            res=>{
                console.log(res);
            }
        ).catch(
            err=>{
                console.log(err);

            }
        )
        
    };

    render(){

        return(
        

        
                <form onSubmit={this.handleSubmit}>
                    <h3>Add Salesman</h3>

                    <div className='form-group'>
                        <label>First Name</label>
                        <input type='text' className='form-control' placeholder='First Name'
                        onChange={e=>this.firstName=e.target.value} />
                    </div>

                    <div className='form-group'>
                        <label>Last Name</label>
                        <input type='text' className='form-control' placeholder='Last Name'
                        onChange={e=>this.lastName=e.target.value} />
                    </div>

                    
                    <div className='form-group'>
                        <label>Company Name</label>
                        <input type='text' className='form-control' placeholder='Company Name'
                        onChange={e=>this.companyName=e.target.value} />
                    </div>

                    <div className='form-group'>
                        <label>Address</label>
                        <input type='text' className='form-control' placeholder='Address'
                        onChange={e=>this.address=e.target.value} />
                    </div>

                    <div className='form-group'>
                        <label>City</label>
                        <input type='text' className='form-control' placeholder='City'
                        onChange={e=>this.city=e.target.value} />
                    </div>

                    <div className='form-group'>
                        <label>State</label>
                        <input type='text' className='form-control' placeholder='State'
                        onChange={e=>this.state=e.target.value} />
                    </div>
        
                    <div className='form-group'>
                        <label>Email</label>
                        <input type='Email' className='form-control' placeholder='Email'
                        onChange={e=>this.email=e.target.value} />
                    </div>

                    <div className='form-group'>
                        <label>Zip</label>
                        <input type='text' className='form-control' placeholder='Zip'
                        onChange={e=>this.zip=e.target.value} />
                    </div>

                 

                    <label> </label>
                    
                    <div className="d-grid gap-2">

                    <button className="btn btn-primary" type="submit" >Sign Up</button>
                    </div>

                </form>
        )


        
    }
}