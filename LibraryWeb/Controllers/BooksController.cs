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
    [Route("/api/books")]
    public class BooksController : Controller
    {
        private readonly LibraryDbContext context;
        private readonly IMapper mapper;

        public BooksController(LibraryDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<IEnumerable<BookResource>> GetBooks()
        {
            var books = await context.Book.ToListAsync();

            return mapper.Map<List<Book>, List<BookResource>>(books);
        }

        [HttpPost]
        public async Task<IActionResult> CreateBook([FromBody] BookResource bookResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            //var bookCheck = await context.Book.FindAsync(bookResource.BookId);
            //if (bookCheck == null)
            //{
            //    ModelState.AddModelError("BookId", "Invalid bookId.");
            //    return BadRequest(ModelState);
            //}

            var book = mapper.Map<BookResource, Book>(bookResource);
            context.Book.Add(book);
            await context.SaveChangesAsync();

            var result = mapper.Map<Book, BookResource>(book);
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBook(long id, [FromBody] BookResource bookResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var book = await context.Book.FindAsync(id);
            mapper.Map<BookResource, Book>(bookResource, book);
            
            await context.SaveChangesAsync();

            var result = mapper.Map<Book, BookResource>(book);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(long id)
        {
            var book = await context.Book.FindAsync(id);

            if (book == null)
                return NotFound();

            context.Remove(book);
            await context.SaveChangesAsync();

            return Ok(id);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBook(long id)
        {
            var book = await context.Book.FindAsync(id);

            if (book == null)
                return NotFound();

            var bookResource = mapper.Map<Book, BookResource>(book);

            return Ok(bookResource);
        }
    }
}