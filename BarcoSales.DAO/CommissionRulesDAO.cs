using BarcoSales.Repository;
 
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BarcoSales.EFModel;

namespace BarcoSales.DAO
{
 public   class CommissionRulesDAO: ICommissionRules
    {

        barcosalescommissionContext dbContext;
        public CommissionRulesDAO(barcosalescommissionContext _db)
        {
            dbContext = _db;
        }
        public IEnumerable<Commissionrules> IGetCommissionRules()
        {
            var custlist = dbContext.Commissionrules.ToList();
            return custlist;
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