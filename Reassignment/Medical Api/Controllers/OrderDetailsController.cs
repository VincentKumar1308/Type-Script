using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Medical_Api.Data;
using Microsoft.AspNetCore.Mvc;

namespace Medical_Api.Controllers
{
       [Route("api/[controller]")]
        [ApiController]

    
    public class OrderDetailsController:ControllerBase
    {
       private readonly ApplicationDBContext _dbContext;
        public OrderDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }

     [HttpGet]
    //Get Details
        public IActionResult GetOrderDetails()
        {
            return Ok(_dbContext.order.ToList());
        }

      //Set Details
         [HttpGet("{id}")]
        public IActionResult GetIndividuaOrderDetails(int OrderID)
        {
            var orders=_dbContext.order.FirstOrDefault(orders=>orders.OrderID==OrderID);
            if(orders==null)
            {
                return NotFound();
            }
            return Ok(orders);
        }

      //Add Details
        [HttpPost]
        public IActionResult AddOderDetails([FromBody] OrderDetails orders)
        {
            _dbContext.order.Add(orders);
            _dbContext.SaveChanges();
            return Ok();
        }

      //Update Details
        [HttpPut("{id}")]
        public IActionResult UpdateOrderDetails(int id,[FromBody] OrderDetails orders)
        {
            var orderold=_dbContext.order.FirstOrDefault(orderold=>orderold.OrderID==id);
            if(orderold==null)
            {
                return NotFound();
            }
            orderold.OrderID=orders.OrderID;
            orderold.ProductID=orders.ProductID;
            orderold.ProductName=orders.ProductName;
          orderold.ProductPrice=orders.ProductPrice;
          orderold.ProductQuantity=orders.ProductQuantity;
          orderold.Status=orders.Status;
            _dbContext.SaveChanges();
            return Ok();
        }
     //Delete Details
        [HttpDelete("{id}")]
        public IActionResult DeleteOrders(int id)
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