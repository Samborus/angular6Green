using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DBWeb.Data;
using DBWeb.Model;
using GreenBack.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GreenBack.Controllers
{
    [Produces("application/json")]
    [Route("api/User")]
    public class UserController : Controller
    {
        private readonly UsersContext _context;

        public UserController(UsersContext context)
        {
            _context = context;
        }

        [HttpPost]
        public string Post([FromBody]UserLogIn value)
        {
            int? pass = _context.Users.Where(u => u.Nick == value.Login).FirstOrDefault()?.ID;
            return "Token";
        }
    }
}