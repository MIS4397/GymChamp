mongolocation = "https://api.mongolab.com/api/1/databases/gymchamp/collections/";
key = "apiKey=507423c4e4b088be4c29ee26";
uid = "";
function create()
{
	json = '{"uname":"' + document.getElementById("textinput7").value + '", "pass":"' + document.getElementById("textinput9").value + '","email":"'+ document.getElementById("textinput8").value +'"}';	
	mongo_post(json);
	document.getElementById("uid").innerHTML = document.getElementById("textinput7").value;
	window.location = "#page11";
}
function login()
{
	json = '{"uname":"' + document.getElementById("textinput1").value + '", "pass":"' + document.getElementById("textinput2").value + '"}';
	var stuff = new XMLHttpRequest();
	stuff.onreadystatechange=function()
	{
		if (stuff.readyState==4 && stuff.status==200)
		{
			jsonDoc=stuff.response;
			if (jsonDoc == "[  ]")
			{
				document.getElementById("error").innerHTML = "Invalid Username or Password";
			}
			else
			{
				document.getElementById("uid").innerHTML = document.getElementById("textinput1").value;
				window.location = "#page11";

			}
		}
	}
	req = mongolocation + "user?q=" + json + "&" + key;
	stuff.open("GET", req);
	stuff.setRequestHeader("Content-Type", "application/json");
	stuff.send();
}

function add_friend(){


}

function sign_out()
{
document.getElementById("uid").innerHTML = "";
window.location = "#page1";
}

function get_friends(){
	var stuff = new XMLHttpRequest();
	stuff.onreadystatechange=function()
	{
		if (stuff.readyState==4 && stuff.status==200)
		{
			jsonDoc= stuff.response;
			document.getElementById("friendsblock").innerHTML = "<ul>";
			floc = jsonDoc.indexOf('"friends"');
			jsonDoc = "{" + jsonDoc.substring(floc,jsonDoc.length-1);
			jDoc = JSON.parse(jsonDoc);
			var lenshit = jDoc.friends.length;
			for(x=0;x<lenshit;x++)
			{
				document.getElementById("fid").innerHTML = jDoc.friends[x];
				getOneLine();
			}
			document.getElementById("friendsblock").innerHTML = document.getElementById("friendsblock").innerHTML + "</ul>";
		}
	}
	req = mongolocation + 'user?q={"uname":"' + document.getElementById("uid").innerHTML + '"}&l=5&f={"friends":1}&' + key;
	stuff.open("GET", req);
	stuff.setRequestHeader("Content-Type", "application/json");
	stuff.send();
}
function getOneLine(){
	var stufftoo = new XMLHttpRequest();
	stufftoo.onreadystatechange=function()
	{
		if (stufftoo.readyState==4 && stufftoo.status==200)
		{
			var jDoc=JSON.parse(stufftoo.response);
			document.getElementById("friendsblock").innerHTML = document.getElementById("friendsblock").innerHTML + "<li>" + document.getElementById("fid").innerHTML + " " + jDoc[0].type + " Weight: " + jDoc[0].weight + " Reps: " + jDoc[0].reps + " Sets: " + jDoc[0].sets + "</li>"; 
		}
	}
	req = mongolocation + 'workout?q={"uname":"' + document.getElementById("fid").innerHTML + '"}&l=1&' + key;
	stufftoo.open("GET", req);
	stufftoo.setRequestHeader("Content-Type", "application/json");
	stufftoo.send();

}
function user_work(){
	var stuff = new XMLHttpRequest();
	stuff.onreadystatechange=function()
	{
		if (stuff.readyState==4 && stuff.status==200)
		{
			jsonDoc=JSON.parse(stuff.response);
			output = "<ul>";
			for(x=0;x<jsonDoc.length;x++)
			{
				output = output + "<li>" + jsonDoc[x].type + " Weight: " + jsonDoc[x].weight + " Reps: " + jsonDoc[x].reps + " Sets: " + jsonDoc[x].sets + "</li>"; 
			}
			output = output + "</ul>";
			document.getElementById("ufeed").innerHTML = output;
		}
	}
	req = mongolocation + 'workout?q={"uname":"' + document.getElementById("uid").innerHTML + '"}&l=5&' + key;
	stuff.open("GET", req);
	stuff.setRequestHeader("Content-Type", "application/json");
	stuff.send();

}
function post_work(){
	json = '{"uname":"' + document.getElementById("uid").innerHTML + '", "type":"' + document.getElementById("type").value + '","weight":"'+ document.getElementById("weight").value + '","reps":"'+ document.getElementById("reps").value + '","sets":"'+ document.getElementById("sets").value + '"}';	
	var stuff = new XMLHttpRequest();
	stuff.open("POST", "https://api.mongolab.com/api/1/databases/gymchamp/collections/workout?apiKey=507423c4e4b088be4c29ee26");
	stuff.setRequestHeader("Content-Type", "application/json");
	stuff.send(json);
	document.getElementById("weight").value = "";
	document.getElementById("reps").value = "";
	document.getElementById("sets").value = "";
	window.location = "#page11";
	user_work();
}
function mongo_get(query){
var stuff = new XMLHttpRequest();
req = mongolocation + "q=" + query + "&" + key;
stuff.open("GET", req);
stuff.setRequestHeader("Content-Type", "application/json");
stuff.send();
return stuff.response;
}
function mongo_post(json){
var stuff = new XMLHttpRequest();
stuff.open("POST", "https://api.mongolab.com/api/1/databases/gymchamp/collections/user?apiKey=507423c4e4b088be4c29ee26");
stuff.setRequestHeader("Content-Type", "application/json");
stuff.send(json);
}
function mongo_put(json){
var stuff = new XMLHttpRequest();
stuff.open("PUT", "https://api.mongolab.com/api/1/databases/gymchamp/collections/user?apiKey=507423c4e4b088be4c29ee26");
stuff.setRequestHeader("Content-Type", "application/json");
stuff.send(json);
}
