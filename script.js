
// const OPERATIONS = {
//     "+": (a,b) => a + b,
//     "-": (a,b) => a - b,
//     "*": (a,b) => a * b,
//     "/": (a,b) => a / b
// }
// function  calculate({a,b,operation}){
//     let result = null;
//     let operator = OPERATIONS[operation]
//     result = operator(a,b)
//     return result;
// }

// let input1 = document.querySelector(".a");
// let input2 = document.querySelector(".b");
// let btnSelect = document.querySelector(".btnselect");
// let btnSumma = document.querySelector(".summa");
// let btnVichitanie = document.querySelector(".vichitanie");
// let btnUmnojit = document.querySelector(".umnojit");
// let btnRazdelit = document.querySelector(".razdelit");
// function click(operation){
//     let a = Number(input1.value);
//     let b = Number(input2.value);

//     let result = calculate({
//         a,
//         b,
//         operation
//     });

//     alert(result);
// }
// btnSumma.addEventListener("click",() => click("+"));
// btnVichitanie.addEventListener("click",() => click("-"));
// btnUmnojit.addEventListener("click",() => click("*"));
// btnRazdelit.addEventListener("click",() => click("/"));

// function getFactorial(n) {
//     if (n==1) {
//         return n;
//     }
//     return n * getFactorial(n-1);
// }

// let factorial = getFactorial(10);
// console.log(factorial);

// let words = ['hello','hi','world'];
// console.log(words)
// words.forEach(word => {
//     console.log(word);
// })

// let word = words[0];
// console.log(word);
// for(let i = 0 ; i<word.length ; i++){
//     console.log(word.charAt(i));
// } 

// Цифры Фибаначи
// function productFib(prod){
//     let arr = [0,1];
//     for(let i = 2;i<100;i++){
//       arr[i] = arr[i-2] + arr[i-1]
//     }
//     let arr1 = [];
//     for(let i = 0;i<arr.length;i++){
//       arr1[i] = arr[i] * arr[i+1];
//       if(arr1[i] >= prod) {
//         arr1 =[arr[i],arr[i+1]] 
//         break;
//       };
//     }
//     if(arr1[0]*arr1[1] == prod){
//         arr1.push(true)
//     }else{
//         arr1.push(false)
//     }
//     return arr1;
// }

// function productFib(prod){
//     var n = 0;
//     var nPlus = 1;  
//     while(n*nPlus < prod) {
//       nPlus = n + nPlus;
//       n = nPlus - n;
//     }
//     return [n, nPlus, n*nPlus===prod];
//   }

// function productFib(prod){
//   let [a, b] = [0, 1];
//   while(a * b < prod) [a, b] = [b, a + b];
//   return [a, b, a * b === prod];
// }

// IP validation
// function isValidIP(str) {
//     const octets = str.split('.')							
//     return (octets.length === 4) &&	octets.reduce((acc, octet) => (acc === true) &&	(String(Number(octet)) === octet) && (Number(octet) >= 0) && (Number(octet) <= 255), true)
//   }

// ror13 english and russian
// function rot13(str){
//   let arr = [];
//   let englishLower = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
//   let englishUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let russianLower = 'абвгдеёжзийклмнопрстуфхцчшщьыъэюяабвгдеёжзийклклмнопрстуфхцчшщьыъэюя';
//   let russianUpper = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
//   str = str.split('');
//   str = str.map((item)=>{
//     if(item == englishLower.split('').find((item2)=>{return item2 == item})){
//       return item = englishLower[englishLower.indexOf(item) + 13];
//     }else if(item == englishUpper.split('').find((item2)=>{return item2 == item})){
//       return item = englishUpper[englishUpper.indexOf(item) + 13];
//     }else if(item == russianLower.split('').find((item2)=>{return item2 == item})){
//       return item = russianLower[russianLower.indexOf(item) + 13];
//     }else if(item == russianUpper.split('').find((item2)=>{return item2 == item})){
//       return item = russianUpper[russianUpper.indexOf(item) + 13];
//     }else{
//       return item;
//     }
//   });
//   return str.join("");
// }
// console.log(rot13('Cevirg'))

// Проверка. Цифро буквенная строка
// const alphanumeric = (str) => {
//   if (!str.length) return false;
//   const ALLOWED_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//   for (let char of str) {
//     if (!ALLOWED_CHARS.includes(char)) return false;
//   }
//   return true;
// };
// console.log(alphanumeric(""))

