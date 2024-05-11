using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace GroceryAPi.Data
{
    [Table("userdetails", Schema = "public")]
    public class UserDetails
    {
        [Key]
     public int UserID{get;set;}
     public string UserName{get;set;}
     public string Email{get;set;}
     public string PhoneNo{get;set;}
     public string Password{get;set;}
     public double Balance{get;set;}
     public string[] Photo{get;set;}
        
    }
}