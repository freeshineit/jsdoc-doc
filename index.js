(function () {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  /** @type {undefined} */
  let a;

  /** @type {Object} */
  const obj = {};

  /** @type {Array} */
  const arr = [];

  /** @type {Array<number>} */
  const arrNum = [];

  // class name
  class AClass {
    getA() {}
  }

  /** @type {AClass} */
  let ac;
  ac.getA();

  /** @type {*} */
  let anyType = 100;
  anyType = 'string';

  /**
   * @typedef {Object} Person person 对象
   * @property {string} name 姓名
   * @property {number=} age 年龄
   */

  /**
   * @type {Person}
   */
  const person = {
    name: '张三',
    age: 18,
  };

  // 函数类型
  /** @type {function(number, number):number} */ // (number, number) => number
  const fn = (a, b = 10) => a + b; //

  /** @type {function(...number):number} */ // (...number) => number
  const fn1 = (a, b, c, d, e) => a + b + c + d + e; //

  // @static
  class AStatic {
    /**
     * @static
     */
    static getA() {}
  }
  AStatic.getA();

  class Base {
    /**
     * @throws 子类不实现该方法，调用该方法会抛出错误
     */
    getName() {
      throw new Error('get name 为实现');
    }
  }

  function getFn(x) {
    return () => {
      return x;
    };
  }

  /** @function */
  const fn2 = getFn(100);
})();
