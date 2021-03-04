function checkLoginState(){
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  })
}

function statusChangeCallback(response){
  if (response.status === 'connected'){
    console.log('Successfully logged in with Facebook');
    FB.api('/me?fields=first_name', changeUser);
  }
}
function changeUser(response){
  $('.facebookLogin').hide();
  $('#name').text(response.first_name);
  // $('#photo').attr("src", response.picture.data.url);
  // console.log(response);
}
