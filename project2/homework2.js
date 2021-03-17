/*
1.  Գրել ծրագիր որը աշխատացնելիս console-ում կարտածի ամբողջ օպերատիվ հիշողությունը (total amount of system memory):
 */
console.log('--------task1 ---------');
const os = require('os');
console.log(os.totalmem());


/*
`2. Գրել ծրագիր որ աշխատացնելիս console-ում կարտածի IPv4 IP հասցեն(os.networkInterfaces()):
 */
console.log('--------task2 ---------');
console.log(os.networkInterfaces());
const network = os.networkInterfaces();
network['Беспроводная сеть']?.forEach(item =>{
    if(item.family ==='IPv4'){
        console.log(item.address);
    }
})
/*
3.Գրել ծրագիր որը աշխատացնելիս կստեղծի 8 նիշանոց պատահական թվերից կազմված անուն ունեցող txt ֆայլ և
այդ ֆայի մեջ Օպերացիան համակարգի central processing unit (CPU) քանակը(os.cpus()):
 */
console.log('\n---------- Task3 ----------');
//const random = require('random');
//const name = random.integer(1e7, 1e8); // 8 նիշանոց պատահական թվերից կազմված անուն ունեցող
const randomstring = require('randomstring');
let string = randomstring.generate(8);
//console.log(string );
const lengthNumber =  os.cpus().length.toString();

const fs = require('fs');
fs.writeFile(string+'.txt', lengthNumber, function(err){
    if (err) {
       return console.log(err);
   }
});



/*
4.Գրել ծրագիր որ աշխատացնելիս  input.txt կկարդա պարունակությունը ,
 որից հետո այդ պարունակության բոլոր բացատները կփոխարին - ներով:
Այնուհետև գծիկներով տեքստ գրել write.txt ֆայլում:
*/

console.log('\n---------- Task4 ----------');

fs.readFile('input.txt','utf-8', function(err,data){
    if(err){
        throw err;
    }
    console.log(data);
    const arr = data.split(' ');
    let changed_data = arr.join('-');
    console.log(changed_data);

    //Writing in file
    fs.writeFile('write.txt', changed_data , function(err){
        if (err) {
            return console.log(err);
        }
    });

});
//Sargisi tarberaky
// fs.readFile('./input.txt', function (err, data) {
//     console.log(data);
//     if(err){
//         return;
//     }
//     fs.writeFile('write.txt', data.toString().replace(/\s+/g, '-'), (err)=>{
//         if(err){
//             return;
//         }
//         console.log('Ok');
//     });
// });

/*
    5.Գրել ծրագիր որ աշխատացնելիս sync կկարադա նախորդ չորս տնայիների ֆայլերի պարունակությունը(Օրինակ homework1.js, homework2.js, homework3.js, homework4.js):
    Այնուհետև ծրագիրը պետք է ստեղծի txt ֆայլ, որի անուն կազմված կլնի օպերացոն համակարգի անունից և այդ պահին ժամ րոպե վարկյանից(win32_14_14_58.txt)
    և այդ ֆայլում գրել նախորդ ֆայլերի պարունակությունը:
 */
console.log('\n---------- Task5 ----------');
const dateNow = new Date();
const nameOfFile = `${os.platform()}_${dateNow.getHours()}_${dateNow.getMinutes()}_${dateNow.getSeconds()}.txt`;
console.log(nameOfFile);

// const task1 = fs.readFileSync('./task-1.js');
// const task2 = fs.readFileSync('./task-2.js');
// const task3 = fs.readFileSync('./task-3.js');
// const task4 = fs.readFileSync('./task-4.js');
//
// fs.writeFileSync(nameOfFile, task1 + task2 + task3 + task4);







