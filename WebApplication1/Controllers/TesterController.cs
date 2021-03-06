﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TesterController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };
        private static readonly string[] Names = new[]
       {
            "Пеття", "Вася", "Коля", "A$AP"
        };

        private readonly ILogger<TesterController> _logger;

        public TesterController(ILogger<TesterController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        //    [Route("test2")]
        public IEnumerable<TestModel> Test()
        {


            var rng = new Random();

            return Enumerable.Range(1, 500).Select(index => new TestModel
            {

                id = rng.Next(-20, 55),
                v1 = rng.Next(0, 100),
                v2 = rng.Next(0, 300),
                name = Names[rng.Next(Names.Length)]
            })
           .ToArray();
        }






        }
}
