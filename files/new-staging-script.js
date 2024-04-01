// ======== BFF   C O N F I G ========
const username = "DigitalIntegration";
const bffEmail = "Digital.Integration@damacgroup.com";
const bffPassword = "Clj~BEh![;)AL";
const bffBaseUrlStage = 'https://stg-api.damacproperties.com/' 

// Function to retrieve the token from sessionStorage
function getTokenFromLocalStorage() {
  if (window !== undefined) {
    const accessTokenForBff = sessionStorage.getItem('accessTokenForBff')
    if(accessTokenForBff) {
      return accessTokenForBff
    } else {
      return bffLayerTokenAccess() // Return the promise
    }
  }
  return;
}

async function bffLayerTokenAccess() {
  const res = await fetch(`${bffBaseUrlStage}auth/get-token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: bffEmail,
      password: bffPassword,
    })
  });
  const res_1 = await res.json();
  console.log("res", res_1);
  window.sessionStorage.setItem('accessTokenForBff', res_1?.token);
  return res_1.token;
}

// Function to fetch pricing data
// function fetchPricingData(drupleId) {
//   return getTokenFromLocalStorage().then(token => {
//     return fetch(`${bffBaseUrlStage}/instapage/get-pricing/${drupleId}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Pricing Data:', data);
//       // Handle pricing data here
//     })
//     .catch(error => console.error('Error fetching pricing data:', error));
//   });
// }

// // Example usage:
// const drupleId = 'your-id';
// fetchPricingData(drupleId);
// ======== BFF   C O N F I G ========