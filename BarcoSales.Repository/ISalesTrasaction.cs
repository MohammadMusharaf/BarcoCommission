using BarcoSales.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace BarcoSales.Repository
{
   public interface ISalesTrasaction
    {

        IEnumerable<SalesTrasaction> IGetSalesTrasaction();
        SalesTrasaction IGetSalesTrasactionById(int id);
        SalesTrasaction IAddSalesTrasaction(SalesTrasaction salesTrasaction);
        SalesTrasaction IUpdateSalesTrasaction(SalesTrasaction salesTrasaction);
        SalesTrasaction IDeleteSalesTrasaction(int id);

    }
}
