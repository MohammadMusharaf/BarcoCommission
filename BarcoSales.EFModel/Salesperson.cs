using System;
using System.Collections.Generic;

namespace BarcoSales.EFModel
{
    public partial class Salesperson
    {
        public Salesperson()
        {
            Customersalesperson = new HashSet<Customersalesperson>();
            Salestrasaction = new HashSet<Salestrasaction>();
        }

        public long SalesId { get; set; }
        public string SalesPersonName { get; set; }
        public string SalesPersonDesignation { get; set; }
        public string SalesPersonEmailId { get; set; }
        public DateTime? JoiningDate { get; set; }
        public string SalesPersonAddress { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string MobileNo { get; set; }
        public string PhoneNo { get; set; }
        public string FaxNo { get; set; }
        public string Territory { get; set; }
        public string PrincCode { get; set; }
        public DateTime CreatedDate { get; set; }
        public long CreatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public long UpdatedBy { get; set; }
        public bool IsActive { get; set; }

        public virtual ICollection<Customersalesperson> Customersalesperson { get; set; }
        public virtual ICollection<Salestrasaction> Salestrasaction { get; set; }
    }
}
