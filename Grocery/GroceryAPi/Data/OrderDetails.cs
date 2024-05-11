using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations.Schema;
namespace GroceryAPi.Data
{
     [Table("orderdetails", Schema = "public")]
    public class OrderDetails
    {
        [Key]
        public int OrderID{get;set;}
        public string  CustomerName{get;set;}
        public string[] ProductName{get;set;}
        public int[] ProductQuantity{get;set;}
        public int[] Price{get;set;}
        public int TotalPrice{get;set;}
        
    }
}