using AutoMapper;
using LibraryWeb.Controllers.Resources;
using LibraryWeb.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryWeb.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserResource>();
            CreateMap<Book, BookResource>();
            CreateMap<BookResource, Book>()
                .ForMember(b => b.BookId, opt => opt.Ignore());
            CreateMap<UserResource, User>()
                .ForMember(u => u.UserId, opt => opt.Ignore());
        }
    }
}
