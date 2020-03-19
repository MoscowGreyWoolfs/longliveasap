using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication1
{
    static class DataUtils
    {


        private static readonly JsonSerializerSettings jsonSerializerSettings =
            new JsonSerializerSettings()
            {
                Formatting = Formatting.Indented,
                ContractResolver =
                    new CamelCasePropertyNamesContractResolver()
            };



        public static List<T> LoadList<T>(string path) =>
            JsonConvert.DeserializeObject<List<T>>
                (File.ReadAllText(path));



        public static T Load<T>(string path) =>
            JsonConvert.DeserializeObject<T>
                 (File.ReadAllText(path));   
        

      
   


        public static void Save(object drugs, string SavePath)=>
            File.WriteAllText(SavePath, 
                JsonConvert.SerializeObject
                (drugs, jsonSerializerSettings));

       
    }
}
