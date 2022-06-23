using BarcoSales.EFModel;
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
        public IEnumerable<Commissionrules> GetCommissionRules()
        {

            return commissionRulesService.IGetCommissionRules();
        }
        [HttpPost]
        [Route("[action]")]
        [Route("api/CommissionRules/AddCommissionRules")]
        public Commissionrules  AddCommissionRules(Commissionrules commissionRules)
        {
            return commissionRulesService.IAddCommissionRules(commissionRules);
        }
        [HttpPut]
        [Route("[action]")]
        [Route("api/CommissionRules/EditCommissionRules")]
        public Commissionrules EditCustomer(Commissionrules commissionRules)
        {
            return commissionRulesService.IUpdateCommissionRules(commissionRules);
        }
        [HttpDelete]
        [Route("[action]")]
        [Route("api/CommissionRules/DeleteCommissionRules")]
        public Commissionrules DeleteCommissionRules(int id)
        {
            return commissionRulesService.IDeleteCommissionRules(id);
        }
        [HttpGet]
        [Route("[action]")]
        [Route("api/CommissionRules/GetCommissionRulesId")]
        public Commissionrules GetCommissionRulesId(int id)
        {
            return commissionRulesService.IGetCommissionRulesById(id);
        }
    }
}
