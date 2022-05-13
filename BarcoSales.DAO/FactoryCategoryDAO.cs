using BarcoSales.Repository;
using BarcoSales.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace BarcoSales.DAO
{
   public class FactoryCategoryDAO: IFactoryCategory
    {
        BarcoSalesCommissionContext dbContext;
        public FactoryCategoryDAO(BarcoSalesCommissionContext _db)
        {

            dbContext = _db;
        }
        public IEnumerable<FactoryCategory> IGetFactoryCategory()
        {
            var custlist = dbContext.FactoryCategory.ToList();
            return custlist;

        }
        public FactoryCategory IAddFactoryCategory(FactoryCategory factoryCategory)
        {
            if (factoryCategory != null)
            {
                dbContext.FactoryCategory.Add(factoryCategory);
                dbContext.SaveChanges();
                return factoryCategory;
            }
            return null;
        }
        public FactoryCategory IGetFactoryCategoryById(int id)
        {
            var factoryCategory = dbContext.FactoryCategory.FirstOrDefault(x => x.FactoryCategoryId == id);
            return factoryCategory;
        }
        public FactoryCategory IUpdateFactoryCategory(FactoryCategory factoryCategory)
        {
            dbContext.Entry(factoryCategory).State = EntityState.Modified;
            dbContext.SaveChanges();
            return factoryCategory;
        }
        public FactoryCategory IDeleteFactoryCategory(int id)
        {
            var factoryCategory = dbContext.FactoryCategory.FirstOrDefault(x => x.FactoryCategoryId == id);
            dbContext.Entry(factoryCategory).State = EntityState.Deleted;
            dbContext.SaveChanges();
            return factoryCategory;
        }

       
    }
}
