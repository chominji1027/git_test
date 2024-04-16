// 저장
const save = {
  calcBefore: {
    getBtnData: function (btn) {
      const data = btn;
      this.saveInArr(data);
    },

    saveArr: [],

    saveInArr: function (data) {
      this.saveArr.push(data);
      this.saveInLocalStorage();
    },

    resetArr: function () {
      this.saveArr = [];
      this.saveInLocalStorage();
    },

    changeTypeToSaveLocalStorage: function () {
      const string = JSON.stringify(this.saveArr);
      return string;
    },

    saveInLocalStorage: function () {
      const string = this.changeTypeToSaveLocalStorage();
      window.localStorage.setItem("calcBefore", string);
    }
  },

  calcAfter: {
    getCalcData: function (test) {
      const data = test;
      this.saveInArr(data);
    },

    saveArr: [],

    saveInArr: function (data) {
      this.saveArr.push(data);
      this.saveInLocalStorage();
    },

    resetArr: function () {
      this.saveArr = [];
      this.saveInLocalStorage();
    },

    changeTypeToSaveLocalStorage: function () {
      const string = JSON.stringify(this.saveArr);
      return string;
    },

    saveInLocalStorage: function () {
      const string = this.changeTypeToSaveLocalStorage();
      window.localStorage.setItem("calcAfter", string);
    }
  }
};

export { save };
