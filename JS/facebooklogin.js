<div id="fb-root"></div>
<script>
  window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
      appId      : '315818851859025', // App ID from the App Dashboard
      channelUrl : '//WWW.gymchampapp/channel.html', // Channel File for x-domain communication
      status     : true, // check the login status upon init?
      cookie     : true, // set sessions cookies to allow your server to access the session?
      xfbml      : true  // parse XFBML tags on this page?
    });
	
	FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    // connected
  } else if (response.status === 'not_authorized') {
    // not_authorized
		login();
  } else {
    // not_logged_in
		login();
  }
 });

    // Additional initialization code such as adding Event Listeners goes here

  };

  function login() {
    FB.login(function(response) {
        if (response.authResponse) {
            // connected
						testAPI();
        } else {
            // cancelled
        }
    });
}

function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        console.log('Good to see you, ' + response.name + '.');
    });
}
  
  
  // Load the SDK's source Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));
</script>