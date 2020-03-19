using System;
using System.Threading.Tasks;
using System.IO;

using Newtonsoft.Json;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {


           

            var cityRaw = File.ReadAllText(@"G:\tf1.json");
            var city = JsonConvert.DeserializeObject<CityInfo>(cityRaw);

            var t = File.ReadAllText(@"G:\tf4.json");
            var tt = JsonConvert.DeserializeObject<response>(t);

            //var facebookClient = new FacebookClient();
            //var facebookService = new FacebookService(facebookClient);
            //var getAccountTask = facebookService.GetAccountAsync(FacebookSettings.AccessToken);
            //Task.WaitAll(getAccountTask);
            //var account = getAccountTask.Result;
            //Console.WriteLine($"{account.Id} {account.Name}");

            //var postOnWallTask = facebookService.PostOnWallAsync(FacebookSettings.AccessToken,
            //"Hello from C# .NET Core!");
            //Task.WaitAll(postOnWallTask);
        }
    }    
}
