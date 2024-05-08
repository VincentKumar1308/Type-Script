using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MetroCard_Api.Data;
using Microsoft.AspNetCore.Mvc;

namespace MetroCard_Api.Controllers
{
    
       [Route("api/[controller]")]
        [ApiController]
    public class TravelDetailsController:ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public TravelDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }

         [HttpGet]
        //Get Details
        public IActionResult GetTravelDetails()
        {
            return Ok(_dbContext.travel.ToList());
           
        }

        //Set Details
        [HttpGet("{id}")]
        public IActionResult GetIndividualTravelDetails(int id)
        {
            var travel1=_dbContext.travel.FirstOrDefault(travel1=>travel1.TravelID==id);
            if(travel1==null)
            {
                return NotFound();
            }
            return Ok(travel1);
        }

          //Add Details
        [HttpPost]
        public IActionResult AddTravelDetails([FromBody] TravelDetails travel1)
        {
            _dbContext.travel.Add(travel1);
            _dbContext.SaveChanges();
            return Ok();
        }

           //Update Details
        [HttpPut("{id}")]
        public IActionResult UpdateTravelDetails(int id,[FromBody] TravelDetails travel1)
        {
            var travelOld=_dbContext.travel.FirstOrDefault(travel1=>travel1.TravelID==id);
            if(travelOld==null)
            {
                return NotFound();
            }
           travelOld.TravelID=travel1.TravelID;
           travelOld.TravelCost=travel1.TravelCost;
           travelOld.TravelDate=travel1.TravelDate;
           travelOld.FromLocation=travel1.FromLocation;
           travelOld.ToLocation=travel1.ToLocation;
           travelOld.CardNo=travel1.CardNo;
            _dbContext.SaveChanges();
            return Ok();
        }

          //Delete Details
        [HttpDelete("{id}")]
        public IActionResult DeleteMedicine(int id)
        {
        var travel1=_dbContext.travel.FirstOrDefault(travel1=>travel1.TravelID==id);
            if(travel1==null)
            {
                return NotFound();
            }
            _dbContext.travel.Remove(travel1);
            _dbContext.SaveChanges();
            return Ok();
        }
        
    }
}