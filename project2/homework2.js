/*
1.  Գրել ծրագիր որը աշխատացնելիս console-ում կարտածի ամբողջ օպերատիվ հիշողությունը (total amount of system memory):
 */
const os = require('os');
console.log(os);

/*
`2. Գրել ծրագիր որ աշխատացնելիս console-ում կարտածի IPv4 IP հասցեն(os.networkInterfaces()):
 */

console.log(os.networkInterfaces());

/*
3.Գրել ծրագիր որը աշխատացնելիս կստեղծի 8 նիշանոց պատահական թվերից կազմված անուն ունեցող txt ֆայլ և
այդ ֆայի մեջ Օպերացիան համակարգի central processing unit (CPU) քանակը(os.cpus()):
 */
const randomstring = require('randomstring');
let string = randomstring.generate(8);
//console.log(string );
const lengthNumber = os.cpus().length;
fs2 = require('fs');

fs2.writeFile(string+'.txt', lengthNumber + 'length' , function(err){
    if (err) {
       return console.log(err);
   }
});

/*
4.Գրել ծրագիր որ աշխատացնելիս  input.txt կկարդա պարունակությունը ,
 որից հետո այդ պարունակության բոլոր բացատները կփոխարին - ներով:
Այնուհետև գծիկներով տեքստ գրել write.txt ֆայլում:
*/

fs = require('fs');
fs.readFile('input.txt','utf-8', function(err,data){
    if(err){
        throw err;
    }
    const arr = data.split(' ');
     console.log(arr.join('-'));
});



/*
    5.Գրել ծրագիր որ աշխատացնելիս sync կկարադա նախորդ չորս տնայիների ֆայլերի պարունակությունը(Օրինակ homework1.js, homework2.js, homework3.js, homework4.js):
    Այնուհետև ծրագիրը պետք է ստեղծի txt ֆայլ, որի անուն կազմված կլնի օպերացոն համակարգի անունից և այդ պահին ժամ րոպե վարկյանից(win32_14_14_58.txt)
    և այդ ֆայլում գրել նախորդ ֆայլերի պարունակությունը:
 */
//const text = fs.readFileSync('filename', 'utf-8');

   // console.log(text);






