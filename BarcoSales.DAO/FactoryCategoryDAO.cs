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
   public class FactoryCategoryDAO: IFactoryCategory
    {
        barcosalescommissionContext dbContext;
        public FactoryCategoryDAO(barcosalescommissionContext _db)
        {

            dbContext = _db;
        }
        public IEnumerable<Factorycategory> IGetFactoryCategory()
        {
            var custlist = dbContext.Factorycategory.ToList();
            return custlist;

        }
        public Factorycategory IAddFactoryCategory(Factorycategory factoryCategory)
        {
            if (factoryCategory != null)
            {
                dbContext.Factorycategory.Add(factoryCategory);
                dbContext.SaveChanges();
                return factoryCategory;
            }
            return null;
        }
        public Factorycategory IGetFactoryCategoryById(int id)
        {
            var factoryCategory = dbContext.Factorycategory.FirstOrDefault(x => x.FactoryCategoryId == id);
            return factoryCategory;
        }
        public Factorycategory IUpdateFactoryCategory(Factorycategory factoryCategory)
        {
            dbContext.Entry(factoryCategory).State = EntityState.Modified;
            dbContext.SaveChanges();
            return factoryCategory;
        }
        public Factorycategory IDeleteFactoryCategory(int id)
        {
            var factoryCategory = dbContext.Factorycategory.FirstOrDefault(x => x.FactoryCategoryId == id);
            dbContext.Entry(factoryCategory).State = EntityState.Deleted;
            dbContext.SaveChanges();
            return factoryCategory;
        }

   public Factorycategory IGetFactoryCategoryforDll()
        {
            string conn = "server=localhost;port=3306;database=barcosalescommission;uid=root;password=root";
            MySqlConnection sql_conn = new MySqlConnection(conn);

            Factorycategory factorycategory = new Factorycategory();
            //Here is where it differs...instead of calling it as a stored procedure type I just run it as a typical //mysql query would call it
            MySqlCommand cmd = new MySqlCommand();
            cmd.Connection = sql_conn;
            //  cmd.CommandText = "CALL storedprocname (@para1, @para2)";
            cmd.CommandText = "CALL GetAllfactorycategory()";

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
            string JSONresult;
            JSONresult = JsonConvert.SerializeObject(dt);
            //var factoryCategory = dbContext.Factorycategory.FirstOrDefault(x => x.FactoryCategoryId == id);
            //dbContext.Entry(factoryCategory).State = EntityState.Deleted;
            //dbContext.SaveChanges();
            return factorycategory;
        }
       
    }
}
