using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryWeb.Controllers.Resources
{
    public class UserResource
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ContactNo { get; set; }
        public string City { get; set; }
        public string PostCode { get; set; }
        public string Street { get; set; }
        public string FavouritesCategories { get; set; }
        public bool IsAdmin { get; set; }

        public ICollection<BookResource> RentedBooks { get; set; }

        public UserResource()
        {
            RentedBooks = new Collection<BookResource>();
        }
    }
}
