/**
 * @type {string}
 */
export const MYSQL_HOST = "0.0.0.0";
/** @type {number} */
export const MYSQL_PORT = 3306;

/**
 * @namespace
 * @property {object}  defaults               - The default values for parties.
 * @property {number}  defaults.players       - The default number of players.
 * @property {string}  defaults.level         - The default level for the party.
 * @property {object}  defaults.treasure      - The default treasure.
 * @property {number}  defaults.treasure.gold - How much gold the party starts with.
 */
const config = {
  defaults: {
    players: 1,
    level: "beginner",
    treasure: {
      gold: 0
    }
  }
};

/**
 * 定义一个回调函数的描述
 * @callback RequestCallback
 * @param {number} responseCode 响应code
 * @param {string} responseMessage 响应message
 *
 * @returns {string}
 */

/**
 * @param {RequestCallback} cb
 */
function testCB(cb) {}
