 // dont know what this is for
 // (function() {
 //   var e = document.createElement('script'); e.async = true;
 //       e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
 //       document.getElementById('fb-root').appendChild(e);
 //       }());
		
  window.fbAsyncInit = function() {
    FB.init({ appId: '315818851859025', 
      status: true, 
      cookie: true,
      xfbml: true,
      oauth: true});
      FB.Event.subscribe('auth.authResponseChange', handleResponseChange);  
    };

 // Load the SDK's source Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));

 function handleResponseChange(response) {
   document.body.className = response.authResponse ? 'connected' : 'not_connected';
   if (response.authResponse) {
     console.log(response);
   }
 }

   function loginUser() {    
     FB.login(function(response) { }, {scope:'email'}); 
     }

  function handleResponseChange(response) {
      document.body.className = response.authResponse ? 'connected' : 'not_connected';
      if (response.authResponse) {
        console.log(response);
        window.location = "#page11";
      }
    }

   function updateUserInfo(response) {
     FB.api('/me', function(response) {
       document.getElementById('user-info').innerHTML = '<img src="https://graph.facebook.com/' + response.id + '/picture">' + response.name;
     });
   }

 function getUserFriends() {
   FB.api('/me/friends&fields=name,id', function(response) {
     console.log('Got friends: ', response);
     if (!response.error) {
       var markup = '';
       var friends = response.data;
       for (var i=0; i < friends.length && i < 25; i++) {
         var friend = friends[i];
         markup += '<img src="' + friend.picture + '"> ' + friend.name + '<br>';
       }
       document.getElementById('user-friends').innerHTML = markup;
     }
   });
   //http://developers.facebook.com/docs/guides/mobile/web/#requests
   function sendRequest() {
	  FB.ui({
		method: 'apprequests',
		message: 'invites you to learn your friends max',
		// if we want to show certian users on the invite, possibly people with workout or other terms in their interests
		// suggestions: [id1,id2,id3] "JSON array of the suggested user ids"
	  }, 
	  function(response) {
		console.log('sendRequest response: ', response);
	  });
	}
 }

