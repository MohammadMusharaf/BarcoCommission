using BarcoSales.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace BarcoSales.Repository
{
  public  interface ICommissionRules
    {

        IEnumerable<CommissionRules> IGetCommissionRules();
        CommissionRules IGetCommissionRulesById(int id);
        CommissionRules IAddCommissionRules(CommissionRules commissionRules);
        CommissionRules IUpdateCommissionRules(CommissionRules commissionRules);
        CommissionRules IDeleteCommissionRules(int id);

    }
}
