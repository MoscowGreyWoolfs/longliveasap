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
    public class VkController : Controller
    {   

        [HttpGet]
        public List<FrendInfo> Tester() 
        {
            var friendsRaw = System.IO.File
                .ReadAllText(Environment.CurrentDirectory + @"\AppLocal\friends.json");

            return JsonConvert
                    .DeserializeObject<Response>(friendsRaw)
                    .items;
        }





}
}




        

