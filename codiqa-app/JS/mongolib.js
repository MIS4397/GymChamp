mongolocation = "https://api.mongolab.com/api/1/databases/gymchamp/collections/";
key = "apiKey=507423c4e4b088be4c29ee26";
uid = "";

function login()
{

}

function add_friend(){


}

function get_friends(){
 var url = "https://graph.facebook.com/" + response.id + "/friends&callback=?";
 
}
function getOneLine(){
	var stufftoo = new XMLHttpRequest();
	stufftoo.onreadystatechange=function()
	{
		if (stufftoo.readyState==4 && stufftoo.status==200)
		{
			var jDoc=JSON.parse(stufftoo.response);
			document.getElementById("friendsblock").innerHTML = document.getElementById("friendsblock").innerHTML + '<li class="activity">' + document.getElementById("fid").innerHTML + " " + jDoc[0].type + " Weight: " + jDoc[0].weight + " Reps: " + jDoc[0].reps + " Sets: " + jDoc[0].sets + "</li>"; 
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
			output = '<table border="1" class="activity-tbl">';
			for(x=0;x<jsonDoc.length;x++)
			{
				output = output + "<tr>" + '<td class="activity">' +'<b>' + "You" +"</b>"+" "+ jsonDoc[x].type + "ed " +'<b class="stats">'+ jsonDoc[x].weight + "</b>"+" lbs "+'<a class="activity-txt">' + "(" + '<b style="stats">'+ jsonDoc[x].sets + "</b>"+ " sets of "+"<b>"+ jsonDoc[x].reps + ") "+'</a>'+ "</b>"+"</td>"+"</tr>"; 
			}
			output = output + "</table>";
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
