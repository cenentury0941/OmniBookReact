using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OmniBookReact.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class QueryHandlerController : ControllerBase
	{
		// GET: api/<QueryHandlerController>
		[HttpGet]
		public string Get()
		{
			string data = DBHandler.getRides();
			Console.WriteLine(data);
			return data;
		}

		// GET api/<QueryHandlerController>/5
		[HttpGet("{id}")]
		public string Get(int id)
		{
			List<string> strings= new List<string>() { "2:KA-01-AE57:9334545374" , "1:KA-39-HA39:9388765474" , "0:KA-69-SK94:9384758374" , "9:KA-23-AS57:9365445574", "7:KA-01-HA66:9657655474", "8:KA-66-RE32:9345678374" };
			System.Random rnd = new System.Random();
			string ret = "";
			for ( int i = 0; i < strings.Count; i++ )
			{
				if ( rnd.Next(10) < 5 )
				{
					if ( ret.Length == 0 )
					{
						ret += strings[i];
					}
					else {
						ret += "," + strings[i];
					}
				}
			}
			return ret;
		}

		// POST api/<QueryHandlerController>
		[HttpPost]
		public void Post([FromBody] string value)
		{
		}

		// PUT api/<QueryHandlerController>/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] string value)
		{
		}

		// DELETE api/<QueryHandlerController>/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
		}
	}
}
