// 출력 클래스화
export class Printout {
    constructor(input) {
        this.test = input;   // this.test 안에 가져온 calcBefore 배열 넣기
        // this.beforePrint();    // 디스플레이에 출력하는 메서드 실행
    }

    // 배열에서 값 가져오는 메서드
    getNum() {
        const display = this.test.join('');     // 배열 문자열로 바꿔주기
        return display;     // 문자열 반환
    }

    // 디스플레이에 출력하는 메서드
    disPrint() {
        const print = this.getNum();     // data 안에 문자열로 바꿔준 값 넣기
        // console.log(`calcBefore : ${bf}`);    // 콘솔 창에 출력 -> 나중에 인풋 창에 출력으로 수정해야됨
        document.getElementsByName("output")[0].value = print;
    }

    

}