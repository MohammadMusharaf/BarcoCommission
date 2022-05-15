using BarcoSales.Model;
using BarcoSales.Repository;
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

    public class CommissionRulesController : ControllerBase
    {
        private readonly ICommissionRules commissionRulesService;

        public CommissionRulesController(ICommissionRules iICommissionRules)
        {
            commissionRulesService = iICommissionRules;

        }
        [HttpGet]
        [Route("[action]")]
        [Route("api/CommissionRules/GetCommissionRules")]
        public IEnumerable<CommissionRules> GetCommissionRules()
        {

            return commissionRulesService.IGetCommissionRules();
        }
        [HttpPost]
        [Route("[action]")]
        [Route("api/CommissionRules/AddCommissionRules")]
        public CommissionRules  AddCommissionRules(CommissionRules commissionRules)
        {
            return commissionRulesService.IAddCommissionRules(commissionRules);
        }
        [HttpPut]
        [Route("[action]")]
        [Route("api/CommissionRules/EditCommissionRules")]
        public CommissionRules EditCustomer(CommissionRules commissionRules)
        {
            return commissionRulesService.IUpdateCommissionRules(commissionRules);
        }
        [HttpDelete]
        [Route("[action]")]
        [Route("api/CommissionRules/DeleteCommissionRules")]
        public CommissionRules DeleteCommissionRules(int id)
        {
            return commissionRulesService.IDeleteCommissionRules(id);
        }
        [HttpGet]
        [Route("[action]")]
        [Route("api/CommissionRules/GetCommissionRulesId")]
        public CommissionRules GetCommissionRulesId(int id)
        {
            return commissionRulesService.IGetCommissionRulesById(id);
        }
    }
}
