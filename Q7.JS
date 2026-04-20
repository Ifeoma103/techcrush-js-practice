// Write a function formatName(firstName, lastName) that trims extra spaces from both inputs and returns the full name in this exact format: 'LASTNAME, Firstname'.
// Test: formatNamel' esther;' ogbu ') should return 'OGBU, Esther'

function formatName(firstName, lastName)
{ let firstTrim = firstName.trim(); let lastTrim = lastName.trim();
let capsFirst = /*firstTrim[0]*/ firstTrim.charAt(0).toUpperCase() + firstTrim.slice(1).toLowerCase();
let capsLast = lastTrim.toUpperCase();
return capsLast + ", " + capsFirst;
}
console.log(formatName(' faith', ' ifeoma '))
