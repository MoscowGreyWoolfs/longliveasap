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
    public class VkAgrController : Controller
    {   


        [HttpGet]
        public List<CityStat> Tester()
        {
          
            var friendsRaw = System.IO.File
                    .ReadAllText(Environment.CurrentDirectory + @"\AppLocal\friends.json");


            return JsonConvert
                    .DeserializeObject<Response>(friendsRaw).items
                    .GroupBy(x => x.city.title)
                    .Select(g => new CityStat() { count = g.Count(), title = g.Key })
                    .ToList();

        }
    }

}




        

