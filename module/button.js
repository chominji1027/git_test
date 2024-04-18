class ParentsGenerator {
    constructor(Elem, typ, nam, valu, text, ClsN, attr, wage) {     // ★★★ class 매개변수 설명 ★★★
        this.tagNode1 = document.createElement(Elem);               // Elem = tag명
        this.tagNode1.value = valu;                                 // typ = tag의 type 속성
        this.tagNode1.className = ClsN;                             // nam = tag의 name
        this.tagNode1.type = typ;                                   // valu = tag의 value
        this.tagNode1.name = nam;                                   // text = tag의 text 입력
        this.tagNode1.setAttribute(attr, wage);
        this.PadText = document.createTextNode(text);               // ClsN = tag의 className
        this.tagNode1.appendChild(this.PadText);
    };
};

// 계산기 DOM - node Generator(생성기)
class DivTag extends ParentsGenerator {
    constructor(Elem, typ, nam, valu, text, ClsN, attr, wage) {
        super('div', typ, nam, valu, text, 'Calculator', 'Attribute', '');
        document.body.appendChild(this.tagNode1);
    };
};
class InputTag extends ParentsGenerator {
    constructor(Elem, typ, nam, valu, text, ClsN, attr, wage) {
        super('input', 'text', 'output', valu, text, ClsN, "readonly", '');
        activeDiv.tagNode1.appendChild(this.tagNode1);
    };
};
class ButtonTag extends ParentsGenerator {
    constructor(Elem, typ, nam, valu, text, ClsN, attr, wage) {
        super('button', '', '', valu, text, ClsN, 'Attribute', '');
        activeDiv.tagNode1.appendChild(this.tagNode1);
    };
};

const activeDiv = new DivTag('', '', '', '', '', '', '', '');

export { DivTag, InputTag, ButtonTag };
export default ParentsGenerator;