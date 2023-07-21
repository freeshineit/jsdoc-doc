/**
 * @class Logger
 * @classdesc Logger class description
 * @since 0.1.0
 * @example
 * Logger.v("this is console log")
 *
 * Logger.e("this is console error")
 */
class Logger {
  /** @type {LoggerLevel} */
  static LOGGER_LEVEL = "DEBUG";
  /** @type {boolean} */
  static HIDE_TAG = false;

  /**
   * @description Static method used to print debug logs
   * @static
   *
   * @example
   * Logger.d("error message")
   *
   * @param {...Array<any>} args debug messages
   * @returns {void}
   */
  static d(...args) {
    console.debug(...args);
  }

  /**
   * @description Static method used to print info logs
   * @static
   *
   * @example
   * Logger.i("info message")
   *
   * @param {...Array<any>} args info messages
   * @returns {void}
   */
  static i(...args) {
    console.info(...args);
  }

  /**
   * @description Static method used to print verbose logs
   * @static
   *
   * @example
   * Logger.v("verbose message")
   *
   * @param {...Array<any>} args verbose messages
   * @returns {void}
   */
  static v(...args) {
    console.log(...args);
  }

  /**
   * @description Static method used to print warn logs
   * @static
   *
   * @example
   * Logger.w("verbose message")
   *
   * @param {...Array<any>} args warn messages
   * @returns {void}
   */
  static w(...args) {
    console.warn(...args);
  }

  /**
   * @description Static method used to print error logs
   * @static
   *
   * @example
   * Logger.e("verbose message")
   *
   * @param {...Array<any>} args error messages
   * @returns {void}
   */
  static e(...args) {
    console.error(...args);
  }
}

/**
 * @class Events
 * @classdesc Events class description
 * @since 0.1.0
 * @example
 *
 * const event = new Event()
 * event.on("type", () => {})
 *
 */
class Events {
  /** @type {Object<string, Array<EventsListener>>} */
  listeners = {};

  /**
   * @constructor
   */
  constructor() {}

  /**
   * @description events add listener
   * @public
   *
   * @param {string} type events type
   * @param {EventsListener} fn events listener
   * @returns {void}
   *
   * @example
   * event.on("click", () => {})
   */
  on(type, fn) {
    if (this.listeners[type]) {
      this.listeners.push(fn);
    } else {
      this.listeners = [fn];
    }
  }

  /**
   * @description events remove listener
   * @public
   *
   * @param {string} type events type
   * @param {EventsListener=} fn events listener options
   * @returns {void}
   *
   * @example
   *
   * event.off("click")
   */
  off(type, fn) {
    if (this.listeners[type]) {
      if (fn) {
        const index = this.listeners[type].findIndex((item) => item === fn);
        if (index > -1) {
          this.listeners[type] = this.listeners[type].splice(index, 1);
        }
      } else {
        this.listeners = [];
      }
    }
  }

  /**
   * @deprecated events add once listener
   * @param {string} type events type
   * @param {EventsListener} fn
   *
   * @example
   * const fn = () => { console.log("emit once") }
   * event.once('click', fn)
   */
  once(type, fn) {
    const cb = () => {
      // 执行一次 然后移除
      fn();
      this.off(cb);
    };
    this.on(type, cb);
  }

  /**
   * @description events emit listener
   * @param {string} type events type
   * @returns {void}
   * @deprecated 下一个大版本将会移除
   * @example
   *
   * event.emit('click')
   */
  emit(type) {
    if (this.listeners[type]) {
      this.listeners[type].forEach((fn) => {
        fn();
      });
    }
  }
}

// /**
//  * See {@link MyClass} and [MyClass's foo property]{@link MyClass#foo}.
//  * Also, check out {@link http://www.google.com|Google} and
//  * {@link https://github.com GitHub}.
//  */
// function myFunction() {}

export { Events };

export default Logger;
