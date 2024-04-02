// ======== BFF   C O N F I G ========
const username = "DigitalIntegration";
const bffEmail = "Digital.Integration@damacgroup.com";
const bffPassword = "Clj~BEh![;)AL";
const bffBaseUrlStage = "https://stg-api.damacproperties.com/";

// Function to retrieve the token from sessionStorage
async function getTokenFromLocalStorage() {
  if (window !== undefined) {
    const accessTokenForBff = sessionStorage.getItem("accessTokenForBff");
    if (accessTokenForBff) {
      return accessTokenForBff;
    } else {
      return await bffLayerTokenAccess();
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
    console.log("res", res_1, res);
    window.sessionStorage.setItem("accessTokenForBff", res_1?.data?.jwtToken);
    return res_1?.data?.jwtToken;
  } catch (error) {
    return console.error("Error fetching pricing data:", error);
  }
}

// bffLayerTokenAccess();

// Function to fetch pricing data
async function fetchPricingData(drupleId) {
  let defaultCurrency = document.querySelector("#currency").value;
  try {
    const token = await getTokenFromLocalStorage();
    const response = await fetch(
      `${bffBaseUrlStage}instapage/get-pricing/${drupleId}${
        defaultCurrency !== "AED" || !defaultCurrency && `?currency=${defaultCurrency}`
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const responseResult = await response.json();
    console.log(
      "Pricing Data:",
      responseResult,
      token,
      response,
      responseResult?.data?.data?.prices?.AED?.min
    );

    if (responseResult?.message === "success" || response?.status === 200) {
      replaceTextInElements(
        "{{CT_price}}*",
        responseResult?.data?.data?.prices?.AED?.min,
        document.body
      );
    }

    if (
      response.status === 401 ||
      responseResult?.message === "Unauthorized: Invalid token"
    ) {
      await refreshTokenAndRetry(() => fetchPricingData(drupleId));
    }
  } catch (error) {
    return console.error("Error fetching pricing data:", error);
  }
}

async function refreshTokenAndRetry(callback) {
  try {
    await bffLayerTokenAccess(); // Refresh token
    await callback();
  } catch (error) {
    console.error("Error refreshing token and retrying:", error);
  }
}

let dynamicProjectDrupleID = document.querySelector("#did_CT").value;
const drupleId = "2337";
fetchPricingData(dynamicProjectDrupleID || drupleId);
// ======== BFF   C O N F I G ========

// ======================== UPDATE PRICES AFTER TAKING FROM BFF ================================
function replaceTextInElements(oldText, newText, element) {
  // If the element is a text node, perform replacement
  if (element.nodeType === Node.TEXT_NODE) {
    element.nodeValue = element.nodeValue.replace(
      new RegExp(oldText, "g"),
      newText
    );
  }
  // If the element has child nodes, recursively process them
  else if (element.hasChildNodes()) {
    var childNodes = element.childNodes;
    for (var i = 0; i < childNodes.length; i++) {
      replaceTextInElements(oldText, newText, childNodes[i]);
    }
  }
}

//SAMPLE CALL
// Call the function to replace text in the entire document body
// replaceTextInElements('old string', 'new string', document.body);
// ======================== UPDATE PRICES AFTER TAKING FROM BFF ================================
