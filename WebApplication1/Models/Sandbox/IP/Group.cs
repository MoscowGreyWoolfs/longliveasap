using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    
    public class Group
    {

        public int id { get; set; }

        public string name { get; set; }

        public int postsNum { get; set; }

        public int commentsNum { get; set; }

        public int likesNum { get; set; }

        public List<Individ> members { get; set; }

        public int membersNum { get; set; }



    }
}
