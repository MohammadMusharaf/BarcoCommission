using BarcoSales.Repository;
 
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BarcoSales.EFModel;
using MySql.Data.MySqlClient;
using System.Data;
using Newtonsoft.Json;

namespace BarcoSales.DAO
{
 public   class CommissionRulesDAO: ICommissionRules
    {

        barcosalescommissionContext dbContext;
        public CommissionRulesDAO(barcosalescommissionContext _db)
        {
            dbContext = _db;
        }
        //public IEnumerable<Commissionrules> IGetCommissionRules()
        //{
        //    var custlist = dbContext.Commissionrules.ToList();
        //    return custlist;
        //}
        public string IGetCommissionRules()
        {
            string conn = "server=localhost;port=3306;database=barcosalescommission;uid=root;password=root";
            MySqlConnection sql_conn = new MySqlConnection(conn);
            MySqlCommand cmd = new MySqlCommand();
            cmd.Connection = sql_conn;
            // cmd.CommandText = "CALL storedprocname (@para1, @para2)";
            cmd.CommandText = "CALL sp_GetCommRules()";
            sql_conn.Open();
            MySqlDataReader rdr = cmd.ExecuteReader(CommandBehavior.CloseConnection);
            DataTable dt = new DataTable();
            dt.Load(rdr);
           
           string rules = JsonConvert.SerializeObject(dt);
            return rules;
        }
        public Commissionrules IAddCommissionRules(Commissionrules commissionRules)
        {
            if (commissionRules != null)
            {
                dbContext.Commissionrules.Add(commissionRules);
                dbContext.SaveChanges();
                return commissionRules;
            }
            return null;
        }
        public Commissionrules IGetCommissionRulesById(int id)
        {
            var commissionRules = dbContext.Commissionrules.FirstOrDefault(x => x.CommissionRulesId == id);
    
            return commissionRules;
        }
        public Commissionrules IUpdateCommissionRules(Commissionrules commissionRules)
        {
            dbContext.Entry(commissionRules).State = EntityState.Modified;
            dbContext.SaveChanges();
            return commissionRules;
        }
        public Commissionrules IDeleteCommissionRules(int id)
        {
            var commissionRules = dbContext.Commissionrules.FirstOrDefault(x => x.CustId == id);
            dbContext.Entry(commissionRules).State = EntityState.Deleted;
            dbContext.SaveChanges();
            return commissionRules;
        }

    }
}