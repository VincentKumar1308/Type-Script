using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Medical_Api.Data; 
using Microsoft.EntityFrameworkCore; 
namespace Medical_Api.Controllers
{
   
    public class ApplicationDBContext: DbContext, IDisposable
    {
        
    public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
    }

       public DbSet<UserDetails> users{get;set;}
       public DbSet<OrderDetails> order{get;set;}
       public DbSet<Medicine> medicine{get;set;}
    }
    }
