using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Green.DB.Data;
using Green.DB.Model;
using Green.Api.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace Green.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/User")]
    public class UserController : Controller
    {
        private readonly UsersContext _context;
        private readonly Mapper _mapper;

        public UserController(UsersContext context)
        {
            _context = context;
            //_mapper = new Mapper.M;
        }

        [HttpPost]
        public bool Post([FromBody]RegisterRequest value)
        {
            int saved = 0;
            try
            {
                User user = Mapper.Map<RegisterRequest, User>(value);
                _context.Users.Add(user);
                saved = _context.SaveChanges();
            }
            catch(Exception ex) { }
            return (saved > 0 ? true : false);
        }
    }
}