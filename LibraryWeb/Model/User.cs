using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LibraryWeb.Model
{
    [Table("Users")]
    public class User
    {
        [Key]
        public long UserId { get; set; }
        //[Required]
        //[StringLength(255)]
        public string Name { get; set; }
        //[Required]
        //[StringLength(255)]
        public string LastName { get; set; }
        //[Required]
        //[StringLength(255)]
        public string Email { get; set; }
        //[Required]
        //[StringLength(255)]
        public string Password { get; set; }
        //[Required]
        //[StringLength(255)]
        public string ContactNo { get; set; }
        public string City { get; set; }
        public string PostCode { get; set; }
        public string Street { get; set; }
        public string FavouritesCategories { get; set; }
        public bool IsAdmin { get; set; }
        
        public ICollection<Book> RentedBooks { get; set; }

        public User()
        {
            RentedBooks = new Collection<Book>();
        }
    }
}