// Последняя цифра
// var lastDigit = function(str1, str2){
//   for(let i = 0;i<10;i++){
//     if(str1[str1.length-1] == i){
//       str1 = i;
//     }
//   }
//   let object = {
//     0:[0,],
//     1:[1,],
//     2:[2,4,8,6,],
//     3:[3,9,7,1,],
//     4:[4,6,],
//     5:[5,],
//     6:[6,],
//     7:[7,9,3,1,],
//     8:[8,4,2,6,],
//     9:[9,1,],
//   }
//   for (let key in object){
//     if(key == str1){
//       var str1Arr = object[key];
//       break;
//     }
//   }
//   let answer;
//   if(str2 != 0){
//     str2 = str2.toString().split('').reverse();
//     str2 = [str2[0],str2[1]];
//     str2 = str2.reverse().join('')
//     if(str2 % str1Arr.length){
//       answer = str1Arr[(str2 % str1Arr.length)-1];
//     }else{
//       answer = str1Arr[str1Arr.length-1];
//     }
//   }else{
//     answer = 1;
//   }
//   return answer;
// }
// console.log(lastDigit("", ""))

// var lastDigit = function(str1, str2){
//   return +str2 === 0 ? 1 : Math.pow(+str1.slice(-1), +str2.slice(-2) % 4 + 4) % 10
// }


// let n = 42;
// let item = [];
// for(let i = 1;i<=42;i++){
//   if(!(42%i)){
//     item.push(i);
//   }
// }
// console.log(item)


// Возврат числа и суммы квадратов чисел, кратных ему в промежутке от m до n  
// function listSquared(m, n) {
//   let arr = [];
//   for(let i = m;i<=n;i++){
//     arr.push(i);
//   }
//   for(let i = 0;i<arr.length;i++){
//     arr[i] = arr[i].toString().split()
//     for(let o = 1;o<=arr[i][0];o++){
//       if(!(arr[i][0]%o)){
//         arr[i].push(o);
//       }
//     }
//   }
//   for(let i = 0;i<arr.length;i++){
//     arr[i].splice(0,1);
//   }
//   for(let i = 0;i<arr.length;i++){
//     arr[i] = arr[i].map((item)=>{return item**2});
//   }
//   for(let i = 0;i<arr.length;i++){
//     arr[i] = arr[i].reduce((previous,item)=>{
//       return previous + item;
//     });
//   }
//   let result = [];
//   for(let i = 0;i<arr.length;i++){
//     if(Math.sqrt(arr[i]) === parseInt(Math.sqrt(arr[i]))){
//       result.push([i+m,arr[i]])
//     }
//   }
//   return result;
// }
// console.log(listSquared(1, 1000))

// function listSquared(m,n){
//   let arr = []
//   for(let i = m;i<=n;i++){
//     let temp = 0;
//     for(let j = 1;j<=i;j++){
//       if(i%j == 0) temp += j*j; 
//     }
//     if(Math.sqrt(temp)%1 == 0) arr.push([i,temp])
//   }
//   return arr;
// }
// console.log(sumOfSquare(1,500))

// function sumIntervals(intervals) {
//   let extra = [];
//   for(let i = 0;i<intervals.length;i++){
//     for(let o = 0;o<2;o++){
//       extra.push(intervals[i][o])
//     }
//   }
//   console.log(extra)
// }
// console.log(sumIntervals([[1, 5],[10, 20],[1, 6],[16, 19],[5, 11]]));

//https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

// function incrementString (string) {
//   let arr1 = 'abcdefjhijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ';
//   let arr2 = '0123456789';
//   let arr3 = '123456789'

// }
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
// console.log(incrementString('fdpfsfesdgffsdgfdddfsf1'));
// function scramble(str1, str2) {
//   str2 = str2.split('');
//   str2 = str2.filter((item)=>{
    
//   });
// }
// console.log(scramble('scriptingjava',     'javascript'))

// let str = 'Hello, world!';
// function pigIt(str){
//   return str.replace(/\w+/g,(w)=>{
//     return w.slice(1) + w[0] + 'ay';
//   });
// }
// console.log(pigIt(str))

// function multiply(a, b){
//   a = a.split('')
//   let extra = a.findIndex((item)=>{
//     return item != 0;
//   })
//   a = a.join('').slice(extra)
//   let n = BigInt(a)
//   let m = BigInt(b)
//   return (n*m).toString();
// }
// console.log(multiply("1009", "03"))



