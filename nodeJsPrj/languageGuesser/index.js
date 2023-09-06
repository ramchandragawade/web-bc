const franc = require('franc');
const langs = require('langs');
const input = process.argv[2];
console.log(input);
const langCode = franc(input.toString());
if(langCode === 'und') {
    console.log('Could not get you, Add more chars');
} else {
    const lang = langs.where('3', langCode);
    console.log(`Best guess - ${lang.name}`);    
}
