using BarcoSales.Repository;
using BarcoSales.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BarcoSales.DAO
{
 public   class CommissionRulesDAO: ICommissionRules
    {

        BarcoSalesCommissionContext dbContext;
        public CommissionRulesDAO(BarcoSalesCommissionContext _db)
        {
            dbContext = _db;
        }
        public IEnumerable<CommissionRules> IGetCommissionRules()
        {
            var custlist = dbContext.CommissionRules.ToList();
            return custlist;
        }
        public CommissionRules IAddCommissionRules(CommissionRules commissionRules)
        {
            if (commissionRules != null)
            {
                dbContext.CommissionRules.Add(commissionRules);
                dbContext.SaveChanges();
                return commissionRules;
            }
            return null;
        }
        public CommissionRules IGetCommissionRulesById(int id)
        {
            var commissionRules = dbContext.CommissionRules.FirstOrDefault(x => x.CommissionRulesId == id);
            return commissionRules;
        }
        public CommissionRules IUpdateCommissionRules(CommissionRules commissionRules)
        {
            dbContext.Entry(commissionRules).State = EntityState.Modified;
            dbContext.SaveChanges();
            return commissionRules;
        }
        public CommissionRules IDeleteCommissionRules(int id)
        {
            var commissionRules = dbContext.CommissionRules.FirstOrDefault(x => x.CustId == id);
            dbContext.Entry(commissionRules).State = EntityState.Deleted;
            dbContext.SaveChanges();
            return commissionRules;
        }

    }
}