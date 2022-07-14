using BarcoSales.Repository;
using BarcoSales.EFModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Barco.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class SalesPersonController : ControllerBase
    {
        private readonly ISalesPersonRepository salesPersonService;
        public SalesPersonController(ISalesPersonRepository IsalesPerson)
        {
            salesPersonService = IsalesPerson;
        }
        [HttpGet]
        [Route("[action]")]
        [Route("api/SalesPerson/GetSalesPerson")]
        public IEnumerable<Salesman> GetSalesPerson()
        {
            return salesPersonService.IGetSalesPerson();
        }
        [HttpPost]
        [Route("[action]")]
        [Route("api/SalesPerson/AddSalesPerson")]
        public Salesman AddSalesPerson(Salesman salesPerson)
        {
            return salesPersonService.IAddSalesPerson(salesPerson);
        }
        [HttpPut]
        [Route("[action]")]
        [Route("api/SalesPerson/EditSalesPerson")]
        public Salesman EditSalesPerson(Salesman salesPerson)
        {
            return salesPersonService.IUpdateSalesPerson(salesPerson);
        }
        [HttpDelete]
        [Route("[action]")]
        [Route("api/SalesPerson/DeleteSalesPerson")]
        public Salesman DeleteSalesPerson(int id)
        {
            return salesPersonService.IDeleteSalesPerson(id);
        }
        [HttpGet]
        [Route("[action]")]
        [Route("api/SalesPerson/GetSalesPersonId")]
        public Salesman GetSalesPersonId(int id)
        {
            return salesPersonService.IDeleteSalesPerson(id);
        }
    }
}