// var reshay1 = prompt('привет мудило  решай ппример: 2+3=?','')
// if(reshay1 != 5){
//   do {
//     var extr = prompt('ты даун нахуй ты живёшь, перерешивай');
//     if(reshay1 == 5) break;
//   } while (extr != 5);
// }
// console.log('2+3=5')
// console.log(`Твой ответ: 2+3=${reshay1}`)



// var reshay1 = prompt('привет сладкий  решай пример: 2*3=?','')
// if(reshay1 != 6){
//   do {
//     var extr = prompt('кто твоя мама? singitlera reshay 2*3=?');
//     if(reshay1 == 6) break;
//   } while (extr != 6);
// }
// console.log('2*3=6')
// console.log(`Твой ответ: 2*3=${reshay1}`)



// var reshay1 = prompt('2-3=?','')
// if(reshay1 != -1){
//   do {
//     var extr = prompt('ты даун нахуй ты живёшь, перерешивай 2-3=?');
//     if(reshay1 == -1) break;
//   } while (extr != -1);
// }
// console.log('2-1=-1')
// console.log(`Твой ответ: 2-1=${reshay1}`)



// var reshay1 = prompt('привет мудило  пример решай: 2%3=?','')
// if(reshay1 != 2){
//   do {
//     var extr = prompt('ты даун нахуй ты живёшь, перерешивай 2%3=?');
//     if(reshay1 == 2) break;
//   } while (extr != 2);
// }
// console.log('2%3=2')
// console.log(`Твой ответ: 2%3=${reshay1}`)



// var reshay1 = prompt('привет сладкий  решай пример: 3/3=?','')
// if(reshay1 != 1){
//   do {
//     var extr = prompt('ты даун нахуй ты живёшь, перерешивай 2/3=?');
//     if(reshay1 == 1) break;
//   } while (extr != 1);
// }
// console.log('3/3=1')
// console.log(`Твой ответ: 3/3=${reshay1}`)

// function generateHashtag(str) {
//   let str1 = str.split(' ').join('');
//   str = str.replace(/\s+/," ")
//   if(str1 == '' || str.length >= 140){
//     return false;
//   }else{
//     str = str.split(' ').filter((item)=>{
//       return item != '';
//     })
//     for(let i = 0;i<str.length;i++){
//       str[i] = str[i].split('')
//       str[i][0] = str[i][0].toUpperCase()
//       str[i] = str[i].join('')
//     }
//     str = str.join('');
//     if(str[0] != '#'){
//       str = str.split('')
//       str.unshift('#');
//       str = str.join('')
//     }else{
//       return str;
//     }
//     return str;
//   }
// }
// console.log(generateHashtag("code" + " ".repeat(140) + "wars"))

// https://www.codewars.com/kata/54d4c8b08776e4ad92000835/train/javascript

// function isPP(n) {
//   for (let m = 2; m <= n; m++) {
//     let k = 2;
//     while (Math.pow(m, k) <= n) {
//       if (Math.pow(m, k) === n) {
//         return [m, k];
//       }
//       k++;
//     }
//   }
//   return null;
// }
// console.log(isPP(17))


// var beeramid = function(bonus, price) {
//   if(bonus<=0){
//     return 0;
//   }
//   let banks = Math.floor(bonus/price);
//   let extra = 0;
//   let arr = [];
//   let i = 1;
//   let m = 0;
//   while(extra<=banks){
//     arr.push(i**2);
//     extra += arr[m];
//     i++;
//     m++;
//   }
//   return m-1;
// }
// console.log(beeramid(1500,2))





// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript
// function pickPeaks(arr){
//     let answer = {pos:[],peaks:[]}
//     let extra = arr.every((item)=>{
//         for(let i = 0;i<arr.length;i++){
//             if(item == arr[0]){
//                 return true;
//             }
//         }
//     })
//     if(arr.length <= 2 || extra == true){
//         return answer;
//     }
//     for(let i = 1;i<arr.length;i++){
//         if(arr[i] == arr.length-1) continue;
//         if(arr[i] <= arr[i-1]) continue;
//         if(arr[i] == arr[i+1]){
//             let check = [];
//             for(let o = i+1;o<arr.length;o++){
//                 if(arr[o] == arr[arr.length-1]){
//                     check.push(true);
//                 }else{
//                     check.push(false);
//                 }
//             }
//             if(check.every((item)=>{return item == true}) == true) break;
//         }   
//         if(arr[i] >= arr[i+1]){
//             let check = [];
//             for(let o = i;o<arr.length;o++){
//                 if(arr[i] == arr[o]){
//                     check.push(arr[o]);
//                 }else{
//                     check.push(arr[o]);
//                     break;
//                 }
//             }
//             if(check[check.length-2] > check[check.length-1]){
//                 answer.pos.push(i)
//                 answer.peaks.push(arr[i])
//             }
//         }
//     }
//     return answer;
// }

