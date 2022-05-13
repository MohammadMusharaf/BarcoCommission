using BarcoSales.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace BarcoSale.Repository
{
    public interface IFactory
    {

        IEnumerable<Factory> IGetFactory();
        Factory IGetFactoryById(int id);
        Factory IAddFactory(Factory factory);
        Factory IUpdateFactory(Factory factory);
        Factory IDeleteFactory(int id);

    }
}
