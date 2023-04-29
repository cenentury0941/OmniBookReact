using Microsoft.AspNetCore.Mvc;
using System.Management;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OmniBookReact.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class CostController : ControllerBase
	{
		// GET: api/<CostController>
		[HttpGet]
		public IEnumerable<string> Get()
		{
			return new string[] { "value1", "value2" };
		}

		// GET api/<CostController>/5
		[HttpGet("{id}")]
		public string Get(string id)
		{
			string locationarg = id;
			string[] loc_params = locationarg.Split('|');
			double src_lat = Convert.ToDouble(loc_params[0]);
			double src_lon = Convert.ToDouble(loc_params[1]);
			double des_lat = Convert.ToDouble(loc_params[2]);
			double des_lon = Convert.ToDouble(loc_params[3]);

			double distance = GetDistance(src_lat , src_lon , des_lat , des_lon);

			return ""+(distance*0.5);
		}

		// POST api/<CostController>
		[HttpPost]
		public void Post([FromBody] string value)
		{
		}

		// PUT api/<CostController>/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] string value)
		{
		}

		// DELETE api/<CostController>/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
		}

		public double GetDistance(double longitude, double latitude, double otherLongitude, double otherLatitude)
		{
			var d1 = latitude * (Math.PI / 180.0);
			var num1 = longitude * (Math.PI / 180.0);
			var d2 = otherLatitude * (Math.PI / 180.0);
			var num2 = otherLongitude * (Math.PI / 180.0) - num1;
			var d3 = Math.Pow(Math.Sin((d2 - d1) / 2.0), 2.0) + Math.Cos(d1) * Math.Cos(d2) * Math.Pow(Math.Sin(num2 / 2.0), 2.0);

			return 6376500.0 * (2.0 * Math.Atan2(Math.Sqrt(d3), Math.Sqrt(1.0 - d3)));
		}
	}
}
