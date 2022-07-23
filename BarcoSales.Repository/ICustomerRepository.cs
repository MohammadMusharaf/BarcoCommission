using BarcoSales.EFModel;
using BarcoSales.EFModel.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;
 


namespace BarcoSales.Repository
{
   public  interface ICustomerRepository
    {


        IEnumerable<Customer> IGetCustomer();
        Customer IGetCustomerById(int id);
        Customer IAddCustomer(Customer customer);
        Customer IUpdateCustomer(Customer customer);
        Customer IDeleteCustomer(int id);
  string IGetCustomerInfo(CustomerViewModel customerViewModel);
        string IGetCustomerInfo();
    }
}
