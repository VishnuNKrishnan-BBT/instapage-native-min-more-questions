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
    newsInput = "Iâ€™d like to hear about news and offers";
    privacyInput = "Iâ€™ve read and agreed to the Privacy Policy";
    phoneError = "Please enter a valid Phone number";
    emailError = "EnterÂ aÂ validÂ email";
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
    _Translate.set("Processing...", "Ø¬Ø§Ø±ÙŠ Ø§Ù„Ø¹Ù…Ù„...");
    _Translate.set(
      "Please Fix These Errors",
      "Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø§Ù„ØªØ£ÙƒØ¯ Ù…Ù† Ø§Ù„Ø£Ø®Ø·Ø§Ø¡ Ø§Ù„ØªØ§Ù„ÙŠØ© ",
    );
    _Translate.set("is not valid", "ØºÙŠØ± ØµØ­ÙŠØ­");
    _Translate.set("is required", "Ù…Ø·Ù„ÙˆØ¨");
    _Translate.set("starts with @ sign", "ØªØ¨Ø¯Ø£ Ø¨Ø¹Ù„Ø§Ù…Ø© @");
    _Translate.set("is missing @ sign", "Ø¹Ù„Ø§Ù…Ø© @ ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø©");
    _Translate.set("contains repeated dots", "ÙŠØ­ØªÙˆÙŠ Ø¹Ù„Ù‰ Ù†Ù‚Ø§Ø· Ù…ÙƒØ±Ø±Ø©");
    _Translate.set("starts with a dot", "ÙŠØ¨Ø¯Ø£ Ø¨Ù†Ù‚Ø·Ø©");
    _Translate.set("domain is missing", "Ø§Ù„Ø®Ø§Ù†Ø© ÙØ§Ø±ØºØ©");
    _Translate.set("domain starts with a dot", "Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø¨Ø§Ù„Ø®Ø§Ù†Ø© ØªØ¨Ø¯Ø£ Ø¨Ù†Ù‚Ø·Ø©");
    _Translate.set("domain is not valid", "Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø¨Ø§Ù„Ø®Ø§Ù†Ø© ØºÙŠØ± ØµØ­ÙŠØ­Ø©");
    _Translate.set("domain ends with a dot", "Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø¨Ø§Ù„Ø®Ø§Ù†Ø© ØªÙ†ØªÙ‡ÙŠ Ø¨Ù†Ù‚Ø·Ø©");
    phoneInput = "Ù‡Ø§ØªÙ";
    let data = $('input[name="' + phoneInput + '"]');
    if (data.length > 0) {
      phoneInput = "Ù‡Ø§ØªÙ";
    } else {
      phoneInput = "Ø§Ù„Ù‡Ø§ØªÙ";
    }
    //console.log("data...", data);
    titleInput = "Ø§Ù„Ù„Ù‚Ø¨";
    firstNameInput = "Ø§Ù„Ø§Ø³Ù… Ø§Ù„Ø£ÙˆÙ„";
    lastNameInput = "Ø§Ø³Ù… Ø§Ù„Ø¹Ø§Ø¦Ù„Ø©";
    emailInput = "Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ";
    mrInput = "Ø§Ù„Ø³ÙŠØ¯";
    msInput = "Ø§Ù„Ø¢Ù†Ø³Ø©";
    mrsInput = "Ø§Ù„Ø³ÙŠØ¯Ø©";
    newsInput = "Ø£ÙˆØ¯Ù‘ Ø§Ù„Ø§Ø·Ù„Ø§Ø¹ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø®Ø¨Ø§Ø± ÙˆØ§Ù„Ø¹Ø±ÙˆØ¶";
    privacyInput = "Ù„Ù‚Ø¯ Ù‚Ø±Ø£Øª ÙˆÙˆØ§ÙÙ‚Øª Ø¹Ù„Ù‰ Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ©";
    phoneError = "Ø£Ø¯Ø®Ù„ Ø±Ù‚Ù… Ù‡Ø§ØªÙ ØµØ­ÙŠØ­";
    emailError = "Ø£Ø¯Ø®Ù„ Ø¨Ø±ÙŠØ¯ Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ØµØ­ÙŠØ­";
    newsAndOffers = "Ø§Ù„Ø£Ø®Ø¨Ø§Ø± ÙˆØ§Ù„Ø¹Ø±ÙˆØ¶";
    acceptPrivacyPolicy = "Ù…ÙˆØ§ÙÙ‚ Ø¹Ù„Ù‰ Ø´Ø±ÙˆØ· Ø§Ù„Ø®ØµÙˆØµÙŠØ©";
    lookingTo = "Ù‡Ù„ ØªØ¨Ø­Ø« Ø¹Ù†";
    invest = "Ø§Ù„Ø§Ø³ØªØ«Ù…Ø§Ø±";
    buyaHome = "Ø´Ø±Ø§Ø¡ Ù…Ù†Ø²Ù„";
    workAtDamac = "Ø§Ù„Ø¹Ù…Ù„ Ù„Ø¯Ù‰ Ø¯Ø§Ù…Ø§Ùƒ";
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

    whenToBuy = "Ù…Ø§ Ù‡ÙŠ Ø§Ù„Ù…Ø¯Ø© Ø§Ù„ØªÙŠ Ø³ØªØ³ØªØºØ±Ù‚Ù‡Ø§ Ù„Ø´Ø±Ø§Ø¡ Ù…Ù†Ø²Ù„ØŸ";
    daysThirty = "Ø®Ù„Ø§Ù„ 30 ÙŠÙˆÙ…";
    daysNinety = "Ø®Ù„Ø§Ù„ 90 ÙŠÙˆÙ…";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "Ø§Ø¶ØºØ· Ù‡Ù†Ø§";
    labtext = "Ù„Ù…Ø¹Ø±ÙØ© Ø§Ù„Ù…Ø²ÙŠØ¯ Ø¹Ù† Ø¹Ù‚Ø§Ø±Ø§Øª Ø¯Ø§Ù…Ø§Ùƒ Ø§Ù„Ø£Ø®Ø±Ù‰";
    contacted = "Ø£ÙÙˆØ§ÙÙ‚ Ø£Ù† ÙŠØªÙ…Ù‘ Ø§Ù„ØªÙˆØ§ØµÙ„ Ø¨";
    sms = "Ø±Ø³Ø§Ù„Ø© Ù†ØµÙŠÙ‘Ø©";
    whatsapp = "ØªØ·Ø¨ÙŠÙ‚ ÙˆØ§ØªØ³Ø§Ø¨";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "FR") {
    _Translate.set("Processing...", "En cours de traitement...");
    _Translate.set("Please Fix These Errors", "Veuillez corriger ces erreurs");
    _Translate.set("is not valid", "nâ€™est pas valide");
    _Translate.set("is required", "est un Ã©lÃ©ment requis");
    _Translate.set("starts with @ sign", "commence par une @");
    _Translate.set("is missing @ sign", "Le signe @ est manquant");
    _Translate.set(
      "contains repeated dots",
      "contient plusieurs points consÃ©cutifs",
    );
    _Translate.set("starts with a dot", "commence par un point");
    _Translate.set("domain is missing", "Le domaine est manquant");
    _Translate.set(
      "domain starts with a dot",
      "Le domaine commence par un point",
    );
    _Translate.set("domain is not valid", "Le domaine nâ€™est pas valide");
    _Translate.set("domain ends with a dot", "Le domaine finit par un point");
    phoneInput = "tÃ©lÃ©phoner";
    let data = $('input[name="' + phoneInput + '"]');
    //console.log("data...", data);
    if (data.length > 0) {
      phoneInput = "tÃ©lÃ©phoner";
    } else {
      phoneInput = "TÃ©lÃ©phone";
    }
    titleInput = "Titre";
    firstNameInput = "PrÃ©nom";
    lastNameInput = "Nom";
    emailInput = "Adresse e-mail";
    mrInput = "M";
    msInput = "Melle";
    mrsInput = "Mme";
    newsInput = "Je souhaite recevoir les informations et les offres";
    privacyInput = "Jâ€™ai lu et jâ€™accepte la politique de confidentialitÃ©";
    phoneError = "Veuillez saisir un numÃ©ro de tÃ©lÃ©phone valide";
    emailError = "Saisir une adresse e-mail valide";
    newsAndOffers = "ActualitÃ©s et offres";
    acceptPrivacyPolicy = "Accepter la politique de confidentialitÃ©";
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

    whenToBuy = "Quand envisagez-vous dâ€™acheter ?";
    daysThirty = "Dans 30 jours";
    daysNinety = "Dans 90 jours";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "Cliquer ici";
    labtext = "Pour en savoir plus sur les autres propriÃ©tÃ©s DAMAC";
    contacted = "I can be contacted via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "SP") {
    _Translate.set("Processing...", "Procesando...");
    _Translate.set("Please Fix These Errors", "Solucione estos errores");
    _Translate.set("is not valid", "no es vÃ¡lido");
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
    _Translate.set("domain is not valid", "el domino no es vÃ¡lido");
    _Translate.set("domain ends with a dot", "el dominio termina con un punto");
    phoneInput = "TelÃ©fono";
    titleInput = "Tratamiento";
    firstNameInput = "Nombre";
    lastNameInput = "Apellido";
    emailInput = "Correo electrÃ³nico";
    mrInput = "Sr.";
    msInput = "Srta.";
    mrsInput = "Sra.";
    newsInput = "Me gustarÃ­a recibir noticias y ofertas";
    privacyInput = "He leÃ­do y acepto la PolÃ­tica de privacidad";
    phoneError = "Escriba un nÃºmero de telÃ©fono vÃ¡lido";
    emailError = "Escriba un correo electrÃ³nico vÃ¡lido";
    newsAndOffers = "Noticias y ofertas";
    acceptPrivacyPolicy = "Aceptar la polÃ­tica de privacidad";
    lookingTo = "EstÃ¡ pensando en?";
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

    whenToBuy = "Â¿CuÃ¡ndo piensa comprarlo?";
    daysThirty = "En 30Â dÃ­as";
    daysNinety = "En 90Â dÃ­as";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "HAGA CLIC AQUÃ";
    labtext = "Para obtener mÃ¡s informaciÃ³n sobre otras propiedades DAMAC";
    contacted = "I can be contacted via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "HE") {
    _Translate.set("Processing...", "×ž×¢×‘×“...");
    _Translate.set("Please Fix These Errors", "× × ×œ×ª×§×Ÿ ××ª ×”×©×’×™××•×ª ×”×‘××•×ª");
    _Translate.set("is not valid", "×œ× ×ª×§×™×Ÿ");
    _Translate.set("is required", "×—×•×‘×”");
    _Translate.set("starts with @ sign", "×ž×ª×—×™×œ ×‘×¡×™×ž×Ÿ @");
    _Translate.set("is missing @ sign", "×—×¡×¨ ×¡×™×ž×Ÿ @");
    _Translate.set("contains repeated dots", "×ž×›×™×œ ×ž×¡×¤×¨ × ×§×•×“×•×ª ×‘×¨×¦×£");
    _Translate.set("starts with a dot", "×ž×ª×—×™×œ ×‘× ×§×•×“×”");
    _Translate.set("domain is missing", "×—×¡×¨ ×©× ×“×•×ž×™×™×Ÿ");
    _Translate.set("domain starts with a dot", "×©× ×”×“×•×ž×™×™×Ÿ ×ž×ª×—×™×œ ×‘× ×§×•×“×”");
    _Translate.set("domain is not valid", "×©× ×”×“×•×ž×™×™×Ÿ ××™× ×• ×ª×§×™×Ÿ");
    _Translate.set("domain ends with a dot", "×©× ×”×“×•×ž×™×™×Ÿ ×ž×¡×ª×™×™× ×‘× ×§×•×“×”");
    phoneInput = "×ž×›×©×™×¨ ×˜×œ×¤×•×Ÿ";
    titleInput = "×ª×•××¨";
    firstNameInput = "×©× ×¤×¨×˜×™ ×ª×§× ×™";
    lastNameInput = "×©× ×ž×©×¤×—×” ×ª×§× ×™";
    emailInput = "×›×ª×•×‘×ª ××™×ž×™×™×œ";
    mrInput = ".MR";
    msInput = ".MS";
    mrsInput = ".MRS";
    newsInput = "×‘×¨×¦×•× ×™ ×œ×©×ž×•×¢ ×¢×œ ×—×“×©×•×ª ×•×ž×‘×¦×¢×™×";
    privacyInput = "×§×¨××ª×™ ×•×”×¡×›×ž×ª×™ ×œ×ž×“×™× ×™×•×ª ×”×¤×¨×˜×™×•×ª";
    phoneError = "× × ×œ×”×–×™×Ÿ ×ž×¡×¤×¨ ×˜×œ×¤×•×Ÿ ×ª×§× ×™";
    emailError = "× × ×œ×”×–×™×Ÿ ×›×ª×•×‘×ª ××™×ž×™×™×œ ×ª×§× ×™×ª";
    newsAndOffers = "×—×“×©×•×ª ×•×ž×‘×¦×¢×™×";
    acceptPrivacyPolicy = "×§×‘×œ×ª ×ž×“×™× ×™×•×ª ×”×¤×¨×˜×™×•×ª";
    lookingTo = "×”×× ××ª× ×ž×¢×•× ×™×™× ×™×";
    invest = "×œ×”×©×§×™×¢";
    buyaHome = "×œ×¨×›×•×© ×‘×™×ª";
    workAtDamac = "×œ×¢×‘×•×“ @ DAMAC";
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

    whenToBuy = "×ž×ª×™ ××ª× ×ž×ª×›× × ×™× ×œ×¨×›×•×©?";
    daysThirty = "×ª×•×š 30 ×™×•×";
    daysNinety = "×ª×•×š 90 ×™×•×";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "×œ×—×¦×• ×›××Ÿ";
    labtext = "×œ×¢×•×“ ×¤×¨×˜×™× ×¢×œ × ×›×¡×™× ××—×¨×™× ×©×œ ×—×‘×¨×ª DAMAC";
    contacted = "I can be contacted via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "CH") {
    _Translate.set("Processing...", "å¤„ç†ä¸­...");
    _Translate.set("Please Fix These Errors", "è¯·ä¿®å¤è¿™äº›é”™è¯¯");
    _Translate.set("is not valid", "æ— æ•ˆä¿¡æ¯");
    _Translate.set("is required", "å¿…å¡«ä¿¡æ¯");
    _Translate.set("starts with @ sign", "ä»¥@ç¬¦å·å¼€å¤´");
    _Translate.set("is missing @ sign", "ç¼ºå°‘@ç¬¦å·");
    _Translate.set("contains repeated dots", "åŒ…å«é‡å¤çš„ç‚¹");
    _Translate.set("starts with a dot", "ä»¥ç‚¹å¼€å¤´");
    _Translate.set("domain is missing", "åŸŸåä¸¢å¤±");
    _Translate.set("domain starts with a dot", "åŸŸåä»¥ç‚¹å¼€å¤´");
    _Translate.set("domain is not valid", "åŸŸåæ— æ•ˆ");
    _Translate.set("domain ends with a dot", "åŸŸåä»¥ç‚¹ç»“å°¾");
    phoneInput = "é›»è©±";
    titleInput = "ç¨±è¬‚";
    firstNameInput = "åå­—";
    lastNameInput = "å§“æ°";
    emailInput = "é›»éƒµ";
    mrInput = "å…ˆç”Ÿ";
    msInput = "å°å§";
    mrsInput = "å¥³å£«";
    newsInput = "æˆ‘æ¨‚æ„æŽ¥æ”¶æ–°èžå’Œå„ªæƒ è³‡è¨Š";
    privacyInput = "æˆ‘å·²é–±è®€ä¸¦åŒæ„ã€Šç§éš±æ”¿ç­–ã€‹";
    phoneError = "è¯·è¾“å…¥ä¸€ä¸ªæœ‰æ•ˆçš„ç”µè¯å·ç ";
    emailError = "è¾“å…¥æœ‰æ•ˆçš„ç”µå­é‚®ä»¶";
    newsAndOffers = "æœ€æ–°æ¶ˆæ¯å’Œä¼˜æƒ ";
    acceptPrivacyPolicy = "æŽ¥å—éšç§æ”¿ç­–";
    lookingTo = "ä½ å¯å¸Œæœ›";
    invest = "æŠ•è³‡";
    buyaHome = "ç½®æ¥­";
    workAtDamac = "åŠ å…¥@é”é¦¬å…‹å·¥ä½œ";
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

    whenToBuy = "ä½ æ‰“ç®—ä½•æ™‚è³¼è²·ï¼Ÿ";
    daysThirty = "30å¤©å…§";
    daysNinety = "90å¤©å…§";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "å•å‡»æ­¤å¤„";
    labtext = "æœ‰å…³å…¶ä»– DAMAC å±žæ€§çš„è¯¦ç»†ä¿¡æ¯";
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
    _Translate.set("is not valid", "non Ã¨ un elemento valido");
    _Translate.set("is required", "Ã¨ un elemento richiesto");
    _Translate.set("starts with @ sign", "inizia con il simbolo @");
    _Translate.set("is missing @ sign", "non contiene il simbolo @");
    _Translate.set("contains repeated dots", "contiene piÃ¹ punti consecutivi");
    _Translate.set("starts with a dot", "inizia con un punto");
    _Translate.set("domain is missing", "non contiene il dominio");
    _Translate.set(
      "domain starts with a dot",
      "il dominio inizia con un punto",
    );
    _Translate.set("domain is not valid", "il dominio non Ã¨ valido");
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
    privacyInput = "Ho letto e accetto lâ€™Informativa sulla Privacy";
    phoneError = "Si prega di inserire un numero di telefono valido";
    emailError = "Inserire un indirizzo email valido";
    newsAndOffers = "Aggiornamenti e offerte";
    acceptPrivacyPolicy = "Accettare lâ€™Informativa sulla Privacy";
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

    whenToBuy = "Quando vorresti effettuare lâ€™acquisto?";
    daysThirty = "Entro 30 giorni";
    daysNinety = "Entro 90 giorni";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "Clicca qui";
    labtext = "Per saperne di piÃ¹ sugli altri immobili DAMAC";
    contacted = "I can be contacted via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "RU") {
    _Translate.set("Processing...", "Ð’ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐµ...");
    _Translate.set("Please Fix These Errors", "Ð˜ÑÐ¿Ñ€Ð°Ð²ÑŒÑ‚Ðµ Ð¾ÑˆÐ¸Ð±ÐºÐ¸");
    _Translate.set("is not valid", "Ð”Ð°Ð½Ð½Ñ‹Ðµ Ð½ÐµÐ´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹");
    _Translate.set("is required", "ÐÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾ ÑƒÐºÐ°Ð·Ð°Ñ‚ÑŒ Ð´Ð°Ð½Ð½Ñ‹Ðµ");
    _Translate.set("starts with @ sign", "Ð½Ð°Ñ‡Ð¸Ð½Ð°ÐµÑ‚ÑÑ ÑÐ¾ Ð·Ð½Ð°ÐºÐ° @");
    _Translate.set("is missing @ sign", "Ð½Ðµ ÑÐ¾Ð´ÐµÑ€Ð¶Ð¸Ñ‚ Ð·Ð½Ð°ÐºÐ° @");
    _Translate.set("contains repeated dots", "ÑÐ¾Ð´ÐµÑ€Ð¶Ð¸Ñ‚ Ð»Ð¸ÑˆÐ½Ð¸Ðµ Ñ‚Ð¾Ñ‡ÐºÐ¸");
    _Translate.set("starts with a dot", "Ð½Ð°Ñ‡Ð¸Ð½Ð°ÐµÑ‚ÑÑ Ñ Ñ‚Ð¾Ñ‡ÐºÐ¸");
    _Translate.set("domain is missing", "Ð´Ð¾Ð¼ÐµÐ½ Ð½Ðµ ÑƒÐºÐ°Ð·Ð°Ð½");
    _Translate.set(
      "domain starts with a dot",
      "Ñ‚Ð¾Ñ‡ÐºÐ° Ð² Ð½Ð°Ñ‡Ð°Ð»Ðµ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ñ Ð´Ð¾Ð¼ÐµÐ½Ð°",
    );
    _Translate.set("domain is not valid", "Ð´Ð¾Ð¼ÐµÐ½ Ð½ÐµÐ´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ‚ÐµÐ»ÐµÐ½");
    _Translate.set("domain ends with a dot", "Ñ‚Ð¾Ñ‡ÐºÐ° Ð² ÐºÐ¾Ð½Ñ†Ðµ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ñ Ð´Ð¾Ð¼ÐµÐ½Ð°");
    phoneInput = "Ð½Ð¾Ð¼ÐµÑ€ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð°";
    titleInput = "Ð¤Ð¾Ñ€Ð¼Ð° Ð¾Ð±Ñ€Ð°Ñ‰ÐµÐ½Ð¸Ñ";
    firstNameInput = "Ð˜Ð¼Ñ";
    lastNameInput = "Ð¤Ð°Ð¼Ð¸Ð»Ð¸Ñ";
    emailInput = "ÐÐ´Ñ€ÐµÑ ÑÐ»ÐµÐºÑ‚Ñ€Ð¾Ð½Ð½Ð¾Ð¹ Ð¿Ð¾Ñ‡Ñ‚Ñ‹";
    mrInput = "Ð“-Ð½";
    msInput = "Ð“-Ð¶Ð°";
    newsInput = "Ð¯ Ñ…Ð¾Ñ‡Ñƒ Ð¿Ð¾Ð»ÑƒÑ‡Ð°Ñ‚ÑŒ Ð½Ð¾Ð²Ð¾ÑÑ‚Ð¸ Ð¸ Ð¿Ñ€ÐµÐ´Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ";
    privacyInput = "Ð¯ Ð¿Ñ€Ð¸Ð½Ð¸Ð¼Ð°ÑŽ ÑƒÑÐ»Ð¾Ð²Ð¸Ñ Ð¿Ð¾Ð»Ð¸Ñ‚Ð¸ÐºÐ¸ ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸";
    phoneError = "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ð¹ Ð½Ð¾Ð¼ÐµÑ€ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð°";
    emailError = "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ð¹ Ð°Ð´Ñ€ÐµÑ ÑÐ». Ð¿Ð¾Ñ‡Ñ‚Ñ‹";
    newsAndOffers = "ÐÐ¾Ð²Ð¾ÑÑ‚Ð¸ Ð¸ Ð¿Ñ€ÐµÐ´Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ";
    acceptPrivacyPolicy = "ÐŸÑ€Ð¸Ð¼Ð¸Ñ‚Ðµ ÑƒÑÐ»Ð¾Ð²Ð¸Ñ ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ¸ ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸";
    lookingTo = "Ð§Ñ‚Ð¾ Ð²Ð°Ñ Ð¸Ð½Ñ‚ÐµÑ€ÐµÑÑƒÐµÑ‚";
    invest = "Ð˜Ð½Ð²ÐµÑÑ‚Ð¸Ñ†Ð¸Ð¸";
    buyaHome = "ÐŸÐ¾ÐºÑƒÐ¿ÐºÐ° Ð½ÐµÐ´Ð²Ð¸Ð¶Ð¸Ð¼Ð¾ÑÑ‚Ð¸";
    workAtDamac = "Ð Ð°Ð±Ð¾Ñ‚Ð° Ð² DAMAC";
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

    whenToBuy = "ÐšÐ¾Ð³Ð´Ð° Ð²Ñ‹ Ð¿Ð»Ð°Ð½Ð¸Ñ€ÑƒÐµÑ‚Ðµ ÑÐ´ÐµÐ»Ð°Ñ‚ÑŒ Ð¿Ð¾ÐºÑƒÐ¿ÐºÑƒ?";
    daysThirty = "Ð’ Ñ‚ÐµÑ‡ÐµÐ½Ð¸Ðµ 30 Ð´Ð½ÐµÐ¹";
    daysNinety = "Ð’ Ñ‚ÐµÑ‡ÐµÐ½Ð¸Ðµ 90 Ð´Ð½ÐµÐ¹";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "ÐÐ°Ð¶Ð¼Ð¸Ñ‚Ðµ Ð·Ð´ÐµÑÑŒ";
    labtext = "ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½ÐµÐµ Ð¾ Ð´Ñ€ÑƒÐ³Ð¸Ñ… Ð¾Ð±ÑŠÐµÐºÑ‚Ð°Ñ… DAMAC Properties";
    contacted = "I can be contacted via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "GK") {
    _Translate.set("Processing...", "Î“Î¯Î½ÎµÏ„Î±Î¹ ÎµÏ€ÎµÎ¾ÎµÏÎ³Î±ÏƒÎ¯Î±...");
    _Translate.set("Please Fix These Errors", "Î”Î¹Î¿ÏÎ¸ÏŽÏƒÏ„Îµ Î±Ï…Ï„Î¬ Ï„Î± ÏƒÏ†Î¬Î»Î¼Î±Ï„Î±");
    _Translate.set("is not valid", "Î´ÎµÎ½ ÎµÎ¯Î½Î±Î¹ Î­Î³ÎºÏ…ÏÎ¿");
    _Translate.set("is required", "ÎµÎ¯Î½Î±Î¹ Ï…Ï€Î¿Ï‡ÏÎµÏ‰Ï„Î¹ÎºÏŒ");
    _Translate.set("starts with @ sign", "Î¾ÎµÎºÎ¹Î½Î¬ Î¼Îµ Ï„Î¿ ÏƒÏÎ¼Î²Î¿Î»Î¿ @");
    _Translate.set("is missing @ sign", "Î»ÎµÎ¯Ï€ÎµÎ¹ Ï„Î¿ ÏƒÏÎ¼Î²Î¿Î»Î¿ @");
    _Translate.set(
      "contains repeated dots",
      "Ï€ÎµÏÎ¹Î­Ï‡ÎµÎ¹ ÎµÏ€Î±Î½Î±Î»Î±Î¼Î²Î±Î½ÏŒÎ¼ÎµÎ½ÎµÏ‚ Ï„ÎµÎ»ÎµÎ¯ÎµÏ‚",
    );
    _Translate.set("starts with a dot", "Î¾ÎµÎºÎ¹Î½Î¬ Î¼Îµ Î¼Î¹Î± Ï„ÎµÎ»ÎµÎ¯Î±");
    _Translate.set("domain is missing", "Î»ÎµÎ¯Ï€ÎµÎ¹ Ï„Î¿ domain");
    _Translate.set("domain starts with a dot", "Ï„Î¿ domain Î¾ÎµÎºÎ¹Î½Î¬ Î¼Îµ Ï„ÎµÎ»ÎµÎ¯Î±");
    _Translate.set("domain is not valid", "Ï„Î¿ domain Î´ÎµÎ½ ÎµÎ¯Î½Î±Î¹ Î­Î³ÎºÏ…ÏÎ¿");
    _Translate.set("domain ends with a dot", "Ï„Î¿ domain Î»Î®Î³ÎµÎ¹ ÏƒÎµ Ï„ÎµÎ»ÎµÎ¯Î±");
    phoneInput = "Î¤Î·Î»Î­Ï†Ï‰Î½Î¿";
    titleInput = "Î¤Î¯Ï„Î»Î¿Ï‚";
    firstNameInput = "ÎŒÎ½Î¿Î¼Î±";
    lastNameInput = "Î•Ï€ÏŽÎ½Ï…Î¼Î¿";
    emailInput = "Email";
    mrInput = "ÎšÎ¿Ï‚.";
    msInput = "Î”Î¹Ï‚.";
    mrsInput = "ÎšÎ±.";
    newsInput = "Î˜Î­Î»Ï‰ Î½Î± Î¼Î±Î¸Î±Î¯Î½Ï‰ Î³Î¹Î± Ï„Î± Î½Î­Î± ÎºÎ±Î¹ Ï„Î¹Ï‚ Ï€ÏÎ¿ÏƒÏ†Î¿ÏÎ­Ï‚";
    privacyInput = "ÎˆÏ‡Ï‰ Î´Î¹Î±Î²Î¬ÏƒÎµÎ¹ ÎºÎ±Î¹ ÏƒÏ…Î¼Ï†Ï‰Î½ÏŽ Î¼Îµ Ï„Î·Î½ Î Î¿Î»Î¹Ï„Î¹ÎºÎ® Î±Ï€Î¿ÏÏÎ®Ï„Î¿Ï…";
    phoneError = "Î•Î¹ÏƒÎ±Î³Î¬Î³ÎµÏ„Îµ Î­Î³ÎºÏ…ÏÎ¿ Î±ÏÎ¹Î¸Î¼ÏŒ Ï„Î·Î»ÎµÏ†ÏŽÎ½Î¿Ï…";
    emailError = "Î•Î¹ÏƒÎ±Î³Î¬Î³ÎµÏ„Îµ Î­Î³ÎºÏ…ÏÎ¿ email";
    newsAndOffers = "ÎÎ­Î± ÎºÎ±Î¹ Ï€ÏÎ¿ÏƒÏ†Î¿ÏÎ­Ï‚";
    acceptPrivacyPolicy = "Î‘Ï€Î¿Î´Î¿Ï‡Î® Î Î¿Î»Î¹Ï„Î¹ÎºÎ®Ï‚ Î±Ï€Î¿ÏÏÎ®Ï„Î¿Ï…";
    btntext = "ÎšÎ¬Î½Ï„Îµ ÎºÎ»Î¹Îº ÎµÎ´ÏŽ";
    labtext = "Î“Î¹Î± Ï€ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÎµÏ‚ Ï€Î»Î·ÏÎ¿Ï†Î¿ÏÎ¯ÎµÏ‚ ÏƒÏ‡ÎµÏ„Î¹ÎºÎ¬ Î¼Îµ Î¬Î»Î»Î± ÎºÎ±Ï„Î±Î»ÏÎ¼Î±Ï„Î± DAMAC";
    contacted = "I can be contacted via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "GR") {
    _Translate.set("Processing...", "Verarbeitung lÃ¤uft...");
    _Translate.set("Please Fix These Errors", "Bitte beheben Sie diese Fehler");
    _Translate.set("is not valid", "ist ungÃ¼ltig");
    _Translate.set("is required", "ist erforderlich");
    _Translate.set("starts with @ sign", "beginnt mit @-Zeichen");
    _Translate.set("is missing @ sign", "@-Zeichen fehlt");
    _Translate.set("contains repeated dots", "enthÃ¤lt wiederholte Punkte");
    _Translate.set("starts with a dot", "beginnt mit einem Punkt");
    _Translate.set("domain is missing", "Domain fehlt");
    _Translate.set(
      "domain starts with a dot",
      "Domain beginnt mit einem Punkt",
    );
    _Translate.set("domain is not valid", "Domain ist ungÃ¼ltig");
    _Translate.set("domain ends with a dot", "Domain endet mit einem Punkt");
    phoneInput = "Telefonnummer";
    titleInput = "Anrede";
    firstNameInput = "Vorname";
    lastNameInput = "Nachname";
    emailInput = "E-Mail";
    mrInput = "Herr";
    msInput = "Frau";
    mrsInput = "FrÃ¤ulein";
    newsInput = "Ich mÃ¶chte Ã¼ber Neuigkeiten und Angebote informiert werden";
    privacyInput =
      "Ich habe die Datenschutzbestimmungen gelesen und stimme ihnen zu";
    phoneError = "Bitte geben Sie eine gÃ¼ltige Telefonnummer ein";
    emailError = "Bitte geben Sie eine gÃ¼ltige E-Mail-Adresse ein";
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

    whenToBuy = "Wann mÃ¶chten Sie kaufen?";
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
    _Translate.set("Processing...", "Se proceseazÄƒâ€¦...");

    _Translate.set(
      "Please Fix These Errors",
      "VÄƒ rugÄƒm sÄƒ remediaÈ›i aceste erori",
    );

    _Translate.set("is not valid", "nu este valid");
    _Translate.set("is required", "este obligatoriu");
    _Translate.set("starts with @ sign", "Ã®ncepe cu semnul @");
    _Translate.set("is missing @ sign", "semnul @ lipseÈ™te");
    _Translate.set("contains repeated dots", "conÈ›ine puncte repetate");
    _Translate.set("starts with a dot", "Ã®ncepe cu un punct");
    _Translate.set("domain is missing", "lipseÈ™te 'domeniul");
    _Translate.set("domain starts with a dot", "domeniul Ã®ncepe cu un punct");
    _Translate.set("domain is not valid", "domeniul nu este valid");
    _Translate.set("domain ends with a dot", "domeniul se Ã®ncheie cu un punct");
    phoneInput = "De telefon";
    titleInput = "SelectaÈ›i o titulaturÄƒ";
    firstNameInput = "IntroduceÈ›i un prenume valid";
    lastNameInput = "IntroduceÈ›i un nume de familie valid";
    emailInput = "IntroduceÈ›i o adresÄƒ de e-mail validÄƒ";
    mrInput = "Dl";
    msInput = "Dna";
    mrsInput = "Dra";
    newsInput = "Doresc sÄƒ primesc noutÄƒÈ›i È™i oferte";
    privacyInput = "Am citit È™i sunt de acord cu Politica de confidenÈ›ialitate";
    phoneError = "IntroduceÈ›i un numÄƒr de telefon valid";
    emailError = "IntroduceÈ›i o adresÄƒ de e-mail validÄƒ";
    newsAndOffers = "NoutÄƒÈ›i È™i oferte";
    acceptPrivacyPolicy = "Accept Politica de confidenÈ›ialitate";
    lookingTo = "VÄƒ intereseazÄƒ";
    invest = "SÄƒ investiÈ›i";
    buyaHome = "SÄƒ cumpÄƒraÈ›i o casÄƒ";
    workAtDamac = "SÄƒ lucraÈ›i la DAMAC";
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

    whenToBuy = "CÃ¢nd intenÈ›ionaÈ›i sÄƒ cumpÄƒraÈ›i ?";
    daysThirty = "ÃŽn urmÄƒtoarele 30 de zile";
    daysNinety = "ÃŽn urmÄƒtoarele 90 de zile";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "APÄ‚SAÈšI AICI";
    labtext = "Pentru mai multe informaÈ›ii despre DAMAC Properties";
    contacted = "MÄƒ puteÈ›i contactata prin";
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
    newsInput = "Iâ€™d like to hear about news and offers";
    privacyInput = "Iâ€™ve read and agreed to the Privacy Policy";
    phoneError = "Please enter a valid Phone number";
    emailError = "EnterÂ aÂ validÂ email";
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

if (urlSplits.includes("gdn")) {
  defaultCampaignId = "a1207000000bnOn";
} else if (urlSplits.includes("emailer")) {
  defaultCampaignId = "a1207000000cX0R";
} else if (urlSplits.includes("social")) {
  defaultCampaignId = "a121n00000D9pUv";
} else if (urlSplits.includes("affilate")) {
  defaultCampaignId = "a1207000000d8a4";
} else {
  defaultCampaignId = "a121n00000Dwy45";
}

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

        $("input[name='countryCode']").val(selectedData + ":" + code);
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

        if (formValid.isValid()) {
          $.ajax({
            url: "https://lqsapp.damacgroup.com/api/importedleads",
            beforeSend: function (xhr) {
              xhr.setRequestHeader(
                "Authorization",
                "newiuw3ujdjudqoeneoie1E@R#",
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
          n.value = "villa";
        }
        if (n["value"] === apartmentFlat) {
          n.value = "apartment";
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