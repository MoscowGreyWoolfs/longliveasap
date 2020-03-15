using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("test")]
    public class Tester : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };


        private static readonly string[] Names = new[]
       {
            "Пеття", "Вася", "Коля", "A$AP"
        };




        private readonly ILogger<Tester> _logger;

        public Tester(ILogger<Tester> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("test1")]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }



        [HttpGet]
        [Route("test2")]
        public IEnumerable<Model1> Test()
        {


            var rng = new Random();
          
            return Enumerable.Range(1, 5).Select(index => new Model1
            {
           
                id = rng.Next(-20, 55),
                name = Names[rng.Next(Names.Length)]
            })
           .ToArray();



        }


    }
}
