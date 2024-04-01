// ======== BFF   C O N F I G ========
const username = "DigitalIntegration";
const bffEmail = "Digital.Integration@damacgroup.com";
const bffPassword = "Clj~BEh![;)AL";
const bffBaseUrlStage = "https://stg-api.damacproperties.com/";

// Function to retrieve the token from sessionStorage
function getTokenFromLocalStorage() {
  if (window !== undefined) {
    const accessTokenForBff = sessionStorage.getItem("accessTokenForBff");
    if (accessTokenForBff) {
      return accessTokenForBff;
    } else {
      return;
    }
  }
}

async function bffLayerTokenAccess() {
  try {
    const res = await fetch(`${bffBaseUrlStage}auth/get-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: bffEmail,
        password: bffPassword,
      }),
    });
    const res_1 = await res.json();
    console.log("res", res_1);
    window.sessionStorage.setItem("accessTokenForBff", res_1?.token);
    return res_1.token;
  } catch (error) {
    return console.error("Error fetching pricing data:", error);
  }
}

bffLayerTokenAccess();

// Function to fetch pricing data
async function fetchPricingData(drupleId) {
  return getTokenFromLocalStorage().then(async (token) => {
    try {
      const response = await fetch(
        `${bffBaseUrlStage}/instapage/get-pricing/${drupleId}?currency=PKR`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log("Pricing Data:", data);
    } catch (error) {
      return console.error("Error fetching pricing data:", error);
    }
  });
}

// Example usage:
const drupleId = "2337";
fetchPricingData(drupleId);
// ======== BFF   C O N F I G ========
