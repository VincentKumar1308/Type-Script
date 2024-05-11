using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore; 
using GroceryAPi.Data;
namespace GroceryAPi.Controllers
{
    public class ApplicationDBContext:DbContext,IDisposable
    {
        
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
    }

     public DbSet<UserDetails> user{get;set;}
       public DbSet<OrderDetails> order{get;set;}
       public DbSet<GroceryDetails> grocery{get;set;}
       public DbSet<Cart>cart{get;set;}
        
    }
}