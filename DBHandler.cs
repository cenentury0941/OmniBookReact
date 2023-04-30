using Microsoft.Data.SqlClient;
using System.Reflection.PortableExecutable;

namespace OmniBookReact
{
	public class DBHandler
	{
		static IConfiguration configuration;
		static string conn_string;
		static SqlConnection conn;
		public DBHandler(IConfiguration conf) {
			configuration= conf;
			conn_string = conf.GetConnectionString("DefaultString");
			conn = new SqlConnection(conn_string);
		}

		public static bool signUp( string uname , string pass)
		{			conn = new SqlConnection(conn_string);

			bool signedUp = false;
			conn.Open();
			try {
			
				SqlCommand sqlCommand= conn.CreateCommand();
				sqlCommand.CommandText = "ADD_USER";
				sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
				sqlCommand.Parameters.Add(new SqlParameter("UNAME", uname));
				sqlCommand.Parameters.Add(new SqlParameter("PASS", pass));
				int altered_rows = sqlCommand.ExecuteNonQuery();
				if (altered_rows == 0)
				{
					throw new Exception("Unable To Create New User.");
				}
				signedUp = signIn(uname, pass);
			} 
			catch(Exception e) {
				Console.WriteLine(e.Message);
			} 
			finally { conn.Close(); }
			return signedUp;
		}

		public static bool signIn(string uname, string pass)
		{
			bool loggedin = false;
			conn = new SqlConnection(conn_string);
			conn.Open();
			try
			{
				SqlCommand sqlCommand = conn.CreateCommand();
				sqlCommand.CommandText = "LOGIN_USER";
				sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
				sqlCommand.Parameters.Add(new SqlParameter("@UNAME", uname));
				sqlCommand.Parameters.Add(new SqlParameter("@PASS", pass));
				SqlDataReader reader = sqlCommand.ExecuteReader();
				if ( reader.HasRows )
				{
					reader.Read();
					UserData.userid = reader.GetInt32(0);
					UserData.username = reader.GetString(1);
					Console.WriteLine( UserData.userid + " | " + UserData.username );
					loggedin = true;
				}
				else {
					UserData.userid = -1;
					UserData.username = "";
					Console.WriteLine("Failed to login");
				}
			}
			catch (Exception e)
			{
				Console.WriteLine(e.Message);
				UserData.userid = -1;
				UserData.username = "";
			}
			finally { conn.Close(); }
			Console.WriteLine(loggedin ? "Logged In" : "Not Logged In");
			return loggedin;
		}


		public static bool signOut()
		{
			bool loggedout = true;
			UserData.userid = -1;
			UserData.username = "";
			return loggedout;
		}


		public static bool Book(string uid, string did , string pick , string drop , int cost )
		{
			conn = new SqlConnection(conn_string);

			bool booked = false;
			conn.Open();
			try
			{

				SqlCommand sqlCommand = conn.CreateCommand();
				sqlCommand.CommandText = "ADD_RIDE";
				sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
				sqlCommand.Parameters.Add(new SqlParameter("@UID", uid));
				sqlCommand.Parameters.Add(new SqlParameter("@DID", did));
				sqlCommand.Parameters.Add(new SqlParameter("@Pick", pick));
				sqlCommand.Parameters.Add(new SqlParameter("@Drop", drop));
				sqlCommand.Parameters.Add(new SqlParameter("@cost", cost));
				int altered_rows = sqlCommand.ExecuteNonQuery();
				if (altered_rows == 0)
				{
					throw new Exception("Unable To Book ride");
				}
				booked = true;
			}
			catch (Exception e)
			{
				Console.WriteLine(e.Message);
			}
			finally { conn.Close(); }
			return booked;
		}

		public static string getRides()
		{
			string data = "";
			conn.Open();
			try
			{
				SqlCommand sqlCommand = conn.CreateCommand();
				sqlCommand.CommandText = "GET_RIDES";
				sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
				sqlCommand.Parameters.Add(new SqlParameter("@UID", UserData.userid));
				SqlDataReader reader = sqlCommand.ExecuteReader();
				while ( reader.Read() )
				{ 
					data += reader.GetInt32(0) + "_";
					data += reader.GetString(3) + "_";
					data += reader.GetString(4) + "_";
					data += reader.GetInt32(5) + "_";
					data += reader.GetDateTime(6) + "|";
				}
			}
			catch (Exception e)
			{
				Console.WriteLine(e.Message);
			}
			finally { conn.Close(); }
			return data;
		}



	}
}
