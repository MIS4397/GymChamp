mongolocation = "https://api.mongolab.com/api/1/databases/gymchamp/collections/user?";
key = "apiKey=507423c4e4b088be4c29ee26";
function validateuser(){

}

function get_user_info(email){
json = mongoget(email);
}

function get_friend_info(uid){
json = mongoget(uid);
}

function mongoget(query){
var stuff = new XMLHttpRequest();
req = mongolocation + "q=" + query + key;
stuff.open("GET", req);
stuff.setRequestHeader("Content-Type", "application/json");
stuff.send(null);
return stuff.response;
}
function mongopost(json){
var stuff = new XMLHttpRequest();
stuff.open("POST", "https://api.mongolab.com/api/1/databases/gymchamp/collections/user?apiKey=507423c4e4b088be4c29ee26");
stuff.setRequestHeader("Content-Type", "application/json");
stuff.send(json);
}
function mongoput(json){
var stuff = new XMLHttpRequest();
stuff.open("PUT", "https://api.mongolab.com/api/1/databases/gymchamp/collections/user?apiKey=507423c4e4b088be4c29ee26");
stuff.setRequestHeader("Content-Type", "application/json");
stuff.send(json);
}
