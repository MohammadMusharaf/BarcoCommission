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
  public  class SalesTrasactionDAO: ISalesTrasaction
    {
        barcosalescommissionContext dbContext;
        public SalesTrasactionDAO(barcosalescommissionContext _db)
        {

            dbContext = _db;
        }
        //public IEnumerable<Salestrasaction> IGetSalesTrasaction()
        //{
        //    var salesTrasactions = dbContext.Salestrasaction.ToList();
        //    return salesTrasactions;


        //}
        public string IGetSalesTrasaction()
        {

            string conn = "server=localhost;port=3306;database=barcosalescommission;uid=root;password=root";
            MySqlConnection sql_conn = new MySqlConnection(conn);
            MySqlCommand cmd = new MySqlCommand();
            cmd.Connection = sql_conn;
            cmd.CommandText = "CALL sp_GetTransactionInfo()";
            sql_conn.Open();
            MySqlDataReader rdr = cmd.ExecuteReader(CommandBehavior.CloseConnection);
            DataTable dt = new DataTable();
            dt.Load(rdr);
            string customer;
            customer = JsonConvert.SerializeObject(dt);
            return customer;

        }
        public Salestrasaction IAddSalesTrasaction(Salestrasaction salesTrasaction)
        {
            if (salesTrasaction != null)
            {
                dbContext.Salestrasaction.Add(salesTrasaction);
                dbContext.SaveChanges();
                return salesTrasaction;
            }
            return null;
        }
        public Salestrasaction IGetSalesTrasactionById(int id)
        {
            var salesTrasaction = dbContext.Salestrasaction.FirstOrDefault(x => x.TrasactionId == id);
            return salesTrasaction;
        }
        public Salestrasaction IUpdateSalesTrasaction(Salestrasaction salesTrasaction)
        {
            dbContext.Entry(salesTrasaction).State = EntityState.Modified;
            dbContext.SaveChanges();
            return salesTrasaction;
        }
        public Salestrasaction IDeleteSalesTrasaction(int id)
        {
            var salesTrasaction = dbContext.Salestrasaction.FirstOrDefault(x => x.TrasactionId == id);
            dbContext.Entry(salesTrasaction).State = EntityState.Deleted;
            dbContext.SaveChanges();
            return salesTrasaction;
        }
    }
}
