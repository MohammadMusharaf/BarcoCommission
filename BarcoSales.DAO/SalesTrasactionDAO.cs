using BarcoSales.Repository;
using BarcoSales.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BarcoSales.DAO
{
  public  class SalesTrasactionDAO: ISalesTrasaction
    {
        BarcoSalesCommissionContext dbContext;
        public SalesTrasactionDAO(BarcoSalesCommissionContext _db)
        {

            dbContext = _db;
        }
        public IEnumerable<SalesTrasaction> IGetSalesTrasaction()
        {
            var salesTrasactions = dbContext.SalesTrasaction.ToList();
            return salesTrasactions;


        }
        public SalesTrasaction IAddSalesTrasaction(SalesTrasaction salesTrasaction)
        {
            if (salesTrasaction != null)
            {
                dbContext.SalesTrasaction.Add(salesTrasaction);
                dbContext.SaveChanges();
                return salesTrasaction;
            }
            return null;
        }
        public SalesTrasaction IGetSalesTrasactionById(int id)
        {
            var salesTrasaction = dbContext.SalesTrasaction.FirstOrDefault(x => x.TrasactionId == id);
            return salesTrasaction;
        }
        public SalesTrasaction IUpdateSalesTrasaction(SalesTrasaction salesTrasaction)
        {
            dbContext.Entry(salesTrasaction).State = EntityState.Modified;
            dbContext.SaveChanges();
            return salesTrasaction;
        }
        public SalesTrasaction IDeleteSalesTrasaction(int id)
        {
            var salesTrasaction = dbContext.SalesTrasaction.FirstOrDefault(x => x.TrasactionId == id);
            dbContext.Entry(salesTrasaction).State = EntityState.Deleted;
            dbContext.SaveChanges();
            return salesTrasaction;
        }
    }
}
