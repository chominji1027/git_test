// 출력

const printout = {
  // 배열에서 값 가져오기
  getNum: function (data) {
    // const test = save.calcBefore.saveArr.join('');      // 배열 문자열로 바꿈
    const test = data.join('');      // 배열 문자열로 바꿈
    return test;
  },

  // 가져온 값 인풋에 넣기
  disPrint: function (data) {
    let input = document.getElementsByName("output")[0];
    input.value = this.getNum(data);
  }
};

export { printout }; // 모듈로 export
