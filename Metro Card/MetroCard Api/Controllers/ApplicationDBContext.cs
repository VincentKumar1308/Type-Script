using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MetroCard_Api.Data;
using Microsoft.EntityFrameworkCore; 
namespace MetroCard_Api.Controllers
{
    public class ApplicationDBContext:DbContext, IDisposable
    {
         public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
    }

       public DbSet<PersonalInfo> person{get;set;}
       public DbSet<TicketFair> ticket{get;set;}
       public DbSet<TravelDetails> travel{get;set;}
        
    }
}