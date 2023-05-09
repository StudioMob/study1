/**
 * 変数テスト
 */
// var val1 = "hennsu";
// console.log(val1);
// // var変数は上書きが可能
// val1 = "uwagaki";
// console.log(val1);
// // 再宣言が可能
// var val1 = "saisenngenn";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);
// // let は上書きが可能
// val2 = "letの上書き";
// console.log(val2);
// let val2 = "saisenngenn";
// console.log(val2);

// const val3 = "aaa";
// val3 = "iiii";
// const val3 = "aaa";

// const val4 = {
//   name: "test",
//   test1: "test2"
// };

// console.log(val4.name);

// // constで定義したものは定義が可能
// val4.name = "test4";
// val4.test = "testaa";
// console.log(val4.test);

// const val5 = ["dog", "cat"];

// val5[0] = "bird";

// console.log(val5[0]);
// val5.push("monkey");
// console.log(val5[2]);

/**
 * テンプレート文字列
 */

// const msg1 = "aaa";
// const msg2 = "iii";

// const msg3 = msg1 + msg2;

// console.log(msg3);
// const msg4 = `watasinonamae${msg3}`;
// console.log(msg4);

/*
従来の関数
*/
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("hellow"));

//**アロー関数 */
// const func1 = (str) => str;
// console.log(func1("hellow"));

// const func2 = (str, str2) => {
//   return str + str2;
// };

// console.log(func2("1", "2"));
// console.log(func2(1, 2));

// //**分割代入 */

// const test = {
//   name: "he",
//   age: 21
// };

// const msg = `watasi${test.name}`;
// console.log(msg);

// const { name, iii } = test;
// const msg2 = `aaaaaaa${name}`;
// console.log(msg2);
// const test = ["aaa", "iii"];
// const [uuu, eee] = test;
// const msg = `test${uuu}`;
// console.log(msg);

//**デフォルト値、引数など */
// const sayhellow = (name = "デフォ") => console.log(`watasi${name}`);
// sayhellow();

//**スプレット構文 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);

// console.log(...arr1);
// const sumfunc = (num1, num2) => console.log(num1 + num2);
// sumfunc(arr1[0], arr1[1]);
// sumfunc(...arr1);

// // まとめて受け取る
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...num3] = arr2;
// console.log(...num3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4, ...arr5];
// console.log(arr6);

// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log((arr6[0] = 100));
// console.log(arr4[0]);

// map filter　を使った処理
const nameArr = ["田中", "yamada", "tako"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];

// const newnumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newnumArr);

// const newArr = nameArr.map((name) => {
//   if (name === "tako") {
//     return name;
//   } else {
//     return `${name} sann`;
//   }
// });

// console.log(newArr);

// //**三項演算子 */
// const val1 = 1 > 0 ? `Yes` : `No`;
// console.log(val1);

// const num = 1300;

// console.log(num.toLocaleString());
// const formataNum = typeof num === `number` ? num.toLocaleString : `suuti`;
// console.log(formataNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100over` : `under100`;
// };
// console.log(checkSum(0, 100));

//**論理演算子の意味を知る */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log(`１か２となる`);
// }

// if (flag1 && flag2) {
//   console.log(`１か２となる?
//   `);
// }

// const num = null;
// const fee = num || "金額未設定";
// console.log(fee);
