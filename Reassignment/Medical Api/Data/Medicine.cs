using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace Medical_Api.Data
{
    [Table("medicinedetails", Schema = "public")]
    public class Medicine
    {
        [Key]
        public int MedicineID{get;set;}
        public string MedicineName{get;set;}
        public double MedicinePrice{get;set;}
        public double MedicineQuantity{get;set;}
        public DateTime MedicineExpiry{get;set;}
    }
}