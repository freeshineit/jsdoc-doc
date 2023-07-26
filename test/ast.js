const { AstBuilder } = require("jsdoc/lib/jsdoc/src/astbuilder");

const builder = new AstBuilder();

const node = builder.build(
  `
/**
 * @description 抽象语法树函数
 *
 * @param {string} js string
 * @param {boolean}
 * @return {Object} json 树
 */
function ast() {}
`,
  {
    tokens: true
  }
);

console.log(node.program.body[0]);
