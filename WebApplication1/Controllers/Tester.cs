using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using WebApplication1.Models;
using System.IO;


namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataTable : ControllerBase
    {


        private static readonly string[] Names = new[]
       {
            "Пеття", "Вася", "Коля", "A$AP"
        };

        private static readonly string[] Gender = new[]
        {
            "male" , "female"
        };
       
        public static double SampleGaussian(Random random, double mean, double stddev)
        {
            // The method requires sampling from a uniform random of (0,1]
            // but Random.NextDouble() returns a sample of [0,1).
            double x1 = 1 - random.NextDouble();
            double x2 = 1 - random.NextDouble();

            double y1 = Math.Sqrt(-2.0 * Math.Log(x1)) * Math.Cos(2.0 * Math.PI * x2);
            double y2 = y1* stddev +mean;
            if (y2 < 0)
            {
                y2 = -y2;
            }
            return y2;
        }

        

        private readonly ILogger<DataTable> _logger;

        public DataTable(ILogger<DataTable> logger)
        {
            _logger = logger;
        }

        public void Tester()
        {



            FrendInfo d1 = new FrendInfo();



            
            System.IO.File.WriteAllText(@"E:\newPoc.json", JsonConvert.SerializeObject(d1, Formatting.Indented));
            d1 = JsonConvert.DeserializeObject<FrendInfo>(System.IO.File.ReadAllText(Environment.CurrentDirectory + @"\AppLocal\friends.json"));


        }



        [HttpGet]
        //[Route("test2")]
        public IEnumerable<Model1> Test()
        {

            //return new List<Model1>() { model1, model2, new Model1() { id = 5, gender = "male" } };

            var rng = new Random();
            Tester();

            return Enumerable.Range(1, 40).Select(index => new Model1
            {
                id = index,
                name = Names[rng.Next(Names.Length)],
                gender = Gender[rng.Next(Gender.Length)],
                age = (int)SampleGaussian(rng, 33, 3),
                posts = (int)SampleGaussian(rng, 20, 6),
                comments = (int)SampleGaussian(rng, 100, 30)
            })
           .ToList();


        }


    }
}
