using Green.DB.Data;
using System;
using System.Collections.Generic;
using System.Text;


namespace Green.DB.Model
{
    public class User : BaseModel
    {
        public string Name { get; set; }
        public string SurName { get; set; }        
        public string Login { get; set; }
        public string EMail { get; set; }
    }
}
