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
   
    public class VKController : Controller
    {   
        [HttpGet]
        public List<FrendInfo> Tester()
        {
            response d1 = new response();

            var t = System.IO.File.ReadAllText(@"C:\Users\Ilya Petrov\Desktop\tf4.json");

            var tt = JsonConvert.DeserializeObject<response>(t);

            d1 = JsonConvert.DeserializeObject<response>(System.IO.File.ReadAllText(@"C:\Users\Ilya Petrov\Desktop\friends (2).json"));
            System.IO.File.WriteAllText(@"E:\newPoc.json", JsonConvert.SerializeObject(d1.items, Formatting.Indented));
            return tt.items;
        }
    }
}




        

