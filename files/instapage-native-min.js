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

//HANDLE MULTIPLE CLICKS ON SUBMIT
const submitBtns = Array.from(document.getElementsByClassName('btn form-btn item-block'))
const toggleSubmitBtns = mode => {
  if(mode !== 'enable' && mode !== 'disable'){
    console.log('toggleSubmitBtns: mode has to be enable or disable');
    return
  }

  if(mode === 'disable'){
    //Disable submit button
    submitBtns.map(obj => {
      obj.innerHTML = 'SUBMITTING'
      obj.style.color = '#41C4F2'
      obj.style.backgroundColor = '#ffffff'
      obj.style.cursor = 'not-allowed'
      obj.disabled = true
    })
  }else if(mode === 'enable'){
    //RESET SUBMIT BUTTON
    submitBtns.map(obj => {
      obj.innerHTML = 'ENQUIRE NOW'
      obj.disabled = false
      obj.style.color = '#ffffff'
      obj.style.backgroundColor = '#41C4F2'
      obj.style.cursor = 'pointer'
    })
  }
}
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
    _Translate.set("Processing...","جاري العمل...");
    _Translate.set("Please Fix These Errors","الرجاء التأكد من الأخطاء التالية");
    _Translate.set("is not valid","غير صحيح");
    _Translate.set("is required","مطلوب");
    _Translate.set("starts with @ sign","تبدأ بعلامة @");
    _Translate.set("is missing @ sign","علامة @ غير موجودة");
    _Translate.set("contains repeated dots","يحتوي على نقاط مكررة");
    _Translate.set("starts with a dot","يبدأ بنقطة");
    _Translate.set("domain is missing","الخانة فارغة");
    _Translate.set("domain starts with a dot","المعلومات بالخانة تبدأ بنقطة");
    _Translate.set("domain is not valid","المعلومات بالخانة غير صحيحة");
    _Translate.set("domain ends with a dot","المعلومات بالخانة تنتهي بنقطة");
    phoneInput = "هاتف";
    let data = $('input[name="' + phoneInput + '"]');
    if (data.length > 0) {
        phoneInput = "هاتف";
    } else {
        phoneInput = "هاتف";
    }
    //console.log("data...", data);
    titleInput = "اللقب";
    firstNameInput = "الاسم الأول";
    lastNameInput = "اسم العائلة";
    emailInput = "البريد الإلكتروني";
    mrInput = "السيد";
    msInput = "الآنسة";
    mrsInput = "السيدة";
    newsInput = "أودّ الاطلاع على الأخبار والعروض";
    privacyInput = "لقد قرأت ووافقت على سياسة الخصوصية";
    phoneError = "أدخل رقم هاتف صالح";
    emailError = "أدخل عنوان بريد إلكتروني صالح";
    newsAndOffers = "الأخبار والعروض";
    acceptPrivacyPolicy = "موافق على شروط الخصوصية";
    lookingTo = "هل تبحث عن";
    invest = "الاستثمار";
    buyaHome = "شراء منزل";
    workAtDamac = "العمل لدى داماك";
    areYouLookingTo = "هل تبحث عن"; //add to other languages as well if needed
    findAJob = "أبحث عن عمل"; //add to other languages as well
    iAmAJobSeeker = "أبحث عن عمل";
    exploringDamac = "أستعرض الخيارات المتاحة";
    propertyTypePreference = "ما نوع العقار الذي تبحث عنه؟";
    villaHouse = "فيلا/منزل";
    apartmentFlat = "شقة";
    bedroomCountPreference = "كم عدد الغرف في المنزل الذي تبحث عنه؟";
    studio = "استوديو";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "ما هي ميزانيتك؟";
    uptoOneM = "لغاية 1 مليون درهم إماراتي";
    oneMtoTwoM = "بين 1 مليون درهم و2 مليون درهم إماراتي";
    twoMtoFiveM = "بين 2 مليون درهم و5 مليون درهم إماراتي";
    fiveMPlus = "أكثر من 5 مليون درهم إماراتي";
    whenToBuy = "ما هي المدة التي ستستغرقها لشراء منزل؟";
    daysThirty = "خلال 30 يوماً";
    daysNinety = "خلال 90 يوماً";
    immediately = "في الحال";
    withinThreeMonths = "خلال 3 أشهر";
    withinSixMonths = "خلال 6 أشهر";
    stillConsidering = "لم أقرر بعد";
    btntext = "اضغط هنا";
    labtext = "لمعرفة المزيد عن عقارات داماك الأخرى";
    contacted = "أُوافق أن يتمّ التواصل معي عبر";
    sms = "رسالة نصيّة";
    whatsapp = "تطبيق واتساب";
    preferredLanguageInput = "اللغة المفضلة";
  } else if (websiteLanguage == "FR") {
    _Translate.set("Processing...","En cours de traitement...");
    _Translate.set("Please Fix These Errors","Veuillez corriger ces erreurs");
    _Translate.set("is not valid","n’est pas valide");
    _Translate.set("is required","n'est un élément requis");
    _Translate.set("starts with @ sign","commence par une @");
    _Translate.set("is missing @ sign","Le signe @ est manquant");
    _Translate.set("contains repeated dots","contient plusieurs points consécutifs");
    _Translate.set("starts with a dot","commence par un point");
    _Translate.set("domain is missing","Le domaine est manquant");
    _Translate.set("domain starts with a dot","Le domaine commence par un point");
    _Translate.set("domain is not valid","Le domaine n’est pas valide");
    _Translate.set("domain ends with a dot","Le domaine finit par un point");
    phoneInput = "Téléphone";
    let data = $('input[name="' + phoneInput + '"]');
    //console.log("data...", data);
    if (data.length > 0) {
      phoneInput = "Téléphone";
    } else {
      phoneInput = "Téléphone";
    }
    titleInput = "Titre";
    firstNameInput = "Prénom";
    lastNameInput = "Nom";
    emailInput = "Adresse e-mail";
    mrInput = "M";
    msInput = "Melle";
    mrsInput = "Mme";
    newsInput = "Je souhaite recevoir les informations et les offres";
    privacyInput = "J'ai lu et j'accepte la politique de confidentialité";
    phoneError = "Veuillez saisir un numéro de téléphone valide";
    emailError = "Saisir une adresse e-mail valide";
    newsAndOffers = "Actualités et offres";
    acceptPrivacyPolicy = "Accepter la politique de confidentialité";
    lookingTo = "Souhaitez-vous";
    areYouLookingTo = "Souhaitez-vous"; //add to other languages as well if needed
    findAJob = "Travailler @ DAMAC"; //add to other languages as well
    invest = "Investir";
    buyaHome = "Acheter une maison";
    workAtDamac = "Travailler @ DAMAC";
    iAmAJobSeeker = "Je cherche un emploi (or) je suis a la recherche d'un emploi";
    exploringDamac = " Juste j'explore";
    propertyTypePreference = "Quel type de propriété vous intvresse?";
    villaHouse = "Villa/  maison";
    apartmentFlat = "appartement/";
    bedroomCountPreference = "De combien de chambres avez-vous besoin?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "Quel est votre budget";
    uptoOneM = "Jusqu'a 1 million d'AED";
    oneMtoTwoM = "1 million d'AED a 2 millions d'AED";
    twoMtoFiveM = "2 millions d'AED a 5 millions d'AED";
    fiveMPlus = "Au-dessus de 5 millions d'AED";
    whenToBuy = "Quand envisagez-vous d’acheter ?";
    daysThirty = "Dans 30 jours";
    daysNinety = "Dans 90 jours";
    immediately = "immediatement";
    withinThreeMonths = "Dans 3 mois";
    withinSixMonths = "Dans 6 mois";
    stillConsidering = "(Je réfléchis toujours)";
    btntext = "Cliquer ici";
    labtext = "Pour en savoir plus sur les autres propriétés DAMAC";
    contacted = "Je peux etre contacté par";
    sms = "SMS";
    whatsapp = "Whatsapp";
    preferredLanguageInput = "langue préferée";
  } else if (websiteLanguage == "SP") {
    _Translate.set("Processing...","Procesando...");
    _Translate.set("Please Fix These Errors","Solucione estos errores");
    _Translate.set("is not valid","no es válido");
    _Translate.set("is required","se requiere");
    _Translate.set("starts with @ sign","empieza con un signo @");
    _Translate.set("is missing @ sign","falta el signo @");
    _Translate.set("contains repeated dots","contiene puntos repetidos");
    _Translate.set("starts with a dot","empieza con un punto");
    _Translate.set("domain is missing","falta el dominio");
    _Translate.set("domain starts with a dot","el dominio empieza con un punto");
    _Translate.set("domain is not valid","el domino no es válido");
    _Translate.set("domain ends with a dot","el dominio termina con un punto");
    phoneInput = "Teléfono";
    titleInput = "Tratamiento";
    firstNameInput = "Nombre";
    lastNameInput = "Apellido";
    emailInput = "Correo electrónico";
    mrInput = "Sr.";
    msInput = "Srta.";
    mrsInput = "Sra.";
    newsInput = "Me gustaría recibir noticias y ofertas";
    privacyInput = "He leído y acepto la Política de privacidad";
    phoneError = "Escriba un número de teléfono válido";
    emailError = "Escriba un correo electrónico válido";
    newsAndOffers = "Noticias y Ofertas";
    acceptPrivacyPolicy = "Aceptar Política de Privacidad";
    lookingTo = "Desea";
    areYouLookingTo = "Desea"; //add to other languages as well if needed
    findAJob = "Trabajar en DAMAC"; //add to other languages as well
    invest = "Invertir";
    buyaHome = "Comprar un inmueble";
    workAtDamac = "Trabajar en DAMAC";
    iAmAJobSeeker = "Busco un empleo";
    exploringDamac = "Solo estoy explorando";
    propertyTypePreference = "¿Qué tipo de inmueble le interesa?";
    villaHouse = "Villa/chalet";
    apartmentFlat = "Piso/apartamento";
    bedroomCountPreference = "¿Cuántas habitaciones necesita?";
    studio = "Estudio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "¿Cuál es su presupuesto?";
    uptoOneM = "Hasta 1 millón de AED";
    oneMtoTwoM = "Entre 1 y 2 millones de AED";
    twoMtoFiveM = "Entre 2 y 5 millones de AED";
    fiveMPlus = "Más de 5 millones de AED";
    whenToBuy = "¿Cuándo piensa hacer la compra?";
    daysThirty = "En 30 días";
    daysNinety = "En 90 días";
    immediately = "Inmediatamente";
    withinThreeMonths = "En 3 meses";
    withinSixMonths = "En 6 meses";
    stillConsidering = "Todavía estoy pensándomelo";
    btntext = "HAGA CLIC AQUÍ";
    labtext = "Para obtener más información sobre otras propiedades DAMAC";
    contacted = "Pueden contactar conmigo por";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Idioma preferido";
  } else if (websiteLanguage == "HE") {
    _Translate.set("Processing...","מעבד...");
    _Translate.set("Please Fix These Errors","נא לתקן את השגיאות הבאות");
    _Translate.set("is not valid","לא תקין");
    _Translate.set("is required","חובה");
    _Translate.set("starts with @ sign","מתחיל בסימן @");
    _Translate.set("is missing @ sign","חסר סימן @");
    _Translate.set("contains repeated dots","מכיל מספר נקודות ברצף");
    _Translate.set("starts with a dot","מתחיל בנקודה");
    _Translate.set("domain is missing","חסר שם דומיין");
    _Translate.set("domain starts with a dot","שם הדומיין מתחיל בנקודה");
    _Translate.set("domain is not valid","שם הדומיין אינו תקין");
    _Translate.set("domain ends with a dot","שם הדומיין מסתיים בנקודה");
    phoneInput = "מכשיר טלפון";
    titleInput = "תואר";
    firstNameInput = "שם פרטי תקני";
    lastNameInput = "שם משפחה תקני";
    emailInput = "כתובת אימייל";
    mrInput = ".MR";
    msInput = ".MS";
    mrsInput = ".MRS";
    newsInput = "ברצוני לשמוע על חדשות ומבצעים";
    privacyInput = "קראתי והסכמתי למדיניות הפרטיות";
    phoneError = "נא להזין מספר טלפון תקני";
    emailError = "נא להזין כתובת אימייל תקנית";
    newsAndOffers = "חדשות ומבצעים";
    acceptPrivacyPolicy = "קבלת מדיניות הפרטיות";
    lookingTo = "האם אתם מעוניינים";
    areYouLookingTo = "האם אתם מעוניינים"; //add to other languages as well if needed
    findAJob = "לעבוד @ DAMAC"; //add to other languages as well
    invest = "להשקיע";
    buyaHome = "לרכוש בית";
    workAtDamac = "לעבוד @ DAMAC";
    iAmAJobSeeker = "אני מחפש עבודה";
    exploringDamac = "אני רק מתעניין";
    propertyTypePreference = "מה סוג הנכס שאתה מחפש?";
    villaHouse = "וילה/בית";
    apartmentFlat = "דירה";
    bedroomCountPreference = "לכמה חדרי שינה אתה זקוק?";
    studio = "דירת סטודיו";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "מה טווח התקציב?";
    uptoOneM = "עד מיליון דירהם";
    oneMtoTwoM = "מיליון דירהם עד 2 מיליון דירהם";
    twoMtoFiveM = "2 מיליון דירהם עד 5 מיליון דירהם";
    fiveMPlus = "יותר מ-5 מיליון דירהם";
    whenToBuy = "מתי אתם מתכננים לרכוש?";
    daysThirty = "תוך 30 יום";
    daysNinety = "תוך 90 יום";
    immediately = "באופן מיידי";
    withinThreeMonths = "תוך 3 חודשים";
    withinSixMonths = "תוך 6 חודשים";
    stillConsidering = "עדיין חושב על זה";
    btntext = "לחץ כאן";
    labtext = "למידע נוסף בנושא נכסי DAMAC";
    contacted = "ניתן ליצור איתי קשר באמצעות";
    sms = "הודעת SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "שפה מועדפת";
  } else if (websiteLanguage == "CH") {
    _Translate.set("Processing...","处理中...");
    _Translate.set("Please Fix These Errors","请修复这些错误");
    _Translate.set("is not valid","无效信息");
    _Translate.set("is required","必填信息");
    _Translate.set("starts with @ sign","以@符号开始");
    _Translate.set("is missing @ sign","缺少@符号");
    _Translate.set("contains repeated dots","包含重复的点");
    _Translate.set("starts with a dot","以点开始");
    _Translate.set("domain is missing","域名丢失");
    _Translate.set("domain starts with a dot","域名以点开始");
    _Translate.set("domain is not valid","域名无效");
    _Translate.set("domain ends with a dot","域名以点结尾");
    phoneInput = "電話";
    titleInput = "称谓";
    firstNameInput = "名字";
    lastNameInput = "姓氏";
    emailInput = "电子邮箱";
    mrInput = "先生";
    msInput = "小姐";
    mrsInput = "女士";
    newsInput = "我乐意接收新闻和优惠资讯";
    privacyInput = "我已阅读并同意《隐私政策》";
    phoneError = "请输入一个有效的电话号码";
    emailError = "输入有效的电子邮件";
    newsAndOffers = "最新消息和优惠";
    acceptPrivacyPolicy = "接受隐私政策";
    lookingTo = "你可希望";
    areYouLookingTo = "你可希望"; //add to other languages as well if needed
    findAJob = "加入@达马克工作"; //add to other languages as well
    invest = "投资";
    buyaHome = "置业";
    workAtDamac = "加入@达马克工作";
    iAmAJobSeeker = "我正在找工作";
    exploringDamac = "我想了解一下基本情况";
    propertyTypePreference = "您对哪种房产感兴趣？";
    villaHouse = "别墅/房子";
    apartmentFlat = "公寓";
    bedroomCountPreference = "您需要几间卧室？";
    studio = "单身公寓";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "您的预算范围是多少？";
    uptoOneM = "100万迪拉姆以内";
    oneMtoTwoM = "100万迪拉姆至200万迪拉姆";
    twoMtoFiveM = "200万迪拉姆至500万迪拉姆";
    fiveMPlus = "500万迪拉姆以上";
    whenToBuy = "你打算何時購買？";
    daysThirty = "30天内";
    daysNinety = "90天内";
    immediately = "立即";
    withinThreeMonths = "3个月内";
    withinSixMonths = "6个月内";
    stillConsidering = "仍在考虑中";
    btntext = "单击此处";
    labtext = "有关其他 DAMAC 属性的详细信息";
    contacted = "可以通过以下方式联系我";
    sms = "手机短信";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "首选语言";
  } else if (websiteLanguage == "IT") {
    _Translate.set("Processing...","In elaborazione...");
    _Translate.set("Please Fix These Errors","Si prega di correggere gli errori");
    _Translate.set("is not valid","non è un elemento valido");
    _Translate.set("is required","è un elemento richiesto");
    _Translate.set("starts with @ sign","inizia con il simbolo @");
    _Translate.set("is missing @ sign","non contiene il simbolo @");
    _Translate.set("contains repeated dots","contiene più punti consecutivi");
    _Translate.set("starts with a dot","inizia con un punto");
    _Translate.set("domain is missing","non contiene il dominio");
    _Translate.set("domain starts with a dot","il dominio inizia con un punto");
    _Translate.set("domain is not valid","il dominio non è valido");
    _Translate.set("domain ends with a dot","il dominio termina con un punto");
    phoneInput = "Telefono";
    titleInput = "Titolo";
    firstNameInput = "Nome";
    lastNameInput = "Cognome";
    emailInput = "E-mail";
    mrInput = "Sig";
    msInput = "Sig.ra";
    mrsInput = "Sig.na";
    newsInput = "Vorrei ricevere aggiornamenti e offerte";
    privacyInput = "Ho letto e accetto l'Informativa sulla Privacy";
    phoneError = "Si prega di inserire un numero di telefono valido";
    emailError = "Inserire un indirizzo email valido";
    newsAndOffers = "Aggiornamenti e offerte";
    acceptPrivacyPolicy = "Accettare l'Informativa sulla Privacy";
    lookingTo = "Vorresti";
    areYouLookingTo = "Vorresti"; //add to other languages as well if needed
    findAJob = "Lavorare a @ DAMAC"; //add to other languages as well
    invest = "Investire";
    buyaHome = "Acquistare una casa";
    workAtDamac = "Lavorare a @ DAMAC";
    iAmAJobSeeker = "Cerco lavoro";
    exploringDamac = "Mi sto solo informando";
    propertyTypePreference = "Che genere di proprietà ti interessa?";
    villaHouse = "Villa/Casa";
    apartmentFlat = "Appartamento";
    bedroomCountPreference = "Quante camere da letto ti servono?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "Qual è il tuo budget?";
    uptoOneM = "Fino a 1 milione di AED";
    oneMtoTwoM = "Da 1 a 2 milioni di AED";
    twoMtoFiveM = "Da 2 a 5 milioni di AED";
    fiveMPlus = "Oltre 5 milioni di AED";
    whenToBuy = "Quando vorresti effettuare l'acquisto?";
    daysThirty = "Entro 30 giorni";
    daysNinety = "Entro 90 giorni";
    immediately = "Subito";
    withinThreeMonths = "Fra 3 mesi";
    withinSixMonths = "Fra 6 mesi";
    stillConsidering = "Ci sto ancora pensando";
    btntext = "Clicca qui";
    labtext = "Per saperne di più sugli altri immobili DAMAC";
    contacted = "Contattatemi via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Lingua di preferenza";
  } else if (websiteLanguage == "RU") {
    _Translate.set("Processing...","В обработке...");
    _Translate.set("Please Fix These Errors","Исправьте эти ошибки");
    _Translate.set("is not valid","Данные недействительны");
    _Translate.set("is required","Необходимо указать данные");
    _Translate.set("starts with @ sign","начинается со знака @");
    _Translate.set("is missing @ sign","не содержит знака @");
    _Translate.set("contains repeated dots","содержит лишние точки");
    _Translate.set("starts with a dot","начинается с точки");
    _Translate.set("domain is missing","домен не указан");
    _Translate.set("domain starts with a dot","точка в начале названия домена");
    _Translate.set("domain is not valid","домен недействителен");
    _Translate.set("domain ends with a dot","точка в конце названия домена");
    phoneInput = "номер телефона";
    titleInput = "Форма обращения";
    firstNameInput = "Имя";
    lastNameInput = "Фамилия";
    emailInput = "Адрес электронной почты";
    mrInput = "Г-н";
    msInput = "Г-жа";
    mrsInput = "Г-жа";
    newsInput = "Я хочу получать новости и предложения";
    privacyInput = "Я принимаю условия политики конфиденциальности";
    phoneError = "Введите действительный номер телефона";
    emailError = "Введите действительный адрес эл. почты";
    newsAndOffers = "Новости и предложения";
    acceptPrivacyPolicy = "Примите условия Политики конфиденциальности";
    lookingTo = "Что вас интересует";
    areYouLookingTo = "Что вас интересует"; //add to other languages as well if needed
    findAJob = "Работа в DAMAC"; //add to other languages as well
    invest = "Инвестиции";
    buyaHome = "Покупка недвижимости";
    workAtDamac = "Работа в DAMAC";
    iAmAJobSeeker = "Я ищу работу";
    exploringDamac = "Я просто изучаю";
    propertyTypePreference = "Какой тип недвижимости вас интересует?";
    villaHouse = "Вилла/дом";
    apartmentFlat = "Квартира/апартаменты";
    bedroomCountPreference = "Сколько спален вам нужно?";
    studio = "Студия";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "Каков ваш бюджет?";
    uptoOneM = "До 1 млн дирхамов";
    oneMtoTwoM = "От 1 до 2 млн дирхамов";
    twoMtoFiveM = "От 2 до 5 млн дирхамов";
    fiveMPlus = "Свыше 5 млн дирхамов";
    whenToBuy = "Когда вы планируете сделать покупку?";
    daysThirty = "В течение 30 дней";
    daysNinety = "В течение 90 дней";
    immediately = "Немедленно";
    withinThreeMonths = "В течение 3 месяцев";
    withinSixMonths = "В течение 6 месяцев";
    stillConsidering = "Пока рассматриваю";
    btntext = "Нажмите здесь";
    labtext = "Подробнее о других объектах DAMAC Properties";
    contacted = "Как со мной связаться:";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Предпочитаемый язык";
  } else if (websiteLanguage == "GK") {
    _Translate.set("Processing...","Γίνεται επεξεργασία...");
    _Translate.set("Please Fix These Errors","Διορθώστε αυτά τα σφάλματα");
    _Translate.set("is not valid","δεν είναι έγκυρο");
    _Translate.set("is required","είναι υποχρεωτικό");
    _Translate.set("starts with @ sign","ξεκινά με το σύμβολο @");
    _Translate.set("is missing @ sign","λείπει το σύμβολο @");
    _Translate.set("contains repeated dots","περιέχει επαναλαμβανόμενες τελείες");
    _Translate.set("starts with a dot","ξεκινά με μια τελεία");
    _Translate.set("domain is missing","λείπει το domain");
    _Translate.set("domain starts with a dot","το domain ξεκινά με τελεία");
    _Translate.set("domain is not valid","το domain δεν είναι έγκυρο");
    _Translate.set("domain ends with a dot","το domain τελειώνει με τελεία");
    phoneInput = "Τηλέφωνο";
    titleInput = "Τίτλος";
    firstNameInput = "Όνομα";
    lastNameInput = "Επώνυμο";
    emailInput = "Email";
    mrInput = "Κος.";
    msInput = "Δις.";
    mrsInput = "Κα.";
    newsInput = "Θέλω να μαθαίνω για τα νέα και τις προσφορές";
    privacyInput = "Έχω διαβάσει και συμφωνώ με την Πολιτική απορρήτου";
    phoneError = "Εισαγάγετε έγκυρο αριθμό τηλεφώνου";
    emailError = "Εισαγάγετε έγκυρο email";
    newsAndOffers = "Νέα και προσφορές";
    acceptPrivacyPolicy = "Αποδοχή Πολιτικής απορρήτου";
    lookingTo = "Τι θα θέλατε να κάνετε σήμερα;";
    areYouLookingTo = "Τι θα θέλατε να κάνετε σήμερα;"; //add to other languages as well if needed
    findAJob = "Εργασία @ DAMAC"; //add to other languages as well
    invest = "Επένδυση";
    buyaHome = "Αγορά σπιτιού";
    workAtDamac = "Εργασία @ DAMAC";
    iAmAJobSeeker = "Αναζητώ εργασία";
    exploringDamac = "Απλώς κοιτάω";
    propertyTypePreference = "Για τι είδους ακίνητο ενδιαφέρεστε;";
    villaHouse = "Βίλα / Σπίτι";
    apartmentFlat = "Διαμέρισμα";
    bedroomCountPreference = "Πόσες κρεβατοκάμαρες χρειάζεστε;";
    studio = "Στούντιο";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "Ποιο είναι το εύρος του προϋπολογισμού σας;";
    uptoOneM = "Έως 1 εκατ. Ντιράμ Ηνωμένων Αραβικών Εμιράτων";
    oneMtoTwoM = "1 εκατ. έως 2 εκατ. Ντιράμ Ηνωμένων Αραβικών Εμιράτων";
    twoMtoFiveM = "2 εκατ. έως 5 εκατ. Ντιράμ Ηνωμένων Αραβικών Εμιράτων";
    fiveMPlus = "Πάνω από 5 εκατ. Ντιράμ Ηνωμένων Αραβικών Εμιράτων";
    whenToBuy = "Πότε σκοπεύετε να κάνετε την αγορά;";
    daysThirty = "Εντός 30 ημερών";
    daysNinety = "Εντός 90 ημερών";
    immediately = "Άμεσα";
    withinThreeMonths = "Εντός 3 μηνών";
    withinSixMonths = "Εντός 6 μηνών";
    stillConsidering = "Δεν έχω αποφασίσει ακόμη";
    btntext = "Κάντε κλικ εδώ";
    labtext = "Για περισσότερες πληροφορίες σχετικά με άλλα καταλύματα DAMAC";
    contacted = "Μπορείτε να επικοινωνήσετε μαζί μου μέσω";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Προτιμώμενη γλώσσα";
  } else if (websiteLanguage == "GR") {
    _Translate.set("Processing...","Verarbeitung läuft...");
    _Translate.set("Please Fix These Errors","Bitte beheben Sie diese Fehler");
    _Translate.set("is not valid","ist ungültig");
    _Translate.set("is required","ist erforderlich");
    _Translate.set("starts with @ sign","beginnt mit @-Zeichen");
    _Translate.set("is missing @ sign","@-Zeichen fehlt");
    _Translate.set("contains repeated dots","enthält wiederholte Punkte");
    _Translate.set("starts with a dot","beginnt mit einem Punkt");
    _Translate.set("domain is missing","Domain fehlt");
    _Translate.set("domain starts with a dot","Domain beginnt mit einem Punkt");
    _Translate.set("domain is not valid","Domain ist ungültig");
    _Translate.set("domain ends with a dot","Domain endet mit einem Punkt");
    phoneInput = "Telefonnummer";
    titleInput = "Anrede";
    firstNameInput = "Vorname";
    lastNameInput = "Nachname";
    emailInput = "E-Mail";
    mrInput = "Herr";
    msInput = "Frau";
    mrsInput = "Fräulein";
    newsInput = "Ich möchte über Neuigkeiten und Angebote informiert werden";
    privacyInput = "Ich habe die Datenschutzbestimmungen gelesen und stimme ihnen zu";
    phoneError = "Bitte geben Sie eine gültige Telefonnummer ein";
    emailError = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
    newsAndOffers = "Neuigkeiten und Angebote";
    acceptPrivacyPolicy = "Akzeptieren Datenschutzbestimmungen";
    lookingTo = "Wollen Sie";
    areYouLookingTo = "Wollen Sie"; //add to other languages as well if needed
    findAJob = "Bei @ DAMAC arbeiten"; //add to other languages as well
    invest = "investieren";
    buyaHome = "ein Zuhause kaufen";
    workAtDamac = "Bei @ DAMAC arbeiten";
    iAmAJobSeeker = "Ich bin auf Arbeitssuche";
    exploringDamac = "Ich bin auf der Suche";
    propertyTypePreference = "Für welche Art von Immobilie interessieren Sie sich?";
    villaHouse = "Villa/Haus";
    apartmentFlat = "Appartement/Wohnung";
    bedroomCountPreference = "Wie viele Schlafzimmer benötigen Sie?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "Wie hoch ist Ihr Budget?";
    uptoOneM = "Bis zu AED 1 Mio.";
    oneMtoTwoM = "AED 1 Mio. - 2 Mio.";
    twoMtoFiveM = "AED 2 Mio. - 5 Mio.";
    fiveMPlus = "Mehr als AED 5 Mio.";
    whenToBuy = "Wann möchten Sie kaufen?";
    daysThirty = "Innerhalb kommenden 30 Tage";
    daysNinety = "Innerhalb kommenden 90 Tage";
    immediately = "Sofort";
    withinThreeMonths = "Innerhalb von 3 Monaten";
    withinSixMonths = "Innerhalb von 6 Monaten";
    stillConsidering = "Bin noch am überlegen";
    btntext = "Hier klicken";
    labtext = "Hier finden Sie weitere Infos zu Immobilien von DAMAC";
    contacted = "Man kann mich kontaktieren via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Bevorzugte Sprache";
  } else if (websiteLanguage == "NL") {
    _Translate.set("Processing...","Verwerken...");
    _Translate.set("Please Fix These Errors","Corrigeer deze fouten a.u.b.");
    _Translate.set("is not valid","is niet geldig");
    _Translate.set("is required","Is benodigd");
    _Translate.set("starts with @ sign","begint met @-teken");
    _Translate.set("is missing @ sign","ontbreekt @-teken");
    _Translate.set("contains repeated dots","bevat herhaalde punten");
    _Translate.set("starts with a dot","begint met een punt");
    _Translate.set("domain is missing","domein ontbreekt");
    _Translate.set("domain starts with a dot","domein begint met een punt");
    _Translate.set("domain is not valid","domein is niet geldig");
    _Translate.set("domain ends with a dot","domein eindigt op een punt");
    phoneInput = "Telefoonnummer";
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
    newsAndOffers = "News And Offers";
    acceptPrivacyPolicy = "Accept Privacy Policy";
    lookingTo = "Wilt u graag";
    areYouLookingTo = "Wilt u graag"; //add to other languages as well if needed
    findAJob = "Werk @ DAMAC"; //add to other languages as well
    invest = "Investeren";
    buyaHome = "Een huis kopen";
    workAtDamac = "Werk @ DAMAC";
    iAmAJobSeeker = "Ik zoek een baan";
    exploringDamac = "Ik kijk alleen even rond";
    propertyTypePreference = "Naar welk type woning ben je op zoek?";
    villaHouse = "Villa/huis";
    apartmentFlat = "Appartement/flat";
    bedroomCountPreference = "Hoeveel slaapkamers moeten er zijn?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "Wat is je budget?";
    uptoOneM = "Tot 1 miljoen AED";
    oneMtoTwoM = "Tussen 1 en 2 miljoen AED";
    twoMtoFiveM = "Tussen 2 en 5 miljoen AED";
    fiveMPlus = "Meer dan 5 miljoen AED";
    whenToBuy = "Wanneer bent u van plan te kopen?";
    daysThirty = "In 30 dagen";
    daysNinety = "Binnen 90 dagen";
    immediately = "Per direct";
    withinThreeMonths = "Binnen 3 maanden";
    withinSixMonths = "Binnen 6 maanden";
    stillConsidering = "Weet het nog niet";
    btntext = "KLIK HIER";
    labtext = "Voor meer informatie over andere DAMAC-eigenschappen";
    contacted = "Ik ben bereikbaar via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Voorkeurstaal";
  } else if (websiteLanguage == "RO") {
    _Translate.set("Processing...","Se procesează…...");
    _Translate.set("Please Fix These Errors","Vă rugăm să remediați aceste erori");
    _Translate.set("is not valid","nu este valid");
    _Translate.set("is required","este obligatoriu");
    _Translate.set("starts with @ sign","începe cu semnul @");
    _Translate.set("is missing @ sign","semnul @ lipsește");
    _Translate.set("contains repeated dots","conține puncte repetate");
    _Translate.set("starts with a dot","începe cu un punct");
    _Translate.set("domain is missing","lipsește domeniul");
    _Translate.set("domain starts with a dot","domeniul începe cu un punct");
    _Translate.set("domain is not valid","domeniul nu este valid");
    _Translate.set("domain ends with a dot","domeniul se încheie cu un punct");
    phoneInput = "De telefon";
    titleInput = "Selectați o titulatură";
    firstNameInput = "Prenume";
    lastNameInput = "Nume de familie";
    emailInput = "Adresă de e-mail";
    mrInput = "Dl";
    msInput = "Dna";
    mrsInput = "Dra";
    newsInput = "Doresc să primesc noutăți și oferte";
    privacyInput = "Am citit și sunt de acord cu Politica de confidențialitate";
    phoneError = "Introduceți un număr de telefon valid";
    emailError = "Introduceți o adresă de e-mail validă";
    newsAndOffers = "Noutăți și oferte";
    acceptPrivacyPolicy = "Accept Politica de confidențialitate";
    lookingTo = "Vă interesează";
    areYouLookingTo = "Vă interesează"; //add to other languages as well if needed
    findAJob = "Să lucrați la DAMAC"; //add to other languages as well
    invest = "Să investiți";
    buyaHome = "Să cumpărați o casă";
    workAtDamac = "Să lucrați la DAMAC";
    iAmAJobSeeker = "Caut un loc de muncă";
    exploringDamac = "Doar explorez";
    propertyTypePreference = "Ce tip de proprietate vă interesează?";
    villaHouse = "Vilă/Casă";
    apartmentFlat = "Apartament";
    bedroomCountPreference = "De câte dormitoare aveți nevoie?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "Care este intervalul în care se încadrează bugetul dvs.?";
    uptoOneM = "Până la 1 milion AED";
    oneMtoTwoM = "Între 1 milion AED și 2 milioane AED";
    twoMtoFiveM = "Între 2 milioane AED și 5 milioane AED";
    fiveMPlus = "Peste 5 milioane AED";
    whenToBuy = "Când intenționați să cumpărați?";
    daysThirty = "În următoarele 30 de zile";
    daysNinety = "În următoarele 90 de zile";
    immediately = "Imediat";
    withinThreeMonths = "În 3 luni";
    withinSixMonths = "În 6 luni";
    stillConsidering = "Încă mă gândesc";
    btntext = "APĂSAȚI AICI";
    labtext = "Pentru mai multe informații despre DAMAC Properties";
    contacted = "Mă puteți contactata prin";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Limbă preferată";
  } else if (websiteLanguage == "TR") { //TURKISH
    _Translate.set("Processing...","İşleniyor...");
    _Translate.set("Please Fix These Errors","Lütfen Bu Hataları Düzeltin");
    _Translate.set("is not valid","geçerli değil");
    _Translate.set("is required","gerekli");
    _Translate.set("starts with @ sign","@ işareti ile başlıyor");
    _Translate.set("is missing @ sign","@ işareti eksik");
    _Translate.set("contains repeated dots","yinelenen noktalar içeriyor");
    _Translate.set("starts with a dot","bir nokta ile başlıyor");
    _Translate.set("domain is missing","etki alanı eksik");
    _Translate.set("domain starts with a dot","etki alanı bir nokta ile başlıyor");
    _Translate.set("domain is not valid","etki alanı geçerli değil");
    _Translate.set("domain ends with a dot","etki alanı bir nokta ile bitiyor");
    phoneInput = "Telefon";
    titleInput = "Ünvan";
    firstNameInput = "Ad";
    lastNameInput = "Soyadı";
    emailInput = "E-posta";
    mrInput = "Bay";
    msInput = "Bayan";
    mrsInput = "Bayan";
    newsInput = "Haberler ve teklifler hakkında bilgi almak istiyorum";
    privacyInput = "Gizlilik Politikasını okudum ve kabul ediyorum";
    phoneError = "Lütfen geçerli bir telefon numarası girin";
    emailError = "Geçerli bir e-posta adresi girin";
    newsAndOffers = "Haberler ve Teklifler";
    acceptPrivacyPolicy = "Gizlilik Politikasını Kabul Et";
    lookingTo = "Bugün ne yapmak istiyorsunuz?";
    areYouLookingTo = "Bugün ne yapmak istiyorsunuz?"; //add to other languages as well if needed
    findAJob = "DAMAC ile çalışmak"; //add to other languages as well
    invest = "Yatırım yapmak";
    buyaHome = "Ev satın almak";
    workAtDamac = "DAMAC ile çalışmak";
    iAmAJobSeeker = "İş arıyorum";
    exploringDamac = "Yalnızca araştırma yapıyorum";
    propertyTypePreference = "Ne tür bir gayrimenkulle ilgileniyorsunuz?";
    villaHouse = "Villa/Ev";
    apartmentFlat = "Daire";
    bedroomCountPreference = "Kaç yatak odasına ihtiyacınız var?";
    studio = "Stüdyo";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "Bütçe aralığınız nedir?";
    uptoOneM = "1 M BAE dirhemine kadar";
    oneMtoTwoM = "1 M ila 2 M BAE dirhemi";
    twoMtoFiveM = "2 M ila 5 M BAE dirhemi";
    fiveMPlus = "5 M BAE dirheminden fazla";
    whenToBuy = "Satın alma işlemini ne zaman gerçekleştirmeyi planlıyorsunuz?";
    daysThirty = "30 gün içinde";
    daysNinety = "90 gün içinde";
    immediately = "Hemen";
    withinThreeMonths = "3 ay içinde";
    withinSixMonths = "6 ay içinde";
    stillConsidering = "Hâlâ düşünüyorum";
    btntext = "BURAYA TIKLAYIN";
    labtext = "Diğer DAMAC Gayrimenkulleri hakkında daha fazla bilgi için";
    contacted = "Bana ulaşılmasını istediğim kanal";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Tercih Edilen Dil";
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
                toggleSubmitBtns('disable')
                console.log(`Contacting reCaptcha`);
                grecaptcha.ready(function() {
                    grecaptcha.execute('6Le2egYqAAAAAIiz4tGvGyXwB--ERQUfb9Ip8tcb', {action: 'submit'}).then(function(token) {
                        // Add the token to the hidden input field
                        data['validationToken'] = token;

                        // console.log(`Token received: ${token}`);
                        // console.log(`Now sending data:`, data);

                        // Now submit the form
                        // document.getElementById('myForm').submit();
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
                              toggleSubmitBtns('enable')
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
                                toggleSubmitBtns('enable')
                              //console.log("Request failed, error= " + err);
                            },
                          });
                    });
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