using BarcoSales.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace BarcoSales.Repository
{
   public interface IFactoryCategory
    {

        IEnumerable<FactoryCategory> IGetFactoryCategory();
        FactoryCategory IGetFactoryCategoryById(int id);
        FactoryCategory IAddFactoryCategory(FactoryCategory factoryCategory);
        FactoryCategory IUpdateFactoryCategory(FactoryCategory factoryCategory);
        FactoryCategory IDeleteFactoryCategory(int id);

    }
}
