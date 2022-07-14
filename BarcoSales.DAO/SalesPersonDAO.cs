using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using BarcoSales.EFModel;
using BarcoSales.Repository;

using Npgsql;

using System.Linq;
using Microsoft.EntityFrameworkCore;
namespace BarcoSales.DAO
{
    public class SalesPersonDAO : ISalesPersonRepository
    {

        barcosalescommissionContext dbContext;
        public SalesPersonDAO(barcosalescommissionContext _db)
        {
            dbContext = _db;
        }
        public IEnumerable<Salesman> IGetSalesPerson()
        {
            var salesmans = dbContext.Salesman.ToList();
            return salesmans;

        }
        public Salesman IAddSalesPerson(Salesman salesman)
        {
            if (salesman != null)
            {
                dbContext.Salesman.Add(salesman);
                dbContext.SaveChanges();
                return salesman;
            }
            return null;
        }
        public Salesman IGetSalesPersonById(int id)
        {
            var salesman = dbContext.Salesman.FirstOrDefault(x => x.SalesmanId == id);
            return salesman;
        }

        public Salesman IUpdateSalesPerson(Salesman salesman)
        {
            dbContext.Entry(salesman).State = EntityState.Modified;
            dbContext.SaveChanges();
            return salesman;
        }
        public Salesman IDeleteSalesPerson(int id)
        {
            var salesman = dbContext.Salesman.FirstOrDefault(x => x.SalesmanId == id);
            dbContext.Entry(salesman).State = EntityState.Deleted;
            dbContext.SaveChanges();
            return salesman;
        }
    }
}
