using System;
using System.Collections.Generic;

namespace BarcoSales.EFModel
{
    public partial class Factory
    {
        public Factory()
        {
            Commissionrules = new HashSet<Commissionrules>();
            Salestrasaction = new HashSet<Salestrasaction>();
        }

        public long FactoryId { get; set; }
        public long FactoryCategoryId { get; set; }
        public string FactoryName { get; set; }
        public string Princcode { get; set; }
        public decimal CommissionRate { get; set; }
        public DateTime CreatedDate { get; set; }
        public long CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public long UpdatedBy { get; set; }
        public bool IsActive { get; set; }

        public virtual Factorycategory FactoryCategory { get; set; }
        public virtual ICollection<Commissionrules> Commissionrules { get; set; }
        public virtual ICollection<Salestrasaction> Salestrasaction { get; set; }
    }
}
