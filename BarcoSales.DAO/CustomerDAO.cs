using BarcoSales.Repository;
using BarcoSales.EFModel;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using MySql.Data.MySqlClient;
using System.Data;
using Newtonsoft.Json;
using BarcoSales.EFModel.ViewModel;

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
        public string IGetCustomerInfo()
        {
           
            // var custlist = dbContext.Customer.ToList();
            string conn = "server=localhost;port=3306;database=barcosalescommission;uid=root;password=root";
            MySqlConnection sql_conn = new MySqlConnection(conn);

  
            MySqlCommand cmd = new MySqlCommand();
            cmd.Connection = sql_conn;
            //  cmd.CommandText = "CALL storedprocname (@para1, @para2)";
            cmd.CommandText = "CALL sp_GetCustomersInfo()";

        


            sql_conn.Open();

            MySqlDataReader rdr = cmd.ExecuteReader(CommandBehavior.CloseConnection);
            DataTable dt = new DataTable();
            dt.Load(rdr);
            string customer;
            customer = JsonConvert.SerializeObject(dt);
            return customer;


        }
        public string IGetCustomerInfo(CustomerViewModel customerViewModel)
        {
            List<CustomerViewModel> custlist =new List<CustomerViewModel>();
            // var custlist = dbContext.Customer.ToList();
            string conn = "server=localhost;port=3306;database=barcosalescommission;uid=root;password=root";
            MySqlConnection sql_conn = new MySqlConnection(conn);

            Factorycategory factorycategory = new Factorycategory();
            //Here is where it differs...instead of calling it as a stored procedure type I just run it as a typical //mysql query would call it
            MySqlCommand cmd = new MySqlCommand();
            cmd.Connection = sql_conn;
            //  cmd.CommandText = "CALL storedprocname (@para1, @para2)";
            cmd.CommandText = "CALL sp_GetCustomersInfo()";

            //an out parameter
            //cmd.Parameters.AddWithValue(para1, MySqlDbType.Int32);
            //cmd.Parameters[para1].Direction = ParameterDirection.Output;

            //an in parameter 

            //cmd.Parameters.AddWithValue(para2, para_val);
            //cmd.Parameters[para2].Direction = ParameterDirection.Input;


            sql_conn.Open();

            MySqlDataReader rdr = cmd.ExecuteReader(CommandBehavior.CloseConnection);
            DataTable dt = new DataTable();
            dt.Load(rdr);
            string customer;
            customer = JsonConvert.SerializeObject(dt);
            return customer;


        }
        //public string DataTableToJSONWithJSONNet(DataTable table)
        //{
        //    string JSONString = string.Empty;
        //    JSONString = JSONConvert.SerializeObject(table);
        //    return JSONString;
        //}


    }
}