// function pickPeaks(arr) {
//     let pos = [];
//     let peaks = [];
  
//     for (let i = 1; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i - 1] && arr[i] <= arr[i + 1]) {
//         // плато
//         let j = i + 1;
//         while (arr[j] === arr[i] && j < arr.length - 1) {
//           j++;
//         }
//         if (arr[j] < arr[i]) {
//           pos.push(i);
//           peaks.push(arr[i]);
//         }
//         i = j - 1;
//       } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//         // пик
//         pos.push(i);
//         peaks.push(arr[i]);
//       }
//     }
  
//     return { pos, peaks };
//   }

// let new_cars = [23,43214,32,54356,546,45,]
// let rand = new_cars[Math.floor((Math.random(...new_cars)*(new_cars.length)))]
// console.log(rand)


// function convertFrac(lst){
//     let arr = [];
//     for(let i = 0; i < lst.length; i++){
//         let n = 2;
//         arr.push([]);
//         while(lst[i][1] > 1){
//             if(lst[i][1] % n == 0){
//                 lst[i][1] /= n;
//                 arr[i].push(n)
//                 n = 2;
//             }else{
//                 n++;
//             }
//         }
//     }
// }

// function convertFrac(lst){
//     let denominators = [];
//     for(let i = 0; i < lst.length; i++){
//         denominators.push(lst[i][1]);
//     }
//     // Алгоритм Евклида по нахождению НОД
//     function gcd(a, b) {
//         if (b === 0) {
//             return a;
//         } else {
//             return gcd(b, a % b);
//         }
//     }
//     let lcm = denominators.reduce((a, b) => a * b / gcd(a, b), 1);
//     let result = '';
//     for(let i = 0; i < lst.length; i++){
//         let numerator = lst[i][0] * (lcm / lst[i][1]);
//         result += `(${numerator},${lcm})`;
//     }
//     return result;
// }
//   console.log(convertFrac([ [1,11], [1, 4], [1, 6] ]))

// function driver(data) {
//   let obj = {
//     Jan: '01',
//     Feb: '02',
//     Mar: '03',
//     Apr: '04',
//     May: '05',
//     Jun: '06',
//     Jul: '07',
//     Aug: '08',
//     Sep: '09',
//     Oct: '10',
//     Nov: '11',
//     Dec: '12',
//   }
//   let arr = ''
//   if(data[2].length < 5){
//     let nines = 5 - data[2].length;
//     arr = arr.split('')
//     for(let i = 0; i < nines; i++){
//       arr.push(9)
//     }
//     arr = arr.join('');
//   }
//   let date;
//   if(data[4] == 'M'){
//     date = obj[data[3].match(/\w\w\w/)]
//   }else{
//     date = +((obj[data[3].match(/\w\w\w/)])[0]) + 5 + (obj[data[3].match(/\w\w\w/)])[1]
//   }
//   if(data[1] == ''){
//     data[1] = data[1].split('')
//     data[1][0] = 9;
//     data[1] = data[1].join('')
//   }
//   return data[2].toUpperCase().slice(0,5)+ arr + data[3][data[3].length-2] + date + data[3].slice(0,2) + data[3][data[3].length-1] + data[0][0] + data[1][0] + 9 + 'AA';
// }
// console.log(driver(["John","James","Smith","01-Jan-2000","M"]))

// function wave(str){
//   let arr = [];
//   for(let i = 0; i < str.length; i++){
//     arr.push(str);
//   }
//   for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i].split('');
//     arr[i][i] = arr[i][i].toUpperCase();
//     arr[i] = arr[i].join('')
//   }
//   arr = arr.filter((item)=>{
//     return str !== item; 
//   })
//   return arr;
// }

