using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LibraryWeb.Model
{
    public class Book
    {
        [Key]
        public long BookId { get; set; }
        //[Required]
        //[StringLength(255)]
        public string Title { get; set; }
        public string Year { get; set; }
        public string Media { get; set; }
        public string Author { get; set; }
        public bool State { get; set; }

    }
}