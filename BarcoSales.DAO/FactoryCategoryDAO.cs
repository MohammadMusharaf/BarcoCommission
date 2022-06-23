using BarcoSales.Repository;
using BarcoSales.EFModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


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

       
    }
}
