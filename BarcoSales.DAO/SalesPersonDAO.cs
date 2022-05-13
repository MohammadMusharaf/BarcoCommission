using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using BarcoSales.Model;
using BarcoSale.Repository;

using Npgsql;

using System.Linq;
using Microsoft.EntityFrameworkCore;
namespace BarcoSales.DAO
{
    public class SalesPersonDAO : ISalesPersonRepository
    {

        BarcoSalesCommissionContext dbContext;
        public SalesPersonDAO(BarcoSalesCommissionContext _db)
        {
            dbContext = _db;
        }
        public IEnumerable<SalesPerson> IGetSalesPerson()
        {
            var salesPersons = dbContext.SalesPerson.ToList();
            return salesPersons;

        }
        public SalesPerson IAddSalesPerson(SalesPerson salesPerson)
        {
            if (salesPerson != null)
            {
                dbContext.SalesPerson.Add(salesPerson);
                dbContext.SaveChanges();
                return salesPerson;
            }
            return null;
        }
        public SalesPerson IGetSalesPersonById(int id)
        {
            var salesPerson = dbContext.SalesPerson.FirstOrDefault(x => x.SalesId == id);
            return salesPerson;
        }

        public SalesPerson IUpdateSalesPerson(SalesPerson salesPerson)
        {
            dbContext.Entry(salesPerson).State = EntityState.Modified;
            dbContext.SaveChanges();
            return salesPerson;
        }
        public SalesPerson IDeleteSalesPerson(int id)
        {
            var salesPerson = dbContext.SalesPerson.FirstOrDefault(x => x.SalesId == id);
            dbContext.Entry(salesPerson).State = EntityState.Deleted;
            dbContext.SaveChanges();
            return salesPerson;
        }
    }
}
