using System;
using System.Threading.Tasks;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var facebookClient = new FacebookClient();
            var facebookService = new FacebookService(facebookClient);
            var getAccountTask = facebookService.GetAccountAsync(FacebookSettings.AccessToken);
            Task.WaitAll(getAccountTask);
            var account = getAccountTask.Result;
            Console.WriteLine($"{account.Id} {account.Name}");

            var postOnWallTask = facebookService.PostOnWallAsync(FacebookSettings.AccessToken,
            "Hello from C# .NET Core!");
            Task.WaitAll(postOnWallTask);
        }
    }    
}
