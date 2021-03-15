
function charOneSecondOutput (str){
    const arr = str.split('');
    setTimeout(function(){
        if(arr.length === 0){
            clearInterval(interval);
        }
    },1000);
    console.log(arr.shift());
}
/*kam pahenq index
let index = 0;
function charOneSecondOutput (str){
    //const arr = str.split('');

   setTimeout(function(){
       if(index > str.length ){
            clearInterval(interval);
        }
        console.log(str[index]);
        index++;
    },1000);

}
*/
module.exports = charOneSecondOutput;
