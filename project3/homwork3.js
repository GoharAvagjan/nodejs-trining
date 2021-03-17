/*
 1. Ստեղծել Promise վերադարձնող ֆունկցիա , որը գեներացնում է 0 - 10 միջակայքի թիվ և ստուգում , եթե թիվը փոքր է 5-ից reject է անում ,
 հակառակ դեպքում resolve . Աշխատացնել ֆունկցիան և տպել արժեքները։

2․ ՈՒնենք config.json ֆայլ ,
{
    "host" : "localhost",
    "port" : 3000
}
 պարունակությամբ ․ Ստեղծել սերվեր , որը լսում է json-ի մեջ լրացված հոսթին և պորտին։

3․ Ստեծել ֆունկցիա , որը input.txt ֆայլի պարունակությունը կկարդա ,
հետո պարունակության տեքստը կկիսի երկու մասի և միաժամանակ կգրի առաջին մասը output1.txt ,
իսկ երկրորդը output2.txt ֆայլերի մեջ։
Օգտվել 'fs/promises' գրադարանից և օգտագործել async/await:

 */
console.log('---------task1-------');
const random = require('random')
const http = require('http');
const promise1 = new Promise(function(resolve, reject){
    let randomInt = random.int(0, 10);
    if(randomInt > 5){
        resolve('ok');
    }
    else{
        reject('error');
    }

});
promise1.then(value => {
    console.log(value); // Success!
}).catch(err => console.log(err));

console.log('-----------task2 --------');

const fs = require('fs');
const data = fs.readFileSync('config.json');
const jsonData = JSON.parse(data);
// console.log(jsonData.host);
// console.log(jsonData.port);

// http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.write('Hello World!');
//    res.end();
//  }).listen(jsonData.port);

console.log("------------- task3-------------");
/*3․ Ստեծել ֆունկցիա , որը input.txt ֆայլի պարունակությունը կկարդա ,
հետո պարունակության տեքստը կկիսի երկու մասի և միաժամանակ կգրի առաջին մասը output1.txt ,
իսկ երկրորդը output2.txt ֆայլերի մեջ։
Օգտվել 'fs/promises' գրադարանից և օգտագործել async/await:

 */

async function f() {
    const dataInput = await fs.readFileSync('../project2/input.txt');
    const dataInput_str = dataInput.toString();
    //console.log(dataInput_str);
    const str_part1 = dataInput_str.substring(0, dataInput_str.length / 2);
    //console.log(str_part1);
    const str_part2 = dataInput_str.substring(dataInput_str.length / 2);
    //console.log(str_part2);
    fs.writeFile('output1.txt', str_part1, (err) => {
        if (err) {
            console.log(err.message);
        }
    });
    fs.writeFile('output2.txt', str_part2, (err) => {
        if (err) {
            console.log(err.message);
        }
    });
}
f();

