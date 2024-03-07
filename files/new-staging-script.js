const forms = document.querySelectorAll("form.email-form")

// ======== L Q S   C O N F I G ========
var clientId = "instapage_user";
var clientSecret = "zAx7jC4brSR9gxVBys6skutRnGeFzxVBys6skutRnGeFzdgdZ8";
var tokenEndpoint = "https://uat-mashery.damacgroup.com/v1/oauth/token";
// ======== E N D   O F   L Q S   C O N F I G ========

//Obtain Mashery access token
function obtainAccessToken(clientId, clientSecret, tokenEndpoint) {
    var xhr = new XMLHttpRequest();
    var params = "grant_type=client_credentials" +
                "&client_id=" + encodeURIComponent(clientId) +
                "&client_secret=" + encodeURIComponent(clientSecret)

    xhr.open("POST", tokenEndpoint, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            var accessToken = response.access_token;
            //console.log("Access Token: " + accessToken);
          	window.sessionStorage.setItem('lqsat', accessToken)
            // You can use the access token as needed
        } else if (xhr.readyState == 4) {
            console.error("Error obtaining access token. Status: " + xhr.status);
        }
    };

    xhr.send(params);
}

obtainAccessToken(clientId, clientSecret, tokenEndpoint)