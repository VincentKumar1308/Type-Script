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
    public class UserDetailsController : ControllerBase
    {

         private readonly ApplicationDBContext _dbContext;
        public UserDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }

        // GET: api/user
       [HttpGet]
        public IActionResult GetUserDetails()
        {
            return Ok(_dbContext.user.ToList());
        }

         //Set Details
        [HttpGet("{id}")]
        public IActionResult GetIndividualUserDetails(int id)
        {
            var user1=_dbContext.user.FirstOrDefault(user1=>user1.UserID==id);
            if(user1==null)
            {
                return NotFound();
            }
            return Ok(user1);
        }

        //Add Details
        [HttpPost]
        public IActionResult AddUserDetails([FromBody] UserDetails user)
        {
            _dbContext.user.Add(user);
            _dbContext.SaveChanges();
            return Ok();
        }

         //Update Details
        [HttpPut("{id}")]
        public IActionResult UpdateUserDetails(int id,[FromBody] UserDetails user)
        {
            var userOld=_dbContext.user.FirstOrDefault(user=>user.UserID==id);
            if(userOld==null)
            {
                return NotFound();
            }
          userOld.UserID=user.UserID;
          userOld.UserName=user.UserName;
          userOld.Balance=user.Balance;
          userOld.Password=user.Password;
          userOld.Photo=user.Photo;
          userOld.PhoneNo=user.PhoneNo;
         _dbContext.SaveChanges();
         return Ok();
        }

        //Delete Details
        [HttpDelete("{id}")]
        public IActionResult DeleteUserDetails(int id)
        {
        var user1=_dbContext.user.FirstOrDefault(user1=>user1.UserID==id);
            if(user1==null)
            {
                return NotFound();
            }
            _dbContext.user.Remove(user1);
            _dbContext.SaveChanges();
            return Ok();
        }
        
    }
}