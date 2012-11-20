curl -F 'access_token=...' \
     -F 'message=Hello, Reid. I like this new API.' \
     https://graph.facebook.com/reid/feed
	 
	 curl -F 'access_token=...' \
     https://graph.facebook.com/313449204401/likes
	 
	 /PROFILE_ID/feed
	 
	 
	 <ul id="posts">
	<li>My wall post message </li>
	</ul>

$('ul#posts').prepend('My wall post message');
$('textarea#wall').val('');


	$('#shareButton').livequery("click", function () { //if user clicks on share button

       var textarea_content = $('textarea#wall').val(); // get the content of what user typed ( in textarea )

       if (textarea_content != '') { // if textarea is not empty

           var sitetitle = $('label.title').html(); // then get external site title (if there's any )

           if (sitetitle == null) {

               sitetitle = ' ';

           }

 

           var siteurl = $('label.url').html(); // get site url ( if there's any )

           if (siteurl == null) { // if no value retrieved

               siteurl = ' '; //set to blank to prevent 'null' or 'undefined' displayed on page

           }

           var sitedesc = $('label.desc').html(); // get external site description ( if there's any)

           if (sitedesc == null) { // if no value retrieved

               sitedesc = ' '; //set to blank to prevent 'null' or 'undefined' displayed on page

           }

           var current_image_id = $('input#current_img').val(); // get the current image thumbnail id (if there's any)

           // we need that id to post the correct image chosen by user in  wall post

           if (current_image_id != '') { //make sure id is retrieved successfully

               var current_image_url = $("img#" + current_image_id).attr("src"); // get the current image displayed in thumbnail url in "src" tag

               if (current_image_url != '') { //if there's an image url

                   var image_html = '<div class="img_attachment"> <img class="external_pic" width="90" height="67"  src="' + current_image_url + '">'; // prepare image url 'embeded with appropriate html

               } else {

                   var image_html = ''; //No image to display ( it means that no image url was retrieved from external website , ( ignoring <div class = 'img_attachement> .. </div>

               }

           } else {

               var image_html = ''; // set to nothing

           }

 

           var wall_post = '<li> <img src="image/avatar.jpg" class="avatar">    <div class="status">     <h2><a href="#" target="_blank">Hyder Abbass</a></h2>  <p class="message">' + textarea_content + '</p> ' + image_html + '<div class="data"><p class="name"><a href="' + siteurl + '" target="_blank">' + sitetitle + '</a></p><p class="caption">' + siteurl + '</p><p class="description">' + sitedesc + '</p></div></div> </div><p class="likes">5 hours ago ·            100 Likes </p></li>';

     var message_wall = $('#message_wall').attr('value');

 

           $.ajax({

               type: "GET",

               url: "insert.php",

               data: "message_wall=" + wall_post,

               success: function () {

                   $('ul#posts').prepend(wall_post);

 

               }

           });

 

           //Add the prepared html to add in div with id = wallz

           //After adding the post wall ,

           $('textarea#wall').val(''); // remove text in the textarea

           $('#ajax_content').empty(); // empty the div with id = ajax_content ( contains previous content fetched via ajax )

           $('#fetched_data').hide(); // hide the div

           $('#ajax_flag').val(0); //reset  this to zero

       } else {

           alert('Enter some text ! '); // just in case some morons try to click on share witout writing anything :)

       }

 

   });
   
   
   
   
   var url = "https://graph.facebook.com/me/feed";


 $.ajax({
           crossDomain: true,
           data: { access_token: token, message: text  },
           dataType: "jsonp",
           url: url,
           type: 'POST',
           success: function (data) {
                   if (callback) {
                       var isOK = (data && data.id && !data.error);
                       callback(isOK, data);
                   }
               },
           error: function (data, e1, e2) {

                   }
  });
  
  
  
  
  
  

