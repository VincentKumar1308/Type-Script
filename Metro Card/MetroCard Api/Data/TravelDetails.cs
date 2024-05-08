using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace MetroCard_Api.Data
{
      [Table("traveldetails", Schema = "public")]
    public class TravelDetails
    {
        [Key]
        public int TravelID{get;set;}
        public int CardNo{get;set;}
        public string FromLocation{get;set;}
        public string ToLocation{get;set;}
        public int TravelCost{get;set;}
        public DateTime TravelDate{get;set;}
    }
}