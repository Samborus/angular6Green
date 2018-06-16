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
    public class UserController : Controller
    {
        private readonly UsersContext _context;

        public UserController(UsersContext context)
        {
            _context = context;
        }

        [HttpPost]
        public bool Post([FromBody]RegisterRequest value)
        {
            User user = new User();
            _context.Users.Add(user);
            return true;
        }
    }
}