using BarcoSales.EFModel;
using System;
using System.Collections.Generic;
using System.Text;



namespace BarcoSales.Repository
{
    public interface ISalesPersonRepository
    {

        IEnumerable<Salesperson> IGetSalesPerson();
        Salesperson IGetSalesPersonById(int id);
        Salesperson IAddSalesPerson(Salesperson salesPerson);
        Salesperson IUpdateSalesPerson(Salesperson salesPerson);
        Salesperson IDeleteSalesPerson(int id);
    }
}
