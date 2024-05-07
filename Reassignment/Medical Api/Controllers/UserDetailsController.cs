using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Medical_Api.Data;

namespace Medical_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDetailsController:ControllerBase
    {
       private readonly ApplicationDBContext _dbContext;
        public UserDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }

       // GET: api/Contacts
       [HttpGet]
        public IActionResult GetUserDetails()
        {
            return Ok(_dbContext.users.ToList());
        }

          //Set Details
        [HttpGet("{id}")]
        public IActionResult GetIndividualMedicineDetails(int id)
        {
            var user1=_dbContext.users.FirstOrDefault(user1=>user1.UserID==id);
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
            _dbContext.users.Add(user);
            _dbContext.SaveChanges();
            return Ok();
        }

          //Update Details
        [HttpPut("{id}")]
        public IActionResult UpdateMedicineDetails(int id,[FromBody] UserDetails user)
        {
            var userOld=_dbContext.users.FirstOrDefault(user=>user.UserID==id);
            if(userOld==null)
            {
                return NotFound();
            }
            userOld.Balance=user.Balance;
            userOld.Password=user.Password;
            userOld.UserMailID=user.UserMailID;
            userOld.UserPhoneNo=user.UserPhoneNo;
            _dbContext.SaveChanges();
            return Ok();
        }
        //Delete Details
        [HttpDelete("{id}")]
        public IActionResult DeleteMedicine(int userID)
        {
        var user1=_dbContext.users.FirstOrDefault(user1=>user1.UserID==userID);
            if(user1==null)
            {
                return NotFound();
            }
            _dbContext.users.Remove(user1);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}