// function Connect4 (){
//   this.current = 1;
//   this.extra;
//   this.extrArr = [];
//   this.check = 0;
//   this.arr = [[[],[],[],[],[],[],[]],
//               [[],[],[],[],[],[],[]],
//               [[],[],[],[],[],[],[]],
//               [[],[],[],[],[],[],[]],
//               [[],[],[],[],[],[],[]],
//               [[],[],[],[],[],[],[]]];
//   this.checkArr1 = [[],
//                     [],
//                     [],
//                     [],
//                     [],
//                     [],
//                     []];
// };

// Connect4.prototype.play = function (col){
//   this.current = (this.current + 1)%2; 
//   if(this.check === 1){
//     return "Game has finished!";
//   }
//   this.extra = this.extrArr.filter((item)=>{return item === col}).length;
//   if((this.extrArr.filter((item)=>{return item === col})).length === 6){
//     this.current += 1;
//     return "Column full!";
//   }else{
//     this.arr[this.extra][col] = this.current + 1; 
//     this.extrArr.push(col);
//   }
//   for(let i = 0; i < this.arr.length; i++){
//     if(this.arr[i].join('').includes('1111')){
//       this.check = 1;
//       return "Player 1 wins!";
//     }
//     if(this.arr[i].join('').includes('2222')){
//       this.check = 1;
//       return "Player 2 wins!";
//     }
//     let j = 0;
//     while(j < this.checkArr1.length){
//       this.checkArr1[j][i] = this.arr[i][j]
//       j++;
//     }
//   }
//   for(let i = 0; i < this.checkArr1.length; i++){
//     if(this.checkArr1[i].join('').includes('1111')){
//       this.check = 1;
//       return "Player 1 wins!";
//     }
//     if(this.checkArr1[i].join('').includes('2222')){
//       this.check = 1;
//       return "Player 2 wins!";
//     }
//   }
//   let matrix = this.arr;
//   const diagonals = [];
//   const diagonalCount = matrix.length + matrix[0].length - 1;
//   for (let diagonalIndex = 0; diagonalIndex < diagonalCount; diagonalIndex++) {
//     const diagonal = [];
//     let rowIndex = Math.min(diagonalIndex, matrix.length - 1);
//     let colIndex = Math.max(diagonalIndex - matrix.length + 1, 0);
//     while (rowIndex >= 0 && colIndex < matrix[0].length) {
//       diagonal.push(matrix[rowIndex][colIndex]);
//       rowIndex--;
//       colIndex++;
//     }
//     if (diagonal.length >= 4) {
//       diagonals.push(diagonal);
//     }
//   }
//   for(let i = 0; i < diagonals.length; i++){
//     if(diagonals[i].join('').includes('1111')){
//       this.check = 1;
//       return "Player 1 wins!";
//     }
//     if(diagonals[i].join('').includes('2222')){
//       this.check = 1;
//       return "Player 2 wins!";
//     }
//   }
//   const rows = matrix.length;
//   const cols = matrix[0].length;
//   const diagonals2 = [];
//   for (let i = 0; i < rows + cols - 1; i++) {
//     diagonals2.push([]);
//   }
//   for (let row = rows - 1; row >= 0; row--) {
//     for (let col = 0; col < cols; col++) {
//       const diagonalIndex = col + row;
//       diagonals2[diagonalIndex].push(matrix[row][col]);
//     }
//   }
//   let extrakt = [];
//   for(let i = 0; i < diagonals2.length; i++){
//     if((diagonals2[i]).length >= 4){
//       extrakt.push(diagonals2[i]);
//     }
//   }
//   for(let i = 0; i < extrakt.length; i++){
//     if(extrakt[i].join('').includes('1111')){
//       this.check = 1;
//       return "Player 1 wins!";
//     }
//     if(extrakt[i].join('').includes('2222')){
//       this.check = 1;
//       return "Player 2 wins!";
//     }
//   }


