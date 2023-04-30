using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using Newtonsoft.Json;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OmniBookReact.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class BookController : ControllerBase
	{
		// GET: api/<BookController>
		[HttpGet]
		public IEnumerable<string> Get()
		{
			return new string[] { "value1", "value2" };
		}

		// GET api/<BookController>/5
		[HttpGet("{id}")]
		public string Get(int id)
		{
			return "value";
		}

		// POST api/<BookController>
		[HttpPost]
		public void Post()
		{
			StringValues outparam = "" ;
			Request.Headers.TryGetValue("Data", out outparam);
			Dictionary<string, string> htmlAttributes = JsonConvert.DeserializeObject<Dictionary<string, string>>(outparam);
			Console.WriteLine( "Body : " + htmlAttributes["start"]);

			string uid = "" + UserData.userid;
			string did = htmlAttributes["did"];
			string start = htmlAttributes["start"];
			string end = htmlAttributes["end"];
			int cost = (int)Convert.ToDouble(htmlAttributes["cost"]);
			DBHandler.Book( uid , did, start , end , cost );
		}

		// PUT api/<BookController>/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] string value)
		{
		}

		// DELETE api/<BookController>/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
		}
	}
}
