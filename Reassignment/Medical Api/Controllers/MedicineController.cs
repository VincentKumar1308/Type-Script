using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Medical_Api.Data;
using Microsoft.AspNetCore.Mvc;
using Medical_Api.Controllers;

namespace Medical_Api.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class MedicineController:ControllerBase
    {
      
        // private static List<Medicine> _MedicineDetails=new List<Medicine>
        // {
        //     new Medicine{MedicineID=100,MedicineName="paracetomol",MedicinePrice=10,MedicineQuantity=25,MedicineExpiry=new DateTime(2025,03,04)},
        //     new Medicine{MedicineID=101,MedicineName="cough syrup",MedicinePrice=20,MedicineQuantity=15,MedicineExpiry=new DateTime(2024,07,04)},
        //     new Medicine{MedicineID=102,MedicineName="injection",MedicinePrice=40,MedicineQuantity=45,MedicineExpiry=new DateTime(2057,03,04)},

        // };

          private readonly ApplicationDBContext _dbContext;
        public MedicineController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }

       //get details
        [HttpGet]
       public IActionResult GetMedicineDetails()
        {
            return Ok(_dbContext.medicine.ToList());
        }

        //set details
        [HttpGet("{id}")]


        public IActionResult GetIndividualMedicineDetails(int id)
        {
            var medicines=_dbContext.medicine.FirstOrDefault(medicine=>medicine.MedicineID==id);
            if(medicines==null)
            {
                return NotFound();
            }
            return Ok(medicines);
        }

       //Add Details
        [HttpPost]
        public IActionResult AddMedicineDetails([FromBody] Medicine medicine1)
        {
            _dbContext.medicine.Add(medicine1);
            _dbContext.SaveChanges();
            return Ok();
        }


         //Update Details
        [HttpPut("{MedicineID}")]
        public IActionResult UpdateMedicineDetails(int medicineID,[FromBody] Medicine medicine1)
        {
            var medicineOld=_dbContext.medicine.FirstOrDefault(medicine=>medicine.MedicineID==medicineID);
            if(medicineOld==null)
            {
                return NotFound();
            }
            medicineOld.MedicineQuantity=medicine1.MedicineQuantity;
            medicineOld.MedicineExpiry=medicine1.MedicineExpiry;
            medicineOld.MedicineName=medicine1.MedicineName;
            medicineOld.MedicinePrice=medicine1.MedicinePrice;
            _dbContext.SaveChanges();
            return Ok();
        }

          //Delete Details
        [HttpDelete("{MedicineID}")]
        public IActionResult DeleteMedicine(int medicineID)
        {
        var medicine=_dbContext.medicine.FirstOrDefault(medicine=>medicine.MedicineID==medicineID);
            if(medicine==null)
            {
                return NotFound();
            }
            _dbContext.medicine.Remove(medicine);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}