//   for(let i = 0; i < this.arr.length; i++){
//     let j = 0;
//     while(j < this.arr[i].length){
//       if(this.arr[i][j] === Array(0)){
//         this.arr[i][j] = '';
//       }
//       j++;
//     }
//   }
//   for(let i = 0; i < this.checkArr1.length; i++){
//     let j = 0;
//     while(j < this.checkArr1[i].length){
//       if(this.checkArr1[i][j] === Array(0)){
//         this.checkArr1[i][j] = '';
//       }
//       j++;
//     }
//   }
//   for(let i = 0; i < diagonals.length; i++){
//     let j = 0;
//     while(j < diagonals[i].length){
//       if(diagonals[i][j] === Array(0)){
//         diagonals[i][j] = '';
//       }
//       j++;
//     }
//   }
//   for(let i = 0; i < extrakt.length; i++){
//     let j = 0;
//     while(j < extrakt[i].length){
//       if(extrakt[i][j] === Array(0)){
//         extrakt[i][j] = '';
//       }
//       j++;
//     }
//   }
//   console.log(this.arr)
//   console.log(this.checkArr1)
//   console.log(diagonals)
//   console.log(extrakt)
//   return `Player ${this.current + 1} has a turn`
// };
// let game = new Connect4();
// console.log(game.play(5))
// console.log(game.play(0))
// console.log(game.play(5))
// console.log(game.play(0))
// console.log(game.play(5))
// console.log(game.play(0))
// console.log(game.play(0))
// console.log(game.play(1))
// console.log(game.play(4))
// console.log(game.play(1))
// console.log(game.play(1))
// console.log(game.play(2))
// console.log(game.play(2))
// console.log(game.play(5))
// console.log(game.play(3))

