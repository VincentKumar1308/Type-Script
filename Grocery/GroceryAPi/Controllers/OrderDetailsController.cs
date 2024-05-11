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
    public class OrderDetailsController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public OrderDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }

         // GET: api/order
       [HttpGet]
        public IActionResult GetOrderDetails()
        {
            return Ok(_dbContext.order.ToList());
        }

         //Set Details
        [HttpGet("{id}")]
        public IActionResult GetIndividualOrderDetails(int id)
        {
            var order1=_dbContext.order.FirstOrDefault(order1=>order1.OrderID==id);
            if(order1==null)
            {
                return NotFound();
            }
            return Ok(order1);
        }


         //Add Details
        [HttpPost]
        public IActionResult AddOrderDetails([FromBody] OrderDetails order1)
        {
            _dbContext.order.Add(order1);
            _dbContext.SaveChanges();
            return Ok();
        }

          //Update Details
        [HttpPut("{id}")]
        public IActionResult UpdateOrderDetails(int id,[FromBody] OrderDetails order)
        {
            var orderOld=_dbContext.order.FirstOrDefault(order=>order.OrderID==id);
            if(orderOld==null)
            {
                return NotFound();
            }
            orderOld.OrderID=order.OrderID;
            orderOld.CustomerName=order.CustomerName;
            orderOld.ProductName=order.ProductName;
            orderOld.ProductQuantity=order.ProductQuantity;
            orderOld.Price=order.Price;
          
            _dbContext.SaveChanges();
            return Ok();
        }

        //Delete Details
        [HttpDelete("{id}")]
        public IActionResult DeleteOrderDetails(int id)
        {
        var order1=_dbContext.order.FirstOrDefault(order1=>order1.OrderID==id);
            if(order1==null)
            {
                return NotFound();
            }
            _dbContext.order.Remove(order1);
            _dbContext.SaveChanges();
            return Ok();
        }

        
    }
}