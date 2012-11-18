mongolocation = "https://api.mongolab.com/api/1/databases/gymchamp/collections/";
key = "apiKey=507423c4e4b088be4c29ee26";
uid = "";
// array request to REST api 
// https://api.mongolab.com/api/1/databases/gymchamp/collections/workout?q={%22uname%22:{$in:[%22benf%22,%22duder%22]}}&apiKey=507423c4e4b088be4c29ee26
function login()
{

}

function add_friend(){


}

function get_friends(){
	var url = "https://graph.facebook.com/" + fbresponse.authResponse.userID + "/friends&access_token=" + fbresponse.authResponse.accessToken + "&callback=?";
	var friends = "[";
	$.getJSON(url,function(json){
				//loop through and within data array
		    	$.each(json.data,function(i,fb){
		   		friends += '"' + fb.id + '",';
		   	});
		friends += "]";	
	});
	var urlfriends = mongolocation + "workout?q={'fbid':{$in:" + friends + "}}&" + key;
	$.getJSON(urlfriends,function(json){
			
	});
}

function user_work(){
	var url = mongolocation + "workout?q={'fbid':'" + fbresponse.authResponse.userID + "'}&" + key;
	var output = '<table border="1" class="activity-tbl">';
	$.getJSON(url,function(json){
			$.each(json,function(i,fb){
			output += "<tr>" + '<td class="activity">' +'<b>' + "You" +"</b>"+" "+ fb.type + "ed " +'<b class="stats">'+ fb.weight + "</b>"+" lbs "+'<a class="activity-txt">' + "(" + '<b style="stats">'+ fb.sets + "</b>"+ " sets of "+"<b>"+ fb.reps + ") "+'</a>'+ "</b>"+"</td>"+"</tr>"; 
		});
		output += "</table>";
		$('.ufeed').animate({opacity:0}, 500, function(){
		$('.ufeed').html(output);});
		$('.ufeed').animate({opacity:1}, 500);
	});
}

function post_work(){
	json = '{"fbid":"' + fbresponse.id + '", "type":"' + document.getElementById("type").value + '","weight":"'+ document.getElementById("weight").value + '","reps":"'+ document.getElementById("reps").value + '","sets":"'+ document.getElementById("sets").value + '","date":"' + document.getElementById("date").value + '"}';	
	var stuff = new XMLHttpRequest();
	$.post("https://api.mongolab.com/api/1/databases/gymchamp/collections/workout?apiKey=507423c4e4b088be4c29ee26",json);
	document.getElementById("weight").value = "";
	document.getElementById("reps").value = "";
	document.getElementById("sets").value = "";
	window.location = "#page11";
}

function update_work(){
	

}