// 계산기 DOM - node 생성 클래스(기본틀)
class Calculator {
  constructor(Elem, ClsN) {
    this.container = document.createElement(Elem);
    this.container.className = ClsN;
    document.body.appendChild(this.container);
  }
  // 
  createNode(Elem, typ, nam, valu, text, ClsN, attr, wage) {
    this.btnPad = document.createElement(Elem)
    this.btnPad.value = valu;
    this.btnPad.className = ClsN;
    this.btnPad.type = typ;
    this.btnPad.name = nam;
    this.container.appendChild(this.btnPad);
    this.btnPad.setAttribute(attr, wage);
    this.PadText = document.createTextNode(text);
    this.btnPad.appendChild(this.PadText);
  }
}
// 계산기 DOM - node Generator(생성기)
class NodeGenerator extends Calculator {
  constructor() {
    super("div", "Calculator");
  }

  createInputDisplay() {
    super.createNode('input', 'text', 'output', '', '', '', 'readonly', '');
  }

  createNumPad() {
    for (let i = 0; i <= 9; i++) {
      super.createNode('button', '', '', `${i}`, `${i}`, 'btn', 'onclick', 'calculatorInput.btnInput(this)');
    }
  }
  createOperator() {
    super.createNode('button', '', '', '*', '*', 'operator', 'onclick', 'calculatorInput.btnPlusInput(this)');
    super.createNode('button', '', '', '/', '/', 'operator', 'onclick', 'calculatorInput.btnPlusInput(this)');
    super.createNode('button', '', '', '-', '-', 'operator', 'onclick', 'calculatorInput.btnPlusInput(this)');
    super.createNode('button', '', '', '+', '+', 'operator', 'onclick', 'calculatorInput.btnPlusInput(this)');
    super.createNode('button', '', '', '', 'AC', 'operator_Clear', 'onclick', 'calculatorInput.btnClearInput(this)');
    super.createNode('button', '', '', '=', '=', 'operator_result', 'onclick', 'calculatorInput.btnResultInput(this)');
  }

}

const extendedCal = new NodeGenerator();
// extendedCal.createInputDisplay()
// extendedCal.createNumPad();
// extendedCal.createOperator();



// 계산기 버튼별 클릭시 onclick이벤트 실행 및 값 반환
import { save } from "./save.js"; // save 객체 import
import { printout } from "./printout.js"; // printout 모듈 import

let calculatorInput = {
  btnInput: function (btn) {
    let buttonTag = btn.value;
    save.calcBefore.getBtnData(buttonTag);
    printout.disPrint(save.calcBefore.saveArr); // 출력
  },
  btnPlusInput: function (operator) {
    let buttonTag = operator.value;
    save.calcBefore.getBtnData(buttonTag);
    printout.disPrint(save.calcBefore.saveArr); // 출력
    return buttonTag;
  },
  btnClearInput: function (operator_Clear) {
    let buttonTag = operator_Clear.value;
    save.calcBefore.resetArr(buttonTag);
    save.calcAfter.resetArr(buttonTag);
    printout.disPrint(save.calcBefore.saveArr); // 출력
  },
  btnResultInput: function (operator_result) {
    let buttonTag = operator_result.value;
    save.calcAfter.saveArr = [];
    verification.operatorCal(buttonTag);
    printout.disPrint(save.calcAfter.saveArr); // 출력
  }
};



export { extendedCal, calculatorInput };
