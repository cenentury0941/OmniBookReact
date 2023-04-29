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
		public IEnumerable<string> Get()
		{
			return new string[] { "value1", "value2" };
		}

		// GET api/<QueryHandlerController>/5
		[HttpGet("{id}")]
		public string Get(int id)
		{
			return "KA-01-AE57:9384758374,KA-01-AE57:9388765474,KA-01-AE57:9334545374";
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
