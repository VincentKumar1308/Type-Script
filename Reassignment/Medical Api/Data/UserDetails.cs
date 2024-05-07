using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace Medical_Api.Data
{

     [Table("userdetails", Schema = "public")]
    public class UserDetails
    {
    // userid:string
    // userName:string
    // userMailID:string
    // userPhoneno:number
    // password:string
    // confirmPassword:string
    // balance:number


    [Key]
     public int UserID{get;set;}
     public string UserName{get;set;}
     public string UserMailID{get;set;}
     public string UserPhoneNo{get;set;}
     public string Password{get;set;}
     public double Balance{get;set;}
    }



}