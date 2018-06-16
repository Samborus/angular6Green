using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Green.Api.Model
{
    public class RegisterRequest
    {
        public string Login { get; set; }
        public string Name { get; set; }
        public string EMail { get; set; }
        public string Pass { get; set; }
    }
}
