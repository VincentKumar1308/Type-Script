using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MetroCard_Api.Data;
namespace MetroCard_Api.Controllers
{
     [Route("api/[controller]")]
    [ApiController]
    public class PersonalInfoController:ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public PersonalInfoController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }

        // GET: api/Personal Info
       [HttpGet]
        public IActionResult GetUserDetails()
        {
            return Ok(_dbContext.person.ToList());
        }

         //Set Details
        [HttpGet("{id}")]
        public IActionResult GetIndividualPersonalDetails(int id)
        {
            var user1=_dbContext.person.FirstOrDefault(user1=>user1.CardNo==id);
            if(user1==null)
            {
                return NotFound();
            }
            return Ok(user1);
        }

         //Add Details
        [HttpPost]
        public IActionResult AddUserDetails([FromBody] PersonalInfo user)
        {
            _dbContext.person.Add(user);
            _dbContext.SaveChanges();
            return Ok();
        }

         //Update Details
        [HttpPut("{id}")]
        public IActionResult UpdateUserDetails(int id,[FromBody] PersonalInfo user)
        {
            var userOld=_dbContext.person.FirstOrDefault(user=>user.CardNo==id);
            if(userOld==null)
            {
                return NotFound();
            }
            userOld.PhonNo=user.PhonNo;
            userOld.Balance=user.Balance;
            userOld.UserName=user.UserName;
            userOld.Password=user.Password;
            userOld.CardNo=user.CardNo;
            _dbContext.SaveChanges();
            return Ok();
        }

        //Delete Details
        [HttpDelete("{id}")]
        public IActionResult DeleteUserDetails(int id)
        {
        var user1=_dbContext.person.FirstOrDefault(user1=>user1.CardNo==id);
            if(user1==null)
            {
                return NotFound();
            }
            _dbContext.person.Remove(user1);
            _dbContext.SaveChanges();
            return Ok();
        }
        
    }
}