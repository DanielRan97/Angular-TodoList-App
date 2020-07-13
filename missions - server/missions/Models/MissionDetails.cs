using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace missions.Models
{
    public class MissionDetails
    {
        [Key]
        public int id { get; set; }

        [Required]
        [Column(TypeName = "text")]
        public string name { get; set; }

        [Required]
        [Column(TypeName = "text")]
        public string description { get; set; }

        [Required]
        [Column(TypeName = "text")]
        public string date { get; set; }


    }
}