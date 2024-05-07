using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Medical_Api.Data
{
   [Table("orderdetails", Schema = "public")]
    
    public class OrderDetails
    {
    //     productID:number
    // userID:number
    // orderID:number
    // productName:string
    // productPrice:number
    // productQuantity:number
    // status:string

   
    public int ProductID{get;set;}
    public int UserID{get;set;}

    [Key]
    public int OrderID{get;set;}
    public  string ProductName{get;set;}
    public int ProductPrice{get;set;}
    public int ProductQuantity{get;set;}
    public string Status{get;set;}
    }
}