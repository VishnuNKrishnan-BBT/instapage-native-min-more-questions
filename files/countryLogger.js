//USE THIS FUNTION TO GENERATE THE ITITOSFCOUNTRYADAPTOR OBJECT. THIS IS ONLY TO GENERATE THE OBJECT, THIS SCRIP HAS NO ROLE IN LEAD SUBMISSION,


// Select the first <ul> element in the document
var ul = document.getElementsByTagName('ul')[0];
var countries = []

// Check if the <ul> element exists
if (ul) {
    // Get all <li> elements within the <ul>
    var liElements = ul.getElementsByTagName('li');
    
    // Loop through each <li> element and log its text content
    for (var i = 0; i < liElements.length; i++) {
        //console.log(liElements[i].textContent);
        countries.push({
            name: liElements[i].textContent.split('+')[0],
            diallingCode: `+${liElements[i].textContent.split('+')[1]}`,
            sendAs: {
                country: liElements[i].textContent.split('+')[0].split(' (')[0],
                countryCode: `${liElements[i].textContent.split('+')[0].split(' (')[0]}: 00${liElements[i].textContent.split('+')[1]}`
            }
        })
    }
} else {
    console.log('No <ul> element found.');
}