/*
1. Ստեղծել readStream որը input.txt-ից կկարդա ինֆորմացիան 10 բայթով և կաևտածի կոնսոլում այն chunk-երը ,
որոնք հատուկ սիմվոլներ չունեն:
*/


console.log( '-------- task1 ----------- ');

 const fs = require('fs');
// const stream = require('stream');
 const { Readable } = require('stream');
 const readableStream = fs.createReadStream('../project2/input.txt',{
     highWaterMark: 10

});

readableStream.on('data', (chunk) => {
   if(!/[^a-zA-Z]/g.test(chunk)){
       console.log(chunk.toString());
   }
 });
 readableStream.on('end', () => {
    console.log('DONE');
 });
/*
    3.Ստեղծել RemoveSpecialChars կլաս, որը ժառանգում է  Transform կլասին: _transform մեթոդը վերասահմանել այնպես,
    որ իր միջով անցնող տեքստից հեռացնել հատուկ սիմվոլները:
    Կլասից ստեղծել օբեկտ: homeworkr5.txt պարունակությունը pipe անել օբեկտով և պահապանել homeworkw5.txt ֆայլում:
*/
console.log( '-------- task3  ----------- ');

const {Transform} = require('stream');
const {Writable} = require('stream');
class RemoveSpecialChars extends Transform {
    constructor(str) {
        super();
        this.str = str;
    }

    _transform(chunk, encoding, callback){
        if(!/[^a-zA-Z]/g.test(chunk)){
            this.push(chunk.toString());
            callback();
        }
    }
}

const removeSpecialChars = new  RemoveSpecialChars('data');
const data = fs.createReadStream('homeworkr5.txt', {highWaterMark : 1}).pipe(removeSpecialChars).pipe(fs.createWriteStream('homeworkw5.txt'));
/*
    2.Գրել ծրագիր որ լատինատառ տեքստը որևէ մոտավորությամբ կսարքի հայատառ: Օրինակ ա տառը կդառնա a:Այդպես բոլոր տառերը:
    Ստեղծել readStream և highWaterMark:1  նշելով բոլոր սիմվոլների վրայով անցնել:
    Ծրագիրը աշխատացնել homework4Eng.txt համար:
*/