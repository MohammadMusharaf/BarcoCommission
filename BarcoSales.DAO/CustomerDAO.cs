using BarcoSales.Repository;
using BarcoSales.EFModel;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace BarcoSales.DAO
{
    public class CustomerDAO : ICustomerRepository
    {
        barcosalescommissionContext dbContext;
        public CustomerDAO(barcosalescommissionContext _db)
        {

            dbContext = _db;
        }
        public IEnumerable<Customer> IGetCustomer()
        {
            var custlist = dbContext.Customer.ToList();
            return custlist;


        }
        public Customer IAddCustomer(Customer customerInfo)
        {
            if (customerInfo != null)
            {
                dbContext.Customer.Add(customerInfo);
                dbContext.SaveChanges();
                return customerInfo;
            }
            return null;
        }
        public Customer IGetCustomerById(int id)
        {
            var customerInfo = dbContext.Customer.FirstOrDefault(x => x.Cid == id);
            return customerInfo;
        }
        public Customer IUpdateCustomer(Customer customerInfo)
        {
            dbContext.Entry(customerInfo).State = EntityState.Modified;
            dbContext.SaveChanges();
            return customerInfo;
        }
        public Customer IDeleteCustomer(int id)
        {
            var customer = dbContext.Customer.FirstOrDefault(x => x.Cid == id);
            dbContext.Entry(customer).State = EntityState.Deleted;
            dbContext.SaveChanges();
            return customer;
        }

    }
}
