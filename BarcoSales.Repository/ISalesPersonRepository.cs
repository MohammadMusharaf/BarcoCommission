using BarcoSales.Model;
using System;
using System.Collections.Generic;
using System.Text;



namespace BarcoSales.Repository
{
    public interface ISalesPersonRepository
    {

        IEnumerable<SalesPerson> IGetSalesPerson();
        SalesPerson IGetSalesPersonById(int id);
        SalesPerson IAddSalesPerson(SalesPerson salesPerson);
        SalesPerson IUpdateSalesPerson(SalesPerson salesPerson);
        SalesPerson IDeleteSalesPerson(int id);
    }
}
