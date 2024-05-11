using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using GroceryAPi.Data;
using System.ComponentModel.DataAnnotations;

namespace GroceryAPi.Data
{
    [Table("cart", Schema = "public")]
    public class Cart
    {
        [Key]
        public int CartID{get;set;}
        public int UserID{get;set;}
        public string  ProductName{get;set;}
        public  int ProductID{get;set;}
        public  int ProductPrice{get;set;}
        public int ProductQuantity{get;set;}
        
    }
}