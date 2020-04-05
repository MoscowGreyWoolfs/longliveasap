using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{

    public class Individ
    {

        public int id { get; set; }

        public string name { get; set; }

        public int age { get; set; }

        public string gender { get; set; }

        public int postsNum { get; set; }

        public int commentsNum { get; set; }

        public int friendsNum { get; set; }

        public int likesNum { get; set; }

        public int groupsNum { get; set; }

        public List<Group> subsribes {get; set;}

        public List<Individ> friends {get; set;}


    }
}
