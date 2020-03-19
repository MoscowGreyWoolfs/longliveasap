using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication1
{
    static class NetUtils
    {

        public static string Post(string uri, string data, string contentType)
        {

            String UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.17763";
            byte[] dataBytes = Encoding.UTF8.GetBytes(data);
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(uri);
            request.AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate;
            request.CookieContainer = new CookieContainer();
            request.UserAgent = UserAgent;
            request.ContentLength = dataBytes.Length;
            request.ContentType = contentType;
            request.Method = "POST";
            string result;
            try
            {
                using (Stream requestBody = request.GetRequestStream())
                {
                    requestBody.Write(dataBytes, 0, dataBytes.Length);
                }

                using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
                {
                    using (Stream stream = response.GetResponseStream())
                    {
                        using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
                        //      using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
                        {
                            result = reader.ReadToEnd();
                        }
                    }
                }
            }
            catch (Exception ex) { result = ex.Message; }
            finally { request = null; dataBytes = null; }
            return result;
        }

        public static async Task<System.IO.Stream> UploadAsync(string actionUrl, string filename, Stream fileStream, byte[] fileBytes)
        {

            HttpContent stringContent = new StringContent(filename);
            HttpContent fileStreamContent = new StreamContent(fileStream);
            HttpContent bytesContent = new ByteArrayContent(fileBytes);
            using (var client = new HttpClient())
            using (var formData = new MultipartFormDataContent())
            {

                formData.Add(bytesContent, "file1", filename);

                var response = await client.PostAsync(actionUrl, formData);
                if (!response.IsSuccessStatusCode)
                {
                    return null;
                }
                return await response.Content.ReadAsStreamAsync();
            }

        }

        public static void get()
        {
            String UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
                                "AppleWebKit/537.36 (KHTML, like Gecko) " +
                                "Chrome/64.0.3282.140 " +
                                "Safari/537.36 " +
                                "Edge/18.17763";

            string uri = "https://localhost:44344/api/ABC/get?id=9";
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(uri);
            request.CookieContainer = new CookieContainer();
            request.UserAgent = UserAgent;
            request.AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate;
            string result;

            try
            {
                using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())

                using (Stream stream = response.GetResponseStream())

                using (StreamReader reader = new StreamReader(stream))

                    result = reader.ReadToEnd();

            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            finally
            {
                request = null;
            }

            Console.Write(result);

        }



    }
}
