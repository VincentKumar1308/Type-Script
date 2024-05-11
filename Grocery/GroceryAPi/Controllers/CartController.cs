using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroceryAPi.Data;
using Microsoft.AspNetCore.Mvc;

namespace GroceryAPi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartController : ControllerBase
    {

        
        private readonly ApplicationDBContext _dbContext;
        public CartController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }

        // GET: api/cart
       [HttpGet]
        public IActionResult GetCartDetails()
        {
            return Ok(_dbContext.cart.ToList());
        }

         //Set Details
        [HttpGet("{id}")]
        public IActionResult GetIndividualCartDetails(int id)
        {
            var cart1=_dbContext.cart.FirstOrDefault(cart1=>cart1.UserID==id);
            if(cart1==null)
            {
                return NotFound();
            }
            return Ok(cart1);
        }

        //Add Details
        [HttpPost]
        public IActionResult AddCartDetails([FromBody] Cart cart)
        {
            _dbContext.cart.Add(cart);
            _dbContext.SaveChanges();
            return Ok();
        }

        //Update Details
        [HttpPut("{id}")]
        public IActionResult UpdateCartDetails(int id,[FromBody] Cart cart)
        {
            var cartOld=_dbContext.cart.FirstOrDefault(cart=>cart.UserID==id);
            if(cartOld==null)
            {
                return NotFound();
            }
          cartOld.UserID=cart.UserID;
          cartOld.CartID=cart.CartID;
          cartOld.ProductName=cart.ProductName;
          cartOld.ProductID=cart.ProductID;
          cartOld.ProductPrice=cart.ProductPrice;
          cartOld.ProductQuantity=cart.ProductQuantity;
            _dbContext.SaveChanges();
            return Ok();
        }
         //Delete Details
        [HttpDelete("{id}")]
        public IActionResult DeleteCartDetails(int id)
        {
        var cart1=_dbContext.cart.FirstOrDefault(cart1=>cart1.UserID==id);
            if(cart1==null)
            {
                return NotFound();
            }
            _dbContext.cart.Remove(cart1);
            _dbContext.SaveChanges();
            return Ok();
        }
        
    }
}