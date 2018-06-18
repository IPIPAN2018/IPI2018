using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryWeb.Controllers.Resources
{
    public class BookResource
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public string Year { get; set; }
        public string Media { get; set; }
        public string Author { get; set; }
        public bool State { get; set; }
    }
}
