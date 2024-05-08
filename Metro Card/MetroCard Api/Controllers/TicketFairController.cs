using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MetroCard_Api.Data;
using  MetroCard_Api.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace MetroCard_Api.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TicketFairController:ControllerBase
    {

         private readonly ApplicationDBContext _dbContext;
        public TicketFairController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }

        //get details
        [HttpGet]
       public IActionResult GetTicketDetails()
        {
            return Ok(_dbContext.ticket.ToList());
        }

        //set details
        [HttpGet("{id}")]

        public IActionResult GetIndividualTicketDetails(int id)
        {
            var tickets=_dbContext.ticket.FirstOrDefault(tickets=>tickets.TicketID==id);
            if(tickets==null)
            {
                return NotFound();
            }
            return Ok(tickets);
        }

         //Add Details
        [HttpPost]
        public IActionResult AddTicketDetails([FromBody] TicketFair ticket1)
        {
            _dbContext.ticket.Add(ticket1);
            _dbContext.SaveChanges();
            return Ok();
        }

         //Update Details
        [HttpPut("{TicketID}")]
        public IActionResult UpdatTicketDetails(int ticketID,[FromBody] TicketFair ticket1)
        {
            var ticketOld=_dbContext.ticket.FirstOrDefault(ticket1=>ticket1.TicketID==ticketID);
            if(ticketOld==null)
            {
                return NotFound();
               
        }
        ticketOld.TicketPrice=ticket1.TicketID;
        ticketOld.FromLocation=ticket1.FromLocation;
        ticketOld.ToLocation=ticket1.ToLocation;
        ticketOld.TicketPrice=ticket1.TicketPrice;
        _dbContext.SaveChanges();
            return Ok();

        }
           //Delete Details
        [HttpDelete("{TicketID}")]
        public IActionResult DeleteTicket(int ticketID)
        {
        var ticket1=_dbContext.ticket.FirstOrDefault(ticket1=>ticket1.TicketID==ticketID);
            if(ticket1==null)
            {
                return NotFound();
            }
            _dbContext.ticket.Remove(ticket1);
            _dbContext.SaveChanges();
            return Ok();
        
    }
}
}