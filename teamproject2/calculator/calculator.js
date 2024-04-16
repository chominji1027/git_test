// 연산
const verification = {
  division: function (arr) {
    let num1 = "";
    let num2 = "";
    let operatorFound = false;

    // 연산자 오기 전까지는 num1에 계속 숫자 누적 , 연산자 오면 num2에 숫자 누적
    arr.forEach(item => {
      if (item === "+" || item === "-" || item === "*" || item === "/") {
        operatorFound = true;
      } else {
        if (operatorFound) {
          num2 += item;
        } else {
          num1 += item;
        }
      }
    });

    return { num1, num2 };
  },

  operatorCal: function (arr) {
    let num1 = Number(verification.division().num1);
    let num2 = Number(verification.division().num2);
    // let { num1, num2 } = this.division(arr);
    let result;

    arr.forEach(item => {
      if (item === "+" || item === "-" || item === "*" || item === "/") {
        switch (item) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            if (num2 !== 0) {
              result = num1 / num2;
            } else {
              result = "0으로 나눌 수 없습니다";
            }
            break;
          default:
            alert("잘못된 연산입니다.");
            break;
        }
      }
    });

    return result; // 연산 결과 반환
  }
};

// 연산 객체 export
export { verification };
