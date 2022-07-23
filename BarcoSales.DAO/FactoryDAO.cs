using BarcoSales.Repository;
using BarcoSales.EFModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MySql.Data.MySqlClient;
using System.Data;
using Newtonsoft.Json;

namespace BarcoSales.DAO
{
 public   class FactoryDAO: IFactory
    {
        barcosalescommissionContext dbContext;
        public FactoryDAO(barcosalescommissionContext _db)
        {

            dbContext = _db;
        } 
        public string IGetFactoryInfo()
        {
            
            string conn = "server=localhost;port=3306;database=barcosalescommission;uid=root;password=root";
            MySqlConnection sql_conn = new MySqlConnection(conn);
            MySqlCommand cmd = new MySqlCommand();
            cmd.Connection = sql_conn;
            // cmd.CommandText = "CALL storedprocname (@para1, @para2)";
            cmd.CommandText = "CALL SP_GetFactoryInfo()";
            sql_conn.Open();
            MySqlDataReader rdr = cmd.ExecuteReader(CommandBehavior.CloseConnection);
            DataTable dt = new DataTable();
            dt.Load(rdr);
   
           string Result = JsonConvert.SerializeObject(dt);
            return Result;

        }
        public IEnumerable<Factory> IGetFactory()
        {
            var factories = dbContext.Factory.ToList();
            return factories;

        }
        public Factory IAddFactory(Factory factory)
        {
            if (factory != null)
            {
                dbContext.Factory.Add(factory);
                dbContext.SaveChanges();
                return factory;
            }
            return null;
        }
        public Factory IGetFactoryById(int id)
        {
            var factory = dbContext.Factory.FirstOrDefault(x => x.FactoryId == id);
            return factory;
        }
        public Factory IUpdateFactory(Factory factory)
        {
            dbContext.Entry(factory).State = EntityState.Modified;
            dbContext.SaveChanges();
            return factory;
        }
        public Factory IDeleteFactory(int id)
        {
            var factory = dbContext.Factory.FirstOrDefault(x => x.FactoryId == id);
            dbContext.Entry(factory).State = EntityState.Deleted;
            dbContext.SaveChanges();
            return factory;
        }

       
    }
}
