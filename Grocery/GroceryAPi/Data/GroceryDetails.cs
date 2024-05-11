using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
namespace GroceryAPi.Data
{
     [Table("grocerydetails", Schema = "public")]
    public class GroceryDetails
    {
        [Key]
        public int GroceryID{get;set;}
        public string  GroceryName{get;set;}
        public  int AvailableQuantity{get;set;}
        public  int UnitPrice{get;set;}
        public DateTime ExpiryDate{get;set;}
        public  DateTime PurchaseDate{get;set;}
        public string[] GroceryPhoto{get;set;}
        
    }
}