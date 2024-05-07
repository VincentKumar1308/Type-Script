using Medical_Api.Controllers;
using Microsoft.EntityFrameworkCore; 
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<ApplicationDBContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("PostgresDB")));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseRouting();
app.UseCors(policy =>policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.MapGet("/",()=>"Medical Store application");
app.Run();
