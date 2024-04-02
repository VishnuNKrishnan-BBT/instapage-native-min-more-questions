// ======== M A N U A L   S W I T C H E S ========
const sendToLQS1 = true
const sendToLQS2 = true
// ======== E N D   O F   M A N U A L   S W I T C H E S ========




// ======== L Q S 1.0   C O N F I G ========
const lqs1EndPoint = "https://lqsapp.damacgroup.com/api/importedleads";
const lqs1authKey = "newiuw3ujdjudqoeneoie1E";
// ======== E N D   O F   L Q S 1.0   C O N F I G ========




// ======== L Q S 2.0   C O N F I G ========
const lqs2clientId = "instapage_user";
const lqs2clientSecret = "zAx7jC4brSR9gxVBys6skutRnGeFzxVBys6skutRnGeFzdgdZ8";
const lqs2tokenEndpoint = "https://uat-mashery.damacgroup.com/v1/oauth/token";
const lqs2leadEndpoint = "https://uat-mashery.damacgroup.com/v1/lqs/redis";
// ======== E N D   O F   L Q S 2.0   C O N F I G ========



// ======== L Q S 2.0   F U N C T I O N S ========
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




//Perform a POST request. Send the given payload (data parameter) to LQS (Mashery TIBCO)
const pushToNewLQS = data => {
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('lqsat')}`
    }
  
    console.log(data)
  
    const requestBody = JSON.stringify(data)
  
    // Using the fetch API
    fetch(lqs2leadEndpoint, {
      method: 'POST',
      headers: headers,
      body: requestBody,
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(`Error: ${response.status} - ${response.statusText}`)
        }
      })
      .then(data => {
        console.log('Success:', data)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }
// ======== E N D   O F   F U N C T I O N S ========





// ======== L E A D   S U B M I S S I O N   H A N D L I N G ========
jQuery = $;
let phoneInput;
let titleInput;
let firstNameInput;
let lastNameInput;
let emailInput;
let mrInput;
let msInput;
let mrsInput;
let privacyInput;
let newsInput;
let websiteLanguage;
let emailError;
let phoneError;
let newsAndOffers;
let acceptPrivacyPolicy;
let lookingTo;
let invest;
let buyaHome;
let workAtDamac;
let iAmAJobSeeker;
let exploringDamac;
let propertyTypePreference;
let villaHouse;
let apartmentFlat;

let bedroomCountPreference;
let studio;
let oneBr;
let twoBr;
let threeBr;
let fourPlusBr;
let budgetRangePreference;
let uptoOneM;
let oneMtoTwoM;
let twoMtoFiveM;
let fiveMPlus;

let whenToBuy;
let daysThirty;
let daysNinety;
let immediately;
let withinThreeMonths;
let withinSixMonths;
let stillConsidering;

let btntext;
let labtext;
let contacted;
let sms;
let whatsapp;
let preferredLanguageInput
websiteLanguage = $("input[name='websiteLanguage']").val();
//console.log(websiteLanguage);
document.addEventListener("DOMContentLoaded", async function () {
  // _Translate.set( original in English, translated );
  if (websiteLanguage == "EN") {
    _Translate.set("Processing...", "Processing...");
    _Translate.set("Please Fix These Errors", "Please Fix These Errors");
    _Translate.set("is not valid", "is not valid");
    _Translate.set("is required", "is required");
    _Translate.set("starts with @ sign", "starts with @ sign");
    _Translate.set("is missing @ sign", "is missing @ sign");
    _Translate.set("contains repeated dots", "contains repeated dots");
    _Translate.set("starts with a dot", "starts with a dot");
    _Translate.set("domain is missing", "domain is missing");
    _Translate.set("domain starts with a dot", "domain starts with a dot");
    _Translate.set("domain is not valid", "domain is not valid");
    _Translate.set("domain ends with a dot", "domain ends with a dot");
    phoneInput = "Phone";
    titleInput = "Title";
    firstNameInput = "First Name";
    lastNameInput = "Last Name";
    emailInput = "Email";
    mrInput = "Mr.";
    msInput = "Ms.";
    mrsInput = "Mrs.";
    newsInput = "IÃ¢â‚¬â„¢d like to hear about news and offers";
    privacyInput = "IÃ¢â‚¬â„¢ve read and agreed to the Privacy Policy";
    phoneError = "Please enter a valid Phone number";
    emailError = "EnterÃ‚ aÃ‚ validÃ‚ email";
    newsAndOffers = "News And Offers";
    acceptPrivacyPolicy = "Accept Privacy Policy";
    lookingTo = "What are you looking to do today?";
    invest = "Invest";
    buyaHome = "Buy a home";
    workAtDamac = "Work @ DAMAC";
    iAmAJobSeeker = "I am a job seeker";
    exploringDamac = "I am just exploring";
    propertyTypePreference = "What kind of property interests you?";
    villaHouse = "Villa/House";
    apartmentFlat = "Apartment/Flat";

    bedroomCountPreference = "How many bedrooms do you need?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "What is your budget range?";
    uptoOneM = "Up to AED 1M";
    oneMtoTwoM = "AED 1M to AED 2M";
    twoMtoFiveM = "AED 2M to AED 5M";
    fiveMPlus = "Above AED 5M";

    whenToBuy = "When are you planning to make your purchase?";
    daysThirty = "Within 30 days";
    daysNinety = "Within 90 days";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "CLICK HERE";
    labtext = "For more on other DAMAC Properties";
    contacted = "I can be contacted via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "AR") {
    _Translate.set("Processing...", "Ã˜Â¬Ã˜Â§Ã˜Â±Ã™Å  Ã˜Â§Ã™â€žÃ˜Â¹Ã™â€¦Ã™â€ž...");
    _Translate.set(
      "Please Fix These Errors",
      "Ã˜Â§Ã™â€žÃ˜Â±Ã˜Â¬Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â£Ã™Æ’Ã˜Â¯ Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â®Ã˜Â·Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â§Ã™â€žÃ™Å Ã˜Â© ",
    );
    _Translate.set("is not valid", "Ã˜ÂºÃ™Å Ã˜Â± Ã˜ÂµÃ˜Â­Ã™Å Ã˜Â­");
    _Translate.set("is required", "Ã™â€¦Ã˜Â·Ã™â€žÃ™Ë†Ã˜Â¨");
    _Translate.set("starts with @ sign", "Ã˜ÂªÃ˜Â¨Ã˜Â¯Ã˜Â£ Ã˜Â¨Ã˜Â¹Ã™â€žÃ˜Â§Ã™â€¦Ã˜Â© @");
    _Translate.set("is missing @ sign", "Ã˜Â¹Ã™â€žÃ˜Â§Ã™â€¦Ã˜Â© @ Ã˜ÂºÃ™Å Ã˜Â± Ã™â€¦Ã™Ë†Ã˜Â¬Ã™Ë†Ã˜Â¯Ã˜Â©");
    _Translate.set("contains repeated dots", "Ã™Å Ã˜Â­Ã˜ÂªÃ™Ë†Ã™Å  Ã˜Â¹Ã™â€žÃ™â€° Ã™â€ Ã™â€šÃ˜Â§Ã˜Â· Ã™â€¦Ã™Æ’Ã˜Â±Ã˜Â±Ã˜Â©");
    _Translate.set("starts with a dot", "Ã™Å Ã˜Â¨Ã˜Â¯Ã˜Â£ Ã˜Â¨Ã™â€ Ã™â€šÃ˜Â·Ã˜Â©");
    _Translate.set("domain is missing", "Ã˜Â§Ã™â€žÃ˜Â®Ã˜Â§Ã™â€ Ã˜Â© Ã™ÂÃ˜Â§Ã˜Â±Ã˜ÂºÃ˜Â©");
    _Translate.set("domain starts with a dot", "Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â¹Ã™â€žÃ™Ë†Ã™â€¦Ã˜Â§Ã˜Âª Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â®Ã˜Â§Ã™â€ Ã˜Â© Ã˜ÂªÃ˜Â¨Ã˜Â¯Ã˜Â£ Ã˜Â¨Ã™â€ Ã™â€šÃ˜Â·Ã˜Â©");
    _Translate.set("domain is not valid", "Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â¹Ã™â€žÃ™Ë†Ã™â€¦Ã˜Â§Ã˜Âª Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â®Ã˜Â§Ã™â€ Ã˜Â© Ã˜ÂºÃ™Å Ã˜Â± Ã˜ÂµÃ˜Â­Ã™Å Ã˜Â­Ã˜Â©");
    _Translate.set("domain ends with a dot", "Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â¹Ã™â€žÃ™Ë†Ã™â€¦Ã˜Â§Ã˜Âª Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â®Ã˜Â§Ã™â€ Ã˜Â© Ã˜ÂªÃ™â€ Ã˜ÂªÃ™â€¡Ã™Å  Ã˜Â¨Ã™â€ Ã™â€šÃ˜Â·Ã˜Â©");
    phoneInput = "Ã™â€¡Ã˜Â§Ã˜ÂªÃ™Â";
    let data = $('input[name="' + phoneInput + '"]');
    if (data.length > 0) {
      phoneInput = "Ã™â€¡Ã˜Â§Ã˜ÂªÃ™Â";
    } else {
      phoneInput = "Ã˜Â§Ã™â€žÃ™â€¡Ã˜Â§Ã˜ÂªÃ™Â";
    }
    //console.log("data...", data);
    titleInput = "Ã˜Â§Ã™â€žÃ™â€žÃ™â€šÃ˜Â¨";
    firstNameInput = "Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â³Ã™â€¦ Ã˜Â§Ã™â€žÃ˜Â£Ã™Ë†Ã™â€ž";
    lastNameInput = "Ã˜Â§Ã˜Â³Ã™â€¦ Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â§Ã˜Â¦Ã™â€žÃ˜Â©";
    emailInput = "Ã˜Â§Ã™â€žÃ˜Â¨Ã˜Â±Ã™Å Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜Â¥Ã™â€žÃ™Æ’Ã˜ÂªÃ˜Â±Ã™Ë†Ã™â€ Ã™Å ";
    mrInput = "Ã˜Â§Ã™â€žÃ˜Â³Ã™Å Ã˜Â¯";
    msInput = "Ã˜Â§Ã™â€žÃ˜Â¢Ã™â€ Ã˜Â³Ã˜Â©";
    mrsInput = "Ã˜Â§Ã™â€žÃ˜Â³Ã™Å Ã˜Â¯Ã˜Â©";
    newsInput = "Ã˜Â£Ã™Ë†Ã˜Â¯Ã™â€˜ Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â·Ã™â€žÃ˜Â§Ã˜Â¹ Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â®Ã˜Â¨Ã˜Â§Ã˜Â± Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â±Ã™Ë†Ã˜Â¶";
    privacyInput = "Ã™â€žÃ™â€šÃ˜Â¯ Ã™â€šÃ˜Â±Ã˜Â£Ã˜Âª Ã™Ë†Ã™Ë†Ã˜Â§Ã™ÂÃ™â€šÃ˜Âª Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â³Ã™Å Ã˜Â§Ã˜Â³Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â®Ã˜ÂµÃ™Ë†Ã˜ÂµÃ™Å Ã˜Â©";
    phoneError = "Ã˜Â£Ã˜Â¯Ã˜Â®Ã™â€ž Ã˜Â±Ã™â€šÃ™â€¦ Ã™â€¡Ã˜Â§Ã˜ÂªÃ™Â Ã˜ÂµÃ˜Â­Ã™Å Ã˜Â­";
    emailError = "Ã˜Â£Ã˜Â¯Ã˜Â®Ã™â€ž Ã˜Â¨Ã˜Â±Ã™Å Ã˜Â¯ Ã˜Â¥Ã™â€žÃ™Æ’Ã˜ÂªÃ˜Â±Ã™Ë†Ã™â€ Ã™Å  Ã˜ÂµÃ˜Â­Ã™Å Ã˜Â­";
    newsAndOffers = "Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â®Ã˜Â¨Ã˜Â§Ã˜Â± Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â±Ã™Ë†Ã˜Â¶";
    acceptPrivacyPolicy = "Ã™â€¦Ã™Ë†Ã˜Â§Ã™ÂÃ™â€š Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â´Ã˜Â±Ã™Ë†Ã˜Â· Ã˜Â§Ã™â€žÃ˜Â®Ã˜ÂµÃ™Ë†Ã˜ÂµÃ™Å Ã˜Â©";
    lookingTo = "Ã™â€¡Ã™â€ž Ã˜ÂªÃ˜Â¨Ã˜Â­Ã˜Â« Ã˜Â¹Ã™â€ ";
    invest = "Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â³Ã˜ÂªÃ˜Â«Ã™â€¦Ã˜Â§Ã˜Â±";
    buyaHome = "Ã˜Â´Ã˜Â±Ã˜Â§Ã˜Â¡ Ã™â€¦Ã™â€ Ã˜Â²Ã™â€ž";
    workAtDamac = "Ã˜Â§Ã™â€žÃ˜Â¹Ã™â€¦Ã™â€ž Ã™â€žÃ˜Â¯Ã™â€° Ã˜Â¯Ã˜Â§Ã™â€¦Ã˜Â§Ã™Æ’";
    iAmAJobSeeker = "I am a job seeker";
    exploringDamac = "I am just exploring";
    propertyTypePreference = "What kind of property interests you?";
    villaHouse = "Villa/House";
    apartmentFlat = "Apartment/Flat";

    bedroomCountPreference = "How many bedrooms do you need?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "What is your budget range?";
    uptoOneM = "Up to AED 1M";
    oneMtoTwoM = "AED 1M to AED 2M";
    twoMtoFiveM = "AED 2M to AED 5M";
    fiveMPlus = "Above AED 5M";

    whenToBuy = "Ã™â€¦Ã˜Â§ Ã™â€¡Ã™Å  Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â¯Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ™Å  Ã˜Â³Ã˜ÂªÃ˜Â³Ã˜ÂªÃ˜ÂºÃ˜Â±Ã™â€šÃ™â€¡Ã˜Â§ Ã™â€žÃ˜Â´Ã˜Â±Ã˜Â§Ã˜Â¡ Ã™â€¦Ã™â€ Ã˜Â²Ã™â€žÃ˜Å¸";
    daysThirty = "Ã˜Â®Ã™â€žÃ˜Â§Ã™â€ž 30 Ã™Å Ã™Ë†Ã™â€¦";
    daysNinety = "Ã˜Â®Ã™â€žÃ˜Â§Ã™â€ž 90 Ã™Å Ã™Ë†Ã™â€¦";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "Ã˜Â§Ã˜Â¶Ã˜ÂºÃ˜Â· Ã™â€¡Ã™â€ Ã˜Â§";
    labtext = "Ã™â€žÃ™â€¦Ã˜Â¹Ã˜Â±Ã™ÂÃ˜Â© Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â²Ã™Å Ã˜Â¯ Ã˜Â¹Ã™â€  Ã˜Â¹Ã™â€šÃ˜Â§Ã˜Â±Ã˜Â§Ã˜Âª Ã˜Â¯Ã˜Â§Ã™â€¦Ã˜Â§Ã™Æ’ Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â®Ã˜Â±Ã™â€°";
    contacted = "Ã˜Â£Ã™ÂÃ™Ë†Ã˜Â§Ã™ÂÃ™â€š Ã˜Â£Ã™â€  Ã™Å Ã˜ÂªÃ™â€¦Ã™â€˜ Ã˜Â§Ã™â€žÃ˜ÂªÃ™Ë†Ã˜Â§Ã˜ÂµÃ™â€ž Ã˜Â¨";
    sms = "Ã˜Â±Ã˜Â³Ã˜Â§Ã™â€žÃ˜Â© Ã™â€ Ã˜ÂµÃ™Å Ã™â€˜Ã˜Â©";
    whatsapp = "Ã˜ÂªÃ˜Â·Ã˜Â¨Ã™Å Ã™â€š Ã™Ë†Ã˜Â§Ã˜ÂªÃ˜Â³Ã˜Â§Ã˜Â¨";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "FR") {
    _Translate.set("Processing...", "En cours de traitement...");
    _Translate.set("Please Fix These Errors", "Veuillez corriger ces erreurs");
    _Translate.set("is not valid", "nÃ¢â‚¬â„¢est pas valide");
    _Translate.set("is required", "est un ÃƒÂ©lÃƒÂ©ment requis");
    _Translate.set("starts with @ sign", "commence par une @");
    _Translate.set("is missing @ sign", "Le signe @ est manquant");
    _Translate.set(
      "contains repeated dots",
      "contient plusieurs points consÃƒÂ©cutifs",
    );
    _Translate.set("starts with a dot", "commence par un point");
    _Translate.set("domain is missing", "Le domaine est manquant");
    _Translate.set(
      "domain starts with a dot",
      "Le domaine commence par un point",
    );
    _Translate.set("domain is not valid", "Le domaine nÃ¢â‚¬â„¢est pas valide");
    _Translate.set("domain ends with a dot", "Le domaine finit par un point");
    phoneInput = "tÃƒÂ©lÃƒÂ©phoner";
    let data = $('input[name="' + phoneInput + '"]');
    //console.log("data...", data);
    if (data.length > 0) {
      phoneInput = "tÃƒÂ©lÃƒÂ©phoner";
    } else {
      phoneInput = "TÃƒÂ©lÃƒÂ©phone";
    }
    titleInput = "Titre";
    firstNameInput = "PrÃƒÂ©nom";
    lastNameInput = "Nom";
    emailInput = "Adresse e-mail";
    mrInput = "M";
    msInput = "Melle";
    mrsInput = "Mme";
    newsInput = "Je souhaite recevoir les informations et les offres";
    privacyInput = "JÃ¢â‚¬â„¢ai lu et jÃ¢â‚¬â„¢accepte la politique de confidentialitÃƒÂ©";
    phoneError = "Veuillez saisir un numÃƒÂ©ro de tÃƒÂ©lÃƒÂ©phone valide";
    emailError = "Saisir une adresse e-mail valide";
    newsAndOffers = "ActualitÃƒÂ©s et offres";
    acceptPrivacyPolicy = "Accepter la politique de confidentialitÃƒÂ©";
    lookingTo = "Souhaitez-vous";
    invest = "Investir";
    buyaHome = "Acheter une maison";
    workAtDamac = "Travailler @ DAMAC";
    iAmAJobSeeker = "I am a job seeker";
    exploringDamac = "I am just exploring";
    propertyTypePreference = "What kind of property interests you?";
    villaHouse = "Villa/House";
    apartmentFlat = "Apartment/Flat";

    bedroomCountPreference = "How many bedrooms do you need?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "What is your budget range?";
    uptoOneM = "Up to AED 1M";
    oneMtoTwoM = "AED 1M to AED 2M";
    twoMtoFiveM = "AED 2M to AED 5M";
    fiveMPlus = "Above AED 5M";

    whenToBuy = "Quand envisagez-vous dÃ¢â‚¬â„¢acheter ?";
    daysThirty = "Dans 30 jours";
    daysNinety = "Dans 90 jours";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "Cliquer ici";
    labtext = "Pour en savoir plus sur les autres propriÃƒÂ©tÃƒÂ©s DAMAC";
    contacted = "I can be contacted via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "SP") {
    _Translate.set("Processing...", "Procesando...");
    _Translate.set("Please Fix These Errors", "Solucione estos errores");
    _Translate.set("is not valid", "no es vÃƒÂ¡lido");
    _Translate.set("is required", "se requiere");
    _Translate.set("starts with @ sign", "empieza con un signo @");
    _Translate.set("is missing @ sign", "falta el signo @");
    _Translate.set("contains repeated dots", "contiene puntos repetidos");
    _Translate.set("starts with a dot", "empieza con un punto");
    _Translate.set("domain is missing", "falta el dominio");
    _Translate.set(
      "domain starts with a dot",
      "el dominio empieza con un punto",
    );
    _Translate.set("domain is not valid", "el domino no es vÃƒÂ¡lido");
    _Translate.set("domain ends with a dot", "el dominio termina con un punto");
    phoneInput = "TelÃƒÂ©fono";
    titleInput = "Tratamiento";
    firstNameInput = "Nombre";
    lastNameInput = "Apellido";
    emailInput = "Correo electrÃƒÂ³nico";
    mrInput = "Sr.";
    msInput = "Srta.";
    mrsInput = "Sra.";
    newsInput = "Me gustarÃƒÂ­a recibir noticias y ofertas";
    privacyInput = "He leÃƒÂ­do y acepto la PolÃƒÂ­tica de privacidad";
    phoneError = "Escriba un nÃƒÂºmero de telÃƒÂ©fono vÃƒÂ¡lido";
    emailError = "Escriba un correo electrÃƒÂ³nico vÃƒÂ¡lido";
    newsAndOffers = "Noticias y ofertas";
    acceptPrivacyPolicy = "Aceptar la polÃƒÂ­tica de privacidad";
    lookingTo = "EstÃƒÂ¡ pensando en?";
    invest = "Invertir";
    buyaHome = "Comprar un inmueble";
    workAtDamac = "Trabajar en DAMAC";
    iAmAJobSeeker = "I am a job seeker";
    exploringDamac = "I am just exploring";
    propertyTypePreference = "What kind of property interests you?";
    villaHouse = "Villa/House";
    apartmentFlat = "Apartment/Flat";

    bedroomCountPreference = "How many bedrooms do you need?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "What is your budget range?";
    uptoOneM = "Up to AED 1M";
    oneMtoTwoM = "AED 1M to AED 2M";
    twoMtoFiveM = "AED 2M to AED 5M";
    fiveMPlus = "Above AED 5M";

    whenToBuy = "Ã‚Â¿CuÃƒÂ¡ndo piensa comprarlo?";
    daysThirty = "En 30Ã‚ dÃƒÂ­as";
    daysNinety = "En 90Ã‚ dÃƒÂ­as";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "HAGA CLIC AQUÃƒÂ";
    labtext = "Para obtener mÃƒÂ¡s informaciÃƒÂ³n sobre otras propiedades DAMAC";
    contacted = "I can be contacted via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "HE") {
    _Translate.set("Processing...", "Ã—Å¾Ã—Â¢Ã—â€˜Ã—â€œ...");
    _Translate.set("Please Fix These Errors", "Ã— Ã—Â Ã—Å“Ã—ÂªÃ—Â§Ã—Å¸ Ã—ÂÃ—Âª Ã—â€Ã—Â©Ã—â€™Ã—â„¢Ã—ÂÃ—â€¢Ã—Âª Ã—â€Ã—â€˜Ã—ÂÃ—â€¢Ã—Âª");
    _Translate.set("is not valid", "Ã—Å“Ã—Â Ã—ÂªÃ—Â§Ã—â„¢Ã—Å¸");
    _Translate.set("is required", "Ã—â€”Ã—â€¢Ã—â€˜Ã—â€");
    _Translate.set("starts with @ sign", "Ã—Å¾Ã—ÂªÃ—â€”Ã—â„¢Ã—Å“ Ã—â€˜Ã—Â¡Ã—â„¢Ã—Å¾Ã—Å¸ @");
    _Translate.set("is missing @ sign", "Ã—â€”Ã—Â¡Ã—Â¨ Ã—Â¡Ã—â„¢Ã—Å¾Ã—Å¸ @");
    _Translate.set("contains repeated dots", "Ã—Å¾Ã—â€ºÃ—â„¢Ã—Å“ Ã—Å¾Ã—Â¡Ã—Â¤Ã—Â¨ Ã— Ã—Â§Ã—â€¢Ã—â€œÃ—â€¢Ã—Âª Ã—â€˜Ã—Â¨Ã—Â¦Ã—Â£");
    _Translate.set("starts with a dot", "Ã—Å¾Ã—ÂªÃ—â€”Ã—â„¢Ã—Å“ Ã—â€˜Ã— Ã—Â§Ã—â€¢Ã—â€œÃ—â€");
    _Translate.set("domain is missing", "Ã—â€”Ã—Â¡Ã—Â¨ Ã—Â©Ã—Â Ã—â€œÃ—â€¢Ã—Å¾Ã—â„¢Ã—â„¢Ã—Å¸");
    _Translate.set("domain starts with a dot", "Ã—Â©Ã—Â Ã—â€Ã—â€œÃ—â€¢Ã—Å¾Ã—â„¢Ã—â„¢Ã—Å¸ Ã—Å¾Ã—ÂªÃ—â€”Ã—â„¢Ã—Å“ Ã—â€˜Ã— Ã—Â§Ã—â€¢Ã—â€œÃ—â€");
    _Translate.set("domain is not valid", "Ã—Â©Ã—Â Ã—â€Ã—â€œÃ—â€¢Ã—Å¾Ã—â„¢Ã—â„¢Ã—Å¸ Ã—ÂÃ—â„¢Ã— Ã—â€¢ Ã—ÂªÃ—Â§Ã—â„¢Ã—Å¸");
    _Translate.set("domain ends with a dot", "Ã—Â©Ã—Â Ã—â€Ã—â€œÃ—â€¢Ã—Å¾Ã—â„¢Ã—â„¢Ã—Å¸ Ã—Å¾Ã—Â¡Ã—ÂªÃ—â„¢Ã—â„¢Ã—Â Ã—â€˜Ã— Ã—Â§Ã—â€¢Ã—â€œÃ—â€");
    phoneInput = "Ã—Å¾Ã—â€ºÃ—Â©Ã—â„¢Ã—Â¨ Ã—ËœÃ—Å“Ã—Â¤Ã—â€¢Ã—Å¸";
    titleInput = "Ã—ÂªÃ—â€¢Ã—ÂÃ—Â¨";
    firstNameInput = "Ã—Â©Ã—Â Ã—Â¤Ã—Â¨Ã—ËœÃ—â„¢ Ã—ÂªÃ—Â§Ã— Ã—â„¢";
    lastNameInput = "Ã—Â©Ã—Â Ã—Å¾Ã—Â©Ã—Â¤Ã—â€”Ã—â€ Ã—ÂªÃ—Â§Ã— Ã—â„¢";
    emailInput = "Ã—â€ºÃ—ÂªÃ—â€¢Ã—â€˜Ã—Âª Ã—ÂÃ—â„¢Ã—Å¾Ã—â„¢Ã—â„¢Ã—Å“";
    mrInput = ".MR";
    msInput = ".MS";
    mrsInput = ".MRS";
    newsInput = "Ã—â€˜Ã—Â¨Ã—Â¦Ã—â€¢Ã— Ã—â„¢ Ã—Å“Ã—Â©Ã—Å¾Ã—â€¢Ã—Â¢ Ã—Â¢Ã—Å“ Ã—â€”Ã—â€œÃ—Â©Ã—â€¢Ã—Âª Ã—â€¢Ã—Å¾Ã—â€˜Ã—Â¦Ã—Â¢Ã—â„¢Ã—Â";
    privacyInput = "Ã—Â§Ã—Â¨Ã—ÂÃ—ÂªÃ—â„¢ Ã—â€¢Ã—â€Ã—Â¡Ã—â€ºÃ—Å¾Ã—ÂªÃ—â„¢ Ã—Å“Ã—Å¾Ã—â€œÃ—â„¢Ã— Ã—â„¢Ã—â€¢Ã—Âª Ã—â€Ã—Â¤Ã—Â¨Ã—ËœÃ—â„¢Ã—â€¢Ã—Âª";
    phoneError = "Ã— Ã—Â Ã—Å“Ã—â€Ã—â€“Ã—â„¢Ã—Å¸ Ã—Å¾Ã—Â¡Ã—Â¤Ã—Â¨ Ã—ËœÃ—Å“Ã—Â¤Ã—â€¢Ã—Å¸ Ã—ÂªÃ—Â§Ã— Ã—â„¢";
    emailError = "Ã— Ã—Â Ã—Å“Ã—â€Ã—â€“Ã—â„¢Ã—Å¸ Ã—â€ºÃ—ÂªÃ—â€¢Ã—â€˜Ã—Âª Ã—ÂÃ—â„¢Ã—Å¾Ã—â„¢Ã—â„¢Ã—Å“ Ã—ÂªÃ—Â§Ã— Ã—â„¢Ã—Âª";
    newsAndOffers = "Ã—â€”Ã—â€œÃ—Â©Ã—â€¢Ã—Âª Ã—â€¢Ã—Å¾Ã—â€˜Ã—Â¦Ã—Â¢Ã—â„¢Ã—Â";
    acceptPrivacyPolicy = "Ã—Â§Ã—â€˜Ã—Å“Ã—Âª Ã—Å¾Ã—â€œÃ—â„¢Ã— Ã—â„¢Ã—â€¢Ã—Âª Ã—â€Ã—Â¤Ã—Â¨Ã—ËœÃ—â„¢Ã—â€¢Ã—Âª";
    lookingTo = "Ã—â€Ã—ÂÃ—Â Ã—ÂÃ—ÂªÃ—Â Ã—Å¾Ã—Â¢Ã—â€¢Ã— Ã—â„¢Ã—â„¢Ã— Ã—â„¢Ã—Â";
    invest = "Ã—Å“Ã—â€Ã—Â©Ã—Â§Ã—â„¢Ã—Â¢";
    buyaHome = "Ã—Å“Ã—Â¨Ã—â€ºÃ—â€¢Ã—Â© Ã—â€˜Ã—â„¢Ã—Âª";
    workAtDamac = "Ã—Å“Ã—Â¢Ã—â€˜Ã—â€¢Ã—â€œ @ DAMAC";
    iAmAJobSeeker = "I am a job seeker";
    exploringDamac = "I am just exploring";
    propertyTypePreference = "What kind of property interests you?";
    villaHouse = "Villa/House";
    apartmentFlat = "Apartment/Flat";

    bedroomCountPreference = "How many bedrooms do you need?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "What is your budget range?";
    uptoOneM = "Up to AED 1M";
    oneMtoTwoM = "AED 1M to AED 2M";
    twoMtoFiveM = "AED 2M to AED 5M";
    fiveMPlus = "Above AED 5M";

    whenToBuy = "Ã—Å¾Ã—ÂªÃ—â„¢ Ã—ÂÃ—ÂªÃ—Â Ã—Å¾Ã—ÂªÃ—â€ºÃ— Ã— Ã—â„¢Ã—Â Ã—Å“Ã—Â¨Ã—â€ºÃ—â€¢Ã—Â©?";
    daysThirty = "Ã—ÂªÃ—â€¢Ã—Å¡ 30 Ã—â„¢Ã—â€¢Ã—Â";
    daysNinety = "Ã—ÂªÃ—â€¢Ã—Å¡ 90 Ã—â„¢Ã—â€¢Ã—Â";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "Ã—Å“Ã—â€”Ã—Â¦Ã—â€¢ Ã—â€ºÃ—ÂÃ—Å¸";
    labtext = "Ã—Å“Ã—Â¢Ã—â€¢Ã—â€œ Ã—Â¤Ã—Â¨Ã—ËœÃ—â„¢Ã—Â Ã—Â¢Ã—Å“ Ã— Ã—â€ºÃ—Â¡Ã—â„¢Ã—Â Ã—ÂÃ—â€”Ã—Â¨Ã—â„¢Ã—Â Ã—Â©Ã—Å“ Ã—â€”Ã—â€˜Ã—Â¨Ã—Âª DAMAC";
    contacted = "I can be contacted via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "CH") {
    _Translate.set("Processing...", "Ã¥Â¤â€žÃ§Ââ€ Ã¤Â¸Â­...");
    _Translate.set("Please Fix These Errors", "Ã¨Â¯Â·Ã¤Â¿Â®Ã¥Â¤ÂÃ¨Â¿â„¢Ã¤Âºâ€ºÃ©â€â„¢Ã¨Â¯Â¯");
    _Translate.set("is not valid", "Ã¦â€” Ã¦â€¢Ë†Ã¤Â¿Â¡Ã¦ÂÂ¯");
    _Translate.set("is required", "Ã¥Â¿â€¦Ã¥Â¡Â«Ã¤Â¿Â¡Ã¦ÂÂ¯");
    _Translate.set("starts with @ sign", "Ã¤Â»Â¥@Ã§Â¬Â¦Ã¥ÂÂ·Ã¥Â¼â‚¬Ã¥Â¤Â´");
    _Translate.set("is missing @ sign", "Ã§Â¼ÂºÃ¥Â°â€˜@Ã§Â¬Â¦Ã¥ÂÂ·");
    _Translate.set("contains repeated dots", "Ã¥Å’â€¦Ã¥ÂÂ«Ã©â€¡ÂÃ¥Â¤ÂÃ§Å¡â€žÃ§â€šÂ¹");
    _Translate.set("starts with a dot", "Ã¤Â»Â¥Ã§â€šÂ¹Ã¥Â¼â‚¬Ã¥Â¤Â´");
    _Translate.set("domain is missing", "Ã¥Å¸Å¸Ã¥ÂÂÃ¤Â¸Â¢Ã¥Â¤Â±");
    _Translate.set("domain starts with a dot", "Ã¥Å¸Å¸Ã¥ÂÂÃ¤Â»Â¥Ã§â€šÂ¹Ã¥Â¼â‚¬Ã¥Â¤Â´");
    _Translate.set("domain is not valid", "Ã¥Å¸Å¸Ã¥ÂÂÃ¦â€” Ã¦â€¢Ë†");
    _Translate.set("domain ends with a dot", "Ã¥Å¸Å¸Ã¥ÂÂÃ¤Â»Â¥Ã§â€šÂ¹Ã§Â»â€œÃ¥Â°Â¾");
    phoneInput = "Ã©â€ºÂ»Ã¨Â©Â±";
    titleInput = "Ã§Â¨Â±Ã¨Â¬â€š";
    firstNameInput = "Ã¥ÂÂÃ¥Â­â€”";
    lastNameInput = "Ã¥Â§â€œÃ¦Â°Â";
    emailInput = "Ã©â€ºÂ»Ã©Æ’Âµ";
    mrInput = "Ã¥â€¦Ë†Ã§â€Å¸";
    msInput = "Ã¥Â°ÂÃ¥Â§Â";
    mrsInput = "Ã¥Â¥Â³Ã¥Â£Â«";
    newsInput = "Ã¦Ë†â€˜Ã¦Â¨â€šÃ¦â€žÂÃ¦Å½Â¥Ã¦â€Â¶Ã¦â€“Â°Ã¨ÂÅ¾Ã¥â€™Å’Ã¥â€žÂªÃ¦Æ’ Ã¨Â³â€¡Ã¨Â¨Å ";
    privacyInput = "Ã¦Ë†â€˜Ã¥Â·Â²Ã©â€“Â±Ã¨Â®â‚¬Ã¤Â¸Â¦Ã¥ÂÅ’Ã¦â€žÂÃ£â‚¬Å Ã§Â§ÂÃ©Å¡Â±Ã¦â€Â¿Ã§Â­â€“Ã£â‚¬â€¹";
    phoneError = "Ã¨Â¯Â·Ã¨Â¾â€œÃ¥â€¦Â¥Ã¤Â¸â‚¬Ã¤Â¸ÂªÃ¦Å“â€°Ã¦â€¢Ë†Ã§Å¡â€žÃ§â€ÂµÃ¨Â¯ÂÃ¥ÂÂ·Ã§ Â";
    emailError = "Ã¨Â¾â€œÃ¥â€¦Â¥Ã¦Å“â€°Ã¦â€¢Ë†Ã§Å¡â€žÃ§â€ÂµÃ¥Â­ÂÃ©â€šÂ®Ã¤Â»Â¶";
    newsAndOffers = "Ã¦Å“â‚¬Ã¦â€“Â°Ã¦Â¶Ë†Ã¦ÂÂ¯Ã¥â€™Å’Ã¤Â¼ËœÃ¦Æ’ ";
    acceptPrivacyPolicy = "Ã¦Å½Â¥Ã¥Ââ€”Ã©Å¡ÂÃ§Â§ÂÃ¦â€Â¿Ã§Â­â€“";
    lookingTo = "Ã¤Â½ Ã¥ÂÂ¯Ã¥Â¸Å’Ã¦Å“â€º";
    invest = "Ã¦Å â€¢Ã¨Â³â€¡";
    buyaHome = "Ã§Â½Â®Ã¦Â¥Â­";
    workAtDamac = "Ã¥Å  Ã¥â€¦Â¥@Ã©Ââ€Ã©Â¦Â¬Ã¥â€¦â€¹Ã¥Â·Â¥Ã¤Â½Å“";
    iAmAJobSeeker = "I am a job seeker";
    exploringDamac = "I am just exploring";
    propertyTypePreference = "What kind of property interests you?";
    villaHouse = "Villa/House";
    apartmentFlat = "Apartment/Flat";

    bedroomCountPreference = "How many bedrooms do you need?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "What is your budget range?";
    uptoOneM = "Up to AED 1M";
    oneMtoTwoM = "AED 1M to AED 2M";
    twoMtoFiveM = "AED 2M to AED 5M";
    fiveMPlus = "Above AED 5M";

    whenToBuy = "Ã¤Â½ Ã¦â€°â€œÃ§Â®â€”Ã¤Â½â€¢Ã¦â„¢â€šÃ¨Â³Â¼Ã¨Â²Â·Ã¯Â¼Å¸";
    daysThirty = "30Ã¥Â¤Â©Ã¥â€¦Â§";
    daysNinety = "90Ã¥Â¤Â©Ã¥â€¦Â§";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "Ã¥Ââ€¢Ã¥â€¡Â»Ã¦Â­Â¤Ã¥Â¤â€ž";
    labtext = "Ã¦Å“â€°Ã¥â€¦Â³Ã¥â€¦Â¶Ã¤Â»â€“ DAMAC Ã¥Â±Å¾Ã¦â‚¬Â§Ã§Å¡â€žÃ¨Â¯Â¦Ã§Â»â€ Ã¤Â¿Â¡Ã¦ÂÂ¯";
    contacted = "I can be contacted via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "IT") {
    _Translate.set("Processing...", "In elaborazione...");
    _Translate.set(
      "Please Fix These Errors",
      "Si prega di correggere gli errori",
    );
    _Translate.set("is not valid", "non ÃƒÂ¨ un elemento valido");
    _Translate.set("is required", "ÃƒÂ¨ un elemento richiesto");
    _Translate.set("starts with @ sign", "inizia con il simbolo @");
    _Translate.set("is missing @ sign", "non contiene il simbolo @");
    _Translate.set("contains repeated dots", "contiene piÃƒÂ¹ punti consecutivi");
    _Translate.set("starts with a dot", "inizia con un punto");
    _Translate.set("domain is missing", "non contiene il dominio");
    _Translate.set(
      "domain starts with a dot",
      "il dominio inizia con un punto",
    );
    _Translate.set("domain is not valid", "il dominio non ÃƒÂ¨ valido");
    _Translate.set("domain ends with a dot", "il dominio termina con un punto");
    phoneInput = "Telefono";
    titleInput = "Titolo";
    firstNameInput = "Nome";
    lastNameInput = "Cognome";
    emailInput = "E-mail";
    mrInput = "Sig";
    msInput = "Sig.ra";
    mrsInput = "Sig.na";
    newsInput = "Vorrei ricevere aggiornamenti e offerte";
    privacyInput = "Ho letto e accetto lÃ¢â‚¬â„¢Informativa sulla Privacy";
    phoneError = "Si prega di inserire un numero di telefono valido";
    emailError = "Inserire un indirizzo email valido";
    newsAndOffers = "Aggiornamenti e offerte";
    acceptPrivacyPolicy = "Accettare lÃ¢â‚¬â„¢Informativa sulla Privacy";
    lookingTo = "Vorresti";
    invest = "Investire";
    buyaHome = "Acquistare una casa";
    workAtDamac = "Lavorare a @ DAMAC";
    iAmAJobSeeker = "I am a job seeker";
    exploringDamac = "I am just exploring";
    propertyTypePreference = "What kind of property interests you?";
    villaHouse = "Villa/House";
    apartmentFlat = "Apartment/Flat";

    bedroomCountPreference = "How many bedrooms do you need?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "What is your budget range?";
    uptoOneM = "Up to AED 1M";
    oneMtoTwoM = "AED 1M to AED 2M";
    twoMtoFiveM = "AED 2M to AED 5M";
    fiveMPlus = "Above AED 5M";

    whenToBuy = "Quando vorresti effettuare lÃ¢â‚¬â„¢acquisto?";
    daysThirty = "Entro 30 giorni";
    daysNinety = "Entro 90 giorni";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "Clicca qui";
    labtext = "Per saperne di piÃƒÂ¹ sugli altri immobili DAMAC";
    contacted = "I can be contacted via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "RU") {
    _Translate.set("Processing...", "Ãâ€™ ÃÂ¾ÃÂ±Ã‘â‚¬ÃÂ°ÃÂ±ÃÂ¾Ã‘â€šÃÂºÃÂµ...");
    _Translate.set("Please Fix These Errors", "ÃËœÃ‘ÂÃÂ¿Ã‘â‚¬ÃÂ°ÃÂ²Ã‘Å’Ã‘â€šÃÂµ ÃÂ¾Ã‘Ë†ÃÂ¸ÃÂ±ÃÂºÃÂ¸");
    _Translate.set("is not valid", "Ãâ€ÃÂ°ÃÂ½ÃÂ½Ã‘â€¹ÃÂµ ÃÂ½ÃÂµÃÂ´ÃÂµÃÂ¹Ã‘ÂÃ‘â€šÃÂ²ÃÂ¸Ã‘â€šÃÂµÃÂ»Ã‘Å’ÃÂ½Ã‘â€¹");
    _Translate.set("is required", "ÃÂÃÂµÃÂ¾ÃÂ±Ã‘â€¦ÃÂ¾ÃÂ´ÃÂ¸ÃÂ¼ÃÂ¾ Ã‘Æ’ÃÂºÃÂ°ÃÂ·ÃÂ°Ã‘â€šÃ‘Å’ ÃÂ´ÃÂ°ÃÂ½ÃÂ½Ã‘â€¹ÃÂµ");
    _Translate.set("starts with @ sign", "ÃÂ½ÃÂ°Ã‘â€¡ÃÂ¸ÃÂ½ÃÂ°ÃÂµÃ‘â€šÃ‘ÂÃ‘Â Ã‘ÂÃÂ¾ ÃÂ·ÃÂ½ÃÂ°ÃÂºÃÂ° @");
    _Translate.set("is missing @ sign", "ÃÂ½ÃÂµ Ã‘ÂÃÂ¾ÃÂ´ÃÂµÃ‘â‚¬ÃÂ¶ÃÂ¸Ã‘â€š ÃÂ·ÃÂ½ÃÂ°ÃÂºÃÂ° @");
    _Translate.set("contains repeated dots", "Ã‘ÂÃÂ¾ÃÂ´ÃÂµÃ‘â‚¬ÃÂ¶ÃÂ¸Ã‘â€š ÃÂ»ÃÂ¸Ã‘Ë†ÃÂ½ÃÂ¸ÃÂµ Ã‘â€šÃÂ¾Ã‘â€¡ÃÂºÃÂ¸");
    _Translate.set("starts with a dot", "ÃÂ½ÃÂ°Ã‘â€¡ÃÂ¸ÃÂ½ÃÂ°ÃÂµÃ‘â€šÃ‘ÂÃ‘Â Ã‘Â Ã‘â€šÃÂ¾Ã‘â€¡ÃÂºÃÂ¸");
    _Translate.set("domain is missing", "ÃÂ´ÃÂ¾ÃÂ¼ÃÂµÃÂ½ ÃÂ½ÃÂµ Ã‘Æ’ÃÂºÃÂ°ÃÂ·ÃÂ°ÃÂ½");
    _Translate.set(
      "domain starts with a dot",
      "Ã‘â€šÃÂ¾Ã‘â€¡ÃÂºÃÂ° ÃÂ² ÃÂ½ÃÂ°Ã‘â€¡ÃÂ°ÃÂ»ÃÂµ ÃÂ½ÃÂ°ÃÂ·ÃÂ²ÃÂ°ÃÂ½ÃÂ¸Ã‘Â ÃÂ´ÃÂ¾ÃÂ¼ÃÂµÃÂ½ÃÂ°",
    );
    _Translate.set("domain is not valid", "ÃÂ´ÃÂ¾ÃÂ¼ÃÂµÃÂ½ ÃÂ½ÃÂµÃÂ´ÃÂµÃÂ¹Ã‘ÂÃ‘â€šÃÂ²ÃÂ¸Ã‘â€šÃÂµÃÂ»ÃÂµÃÂ½");
    _Translate.set("domain ends with a dot", "Ã‘â€šÃÂ¾Ã‘â€¡ÃÂºÃÂ° ÃÂ² ÃÂºÃÂ¾ÃÂ½Ã‘â€ ÃÂµ ÃÂ½ÃÂ°ÃÂ·ÃÂ²ÃÂ°ÃÂ½ÃÂ¸Ã‘Â ÃÂ´ÃÂ¾ÃÂ¼ÃÂµÃÂ½ÃÂ°");
    phoneInput = "ÃÂ½ÃÂ¾ÃÂ¼ÃÂµÃ‘â‚¬ Ã‘â€šÃÂµÃÂ»ÃÂµÃ‘â€žÃÂ¾ÃÂ½ÃÂ°";
    titleInput = "ÃÂ¤ÃÂ¾Ã‘â‚¬ÃÂ¼ÃÂ° ÃÂ¾ÃÂ±Ã‘â‚¬ÃÂ°Ã‘â€°ÃÂµÃÂ½ÃÂ¸Ã‘Â";
    firstNameInput = "ÃËœÃÂ¼Ã‘Â";
    lastNameInput = "ÃÂ¤ÃÂ°ÃÂ¼ÃÂ¸ÃÂ»ÃÂ¸Ã‘Â";
    emailInput = "ÃÂÃÂ´Ã‘â‚¬ÃÂµÃ‘Â Ã‘ÂÃÂ»ÃÂµÃÂºÃ‘â€šÃ‘â‚¬ÃÂ¾ÃÂ½ÃÂ½ÃÂ¾ÃÂ¹ ÃÂ¿ÃÂ¾Ã‘â€¡Ã‘â€šÃ‘â€¹";
    mrInput = "Ãâ€œ-ÃÂ½";
    msInput = "Ãâ€œ-ÃÂ¶ÃÂ°";
    newsInput = "ÃÂ¯ Ã‘â€¦ÃÂ¾Ã‘â€¡Ã‘Æ’ ÃÂ¿ÃÂ¾ÃÂ»Ã‘Æ’Ã‘â€¡ÃÂ°Ã‘â€šÃ‘Å’ ÃÂ½ÃÂ¾ÃÂ²ÃÂ¾Ã‘ÂÃ‘â€šÃÂ¸ ÃÂ¸ ÃÂ¿Ã‘â‚¬ÃÂµÃÂ´ÃÂ»ÃÂ¾ÃÂ¶ÃÂµÃÂ½ÃÂ¸Ã‘Â";
    privacyInput = "ÃÂ¯ ÃÂ¿Ã‘â‚¬ÃÂ¸ÃÂ½ÃÂ¸ÃÂ¼ÃÂ°Ã‘Å½ Ã‘Æ’Ã‘ÂÃÂ»ÃÂ¾ÃÂ²ÃÂ¸Ã‘Â ÃÂ¿ÃÂ¾ÃÂ»ÃÂ¸Ã‘â€šÃÂ¸ÃÂºÃÂ¸ ÃÂºÃÂ¾ÃÂ½Ã‘â€žÃÂ¸ÃÂ´ÃÂµÃÂ½Ã‘â€ ÃÂ¸ÃÂ°ÃÂ»Ã‘Å’ÃÂ½ÃÂ¾Ã‘ÂÃ‘â€šÃÂ¸";
    phoneError = "Ãâ€™ÃÂ²ÃÂµÃÂ´ÃÂ¸Ã‘â€šÃÂµ ÃÂ´ÃÂµÃÂ¹Ã‘ÂÃ‘â€šÃÂ²ÃÂ¸Ã‘â€šÃÂµÃÂ»Ã‘Å’ÃÂ½Ã‘â€¹ÃÂ¹ ÃÂ½ÃÂ¾ÃÂ¼ÃÂµÃ‘â‚¬ Ã‘â€šÃÂµÃÂ»ÃÂµÃ‘â€žÃÂ¾ÃÂ½ÃÂ°";
    emailError = "Ãâ€™ÃÂ²ÃÂµÃÂ´ÃÂ¸Ã‘â€šÃÂµ ÃÂ´ÃÂµÃÂ¹Ã‘ÂÃ‘â€šÃÂ²ÃÂ¸Ã‘â€šÃÂµÃÂ»Ã‘Å’ÃÂ½Ã‘â€¹ÃÂ¹ ÃÂ°ÃÂ´Ã‘â‚¬ÃÂµÃ‘Â Ã‘ÂÃÂ». ÃÂ¿ÃÂ¾Ã‘â€¡Ã‘â€šÃ‘â€¹";
    newsAndOffers = "ÃÂÃÂ¾ÃÂ²ÃÂ¾Ã‘ÂÃ‘â€šÃÂ¸ ÃÂ¸ ÃÂ¿Ã‘â‚¬ÃÂµÃÂ´ÃÂ»ÃÂ¾ÃÂ¶ÃÂµÃÂ½ÃÂ¸Ã‘Â";
    acceptPrivacyPolicy = "ÃÅ¸Ã‘â‚¬ÃÂ¸ÃÂ¼ÃÂ¸Ã‘â€šÃÂµ Ã‘Æ’Ã‘ÂÃÂ»ÃÂ¾ÃÂ²ÃÂ¸Ã‘Â ÃÅ¸ÃÂ¾ÃÂ»ÃÂ¸Ã‘â€šÃÂ¸ÃÂºÃÂ¸ ÃÂºÃÂ¾ÃÂ½Ã‘â€žÃÂ¸ÃÂ´ÃÂµÃÂ½Ã‘â€ ÃÂ¸ÃÂ°ÃÂ»Ã‘Å’ÃÂ½ÃÂ¾Ã‘ÂÃ‘â€šÃÂ¸";
    lookingTo = "ÃÂ§Ã‘â€šÃÂ¾ ÃÂ²ÃÂ°Ã‘Â ÃÂ¸ÃÂ½Ã‘â€šÃÂµÃ‘â‚¬ÃÂµÃ‘ÂÃ‘Æ’ÃÂµÃ‘â€š";
    invest = "ÃËœÃÂ½ÃÂ²ÃÂµÃ‘ÂÃ‘â€šÃÂ¸Ã‘â€ ÃÂ¸ÃÂ¸";
    buyaHome = "ÃÅ¸ÃÂ¾ÃÂºÃ‘Æ’ÃÂ¿ÃÂºÃÂ° ÃÂ½ÃÂµÃÂ´ÃÂ²ÃÂ¸ÃÂ¶ÃÂ¸ÃÂ¼ÃÂ¾Ã‘ÂÃ‘â€šÃÂ¸";
    workAtDamac = "Ã ÃÂ°ÃÂ±ÃÂ¾Ã‘â€šÃÂ° ÃÂ² DAMAC";
    iAmAJobSeeker = "I am a job seeker";
    exploringDamac = "I am just exploring";
    propertyTypePreference = "What kind of property interests you?";
    villaHouse = "Villa/House";
    apartmentFlat = "Apartment/Flat";

    bedroomCountPreference = "How many bedrooms do you need?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "What is your budget range?";
    uptoOneM = "Up to AED 1M";
    oneMtoTwoM = "AED 1M to AED 2M";
    twoMtoFiveM = "AED 2M to AED 5M";
    fiveMPlus = "Above AED 5M";

    whenToBuy = "ÃÅ¡ÃÂ¾ÃÂ³ÃÂ´ÃÂ° ÃÂ²Ã‘â€¹ ÃÂ¿ÃÂ»ÃÂ°ÃÂ½ÃÂ¸Ã‘â‚¬Ã‘Æ’ÃÂµÃ‘â€šÃÂµ Ã‘ÂÃÂ´ÃÂµÃÂ»ÃÂ°Ã‘â€šÃ‘Å’ ÃÂ¿ÃÂ¾ÃÂºÃ‘Æ’ÃÂ¿ÃÂºÃ‘Æ’?";
    daysThirty = "Ãâ€™ Ã‘â€šÃÂµÃ‘â€¡ÃÂµÃÂ½ÃÂ¸ÃÂµ 30 ÃÂ´ÃÂ½ÃÂµÃÂ¹";
    daysNinety = "Ãâ€™ Ã‘â€šÃÂµÃ‘â€¡ÃÂµÃÂ½ÃÂ¸ÃÂµ 90 ÃÂ´ÃÂ½ÃÂµÃÂ¹";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "ÃÂÃÂ°ÃÂ¶ÃÂ¼ÃÂ¸Ã‘â€šÃÂµ ÃÂ·ÃÂ´ÃÂµÃ‘ÂÃ‘Å’";
    labtext = "ÃÅ¸ÃÂ¾ÃÂ´Ã‘â‚¬ÃÂ¾ÃÂ±ÃÂ½ÃÂµÃÂµ ÃÂ¾ ÃÂ´Ã‘â‚¬Ã‘Æ’ÃÂ³ÃÂ¸Ã‘â€¦ ÃÂ¾ÃÂ±Ã‘Å ÃÂµÃÂºÃ‘â€šÃÂ°Ã‘â€¦ DAMAC Properties";
    contacted = "I can be contacted via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "GK") {
    _Translate.set("Processing...", "ÃŽâ€œÃŽÂ¯ÃŽÂ½ÃŽÂµÃâ€žÃŽÂ±ÃŽÂ¹ ÃŽÂµÃâ‚¬ÃŽÂµÃŽÂ¾ÃŽÂµÃÂÃŽÂ³ÃŽÂ±ÃÆ’ÃŽÂ¯ÃŽÂ±...");
    _Translate.set("Please Fix These Errors", "ÃŽâ€ÃŽÂ¹ÃŽÂ¿ÃÂÃŽÂ¸ÃÅ½ÃÆ’Ãâ€žÃŽÂµ ÃŽÂ±Ãâ€¦Ãâ€žÃŽÂ¬ Ãâ€žÃŽÂ± ÃÆ’Ãâ€ ÃŽÂ¬ÃŽÂ»ÃŽÂ¼ÃŽÂ±Ãâ€žÃŽÂ±");
    _Translate.set("is not valid", "ÃŽÂ´ÃŽÂµÃŽÂ½ ÃŽÂµÃŽÂ¯ÃŽÂ½ÃŽÂ±ÃŽÂ¹ ÃŽÂ­ÃŽÂ³ÃŽÂºÃâ€¦ÃÂÃŽÂ¿");
    _Translate.set("is required", "ÃŽÂµÃŽÂ¯ÃŽÂ½ÃŽÂ±ÃŽÂ¹ Ãâ€¦Ãâ‚¬ÃŽÂ¿Ãâ€¡ÃÂÃŽÂµÃâ€°Ãâ€žÃŽÂ¹ÃŽÂºÃÅ’");
    _Translate.set("starts with @ sign", "ÃŽÂ¾ÃŽÂµÃŽÂºÃŽÂ¹ÃŽÂ½ÃŽÂ¬ ÃŽÂ¼ÃŽÂµ Ãâ€žÃŽÂ¿ ÃÆ’ÃÂÃŽÂ¼ÃŽÂ²ÃŽÂ¿ÃŽÂ»ÃŽÂ¿ @");
    _Translate.set("is missing @ sign", "ÃŽÂ»ÃŽÂµÃŽÂ¯Ãâ‚¬ÃŽÂµÃŽÂ¹ Ãâ€žÃŽÂ¿ ÃÆ’ÃÂÃŽÂ¼ÃŽÂ²ÃŽÂ¿ÃŽÂ»ÃŽÂ¿ @");
    _Translate.set(
      "contains repeated dots",
      "Ãâ‚¬ÃŽÂµÃÂÃŽÂ¹ÃŽÂ­Ãâ€¡ÃŽÂµÃŽÂ¹ ÃŽÂµÃâ‚¬ÃŽÂ±ÃŽÂ½ÃŽÂ±ÃŽÂ»ÃŽÂ±ÃŽÂ¼ÃŽÂ²ÃŽÂ±ÃŽÂ½ÃÅ’ÃŽÂ¼ÃŽÂµÃŽÂ½ÃŽÂµÃâ€š Ãâ€žÃŽÂµÃŽÂ»ÃŽÂµÃŽÂ¯ÃŽÂµÃâ€š",
    );
    _Translate.set("starts with a dot", "ÃŽÂ¾ÃŽÂµÃŽÂºÃŽÂ¹ÃŽÂ½ÃŽÂ¬ ÃŽÂ¼ÃŽÂµ ÃŽÂ¼ÃŽÂ¹ÃŽÂ± Ãâ€žÃŽÂµÃŽÂ»ÃŽÂµÃŽÂ¯ÃŽÂ±");
    _Translate.set("domain is missing", "ÃŽÂ»ÃŽÂµÃŽÂ¯Ãâ‚¬ÃŽÂµÃŽÂ¹ Ãâ€žÃŽÂ¿ domain");
    _Translate.set("domain starts with a dot", "Ãâ€žÃŽÂ¿ domain ÃŽÂ¾ÃŽÂµÃŽÂºÃŽÂ¹ÃŽÂ½ÃŽÂ¬ ÃŽÂ¼ÃŽÂµ Ãâ€žÃŽÂµÃŽÂ»ÃŽÂµÃŽÂ¯ÃŽÂ±");
    _Translate.set("domain is not valid", "Ãâ€žÃŽÂ¿ domain ÃŽÂ´ÃŽÂµÃŽÂ½ ÃŽÂµÃŽÂ¯ÃŽÂ½ÃŽÂ±ÃŽÂ¹ ÃŽÂ­ÃŽÂ³ÃŽÂºÃâ€¦ÃÂÃŽÂ¿");
    _Translate.set("domain ends with a dot", "Ãâ€žÃŽÂ¿ domain ÃŽÂ»ÃŽÂ®ÃŽÂ³ÃŽÂµÃŽÂ¹ ÃÆ’ÃŽÂµ Ãâ€žÃŽÂµÃŽÂ»ÃŽÂµÃŽÂ¯ÃŽÂ±");
    phoneInput = "ÃŽÂ¤ÃŽÂ·ÃŽÂ»ÃŽÂ­Ãâ€ Ãâ€°ÃŽÂ½ÃŽÂ¿";
    titleInput = "ÃŽÂ¤ÃŽÂ¯Ãâ€žÃŽÂ»ÃŽÂ¿Ãâ€š";
    firstNameInput = "ÃŽÅ’ÃŽÂ½ÃŽÂ¿ÃŽÂ¼ÃŽÂ±";
    lastNameInput = "ÃŽâ€¢Ãâ‚¬ÃÅ½ÃŽÂ½Ãâ€¦ÃŽÂ¼ÃŽÂ¿";
    emailInput = "Email";
    mrInput = "ÃŽÅ¡ÃŽÂ¿Ãâ€š.";
    msInput = "ÃŽâ€ÃŽÂ¹Ãâ€š.";
    mrsInput = "ÃŽÅ¡ÃŽÂ±.";
    newsInput = "ÃŽËœÃŽÂ­ÃŽÂ»Ãâ€° ÃŽÂ½ÃŽÂ± ÃŽÂ¼ÃŽÂ±ÃŽÂ¸ÃŽÂ±ÃŽÂ¯ÃŽÂ½Ãâ€° ÃŽÂ³ÃŽÂ¹ÃŽÂ± Ãâ€žÃŽÂ± ÃŽÂ½ÃŽÂ­ÃŽÂ± ÃŽÂºÃŽÂ±ÃŽÂ¹ Ãâ€žÃŽÂ¹Ãâ€š Ãâ‚¬ÃÂÃŽÂ¿ÃÆ’Ãâ€ ÃŽÂ¿ÃÂÃŽÂ­Ãâ€š";
    privacyInput = "ÃŽË†Ãâ€¡Ãâ€° ÃŽÂ´ÃŽÂ¹ÃŽÂ±ÃŽÂ²ÃŽÂ¬ÃÆ’ÃŽÂµÃŽÂ¹ ÃŽÂºÃŽÂ±ÃŽÂ¹ ÃÆ’Ãâ€¦ÃŽÂ¼Ãâ€ Ãâ€°ÃŽÂ½ÃÅ½ ÃŽÂ¼ÃŽÂµ Ãâ€žÃŽÂ·ÃŽÂ½ ÃŽ ÃŽÂ¿ÃŽÂ»ÃŽÂ¹Ãâ€žÃŽÂ¹ÃŽÂºÃŽÂ® ÃŽÂ±Ãâ‚¬ÃŽÂ¿ÃÂÃÂÃŽÂ®Ãâ€žÃŽÂ¿Ãâ€¦";
    phoneError = "ÃŽâ€¢ÃŽÂ¹ÃÆ’ÃŽÂ±ÃŽÂ³ÃŽÂ¬ÃŽÂ³ÃŽÂµÃâ€žÃŽÂµ ÃŽÂ­ÃŽÂ³ÃŽÂºÃâ€¦ÃÂÃŽÂ¿ ÃŽÂ±ÃÂÃŽÂ¹ÃŽÂ¸ÃŽÂ¼ÃÅ’ Ãâ€žÃŽÂ·ÃŽÂ»ÃŽÂµÃâ€ ÃÅ½ÃŽÂ½ÃŽÂ¿Ãâ€¦";
    emailError = "ÃŽâ€¢ÃŽÂ¹ÃÆ’ÃŽÂ±ÃŽÂ³ÃŽÂ¬ÃŽÂ³ÃŽÂµÃâ€žÃŽÂµ ÃŽÂ­ÃŽÂ³ÃŽÂºÃâ€¦ÃÂÃŽÂ¿ email";
    newsAndOffers = "ÃŽÂÃŽÂ­ÃŽÂ± ÃŽÂºÃŽÂ±ÃŽÂ¹ Ãâ‚¬ÃÂÃŽÂ¿ÃÆ’Ãâ€ ÃŽÂ¿ÃÂÃŽÂ­Ãâ€š";
    acceptPrivacyPolicy = "ÃŽâ€˜Ãâ‚¬ÃŽÂ¿ÃŽÂ´ÃŽÂ¿Ãâ€¡ÃŽÂ® ÃŽ ÃŽÂ¿ÃŽÂ»ÃŽÂ¹Ãâ€žÃŽÂ¹ÃŽÂºÃŽÂ®Ãâ€š ÃŽÂ±Ãâ‚¬ÃŽÂ¿ÃÂÃÂÃŽÂ®Ãâ€žÃŽÂ¿Ãâ€¦";
    btntext = "ÃŽÅ¡ÃŽÂ¬ÃŽÂ½Ãâ€žÃŽÂµ ÃŽÂºÃŽÂ»ÃŽÂ¹ÃŽÂº ÃŽÂµÃŽÂ´ÃÅ½";
    labtext = "ÃŽâ€œÃŽÂ¹ÃŽÂ± Ãâ‚¬ÃŽÂµÃÂÃŽÂ¹ÃÆ’ÃÆ’ÃÅ’Ãâ€žÃŽÂµÃÂÃŽÂµÃâ€š Ãâ‚¬ÃŽÂ»ÃŽÂ·ÃÂÃŽÂ¿Ãâ€ ÃŽÂ¿ÃÂÃŽÂ¯ÃŽÂµÃâ€š ÃÆ’Ãâ€¡ÃŽÂµÃâ€žÃŽÂ¹ÃŽÂºÃŽÂ¬ ÃŽÂ¼ÃŽÂµ ÃŽÂ¬ÃŽÂ»ÃŽÂ»ÃŽÂ± ÃŽÂºÃŽÂ±Ãâ€žÃŽÂ±ÃŽÂ»ÃÂÃŽÂ¼ÃŽÂ±Ãâ€žÃŽÂ± DAMAC";
    contacted = "I can be contacted via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "GR") {
    _Translate.set("Processing...", "Verarbeitung lÃƒÂ¤uft...");
    _Translate.set("Please Fix These Errors", "Bitte beheben Sie diese Fehler");
    _Translate.set("is not valid", "ist ungÃƒÂ¼ltig");
    _Translate.set("is required", "ist erforderlich");
    _Translate.set("starts with @ sign", "beginnt mit @-Zeichen");
    _Translate.set("is missing @ sign", "@-Zeichen fehlt");
    _Translate.set("contains repeated dots", "enthÃƒÂ¤lt wiederholte Punkte");
    _Translate.set("starts with a dot", "beginnt mit einem Punkt");
    _Translate.set("domain is missing", "Domain fehlt");
    _Translate.set(
      "domain starts with a dot",
      "Domain beginnt mit einem Punkt",
    );
    _Translate.set("domain is not valid", "Domain ist ungÃƒÂ¼ltig");
    _Translate.set("domain ends with a dot", "Domain endet mit einem Punkt");
    phoneInput = "Telefonnummer";
    titleInput = "Anrede";
    firstNameInput = "Vorname";
    lastNameInput = "Nachname";
    emailInput = "E-Mail";
    mrInput = "Herr";
    msInput = "Frau";
    mrsInput = "FrÃƒÂ¤ulein";
    newsInput = "Ich mÃƒÂ¶chte ÃƒÂ¼ber Neuigkeiten und Angebote informiert werden";
    privacyInput =
      "Ich habe die Datenschutzbestimmungen gelesen und stimme ihnen zu";
    phoneError = "Bitte geben Sie eine gÃƒÂ¼ltige Telefonnummer ein";
    emailError = "Bitte geben Sie eine gÃƒÂ¼ltige E-Mail-Adresse ein";
    newsAndOffers = "Neuigkeiten und Angebote";
    acceptPrivacyPolicy = "Akzeptieren Datenschutzbestimmungen";
    lookingTo = "Wollen Sie";
    invest = "investieren";
    buyaHome = "ein Zuhause kaufen";
    workAtDamac = "Bei @ DAMAC arbeiten";
    iAmAJobSeeker = "I am a job seeker";
    exploringDamac = "I am just exploring";
    propertyTypePreference = "What kind of property interests you?";
    villaHouse = "Villa/House";
    apartmentFlat = "Apartment/Flat";

    bedroomCountPreference = "How many bedrooms do you need?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "What is your budget range?";
    uptoOneM = "Up to AED 1M";
    oneMtoTwoM = "AED 1M to AED 2M";
    twoMtoFiveM = "AED 2M to AED 5M";
    fiveMPlus = "Above AED 5M";

    whenToBuy = "Wann mÃƒÂ¶chten Sie kaufen?";
    daysThirty = "Inerhalb kommenden 30 Tage";
    daysNinety = "Inerhalb kommenden 90 Tage";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "Hier klicken";
    labtext = "Hier finden Sie weitere Infos zu Immobilien von DAMAC";
    contacted = "I can be contacted via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "NL") {
    _Translate.set("Processing...", "Verwerken...");
    _Translate.set("Please Fix These Errors", "Corrigeer deze fouten a.u.b.");
    _Translate.set("is not valid", "is niet geldig");
    _Translate.set("is required", "Is benodigd");
    _Translate.set("starts with @ sign", "begint met @-teken");
    _Translate.set("is missing @ sign", "ontbreekt @-teken");
    _Translate.set("contains repeated dots", "bevat herhaalde punten");
    _Translate.set("starts with a dot", "begint met een punt");
    _Translate.set("domain is missing", "domein ontbreekt");
    _Translate.set("domain starts with a dot", "domein begint met een punt");
    _Translate.set("domain is not valid", "domein is niet geldig");
    _Translate.set("domain ends with a dot", "domein eindigt op een punt");
    phoneInput = "Telefoonnummer in";
    titleInput = "Aanhef";
    firstNameInput = "Voornaam";
    lastNameInput = "Achternaam";
    emailInput = "E-mailadres";
    mrInput = "Dhr.";
    msInput = "Mevr.";
    mrsInput = "Mevr.";
    newsInput = "Ik wil graag nieuws en aanbiedingen horen";
    privacyInput = "Ik heb het privacybeleid gelezen en ga ermee akkoord";
    phoneError = "Voer alstublieft een geldig telefoonnummer in";
    emailError = "Voer een geldig e-mailadres in";
    newsAndOffers = "Nieuws en aanbiedingen";
    acceptPrivacyPolicy = "Accepteer privacybeleid";
    lookingTo = "Ben je op zoek naar";
    invest = "Investeren";
    buyaHome = "Een huis kopen";
    workAtDamac = "Werk @ DAMAC";
    iAmAJobSeeker = "I am a job seeker";
    exploringDamac = "I am just exploring";
    propertyTypePreference = "What kind of property interests you?";
    villaHouse = "Villa/House";
    apartmentFlat = "Apartment/Flat";

    bedroomCountPreference = "How many bedrooms do you need?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "What is your budget range?";
    uptoOneM = "Up to AED 1M";
    oneMtoTwoM = "AED 1M to AED 2M";
    twoMtoFiveM = "AED 2M to AED 5M";
    fiveMPlus = "Above AED 5M";

    whenToBuy = "Wanneer ben je van plan om te kopen?";
    daysThirty = "In 30 dagen";
    daysNinety = "Binnen 90 dagen";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "KLIK HIER";
    labtext = "Voor meer informatie over andere DAMAC-eigenschappen:";
    contacted = "Ik ben bereikbaar via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "RO") {
    _Translate.set("Processing...", "Se proceseazÃ„Æ’Ã¢â‚¬Â¦...");

    _Translate.set(
      "Please Fix These Errors",
      "VÃ„Æ’ rugÃ„Æ’m sÃ„Æ’ remediaÃˆâ€ºi aceste erori",
    );

    _Translate.set("is not valid", "nu este valid");
    _Translate.set("is required", "este obligatoriu");
    _Translate.set("starts with @ sign", "ÃƒÂ®ncepe cu semnul @");
    _Translate.set("is missing @ sign", "semnul @ lipseÃˆâ„¢te");
    _Translate.set("contains repeated dots", "conÃˆâ€ºine puncte repetate");
    _Translate.set("starts with a dot", "ÃƒÂ®ncepe cu un punct");
    _Translate.set("domain is missing", "lipseÃˆâ„¢te 'domeniul");
    _Translate.set("domain starts with a dot", "domeniul ÃƒÂ®ncepe cu un punct");
    _Translate.set("domain is not valid", "domeniul nu este valid");
    _Translate.set("domain ends with a dot", "domeniul se ÃƒÂ®ncheie cu un punct");
    phoneInput = "De telefon";
    titleInput = "SelectaÃˆâ€ºi o titulaturÃ„Æ’";
    firstNameInput = "IntroduceÃˆâ€ºi un prenume valid";
    lastNameInput = "IntroduceÃˆâ€ºi un nume de familie valid";
    emailInput = "IntroduceÃˆâ€ºi o adresÃ„Æ’ de e-mail validÃ„Æ’";
    mrInput = "Dl";
    msInput = "Dna";
    mrsInput = "Dra";
    newsInput = "Doresc sÃ„Æ’ primesc noutÃ„Æ’Ãˆâ€ºi Ãˆâ„¢i oferte";
    privacyInput = "Am citit Ãˆâ„¢i sunt de acord cu Politica de confidenÃˆâ€ºialitate";
    phoneError = "IntroduceÃˆâ€ºi un numÃ„Æ’r de telefon valid";
    emailError = "IntroduceÃˆâ€ºi o adresÃ„Æ’ de e-mail validÃ„Æ’";
    newsAndOffers = "NoutÃ„Æ’Ãˆâ€ºi Ãˆâ„¢i oferte";
    acceptPrivacyPolicy = "Accept Politica de confidenÃˆâ€ºialitate";
    lookingTo = "VÃ„Æ’ intereseazÃ„Æ’";
    invest = "SÃ„Æ’ investiÃˆâ€ºi";
    buyaHome = "SÃ„Æ’ cumpÃ„Æ’raÃˆâ€ºi o casÃ„Æ’";
    workAtDamac = "SÃ„Æ’ lucraÃˆâ€ºi la DAMAC";
    iAmAJobSeeker = "I am a job seeker";
    exploringDamac = "I am just exploring";
    propertyTypePreference = "What kind of property interests you?";
    villaHouse = "Villa/House";
    apartmentFlat = "Apartment/Flat";

    bedroomCountPreference = "How many bedrooms do you need?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "What is your budget range?";
    uptoOneM = "Up to AED 1M";
    oneMtoTwoM = "AED 1M to AED 2M";
    twoMtoFiveM = "AED 2M to AED 5M";
    fiveMPlus = "Above AED 5M";

    whenToBuy = "CÃƒÂ¢nd intenÃˆâ€ºionaÃˆâ€ºi sÃ„Æ’ cumpÃ„Æ’raÃˆâ€ºi ?";
    daysThirty = "ÃƒÅ½n urmÃ„Æ’toarele 30 de zile";
    daysNinety = "ÃƒÅ½n urmÃ„Æ’toarele 90 de zile";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "APÃ„â€šSAÃˆÅ¡I AICI";
    labtext = "Pentru mai multe informaÃˆâ€ºii despre DAMAC Properties";
    contacted = "MÃ„Æ’ puteÃˆâ€ºi contactata prin";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  } else {
    _Translate.set("Processing...", "Processing...");
    _Translate.set("Please Fix These Errors", "Please Fix These Errors");
    _Translate.set("is not valid", "is not valid");
    _Translate.set("is required", "is required");
    _Translate.set("starts with @ sign", "starts with @ sign");
    _Translate.set("is missing @ sign", "is missing @ sign");
    _Translate.set("contains repeated dots", "contains repeated dots");
    _Translate.set("starts with a dot", "starts with a dot");
    _Translate.set("domain is missing", "domain is missing");
    _Translate.set("domain starts with a dot", "domain starts with a dot");
    _Translate.set("domain is not valid", "domain is not valid");
    _Translate.set("domain ends with a dot", "domain ends with a dot");
    phoneInput = "Phone";
    titleInput = "Title";
    firstNameInput = "First Name";
    lastNameInput = "Last Name";
    emailInput = "Email";
    mrInput = "Mr.";
    msInput = "Ms.";
    mrsInput = "Mrs.";
    newsInput = "IÃ¢â‚¬â„¢d like to hear about news and offers";
    privacyInput = "IÃ¢â‚¬â„¢ve read and agreed to the Privacy Policy";
    phoneError = "Please enter a valid Phone number";
    emailError = "EnterÃ‚ aÃ‚ validÃ‚ email";
    newsAndOffers = "News And Offers";
    acceptPrivacyPolicy = "Accept Privacy Policy";
    lookingTo = "What are you looking to do today?";
    invest = "Invest in real estate";
    buyaHome = "Buy a home";
    workAtDamac = "Work @ DAMAC";
    iAmAJobSeeker = "I am a job seeker";
    exploringDamac = "I am just exploring";
    propertyTypePreference = "What kind of property interests you?";
    villaHouse = "Villa/House";
    apartmentFlat = "Apartment/Flat";

    bedroomCountPreference = "How many bedrooms do you need?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "What is your budget range?";
    uptoOneM = "Up to AED 1M";
    oneMtoTwoM = "AED 1M to AED 2M";
    twoMtoFiveM = "AED 2M to AED 5M";
    fiveMPlus = "Above AED 5M";

    whenToBuy = "When are you planning to make your purchase?";
    daysThirty = "Within 30 days";
    daysNinety = "Within 90 days";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "CLICK HERE";
    labtext = "For more on other DAMAC Properties";
    contacted = "I can be contacted via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  }

  //console.log("firstNameInput..", firstNameInput, lastNameInput);
  let fieldsNoNumbers = [firstNameInput, lastNameInput];
  var modstring = "";
  try {
    var lqid = getLQIdfromQueryString();
    //const response = await getLQSData(lqid);
    modstring =
      "&" +
      "moTitle=" +
      response.resp[0].title__c +
      "&FirstName=" +
      response.resp[0].first_name__c +
      "&LastName=" +
      response.resp[0].last_name__c +
      "&Email=" +
      response.resp[0].email__c;
  } catch (error) {
    modstring = "";
  }
  //checking params
    var lf = location.href.split("?").pop() + modstring;
    
    var query = lf.split("&");
    var len = query.length;
  var split, elem;

  $('input[type="text"]').each(function () {
    if (fieldsNoNumbers.includes($(this).attr("name"))) {
      $(this)[0].onkeypress = function (e) {
        e = e || window.event;
        var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
        regSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]/;
        if (regSpecialChar.test(e.key)) {
          return false;
        }
      };
    }
  });
  $('input[type="email"]').each(function () {
    $(this)[0].onkeyup = function (e) {
      e = e || window.event;
      $(this).val($(this).val().toLocaleLowerCase());
    };
  });

  for (var i = 0; i < len; i++) {
    split = query[i].split("=");
    $("form")
      .find('input[name="' + split[0] + '"]')
      .each(function () {
        $(this).val(split[1].replace(/"/g, '\\"'));
      });
  }
  $('input[name="' + phoneInput + '"]').each(function () {
    $(this)[0].onkeypress = function (e) {
      e = e || window.event;
      var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
      if (charCode != 8 && charCode != 0 && (charCode < 48 || charCode > 57)) {
        return false;
      }
    };
  });


filldropdowns();
});

//cookie function
var uri = document.URL;
var _fbp, _fbc;
function getFbc() {
  if (uri.includes("fbclid=")) {
    var params_arr = getFacebookParam(uri);
    //console.log("params_arr..", params_arr);
    _fbc = "fb.1." + Date.now() + "." + params_arr["fbclid"];
    sessionStorage.setItem("_fbc", _fbc);
  } else {
    _fbc = sessionStorage.getItem("_fbc");

    if (_fbc == null) {
      _fbc = getFacebookCookie("_fbc");
    }
  }
  return _fbc;
}
function getFacebookCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getFacebookParam(myurl) {
  var params = {};
  var parser = document.createElement("a");
  parser.href = myurl;
  var query = parser.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  return params;
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

//timer
var startTime = 0;
startTime = new Date().getTime();

//browser, os, etc infos
(function (window) {
  {
    var unknown = "-";

    // screen
    var screenSize = "";
    if (screen.width) {
      width = screen.width ? screen.width : "";
      height = screen.height ? screen.height : "";
      screenSize += "" + width + " x " + height;
    }

    // browser
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browser = navigator.appName;
    var version = "" + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    // Opera
    if ((verOffset = nAgt.indexOf("Opera")) != -1) {
      browser = "Opera";
      version = nAgt.substring(verOffset + 6);
      if ((verOffset = nAgt.indexOf("Version")) != -1) {
        version = nAgt.substring(verOffset + 8);
      }
    }
    // Opera Next
    if ((verOffset = nAgt.indexOf("OPR")) != -1) {
      browser = "Opera";
      version = nAgt.substring(verOffset + 4);
    }
    // Edge
    else if ((verOffset = nAgt.indexOf("Edge")) != -1) {
      browser = "Microsoft Edge";
      version = nAgt.substring(verOffset + 5);
    }
    // MSIE
    else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
      browser = "Microsoft Internet Explorer";
      version = nAgt.substring(verOffset + 5);
    }
    // Chrome
    else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
      browser = "Chrome";
      version = nAgt.substring(verOffset + 7);
    }
    // Safari
    else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
      browser = "Safari";
      version = nAgt.substring(verOffset + 7);
      if ((verOffset = nAgt.indexOf("Version")) != -1) {
        version = nAgt.substring(verOffset + 8);
      }
    }
    // Firefox
    else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
      browser = "Firefox";
      version = nAgt.substring(verOffset + 8);
    }
    // MSIE 11+
    else if (nAgt.indexOf("Trident/") != -1) {
      browser = "Microsoft Internet Explorer";
      version = nAgt.substring(nAgt.indexOf("rv:") + 3);
    }
    // Other browsers
    else if (
      (nameOffset = nAgt.lastIndexOf(" ") + 1) <
      (verOffset = nAgt.lastIndexOf("/"))
    ) {
      browser = nAgt.substring(nameOffset, verOffset);
      version = nAgt.substring(verOffset + 1);
      if (browser.toLowerCase() == browser.toUpperCase()) {
        browser = navigator.appName;
      }
    }
    // trim the version string
    if ((ix = version.indexOf(";")) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(" ")) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(")")) != -1) version = version.substring(0, ix);

    majorVersion = parseInt("" + version, 10);
    if (isNaN(majorVersion)) {
      version = "" + parseFloat(navigator.appVersion);
      majorVersion = parseInt(navigator.appVersion, 10);
    }

    // mobile version
    var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

    // system
    var os = unknown;
    var clientStrings = [
      { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
      { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
      { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
      { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
      { s: "Windows Vista", r: /Windows NT 6.0/ },
      { s: "Windows Server 2003", r: /Windows NT 5.2/ },
      { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
      { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
      { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
      { s: "Windows 98", r: /(Windows 98|Win98)/ },
      { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
      { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
      { s: "Windows CE", r: /Windows CE/ },
      { s: "Windows 3.11", r: /Win16/ },
      { s: "Android", r: /Android/ },
      { s: "Open BSD", r: /OpenBSD/ },
      { s: "Sun OS", r: /SunOS/ },
      { s: "Linux", r: /(Linux|X11)/ },
      { s: "iOS", r: /(iPhone|iPad|iPod)/ },
      { s: "Mac OS X", r: /Mac OS X/ },
      { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
      { s: "QNX", r: /QNX/ },
      { s: "UNIX", r: /UNIX/ },
      { s: "BeOS", r: /BeOS/ },
      { s: "OS/2", r: /OS\/2/ },
      {
        s: "Search Bot",
        r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
      },
    ];
    for (var id in clientStrings) {
      var cs = clientStrings[id];
      if (cs.r.test(nAgt)) {
        os = cs.s;
        break;
      }
    }

    var osVersion = unknown;

    if (/Windows/.test(os)) {
      osVersion = /Windows (.*)/.exec(os)[1];
      os = "Windows";
    }

    switch (os) {
      case "Mac OS X":
        osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
        break;

      case "Android":
        osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
        break;

      case "iOS":
        osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
        osVersion =
          osVersion[1] + "." + osVersion[2] + "." + (osVersion[3] | 0);
        break;
    }

    // flash (you'll need to include swfobject)
    /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
  }

  window.jscd = {
    screen: screenSize,
    browser: browser,
    browserVersion: version,
    browserMajorVersion: majorVersion,
    mobile: mobile,
    os: os,
    osVersion: osVersion,
    nAgt: nAgt,
  };
})(this);


//let defaultCampaignIdData = document.querySelector("#defaultCampaignId"); 
let defaultCampaignId;
  
let urlSplits = window.location.href.split("/")

if (urlSplits[urlSplits.length-1].trim().length == 0 ||  urlSplits[urlSplits.length-1][0] == "?") {
  urlSplits = urlSplits[urlSplits.length-2].split("?")[0]
} else {
  urlSplits = urlSplits[urlSplits.length-1].split("?")[0]
}

// if (urlSplits.includes("gdn")) {
//   defaultCampaignId = "a1207000000bnOn";
// } else if (urlSplits.includes("emailer")) {
//   defaultCampaignId = "a1207000000cX0R";
// } else if (urlSplits.includes("social")) {
//   defaultCampaignId = "a121n00000D9pUv";
// } else if (urlSplits.includes("affilate")) {
//   defaultCampaignId = "a1207000000d8a4";
// } else {
//   defaultCampaignId = "a121n00000Dwy45";
// }

if (urlSplits.includes("gdn")) {
  defaultCampaignId = "a1207000000bnOn";
} else if (urlSplits.includes("emailer-specific")) {
  defaultCampaignId = "a1207000000cX0R";
} else if (urlSplits.includes("social-specific")) {
  defaultCampaignId = "a121n00000D9pUv";
} else if (urlSplits.includes("affiliate-specific")) {
  defaultCampaignId = "a1207000000d8a4";
} else if (urlSplits.includes("social-inf")) {
  defaultCampaignId = "a121n00000D9pUv";
} else {
  defaultCampaignId = "a121n00000Dwy45";
}



// ======================================== LOGIC OF  ================================================
// const pageURL = window.location.href
// const hasUTMParams = pageURL.split('?')[1] !== undefined && pageURL.split('?')[1] !== null

// const addUTMParamsToSessionStorage = () => {
//     if(!hasUTMParams){
//         return
//     }

//     const UTMParamsString = pageURL.split('?')[1]
//     const UTMParamsArray = UTMParamsString.split('&')

//     if(UTMParamsArray.length == 0){
//         return
//     }

//     UTMParamsArray.map(obj => {
//       sessionStorage.setItem(obj.split('=')[0], obj.split('=')[1])
//     })
// }

// const getDefaultCampaignIdAsPerUtmMedium = () => {

//   let campaign_id = sessionStorage.getItem('campaign_id')

//   if(campaign_id) {
//     return campaign_id
//   } else {
//     let utm_medium = sessionStorage.getItem('utm_medium')
//     if (utm_medium == "gdn") {
//       return "a1207000000bnOn";
//     } else if (utm_medium == "emailer-specific") {
//       return "a1207000000cX0R";
//     } else if (utm_medium == "social-specific") {
//       return "a121n00000D9pUv";
//     } else if (utm_medium == "affiliate-specific") {
//       return "a1207000000d8a4";
//     } else if (utm_medium == "social-inf") {
//       return "a121n00000D9pUv";
//     } else {
//       return "a121n00000Dwy45";
//     }
//   }
// }

// defaultCampaignId = getDefaultCampaignIdAsPerUtmMedium()
// ======================================== END     O N   I N I T ================================================

window.addEventListener("DOMContentLoaded", function () {
  if (window.__featuresReady && window.__featuresReady.indexOf("Form") > -1) {
    alterFormHandler();
  } else {
    // handle event
    window.__eventBus.on("featureReady", function (feature) {
      if (feature === "Form") {
        alterFormHandler();
      }
    });
  }

  function alterFormHandler() {
    //phone field name
    // var field = "Phone";
    var field = phoneInput;
    var telInput = document.querySelectorAll(`form input[name='${field}']`);

    //init phone number plugin
    var iti = [];

    // var digitArray = /^\d{1,10}$/g;
    [].forEach.call(telInput, function (div, index) {
      // do whatever
      div.setAttribute("type", "tel");
      iti.push(
        window.intlTelInput(div, {
          initialCountry: "auto",
          preferredCountries: ["ae", "gb", "in", "sa", "qa", "pk"],
          geoIpLookup: function (callback) {
            requestUrl =
              "https://api.ipapi.com/check?access_key=229c548dcafb9cff13041d9544ac60af";
            $.ajax({
              url: requestUrl,
              type: "GET",
              success: function (json) {
                $("input[name='countryCodeSync']").val(json.country_code);
                $("input[name='city']").val(json.city);
                $("input[name='citySync']").val(json.city);
                $("input[name='countryNameSync']").val(json.country_name);
                $("input[name='ipAddress']").val(json.ip);
                callback(json.country_code);
              },
              error: function (err) {
                //console.log("Request failed, error= " + err);
              },
            });
          },
          //utilsScript: "https://damac-landing-pages.s3.eu-west-1.amazonaws.com/instapage/js/utils.js",
          // nationalMode: false,
          separateDialCode: true,
          placeholderNumberType: "MOBILE",
          autoPlaceholder: "polite",
          // any initialisation options go here
        }),
      );
      var formId = $(div).parents("form").attr("data-id");
      //var fieldLabel = 'Phone';
      var fieldLabel = phoneInput;
      var errorMessage = `: ${phoneError}`;
      var digitArray = /^\d{1,10}$/g;
      var validator = window.__validators[formId];

      validator.addConstraint(fieldLabel, function (input) {
        return {
          // isValid: input.value.match(digitArray),
          isValid: iti[index].isValidNumber(),
          message: window._Translate.get(errorMessage),
        };
      });
    });
    //form logic
    var form = document.querySelectorAll("form.email-form");
    // const formValid = instapageForm(document.querySelectorAll('form.email-form'));

    [].forEach.call(form, function (forms, index) {
      // //console.log(forms);
      let formValid = instapageForm(forms);
      var handler = forms.onsubmit;
      forms.onsubmit = function (e) {
        e.preventDefault();
        var delta = Math.abs(new Date().getTime() - startTime) / 1000;
        var hours = Math.floor(delta / 3600) % 24;
        var minutes = Math.floor(delta / 60) % 60;
        var seconds = Math.floor(delta % 60);
        var completeTime = hours + ":" + minutes + ":" + seconds;
        // //console.log(getFormData($('form')));

        $("input[name='timeSpentbeforeFormSubmit']").val(completeTime);
        var code = $(this)
          .find(".iti__selected-dial-code")
          .text()
          .replace("+", "00");
        var selectedData = iti[index]
          .getSelectedCountryData()
          .name.replace(/ *\([^)]*\) */g, "");

        $("input[name='countryCode']").val(selectedData + ": " + code);
        $("input[name='country']").val(selectedData);
        $("input[name='ga_client_id']").val(getCookie("_ga"));
        $("input[name='fbid']").val(getFacebookCookie("_fbp"));
        $("input[name='fbclid']").val(getFbc());
        $("input[name='user_agent']").val(jscd.nAgt);
        $("input[name='os']").val(jscd.os);
        $("input[name='resolution']").val(jscd.screen);
        $("input[name='browser']").val(
          jscd.browser + " " + jscd.browserVersion,
        );
        $("input[name='device']").val(jscd.mobile ? "Mobile" : "Desktop");
        $("input[name='landingPageURL']").val(
          location.toString().split("?")[0].replace("&", "%26"),
        );
        if (
          $("input[name='campaignId']").val() == "" ||
          $("input[name='campaignId']").val() == undefined ||
          $("input[name='campaignId']").val() == "[campaign_id]"
        ) {
          $("input[name='campaignId']").val(defaultCampaignId);
        }
        var data = getFormData($(forms));
        data.fullLandingPageUrl = location.toString();
        data.cookieEnabled = navigator.cookieEnabled;
        data.referrer = document.referrer;
        let page_variant = window.__variant_custom_name;
        if (page_variant == "" || page_variant == undefined) {
          data.page_variant = "";
        } else {
          data.page_variant = page_variant;
        }
        // //console.log("data....",data)
        let fullName = $(`input[name='Full Name']`).val();
        //console.log("fullName...", fullName);
        if (fullName == "" || fullName == undefined) {
        } else {
          fullName = fullName.trim();
          const elements = fullName.split(" ");
          data.firstName = elements[0];``
          elements.shift();
          var x = elements.join(" ");
          var newVal = elements.length > 0 ? x : "noLastName";
          data.lastName = newVal;
        }

        //Send to LQS 2
        if (sendToLQS2 && formValid.isValid()) {
            pushToNewLQS(data)
        }

        //Send to LQS 1
        if (sendToLQS1 && formValid.isValid()) {
          $.ajax({
            url: lqs1EndPoint,
            beforeSend: function (xhr) {
              xhr.setRequestHeader(
                "Authorization",
                lqs1authKey,
              );
            },
            type: "POST",
            data: data,

            success: function (json) {
              var gender = data.title == "MR." ? "male" : "female";
              const hashedEmail = "NA";
              const hashedPhone = "NA";
              landingCMSThankYou(
                gender,
                hashedEmail,
                hashedPhone,
                null,
                null,
                data.page_variant,
                data.email,
              );
              submitUrl();
              // //console.log(json);
              handler(e);
            },
            error: function (err) {
              //console.log("Request failed, error= " + err);
            },
          });
        } else {
          handler(e);
        }
      };
    });
  }
});

var ga_client_id = getCookie("_gid"),
  uniq_vis_id = getCookie("uniq_vis_id");
//console.log("ga_client_id...", ga_client_id);
function landingCMSThankYou(e, t, o, r, a, s, b) {
  if ("" == e || "" == t || "" == o);
  else {
    var c = document.querySelector("#gtm_project_id").value,
      n = document.querySelector("#gtm_project_name").value,
      m = document.querySelector("#gtm_project_category").value,
      i = document.querySelector("#form_id").value;
    // let gaId = ga_client_id != '' ? ga_client_id.split('.').splice(2,3).join(".") : ga_client_id
    dataLayer.push({
      event: "success",
      eventCategory: "funnel",
      eventAction: "success",
      eventLabel: n,
      project_id: c,
      project_name: n,
      project_category: m,
      page_variant: s,
      user_email: b,
      form_id: i,
      client_id: ga_client_id,
      gender: e,
      hashed_email: t,
      hashed_phone: o,
      formQuestion: r,
      formAnswer: a,
      cm_form_success: 1,
    }),
      document.getElementById("instaPageForm")
        ? dataLayer.push({
            event: "virtualpageview",
            virtualpageURL: "/thank-you",
          })
        : dataLayer.push({
            event: "virtualpageview",
            virtualpageURL: window.location.origin + "/thank-you",
          });
  }
}

function getFormData($form) {
  var unindexed_array = $form.serializeArray();
  var indexed_array = {};
  $.map(unindexed_array, function (n, i) {
    if (n["name"] === firstNameInput) {
      n["name"] = "firstName";
    }
    if (n["name"] === lastNameInput) {
      n["name"] = "lastName";
    }
    if (n["name"] === emailInput) {
      n["name"] = "email";
    }
    if (n["name"] === phoneInput) {
      n["name"] = "phoneNumber";
    }
    if (n["name"] === titleInput) {
      n["name"] = "title";

      if (n["value"] === mrInput) {
        n.value = "MR.";
      }
      if (n["value"] === msInput) {
        n.value = "MS.";
      }
      if (n["value"] === mrsInput) {
        n.value = "MRS.";
      }
    }
    
    if (n["name"] === preferredLanguageInput){
        n["name"] = "preferredLanguage"
    }

    if (n["name"] === lookingTo) {
      n["name"] = "BuyerType";

      if (n["value"] === invest) {
        n.value = "investor";
      }
      if (n["value"] === buyaHome) {
        n.value = "homeowner";
      }
      if (n["value"] === exploringDamac) {
        n.value = "exploring";
      }
      // if (n["value"] === exploringDamac) {
      //   n.value = "job seeker";
      // }
    //   if (n["value"] === workAtDamac) {
    //     n.value = "job seeker";
    //   }
    }
    if (n["name"] === whenToBuy) {
      n["name"] = "whenToBuy";

      if (n["value"] === daysThirty) {
        n.value = "Now";
      }
      if (n["value"] === daysNinety) {
        n.value = "after 60 days";
      }
      if (n["value"] === immediately) {
        n.value = "Immediately";
      }
      if (n["value"] === withinThreeMonths) {
        n.value = "Within 3 months";
      }
      if (n["value"] === withinSixMonths) {
        n.value = "Within 6 months";
      }
    }
    if (n["name"] === `${newsAndOffers}::INSTAPAGE_BOX::${newsInput}`) {
      n["name"] = "newsAndOffers";
    }

    if (n["name"].startsWith(`${acceptPrivacyPolicy}::INSTAPAGE_BOX::`)) {
      n["name"] = "acceptPrivacyPolicy";
    }
    if (n["name"] === `${contacted}::INSTAPAGE_BOX::${sms}`) {
      n["name"] = "SMSConsent";
    }
    if (n["name"] === `${contacted}::INSTAPAGE_BOX::${whatsapp}`) {
      n["name"] = "WhatsappConsent";
    }

    //I am a jobseeker
    if (n["name"] === `${workAtDamac}::INSTAPAGE_BOX::${iAmAJobSeeker}`) {
        n["name"] = "jobSeeker";
    }

    //What is your budget range?
    if (n["name"] === budgetRangePreference) {
      n["name"] = "budget";

      if (n["value"] === uptoOneM) {
        n.value = "Up to AED 1M";
      }
      if (n["value"] === oneMtoTwoM) {
        n.value = "AED 1M to AED 2M";
      }
      if (n["value"] === twoMtoFiveM) {
          n.value = "AED 2M to AED 5M";
      }
      if (n["value"] === fiveMPlus) {
          n.value = "Above AED 5M";
      }
    }


    //What type of property are you interested in?
    if (n["name"] === propertyTypePreference) {
        n["name"] = "Home_Type__c";
  
        if (n["value"] === villaHouse) {
          n.value = "Villa";
        }
        if (n["value"] === apartmentFlat) {
          n.value = "Apartment";
        }
      }


    //How many bedrooms do you require?
    if (n["name"] === bedroomCountPreference) {
        n["name"] = "noOfBedrooms";
  
        if (n["value"] === studio) {
          n.value = "Studio";
        }
        if (n["value"] === oneBr) {
          n.value = "1";
        }
        if (n["value"] === twoBr) {
            n.value = "2";
        }
        if (n["value"] === threeBr) {
            n.value = "3";
        }
        if (n["value"] === fourPlusBr) {
            n.value = "4";
        }
      }


    if (n["name"].startsWith(`dp_agreement::INSTAPAGE_BOX::`)) {
      n["name"] = "DP_Agreement";
    }
    if (n["value"].indexOf("[") > -1) {
      n["value"] = "";
    }

    indexed_array[n["name"]] = n["value"];
  });
  ////console.log('indexed_array...', indexed_array);
  return indexed_array;
}

window.__custom_form_validations = [
  {
    fieldName: emailInput,
    validationFn: function (input) {
      var dateRegex =
        /^([0-9]{1,1}[_.-]*)*[a-z]+[._-]*[0-9]*[a-z0-9._-]*@[a-z0-9.-]+\.[a-z]{2,4}$/;
      var emailErrorMessage = `: ${emailError}`;
      return {
        isValid: dateRegex.test(input.value),
        message: window._Translate.get(emailErrorMessage),
      };
    },
  },
];

function submitUrl() {
  $(".redirect-container").hide();
  let utm = location.toString().split("?")[1];
}

function getLQSData(lqid) {
  return $.ajax({
    url:
      "moengage-url-removed" +
      lqid,
    type: "GET",
  });
}

function getLQIdfromQueryString() {
  var query = location.href.split("?").pop().split("&");
  var len = query.length;
  var lqid = "";
  for (var i = 0; i < len; i++) {
    split = query[i].split("=");
    split[0] == "uniqueid" ? (lqid = split[1]) : (lqui = "");
  }
  return lqid;
}

function filldropdowns(){
let titleVal = $("input[name='moTitle']").val()
//console.log('titleval...',titleVal)

var k =$("input[name='moTitle']").val();
$("select[name='"+titleInput+"'] option").filter(function() {
return $(this).val() ==k;
}).prop('selected', true);
$("select#field-741126b051b758e175dc7d616433758e-0 option").filter(function() {
return $(this).val() ==titleVal;
}).prop('selected', true);
$("select#field-5d7b0ff4610675daada3263278489d62-0 option").filter(function() {
return $(this).val() ==titleVal;
}).prop('selected', true);

}

// ======== E N D   O F   L E A D   S U B M I S S I O N   H A N D L I N G ========




// ======== O N   I N I T ========
obtainAccessToken(lqs2clientId, lqs2clientSecret, lqs2tokenEndpoint)

addUTMParamsToSessionStorage()
// ======== E N D   O F   O N   I N I T ========




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
    console.log("res", res_1);
    window.sessionStorage.setItem("accessTokenForBff", res_1?.data?.jwtToken);
    return res_1?.data?.jwtToken;
  } catch (error) {
    return console.error("Error fetching pricing data:", error);
  }
}

// bffLayerTokenAccess();

// Function to fetch pricing data
async function fetchPricingData(drupleId) {
  try {
    const token = await getTokenFromLocalStorage();
    const response = await fetch(
      `${bffBaseUrlStage}instapage/get-pricing/${drupleId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    console.log("Pricing Data:", data, token);

    if(data?.message === 'success') {
      replaceTextInElements('{{CT_price}}*', data?.data?.prices?.AED?.min, document.body);
    }

    if (response.status === 401 || (data?.message === 'Unauthorized: Invalid token')) {
      await refreshTokenAndRetry(drupleId);
    }
  } catch (error) {
    return console.error("Error fetching pricing data:", error);
  }
}

async function refreshTokenAndRetry(drupleId) {
  try {
    await bffLayerTokenAccess(); // Refresh token
    await fetchPricingData(drupleId); // Retry fetching pricing data
  } catch (error) {
    console.error("Error refreshing token and retrying:", error);
  }
}

// Example usage:
const drupleId = "2337";
fetchPricingData(drupleId);
// ======== BFF   C O N F I G ========


// ======================== UPDATE PRICES AFTER TAKING FROM BFF ================================
function replaceTextInElements(oldText, newText, element) {
  // If the element is a text node, perform replacement
  if (element.nodeType === Node.TEXT_NODE) {
      element.nodeValue = element.nodeValue.replace(new RegExp(oldText, 'g'), newText);
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
