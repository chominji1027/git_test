// main.js
import { SaveBefore, SaveAfter } from "./module/save.js";
import { Printout } from "./module/printout.js";
import { InputTag, ButtonTag } from './module/button.js';
import Eval from './module/eval.js';

// Button 생성
new InputTag('', '', '', '', '', '','','');

const repeatBtn = function () {
    for (let i = 0; i <= 9; i++) {
        new ButtonTag('', '', '', `${i}`, `${i}`, 'btn');
        const btnNo = document.getElementsByClassName("btn")[i];
        btnNo.addEventListener("click", function () {
            const value = btnNo.value; // 클릭된 버튼의 값
            new SaveBefore(value);
            // console.log(SaveBefore.arr);
            // 버튼 값을 가지고 저장 실행
            const printoutPlay = new Printout(SaveBefore.arr); // 저장 값을 가지고 출력 실행
            printoutPlay.disPrint();
        });
    };
}

new ButtonTag('', '', '', '+', '+', 'operator');
new ButtonTag('', '', '', '-', '-', 'operator');
new ButtonTag('', '', '', '/', '/', 'operator');
new ButtonTag('', '', '', '*', '*', 'operator');
new ButtonTag('', '', '', ' ', 'AC', 'operator_Clear');
new ButtonTag('', '', '', '=', '=', 'operator_result');

const btnPlus = document.getElementsByClassName('operator')[0];
const btnMinor = document.getElementsByClassName('operator')[1];
const btnDivide = document.getElementsByClassName('operator')[2];
const btnMulti = document.getElementsByClassName('operator')[3];
const btnClear = document.getElementsByClassName('operator_Clear')[0];
const btnResult = document.getElementsByClassName('operator_result')[0];

btnPlus.addEventListener("click", function () {
    const value = btnPlus.value; // 클릭된 버튼의 값
    new SaveBefore(value);
    const printoutPlay = new Printout(SaveBefore.arr); // 저장 값을 가지고 출력 실행
    printoutPlay.disPrint();
    // console.log(SaveBefore.arr);
});
btnMinor.addEventListener("click", function () {
    const value = btnMinor.value; // 클릭된 버튼의 값
    new SaveBefore(value);
    const printoutPlay = new Printout(SaveBefore.arr); // 저장 값을 가지고 출력 실행
    printoutPlay.disPrint();
    // console.log(SaveBefore.arr);
});
btnDivide.addEventListener("click", function () {
    const value = btnDivide.value; // 클릭된 버튼의 값
    new SaveBefore(value);
    const printoutPlay = new Printout(SaveBefore.arr); // 저장 값을 가지고 출력 실행
    printoutPlay.disPrint();
    // console.log(SaveBefore.arr);
});
btnMulti.addEventListener("click", function () {
    const value = btnMulti.value; // 클릭된 버튼의 값
    new SaveBefore(value);
    const printoutPlay = new Printout(SaveBefore.arr); // 저장 값을 가지고 출력 실행
    printoutPlay.disPrint();
    // console.log(SaveBefore.arr);
});
btnClear.addEventListener("click", function () {
    const value = btnClear.value; // 클릭된 버튼의 값
    new SaveBefore(value);
    new SaveAfter(value);
    const printoutPlay = new Printout(SaveBefore.arr); // 저장 값을 가지고 출력 실행
    printoutPlay.disPrint();
    const printoutPlay2 = new Printout(SaveAfter.arr); // 저장 값을 가지고 출력 실행
    printoutPlay2.disPrint();
    // console.log(SaveBefore.arr);
});
btnResult.addEventListener("click", function () {
    // const value = btnResult.value; // 클릭된 버튼의 값
    const calcing = new Eval(); // 버튼 값을 가지고 연산 실행
    const value = calcing.operator_Cal();
    new SaveAfter(value);
    const printoutPlay2 = new Printout(SaveAfter.arr); // 저장 값을 가지고 출력 실행
    printoutPlay2.disPrint();
    // console.log(SaveAfter.arr);
    // const printoutPlay = new printout(saveCalcBefore.arr); // 저장 값을 가지고 출력 실행
});

// 노광훈 작업내역

repeatBtn();




// ================우리 코드 방향의 흔적기관 ㅋㅋ=================
// const btn = "1"
// const saveCalcBefore = new SaveBefore(btn);
// // console.log(saveCalcBefore.saveInArr())
// const printoutPlay = new printout(saveCalcBefore.arr);

// const calc = "3"
// const saveCalcAfter = new SaveAfter(calc);