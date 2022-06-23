using System;
using System.Collections.Generic;

namespace BarcoSales.EFModel
{
    public partial class Customer
    {
        public Customer()
        {
            Commissionrules = new HashSet<Commissionrules>();
            Customersalesperson = new HashSet<Customersalesperson>();
            Salestrasaction = new HashSet<Salestrasaction>();
        }

        public long CustId { get; set; }
        public string CustName { get; set; }
        public string CustCompanyName { get; set; }
        public string CustCompanyCode { get; set; }
        public string CustEmailId { get; set; }
        public string CustAddress { get; set; }
        public string CustCity { get; set; }
        public string CustState { get; set; }
        public string CustZip { get; set; }
        public string CustContactPerson { get; set; }
        public string CustMobileNo { get; set; }
        public string CustPhoneNo { get; set; }
        public string CustFaxNo { get; set; }
        public string CustTerritory { get; set; }
        public string CustPrincCode { get; set; }
        public DateTime? CreatedDate { get; set; }
        public long? CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public long? UpdatedBy { get; set; }
        public bool? IsActive { get; set; }

        public virtual ICollection<Commissionrules> Commissionrules { get; set; }
        public virtual ICollection<Customersalesperson> Customersalesperson { get; set; }
        public virtual ICollection<Salestrasaction> Salestrasaction { get; set; }
    }
}