let arr = `«Возможности не приходят сами — вы создаете их». Крис Гроссер (Chris Grosser)
«Успех обычно приходит к тем, кто слишком занят, чтобы его просто ждать». Генри Девид Торо (Henry David Thoreau)
«Возьмите идею. Сделайте ее своей жизнью — думайте о ней, мечтайте о ней, живите ею. Пусть ваш разум, мышцы, нервы, каждая часть тела будет наполнена этой одной идеей. Вот он — путь к успеху». Свами Вивекананда (Swami Vivekananda)
«Чтобы достичь успеха, перестаньте гнаться за деньгами, гонитесь за мечтой». Тони Шей (Tony Hsieh)
«Даже если вы проходите через ад, продолжайте идти». Уинстон Черчилль (Winston Churchill)
«Не бойтесь пожертвовать хорошим ради еще лучшего». Джон Рокфеллер (John D. Rockfeller)
«Есть два вида людей, которые будут вам говорить, что вы не сможете чего-то добиться: те, кто сами боятся пробовать, и те, кто боятся, что у вас получится». Рей Гофорт (Ray Goforth)
«Успешные люди делают то, что неуспешные не хотят делать. Не стремитесь, чтобы было легче, стремитесь, чтобы было лучше». Джим Рон (Jim Rohn)
«Многие люди терпят неудачу только потому, что сдаются в двух шагах от успеха». Саймон Хартли (Simon Hartley)
«Поднимите планку. Делайте то, на что вы вроде бы не способны. Не задумывайтесь о пределе ваших возможностей. Делайте то, чего сделать не можете». Пол Арден (Paul Arden)
«Бездействие порождает беспокойство и страх. Действие — уверенность и смелость. Если ты хочешь победить страх, не сиди дома и не думай об этом. Встань и действуй». Мэг Джей (Meg Jay)
«Инвестирование — это бизнес, где вы можете выглядеть очень глупо в течение длительного периода времени, прежде чем вы докажете, что правы». Билл Акман (William Albert Ackman)
«Мир полон изобилия и возможностей, но слишком многие люди приходят к фонтану жизни с решетом вместо цистерн или с чайной ложкой вместо экскаватора. Они ожидают малого и в результате получают мало». Бен Свитленд (Ben Sweetland)
«Деньги – это одно из воплощений силы. Но еще большей силой обладает финансовое образование. Деньги приходят и уходят, но если вам известно как они работают, то вы можете управлять ими и становиться богаче». Роберт Кийосаки (Robert Toru Kiyosaki)
«Одна победа не ведет к успеху, в отличие от постоянного желания побеждать». Винс Ломбарди (Vince Lombardi)
«Осуществляйте свои мечты, или кто-то наймет вас для осуществления своих». Фарра Грей (Farrah Gray)
«Успех – это лестница, на нее не взобраться, держа руки в карманах». Пауль Баует (Paul Friedrich Peter Bauer)
«Всегда помните о том, что ваша решимость преуспеть важнее всего остального». Авраам Линкольн (Abraham Lincoln)
«Я твердо верю в удачу, и я заметил: чем больше я работаю, тем я удачливее». Томас Джефферсон (Thomas Jefferson)
«Пока у тебя есть попытка – ты не проиграл». (Сергей Бубка)
«Я этого хочу. Значит, это будет». Генри Форд (Henry Ford)
«Если ты рожден без крыльев, не мешай им расти». Коко Шанель (Gabrielle Bonheur “Coco” Chanel)
«Я не терпел поражений. Я просто нашёл 10 000 способов, которые не работают». Томас Эдисон (Thomas Alva Edison)
«Делай сегодня то, что другие не хотят, завтра будешь жить так, как другие не могут». Джаред Лето (Jared Joseph Leto)
«Лучший способ взяться за что-то — перестать говорить и начать делать». Уолт Дисней (Walter Elias Disney)
«Хотите знать, кто вы? Не спрашивайте. Действуйте! Действие будет описывать и определять вас». Томас Джефферсон (Thomas Jefferson)
«Ничем в мире нельзя заменить упорство. Его не может заменить талант — никого не встретишь так часто, как талантливого неудачника. Его не может заменить гениальность — непризнанные гении почти вошли в пословицу. Одного образования тоже недостаточно — мир полон образованных изгоев. Только упорство и решимость всесильны. Фраза „работай дальше“ была и остается решением всех проблем человеческой расы». Калвин Кулидж (John Calvin Coolidge)
«В ту минуту, когда вы соглашаетесь на меньшее по сравнению с тем, что заслуживаете, вы получаете даже меньше, чем то, на что согласились». Морин Дауд (Maureen Dowd)
«Достижения нужно измерять препятствиями, которые вам пришлось преодолеть, чтобы достичь своих целей». Букер Т. Вашингтон (Booker Taliaferro Washington)
«За свою карьеру я пропустил более 9 тыс. мячей. Я проиграл почти 300 игр. Двадцать шесть раз мне доверяли сделать решающий бросок — и я промахивался. Всю свою жизнь я терпел поражение — снова, и снова, и снова. И именно поэтому я добился успеха». Майкл Джордан (Michael Jeffrey Jordan)
«Сила происходит не от побед. Силу порождает борьба. Когда вы проходите через трудности и решаете не сдаваться — это и есть сила». Арнольд Шварценеггер (Arnold Alois Schwarzenegger)
«Многое кажется невозможным, пока ты этого не сделаешь». Нельсон Мандела (Nelson Rolihlahla Mandela)
«Бог не фраер - всё видит» Жуковский Максим (Жук Макс)
«Каждое утро начинай с чтения списка самых богатых людей. Если тебя там нет – берись за работу». Роберт Орбен (Robert Orben)
«Каждый раз нужно прыгать со скалы и отращивать крылья по пути вниз». Рэй Брэдбери (Ray Douglas Bradbury)
«Каждая мечта тебе даётся вместе с силами, необходимыми для её осуществления. Однако тебе, возможно, придётся ради этого потрудиться». Ричард Бах (Richard David Bach)
«Чтобы дойти до цели, человеку нужно только одно. Идти». Оноре де Бальзак (Honore Balzac)
«Бог не фраер - всё видит» Жуковский Максим (Жук Макс)
«Ты никогда не переплывёшь океан, если будешь бояться потерять берег из виду». Христофор Колумб (Christopher Columbus)
«Желание добиться успеха без упорного труда схоже с желанием снять урожай там, где вы не сажали семена». Дэвид Блай (David Bly)
«Мы рождены быть настойчивыми, ибо только через настойчивость узнаем, чего мы стоим на самом деле». Тобиас Вульф (Tobias Jonathan Ansell Wolff)
«Если ты не собираешься идти до конца, зачем ты вообще это делаешь?». Джо Намат (Joseph William Namath)
«Бог не фраер - всё видит» Жуковский Максим (Жук Макс)
«Говорят, что мотивация длится не долго. Что ж, свежесть после ванны — тоже. Поэтому заботиться о них стоит ежедневно». Зиг Зиглар (Zig Ziglar)
«Поверьте, что сможете, и полпути уже пройдено». Теодор Рузвельт (Theodore Roosevelt)
«Когда закрывается одна дверь в счастье, открывается другая. Но мы зачастую слишком долго смотрим на закрытую дверь, чтобы увидеть, что нам открылось». Хелен Келлер (Helen Keller)
«Если останавливаться всякий раз, когда тебя оскорбляют или в тебя плюются, то ты никогда не дойдешь до места, куда тебе надо попасть». Тибор Фишер (Tibor Fischer)
«Столкнувшись с трудностями, нельзя сдаваться, бежать. Вы должны оценивать ситуацию, искать решения и верить в то, что все делается к лучшему. Терпение – вот ключ к победе». Ник Вуйчич (Nicholas James Vujicic)
«Что бы ты ни придумал, всегда найдется тот, кто уже делал это до тебя. Так что главное – сделать это лучше». Адриано Челентано (Adriano Celentano)
«Мечтайте так, как будто вам жить вечно. Живите так, как будто вам умирать сегодня». Джеймс Дин (James Byron Dean)
«Не хмурь бровей из-за ударов рока. Упавший духом гибнет раньше срока». Омар Хайям
«Великие дела нужно совершать, а не обдумывать их бесконечно». Юлий Цезарь (Gaius Iulius Caesar)
«Оправдания — это ложь, которую вы говорите самим себе. Прекратите хныкать, жаловаться и вести себя как дети. Оправдания делают человека бедным». Роберт Кийосаки (Robert Toru Kiyosaki)
«Тот, кто не сталкивался с трудностями, не познает силы. Тому, кто не знавал бедствий, не нужна смелость. Загадочно, однако, то, что самые лучшие черты характера в человеке, как раз и прорастают в почве, наполненной трудностями». Гарри Эмерсон Фосдик (Harry Emerson Fosdick)
«Чтобы плыть против течения, рыба должна быть сильной, плыть по течению может даже мёртвая рыба». Джон Кроу Рэнсом (John Crowe Ransom)
«Или вы управляете днём, или день управляет вами». Джим Рон (Jim Rohn)
«Бог не фраер - всё видит» Жуковский Максим (Жук Макс)
«Гонясь за недостижимым, мы совершаем невозможное». Роберт Ардри (Robert Ardrey)
«Учитесь на своих ошибках, признайте их и двигайтесь дальше». Стив Джобс (Steven Paul Jobs)
«Успех – дрянной учитель. Он провоцирует рассудительных людей рассуждать, что они не могут проиграть». Билл Гейтс (William Henry Gates)
«В некотором смысле у нашей борьбы не может быть конца, так как мы никогда не получаем абсолютно все, что хотим. И жизнь научила меня тому, что сдаваться сходу очень глупо, так как с первой попытки не удается почти ничего». Мукеш Амбани (Mukesh Dhirubhai Ambani)
«Самый большой риск в том, чтобы бояться рисковать. В мире, который меняется столь стремительно, есть лишь одна стратегия гарантированного провала: не рисковать». Марк Цукерберг (Mark Elliot Zuckerberg)
«И потому что не имеет значения, кто вы такой, если вы твердо верите в себя и свою мечту, Нью-Йорк всегда будет открыт для вас». Майкл Блумберг (Michael Bloomberg)
«Бог не фраер - всё видит» Жуковский Максим (Жук Макс)`;
arr = arr.split('\n');
let random1 = arr[Math.floor(Math.random() * arr.length)];
let quote = document.querySelectorAll('blockquote')[0];
quote.innerHTML = random1;
let pictureArr = `https://mobimg.b-cdn.net/v3/fetch/72/72570dc2590f4e775fe6ac9395cd0623.jpeg
https://media.krasota.ru/filer_public/09/35/093591e9-d868-49b0-aca9-16f7d87494e5/seryi_obyknovennyi_volk_res750.jpg
https://media.krasota.ru/filer_public/d2/bc/d2bcaf2e-fb03-46e2-8ab2-4d7a19ec0667/seryi_obyknovennyi_volk1_res750.jpg
https://media.krasota.ru/filer_public/1e/2e/1e2e7af2-c599-4cba-921c-fca84b8d096b/seryi_obyknovennyi_volk2_res750.jpeg
https://media.krasota.ru/filer_public/f6/4c/f64ca54c-d95c-4665-9eca-50c9e1729fc6/seryi_obyknovennyi_volk3_res750.jpg
https://media.krasota.ru/filer_public/45/93/45939d1e-b269-48f2-b8a7-48d61cdf219b/makenzenskii_volk_res750.jpg
https://media.krasota.ru/filer_public/3d/ac/3daca831-9c3c-40b5-8dd1-e0f66cd3246d/makenzenskii_volk1_res750.jpg
https://media.krasota.ru/filer_public/ae/26/ae266963-7b0f-4e7c-8d6d-7a812befd840/poliarnyi_volk1_res750.jpg`;
pictureArr = pictureArr.split('\n')
let random2 = pictureArr[Math.floor(Math.random() * pictureArr.length)];
let element = document.querySelector('.background1');
element.style.background = `url("${random2}") center/cover`;