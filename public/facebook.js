function clearSet(){
  console.log("cleared settings")
  window.localStorage.clear();
  window.localStorage.setItem('muted', "FALSE");

  var source = document.getElementById("descriptiontemplate").innerHTML;
  // compile the template
  var template = Handlebars.compile(source);
  // execute the compiled template and print the output to the console
  var context = {
    descriptions: [{
        description: "Get message notifications with sounds unique to each user."
      },
      {
        description: "Never miss an urgent message again."
      }
    ]
  };
  html = template(context);
  $("#descriptionarea").append(html);
}

function checkLoginState(){
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  })
}

function statusChangeCallback(response){
  if (response.status === 'connected'){
    console.log('Successfully logged in with Facebook');
    window.localStorage.setItem('fbSet', "SET");
    FB.api('/me?fields=first_name', changeUser);
  }
}
function changeUser(response){
  $('.fb-login-button').hide();
  console.log(response.first_name);
  if($('#name').length === 0){
    $('.facebookLogin').append("<button class='recordButton' style='background-color: #CDFFB6'>Logged in as <span id='name'>"+response.first_name+"</span></button>");
  }

  $(".fbrecord").css("color","white")
  $(".fbrecord").css("border-color","white")

  if (window.localStorage.getItem('helloSet') === "SET"
    && window.localStorage.getItem('urgentSet') === "SET"){
      $("#enter").css("background-color","white")
  }
}
