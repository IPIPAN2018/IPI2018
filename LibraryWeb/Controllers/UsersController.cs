using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using LibraryWeb.Controllers.Resources;
using LibraryWeb.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryWeb.Controllers
{
    [Route("/api/users")]
    public class UsersController : Controller
    {
        private readonly LibraryDbContext context;
        private readonly IMapper mapper;

        public UsersController(LibraryDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<IEnumerable<UserResource>> GetUsers()
        {
            var users = await context.Users.Include(m => m.RentedBooks).ToListAsync();

            return mapper.Map<List<User>, List<UserResource>>(users);
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] UserResource userResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            //var userCheck = await context.Users.FindAsync(userResource.UserId);
            //if(userCheck == null)
            //{
            //    ModelState.AddModelError("UserId", "Invalid userId.");
            //    return BadRequest(ModelState);
            //}

            var user = mapper.Map<UserResource, User>(userResource);
            context.Users.Add(user);
            await context.SaveChangesAsync();

            var result = mapper.Map<User, UserResource>(user);
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(long id, [FromBody] UserResource userResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await context.Users.FindAsync(id);
            mapper.Map<UserResource, User>(userResource, user);

            await context.SaveChangesAsync();

            var result = mapper.Map<User, UserResource>(user);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(long id)
        {
            var user = await context.Users.FindAsync(id);

            if (user == null)
                return NotFound();

            context.Remove(user);
            await context.SaveChangesAsync();

            return Ok(id);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(long id)
        {
            var user = await context.Users.FindAsync(id);

            if (user == null)
                return NotFound();

            var userResource = mapper.Map<User, UserResource>(user);

            return Ok(userResource);
        }
    }
}