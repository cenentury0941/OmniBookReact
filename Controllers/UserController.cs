using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OmniBookReact.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		// GET: api/<UserController>
		[HttpGet]
		public void Get()
		{
			
		}

		// GET api/<UserController>/5
		[HttpGet("{id}")]
		public void Get(int id)
		{
			DBHandler.signOut();
			Response.Redirect("/");
		}

		// POST api/<UserController>
		[HttpPost]
		public void Post([FromBody] string value)
		{
			string username = Request.Form["username"];
			string password = Request.Form["password"];
			bool signedin = DBHandler.signUp(username, password);
			if (signedin)
			{
				Response.Cookies.Append("loggedin", "1");
				Response.Cookies.Append("username", UserData.username);
				Response.Cookies.Append("userid", ""+UserData.userid);
			}
			else
			{
				Response.Cookies.Append("loggedin", "0");
				Response.Cookies.Append("LoginFailed" , "1");
			}
			Response.Redirect("/");
		}

		// PUT api/<UserController>/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] string value)
		{
		}

		// DELETE api/<UserController>/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
		}
	}
}
