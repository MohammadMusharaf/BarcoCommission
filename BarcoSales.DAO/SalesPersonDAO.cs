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
        public IEnumerable<Salesperson> IGetSalesPerson()
        {
            var salesPersons = dbContext.Salesperson.ToList();
            return salesPersons;

        }
        public Salesperson IAddSalesPerson(Salesperson salesPerson)
        {
            if (salesPerson != null)
            {
                dbContext.Salesperson.Add(salesPerson);
                dbContext.SaveChanges();
                return salesPerson;
            }
            return null;
        }
        public Salesperson IGetSalesPersonById(int id)
        {
            var salesPerson = dbContext.Salesperson.FirstOrDefault(x => x.SalesId == id);
            return salesPerson;
        }

        public Salesperson IUpdateSalesPerson(Salesperson salesPerson)
        {
            dbContext.Entry(salesPerson).State = EntityState.Modified;
            dbContext.SaveChanges();
            return salesPerson;
        }
        public Salesperson IDeleteSalesPerson(int id)
        {
            var salesPerson = dbContext.Salesperson.FirstOrDefault(x => x.SalesId == id);
            dbContext.Entry(salesPerson).State = EntityState.Deleted;
            dbContext.SaveChanges();
            return salesPerson;
        }
    }
}
