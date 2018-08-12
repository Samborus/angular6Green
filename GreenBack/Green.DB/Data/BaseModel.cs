using System;
using System.ComponentModel.DataAnnotations;

namespace Green.DB.Data
{
    public class BaseModel
    {
        [Key]
        public int ID { get; set; }
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
        public bool IsGhost { get; set; }
    }
}
