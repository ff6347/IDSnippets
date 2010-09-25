// written by fabiantheblind for indesign cs4
// how to include a quote script into the alert
// the script "homerQuote.js" has to be next to this script
#include "homerQuote.js";
// 157 is the lenght of a quote array
var num = Math.floor(157*Math.random());
alert(hjsQuote(num));

// the function hjsQuote could also return the whole array
//  you read the length
// and u use the length as random factor

//like in this script
//homerQuoteReturnArray.js
/*
#include "homerQuoteReturnArray.js";
var myQuotes = hjsQuotes();
var myQuotesNum = myQuotes.length;
alert(myQuotes[Math.floor(myQuotesNum*Math.random())]);
*/