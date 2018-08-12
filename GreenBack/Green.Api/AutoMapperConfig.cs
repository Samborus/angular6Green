using AutoMapper;
using Green.Api.Model;
using Green.DB.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Green.Service
{
    public class AutoMapperConfig
    {
        public static void Initialize()
        {
            Mapper.Initialize((config) =>
            {
                config.CreateMap<RegisterRequest, User>(); //.ReverseMap();
            });
        }
    }
}
