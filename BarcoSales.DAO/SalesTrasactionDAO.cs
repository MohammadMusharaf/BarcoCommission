using BarcoSales.Repository;
using BarcoSales.EFModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BarcoSales.DAO
{
  public  class SalesTrasactionDAO: ISalesTrasaction
    {
        barcosalescommissionContext dbContext;
        public SalesTrasactionDAO(barcosalescommissionContext _db)
        {

            dbContext = _db;
        }
        public IEnumerable<Salestrasaction> IGetSalesTrasaction()
        {
            var salesTrasactions = dbContext.Salestrasaction.ToList();
            return salesTrasactions;


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
