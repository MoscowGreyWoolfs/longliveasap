using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class FrendInfo
    {
        
            public int id { get; set; }

            public string first_name { get; set; }

            public string last_name { get; set; }

            public bool is_closed { get; set; }

            public bool can_access_closed { get; set; }

            public string domain { get; set; }

            public CityInfo city { get; set; }

            public string track_code { get; set; }
  
    }

    public class CityInfo
    {

        public int id { get; set; }

        public string title { get; set; }

    }


    public class response
    {
        public int count;

        public List<FrendInfo> items;
    }
   
}
