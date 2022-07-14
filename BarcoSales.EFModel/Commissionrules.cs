﻿using System;
using System.Collections.Generic;

namespace BarcoSales.EFModel
{
    public partial class Commissionrules
    {
        public long CommissionRulesId { get; set; }
        public long CustId { get; set; }
        public long SalesId { get; set; }
        public long FactoryId { get; set; }
        public decimal CommisionRate { get; set; }
        public DateTime CreatedDate { get; set; }
        public long CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public long UpdatedBy { get; set; }
        public bool IsActive { get; set; }
        public int FinYear { get; set; }
    }
}
