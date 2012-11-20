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
	var url = "https://graph.facebook.com/me/friends&access_token=" + fbresponse.accessToken + "&callback=?";
	var friends = "[";
	$.getJSON(url,function(json){
				//loop through and within data array
		    	$.each(json.data,function(i,fb){
		   		friends += "'" + fb.id + "',";
		   	});
		friends += "]";	
		var urlfriends = mongolocation + "workout?q={'fbid':{$in:" + friends + "}}&" + key;
		$.getJSON(urlfriends,function(json){
			
		});
	});
	
}

function user_work(){
	var url = mongolocation + "workout?q={'fbid':'" + fbresponse.userID + "'}&" + key;
	var output = '<table border="1" class="activity-tbl">';
	$.getJSON(url,function(json){
			$.each(json,function(i,fb){
			output += "<tr>" + '<td class="activity">' +'<b>' + "You" +"</b>"+" "+ fb.type + "ed " +'<b class="stats">'+ fb.weight + "</b>"+" lbs "+'<a class="activity-txt">' + "(" + '<b style="stats">'+ fb.sets + "</b>"+ " sets of "+"<b>"+ fb.reps + ") "+'</a>'+ "</b>"+"</td>"+"</tr>"; 
		});
		output += "</table>";
		$('div.ufeed').html(output);
	});
}

function post_work(){
	uid = fbresponse.userID;
	var json = '{"fbid":"' + uid + '", "type":"' + document.getElementById("type").value + '","weight":"'+ document.getElementById("weight").value + '","reps":"'+ document.getElementById("reps").value + '","sets":"'+ document.getElementById("sets").value + '","date":"' + document.getElementById("date").value + '"}';	
	//$.post("https://api.mongolab.com/api/1/databases/gymchamp/collections/workout?apiKey=507423c4e4b088be4c29ee26",json);
	$.ajax( { url: "https://api.mongolab.com/api/1/databases/gymchamp/collections/workout?apiKey=507423c4e4b088be4c29ee26",
          data:  json,
          type: "POST",
          contentType: "application/json;charset=utf-8",
		  dataType: "json"} );
	document.getElementById("weight").value = "";
	document.getElementById("reps").value = "";
	document.getElementById("sets").value = "";
	window.location = "#page11";
	user_work();
	get_friends();
}

function update_work(){
	

}