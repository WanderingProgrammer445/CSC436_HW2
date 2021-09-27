
function Logout({username =''}) {
  return (
    <div>
	    <form action="#">
	       You are logged in as <b>{username}</b> 
		   <button name="logoutbutton" type="submit">Logout</button>
		</form>
	</div>
  );
}

export default Logout;