using System;
using System.Collections.Generic;

namespace BarcoSales.EFModel
{
    public partial class Customersalesperson
    {
        public long CustomerSalesPersonId { get; set; }
        public long CustId { get; set; }
        public long SalesId { get; set; }
        public decimal Commision { get; set; }
        public DateTime CreatedDate { get; set; }
        public long CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public long UpdatedBy { get; set; }
        public bool IsActive { get; set; }

        public virtual Customer Cust { get; set; }
        public virtual Salesperson Sales { get; set; }
    }
}
