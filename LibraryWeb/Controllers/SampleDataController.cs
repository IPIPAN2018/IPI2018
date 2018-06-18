using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace LibraryWeb.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }
        
        [HttpGet("[action]")]
        public IEnumerable<LibraryContainer> Library()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new LibraryContainer
            {
                Title = Summaries[rng.Next(Summaries.Length)],
                Year = (DateTime.Now.Year - index).ToString("d"),
                Media = "Book",
                Author = Summaries[rng.Next(Summaries.Length)],
                State = true,
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }

        public class LibraryContainer
        {
            public string Title { get; set; }
            public string Year { get; set; }
            public string Media { get; set; }
            public string Author { get; set; }
            public bool State { get; set; }

        }
    }
}
