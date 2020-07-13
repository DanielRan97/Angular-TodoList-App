using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using missions.Models;

namespace missions.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MissionDetailsController : ControllerBase
    {
        private readonly MissionContext _context;

        public MissionDetailsController(MissionContext context)
        {
            _context = context;
        }

        // GET: api/MissionDetails
        [HttpGet]
        public IEnumerable<MissionDetails> Getmissions()
        {
            return _context.missions;
        }

        // GET: api/MissionDetails/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMissionDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var missionDetails = await _context.missions.FindAsync(id);

            if (missionDetails == null)
            {
                return NotFound();
            }

            return Ok(missionDetails);
        }

        // PUT: api/MissionDetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMissionDetails([FromRoute] int id, [FromBody] MissionDetails missionDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != missionDetails.id)
            {
                return BadRequest();
            }

            _context.Entry(missionDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MissionDetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MissionDetails
        [HttpPost]
        public async Task<IActionResult> PostMissionDetails([FromBody] MissionDetails missionDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.missions.Add(missionDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMissionDetails", new { id = missionDetails.id }, missionDetails);
        }

        // DELETE: api/MissionDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMissionDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var missionDetails = await _context.missions.FindAsync(id);
            if (missionDetails == null)
            {
                return NotFound();
            }

            _context.missions.Remove(missionDetails);
            await _context.SaveChangesAsync();

            return Ok(missionDetails);
        }

        private bool MissionDetailsExists(int id)
        {
            return _context.missions.Any(e => e.id == id);
        }
    }
}