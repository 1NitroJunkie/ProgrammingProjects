var SERVER_URL = 'http://140.184.132.239:3000';

if (!sessionStorage) {
  alert(
    'Warning: Your browser does not support features required for this application, please consider upgrading.'
  );
}

/* Adds given text value to the password text 
 * field
 */
function addValueToPassword(button) {
  var currVal = $("#passcode").val();
  if (button == "bksp") {
    $("#passcode").val(currVal.substring(0,
      currVal.length - 1));
  } else {
    $("#passcode").val(currVal.concat(button));
  }
}

/* On the main page, after password entry, directs
 * user to main page, legal disclaimer if they
 * have not yet agreed to it, or user entry page
 * if they have not yet completed their user info.
 */
$("#btnEnter").click(function () {
  var loginCredentials = {email: $("#email").val(),
  password: $("#passcode").val()};
  $.post(SERVER_URL + '/login',
    loginCredentials,
    function (data) {
      if (data && data.email ==
        loginCredentials.email) {
        sessionStorage.password = $(
          "#passcode").val();
        sessionStorage.user = JSON.stringify(
          data);
        if (!data.agreedToLegal) {
          return $.mobile.changePage(
            "#legalNotice");
        }
        $.post(SERVER_URL + '/getData',
          loginCredentials,
          function (data) {
            sessionStorage.tbData =
              JSON.stringify(data);
            $.mobile.changePage(
              "#pageMenu");
          }).fail(function (error) {
          alert(error.responseText);
        })
      } else
        { 
          Number = password.length;
          while(Number > 0)
          {
            addValueToPassword("bksp");
            Number--;
          }
          alert('An error occurred logging user in.');
        }
    }).fail(function (error) {
    alert(error.responseText);
  });
});

/* Data that the user has agreed to the legal
 * disclaimer on this device/browser
 */
$("#noticeYes").click(function () {
  var user = JSON.parse(sessionStorage.user);
  user.agreedToLegal = 1; // True
  user.password = sessionStorage.password;
  $.post(SERVER_URL + '/updateUser', user,
    function (data) {
      sessionStorage.user = JSON.stringify(
        user);
      return $.mobile.changePage(
        "#pageMenu");
    }).fail(function (error) {
    alert(error.responseText);
  });
});