using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace missions.Models
{
    public class MissionContext : DbContext
    {


        public MissionContext(DbContextOptions<MissionContext> options) : base(options)
        {

        }

        public DbSet<MissionDetails> missions { get; set; }

    }
}
