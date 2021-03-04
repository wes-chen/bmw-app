function clearSet(){
  console.log("cleared settings")
  window.localStorage.clear();
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
  $('.facebookLogin').append("<button class='recordButton' style='background-color: #CDFFB6'>Logged in as <span id='name'>"+response.first_name+"</span></button>");

  $(".fbrecord").css("color","white")
  $(".fbrecord").css("border-color","white")

  if (window.localStorage.getItem('helloSet') === "SET"
    && window.localStorage.getItem('urgentSet') === "SET"){
      $("#enter").css("background-color","white")
  }
}
