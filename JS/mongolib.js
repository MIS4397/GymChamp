mongolocation = "https://api.mongolab.com/api/1/databases/gymchamp/collections/user?";
key = "apiKey=507423c4e4b088be4c29ee26";
function login()
{
	json = '{ "uname":"' + document.getElementById("textinput1").value '", "pass":"' + document.getElementById("textinput2").value '"}';
	json = json + 'f="_id":1';
	stuff = mongo_get(json);
}
function validateuser(){

}

function get_user_info(email){
return mongo_get(email);
}

function get_friend_info(uid){
return mongo_get(uid);
}

function mongo_get(query){
var stuff = new XMLHttpRequest();
req = mongolocation + "q=" + query + key;
stuff.open("GET", req);
stuff.setRequestHeader("Content-Type", "application/json");
stuff.send(null);
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
