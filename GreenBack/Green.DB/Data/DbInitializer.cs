using System;
using System.Collections.Generic;
using System.Text;

namespace Green.DB.Data
{
    public static class DbInitializer
    {
        public static void Initialize(UsersContext context)
        {
            context.Database.EnsureCreated();

        }
    }
}