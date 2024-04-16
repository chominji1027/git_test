
import { extendedCal, calculatorInput } from "./calculator/button.js";
import { save } from "./calculator/save.js";
import { printout } from "./calculator/printout.js";
import { verification } from "./calculator/calculator.js";

extendedCal.createInputDisplay();
extendedCal.createNumPad();
extendedCal.createOperator();

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    calculatorInput.btnInput(button);
    const result = verification.operatorCal(save.calcBefore.saveArr);
    printout.disPrint(save.calcBefore.saveArr);
  });
});

document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => {
    calculatorInput.btnPlusInput(button);
    const result = verification.operatorCal(save.calcBefore.saveArr);
    printout.disPrint(save.calcBefore.saveArr) ;
  });
});

document.querySelectorAll('.operator_Clear').forEach(button => {
  button.addEventListener('click', () => {
    calculatorInput.btnClearInput(button);
    // const result = verification.operatorCal(save.calcBefore.saveArr);
    // printout.disPrint(save.calcBefore.saveArr, result);
  });
});

document.querySelectorAll('.operator_result').forEach(button => {
  button.addEventListener('click', () => {
    const result = verification.operatorCal(save.calcBefore.saveArr);
    save.calcAfter.getCalcData(result);
    printout.disPrint(save.calcAfter.saveArr); // 연산 결과 출력
  });
});
