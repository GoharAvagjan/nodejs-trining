let str = 'Before you build a complete application';

function wordsFromString (str){
     str.split(' ').foreach(word=>{
         if(/[^a-zA-Z]/g/.test(word)){
            console.log(word);
         }
     });


}
module.exports = wordsFromString;

