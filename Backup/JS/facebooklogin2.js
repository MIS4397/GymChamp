
<div id="fb-root"></div>
<script>
  (function() {
    var e = document.createElement('script'); e.async = true;
        e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
        document.getElementById('fb-root').appendChild(e);
        }());
</script>


<script>
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
</script>

<script>
 function handleResponseChange(response) {
   document.body.className = response.authResponse ? 'connected' : 'not_connected';

   if (response.authResponse) {
     console.log(response);
   }
 }
 </script>

 <div id="login">
   <p><button onClick="loginUser();">Login Facebook</button></p>
 </div>
 <div id="logout">
   <p><button  onClick="FB.logout();">Logout Facebook</button></p>
 </div>

 <script>
   function loginUser() {    
     FB.login(function(response) { }, {scope:'email'}); 
     }
 </script>

<style>
  body.connected #login { display: none; }
  body.connected #logout { display: block; }
  body.not_connected #login { display: block; }
      body.not_connected #logout { display: none; }
</style>

<script>
  function handleResponseChange(response) {
      document.body.className = response.authResponse ? 'connected' : 'not_connected';
      if (response.authResponse) {
        console.log(response);

        updateUserInfo(response);
      }
    }
 </script>

<div id="user-info"></div>
 <script>
   function updateUserInfo(response) {
     FB.api('/me', function(response) {
       document.getElementById('user-info').innerHTML = '<img src="https://graph.facebook.com/' + response.id + '/picture">' + response.name;
     });
   }
 </script>

<a href="#" onclick="getUserFriends();">Get friends</a><br>
 <div id="user-friends"></div>
 <script>
 function getUserFriends() {
   FB.api('/me/friends&fields=name,picture', function(response) {
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
 }
 </script>

