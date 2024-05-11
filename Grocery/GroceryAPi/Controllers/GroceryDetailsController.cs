using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GroceryAPi.Data;
namespace GroceryAPi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GroceryDetailsController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public GroceryDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }
          // GET: api/grocery
       [HttpGet]
        public IActionResult GetGroceryDetails()
        {
            return Ok(_dbContext.grocery.ToList());
        }

          //Set Details
        [HttpGet("{id}")]
        public IActionResult GetIndividualGroceryDetails(int id)
        {
            var grocery1=_dbContext.grocery.FirstOrDefault(grocery1=>grocery1.GroceryID==id);
            if(grocery1==null)
            {
                return NotFound();
            }
            return Ok(grocery1);
        }

        //Add Details
        [HttpPost]
        public IActionResult AddGroceryDetails([FromBody] GroceryDetails grocery1)
        {
            _dbContext.grocery.Add(grocery1);
            _dbContext.SaveChanges();
            return Ok();
        }

              //Update Details
        [HttpPut("{id}")]
        public IActionResult UpdatGroceryDetails(int id,[FromBody] GroceryDetails grocery)
        {
            var groceryOld=_dbContext.grocery.FirstOrDefault(grocery=>grocery.GroceryID==id);
            if(groceryOld==null)
            {
                return NotFound();
            }
            groceryOld.GroceryID=grocery.GroceryID;
            groceryOld.GroceryName=grocery.GroceryName;
            groceryOld.AvailableQuantity=grocery.AvailableQuantity;
            groceryOld.UnitPrice=grocery.UnitPrice;
            groceryOld.PurchaseDate=grocery.PurchaseDate;
            groceryOld.ExpiryDate=grocery.ExpiryDate;
            groceryOld.GroceryPhoto=grocery.GroceryPhoto;

            _dbContext.SaveChanges();
            return Ok();
        }

        //Delete Details
        [HttpDelete("{id}")]
        public IActionResult DeleteGroceryDetails(int id)
        {
        var grocery1=_dbContext.grocery.FirstOrDefault(grocery1=>grocery1.GroceryID==id);
            if(grocery1==null)
            {
                return NotFound();
            }
            _dbContext.grocery.Remove(grocery1);
            _dbContext.SaveChanges();
            return Ok();
        }

    }
}