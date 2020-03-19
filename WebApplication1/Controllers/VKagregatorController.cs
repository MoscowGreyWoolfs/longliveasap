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
   
    public class VKagregatorController : Controller
    {   
        [HttpGet]
        public List<CityStat> Tester()
        {
          
            var friendsRaw = System.IO.File.ReadAllText(@"C:\Users\Ilya Petrov\Desktop\tf4.json");
            var friends = JsonConvert.DeserializeObject<response>(friendsRaw);
            var friendsByCity = friends.items.GroupBy(x => x.city.title).Select(g => new CityStat() { count = g.Count(), title = g.Key }).ToList();

            return friendsByCity;
        }
    }


    public class CityStat
    {
        public int count { get; set; }

        public string title { get; set; }


    }
}




        

