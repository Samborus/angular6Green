using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Green.DB.Data;
using Green.DB.Model;
using Green.Api.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Green.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/User")]
    public class TokenController : Controller
    {
        private readonly UsersContext _context;

        public TokenController(UsersContext context)
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