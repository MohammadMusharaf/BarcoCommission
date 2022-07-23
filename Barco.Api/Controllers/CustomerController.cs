﻿using BarcoSales.Repository;
using BarcoSales.EFModel;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BarcoSales.EFModel.ViewModel;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Barco.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerRepository customerService;

        public CustomerController(ICustomerRepository icustomer)
        {
            customerService = icustomer;

        }
        [HttpGet]
        [Route("[action]")]
        [Route("api/Customer/GetCustomer")]
        public string GetCustomer()
        {
            return customerService.IGetCustomerInfo();
           // return customerService.IGetCustomer();
        }
        [HttpPost]
        [Route("[action]")]
        [Route("api/Customer/AddCustomer")]
        public Customer AddCustomer(Customer customer)
        {
           
            return customerService.IAddCustomer(customer);
        }
 
        [HttpPut]
        [Route("[action]")]
        [Route("api/Customer/EditCustomer")]
        public Customer EditCustomer(Customer customer)
        {
            return customerService.IUpdateCustomer(customer);
        }
        [HttpDelete]
        [Route("[action]")]
        [Route("api/Customer/DeleteCustomer")]
        public Customer DeleteCustomer(int id)
        {
            return customerService.IDeleteCustomer(id);
        }
        [HttpGet]
        [Route("[action]")]
        [Route("api/Customer/GetCustomerId")]
        public Customer GetCustomerId(int id)
        {
            return customerService.IGetCustomerById(id);
        }
        [HttpPost]
        [Route("[action]")]
        [Route("api/Customer/GetCustomerInfo")]
        public string GetCustomerInfo(CustomerViewModel customerViewModel)
        {

            return customerService.IGetCustomerInfo(customerViewModel);
        }
    }
}
