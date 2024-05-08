using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MetroCard_Api.Data
{
    [Table("ticketfair", Schema = "public")]
    public class TicketFair
    {
        [Key]
        public int TicketID{get;set;}
        public string FromLocation{get;set;}
        public string ToLocation{get;set;}
        public double  TicketPrice{get;set;}
        
    }
}