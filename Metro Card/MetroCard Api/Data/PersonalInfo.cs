using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MetroCard_Api.Data  
{
      [Table("personaldetails", Schema = "public")]
    public class PersonalInfo
    {
        [Key]
        public int CardNo{get;set;}
        public string PhonNo{get;set;}
        public string UserName{get;set;}
        public string Password{get;set;}
        public double Balance{get;set;}
      

    }

  
}