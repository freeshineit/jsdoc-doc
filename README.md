# JSDoc 

## 开发中遇到的痛点

- 缺乏文档： 没有适当的注释和文档会导致代码缺乏清晰的描述和说明。这使得其他开发者在理解和使用代码时可能会遇到困难，特别是对于复杂的函数或类。

- 代码可读性下降： 缺少注释和文档会导致代码的可读性下降。代码不是自解释的，开发者需要花费更多时间来理解代码的功能和用途。

- 维护困难： 在缺乏文档的情况下，对代码进行维护和修改可能会更加困难。开发者可能需要阅读更多的代码，以弄清楚每个函数和类的用途和参数。

- 协作问题： 缺少注释和文档可能会导致团队协作问题。不同的开发者可能会对代码功能和用法有不同的理解，增加了交流和理解代码的难度。

- 代码重构困难： 在重构代码时，缺乏文档会增加风险，因为开发者无法确切地知道对代码的更改如何影响其他部分。

- 错误难以发现： 缺乏类型和参数的说明可能会导致开发者传递错误的参数或使用错误的函数，这些错误可能在编译时无法捕获，只有在运行时才会导致问题。

- 代码补全不准确： 缺乏注释和类型信息可能会导致代码编辑器无法提供准确的代码补全和提示，降低了开发效率。

## 痛点事例

- js

- react

## JSDoc好处

- 自动化文档生成： `JSDoc` 允许你在代码中添加注释，并根据这些注释自动生成文档。这使得文档的创建过程更高效，减少手动维护文档的工作量。

- 代码可读性： `JSDoc` 注释提供了清晰的描述和说明，使得代码更易于理解和阅读。开发者可以通过注释直接了解函数、类和变量的用途、参数、返回值等信息。

- 团队合作： `JSDoc` 注释标准化了代码文档的格式，帮助团队成员更好地协同合作。代码文档的一致性使得团队成员之间更容易交流和理解彼此的代码。

- API 文档： 对于公共 API，`JSDoc` 可以为其他开发者提供详细的接口文档。这样，其他开发者在使用你的代码时，可以更好地了解如何正确使用它们。

- 代码补全和提示： 常见的代码编辑器和 IDE 支持 J`SDoc`，可以根据注释提供更好的代码补全和提示功能，提高开发效率。

- 类型检查： 通过在 `JSDoc` 注释中指定参数和返回值的类型，一些工具可以用于静态类型检查，发现潜在的类型错误和 bug。

- 文档发布： 使用 `JSDoc` 生成的文档可以轻松地发布到网页上，供用户或其他开发者查阅。

`JSDoc` 提供了一种有用的工具，可以改善代码质量，促进团队合作，提供清晰的文档，以及增强代码的可维护性。在项目中使用 `JSDoc` 注释可以是一个明智的选择，尤其是在大型项目或开发团队中。

## 使用后的事例


![docs](https://github.com/freeshineit/jsdoc-doc/blob/main/images/1.png)


## 使用说明

### `@description`
`@description` 标记允许提供描述。描述可以包括 HTML 标记。如果启用了 `Markdown` 插件，它也可包括 `Markdown` 格式。

```js
/** @description 这是一个描述  `Markdown` */
```

### `@param` 
`@param` 标记提供函数参数的名称、类型和描述

```js
/**
 * @param {string} str str是字符串类型
 */ 
function fn (str) {}
```

### `@returns`

`@returns` 标记记录函数返回的值

```js
/**
 * @returns {number}
 */
function sum(a, b) {
  return a + b;
}
```

### `@type`
`@type` 标记允许您提供一个类型表达式，用于标识符号可能包含的值类型或函数返回的值类型。

```js
/** @type {HTMLElement} */
const ele = document.getElementById("root")
```

### `@typedef`

`@typedef` 标签在描述自定义类型，特别是如果你要反复引用它们的时候。

```js
/**
 * logger level
 * @typedef {'DEBUG' | 'VERBOSE' | 'INFO' | 'WARN' | 'ERROR'} LoggerLevel
 */

/**
 * @typedef {Object} Person person 对象
 * @property {string} name 姓名
 * @property {number} age 年龄
 */
```

### `@property`

`@property` 标签是一种方便地记录类、命名空间或其他对象的静态属性列表的方法。


```js
/**
 * @typedef {Object} Person person 对象
 * @property {string} name 姓名
 * @property {number} age 年龄
 */
/**
 * @namespace
 * @property {object}  defaults               - The default values for parties.
 * @property {number}  defaults.players       - The default number of players.
 * @property {string}  defaults.level         - The default level for the party.
 * @property {object}  defaults.treasure      - The default treasure.
 * @property {number}  defaults.treasure.gold - How much gold the party starts with.
 */
var config = {
  defaults: {
    players: 1,
    level:   'beginner',
    treasure: {
      gold: 0
    }
  }
};
```

### `@callback`

`@callback` 标签提供回调函数（可传递给其他函数）的描述，包括回调的参数和返回值。可以包涵任何一个能提供给 `@method`标签。

```js
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
function testCallback(cb) {}
```

### `@class`

`@class` 标记将函数标记为构造函数，这意味着要使用 `new` 关键字调用它以返回实例。

### `@classdesc`

`@classdesc` 标签用于为类提供一个描述，这样和构造函数的描述区分开来。

```js
/**
 * @class A
 * @classdesc A class
 */ 
class A {}

/**
 * @class B
 * @classdesc B class.
 */
function B () {

}
```

### `@constructs`

`@constructs` 标签标明这个函数用来作为类的构造实例。

```js
class A {
   /**
   * @constructor
   */
  constructor() {}
}
```

### `@member`

`@member` 标记标识没有特殊类型的任意成员，例如“类”、“函数”或“常量”。成员可以选择具有类型和名称。

```js
/** @class */
function Data() {
  /** @member {Object} */
  this.point = {};
}
```

### `@memberof`

`@memberof` 标签标明成员隶属于哪一个父级标识符。

```js
/** @namespace */
var Tools = {};

/** @memberof Tools */
var hammer = function() {};
Tools.hammer = hammer;
```

### `@since`

`@since` 标记表示在特定版本中添加了类、方法或其他符号。

```js

class A {
    /**
     * 表示a方法是版本3.0.0及后面的版本才有
     * @sine 3.0.0
     */ 
    a () {}
}
```

### `@static`

@static 标记表示符号包含在父项中，可以在不实例化父项的情况下访问。

### `@override`

`@override` 标签指明一个标识符覆盖其父类同名的标识符。

### `@example`

`@example` 标签后面的文本将显示为突出显示的代码块。

```js
/**
 * @example
 * Logger.v("message")
 */
function v(mse) {}
```

### `@public`

`@public` 标签标记标识符为公开的。

### `@protected`

`@protected` 标记将符号标记为受保护。通常，此标记表示符号仅在当前模块中可用或应仅使用。

### `@private`

`@private` 标记将符号标记为 private, 标记不被子成员继承。默认文档输出中不会显示私有成员。除非使用 `-p/--private` 命令行选项运行

### `@readonly`

`@readonly` 标记一个标识符为只读。

### `@throws`

`@throws` 标记记录函数可能引发的错误。可以在一个 JSDoc 注释中多次包含 `@throws` 标记。

### `@ignore`

`@ignore` 标签表示在代码中的注释不应该出现在文档中，注释会被直接忽略。这个标签优先于所有其他标签.

### `@interface`

@interface 标签使一个标识符作为其他标识符的一个实现接口

```js
/**
 * Interface for classes that represent a color.
 *
 * @interface
 */
function Color() {}
```

### `@implements`

`@implements` 标签表示一个标识实现一个接口。

```js
/**
 * Class representing a color with transparency information.
 * @class
 * @implements {Color}
 */
function TransparentColor() {}
```

### `@enum`

`@enum` 标记记录了一组静态属性，这些属性的值都属于同一类型。

```js
/**
 * Enum for tri-state values.
 * @readonly
 * @enum {number}
 */
var triState = {
  /** The true value */
  TRUE: 1,
  FALSE: -1,
  /** @type {boolean} */
  MAYBE: true
};
```

### `@deprecated`

`@deprecated`标签指明一个标识在代码中已经被弃用

```js
/**
 * @deprecated 下一个大版本将会移除
 */ 
function a () {}
```

### `@async`

`@async` 标记表示函数是异步的，这意味着它是使用语法 `async function foo () {}` 声明的。


### `@function`

`@function` 标签标记为一个函数

### `@constant`

`@constant` 标记用于将文档标记为属于常量的符号。

### `@version`

`@version` 标签后面的文本将被用于表示该项的版本。

### `@global`

`@global` 标记指定一个符号应作为全局符号出现在文档中。

### `@tutorial`

`@tutorial` 标签插入一个指向向导教程的链接，作为文档的一部分。

### `@summary`
`@summary` 标签是完整描述的一个简写版本。它可以被添加到任何的 doclet。

### `@file`

`@file` 标签提供文件的说明。在文件开头的注释部分使用该标签。

### `@author`

`@author` 标签标识一个项目的作者

### `@copyright`

`@copyright` 标签是用来描述一个文件的版权信息。一般和 @file 标签结合使用。

### `@license`

`@license` 标记标识应用于代码任何部分的软件许可证。

## 内联标签

### `{@link}`

```js
/**
 * See {@link MyClass} and [MyClass's foo property]{@link MyClass#foo}.
 * Also, check out {@link http://www.google.com|Google} and
 * {@link https://github.com GitHub}.
 */
function myFunction() {}
```

## 接入

- 安装依赖

```bash
yarn install jsdoc -D

npx jsdoc -c jsdoc.json
```

- 配置文件 `jsdoc.json`

使用JSON格式的配置文件格式化JSDoc，使用-c选项，例如： `jsdoc -c ./json.json`
```js
// 注意这是json 格式的code, 在这里使用js模版是为了写注释
{
    "tags": {
        // JSDoc允许您使用无法识别的标签
        "allowUnknownTags": true,
        // 两个标准JSDoc标签和closure标签被启用
        "dictionaries": ["jsdoc","closure"]
    },
    "source": {
        // 包括的路径
        "include": ["src"],
        // 不包括路径
        "exclude": [],
        // 只有以.js和.jsdoc结尾的文件将会被处理
        "includePattern": ".+\\.js(doc)?$",
        // 任何文件以下划线开始或开始下划线的目录都将被忽略
        "excludePattern": "(^|\\/|\\\\)_"
    },
    // 插件加载
    "plugins": ["plugins/markdown"],
    "templates": {
        // @link标签呈现在纯文本
        "cleverLinks": false,
        "monospaceLinks": false,
        "default": {

        }
    }
}
```


## jsdoc 命令行参数

<table><thead><tr><th>选项</th><th>描述</th></tr></thead><tbody><tr><td><code>-a &lt;value&gt;</code>, <code>--access &lt;value&gt;</code></td><td>只显示特定 access 方法属性的标识符： <code>private</code>, <code>protected</code>, <code>public</code>, or <code>undefined</code>, 或者 <code>all</code>（表示所有的访问级别）。默认情况下，显示除 <code>private</code> 标识符以外的所有标识符。</td></tr><tr><td><code>-c &lt;value&gt;</code>, <code>--configure &lt;value&gt;</code></td><td>JSDoc 配置文件的路径。默认为安装 JSDoc 目录下的 <code>conf.json</code> 或 <code>conf.json.EXAMPLE</code>。</td></tr><tr><td><code>-d &lt;value&gt;</code>, <code>--destination &lt;value&gt;</code></td><td>输出生成文档的文件夹路径。JSDoc 内置的 Haruki 模板，使用 console 将数据转储到控制台。默认为 <code>./out</code>。</td></tr><tr><td><code>--debug</code></td><td>打印日志信息，可以帮助调试 JSDoc 本身的问题。</td></tr><tr><td><code>-e &lt;value&gt;</code>, <code>--encoding &lt;value&gt;</code></td><td>当 JSDoc 阅读源代码时假定使用这个编码，默认为 <code>utf8</code>。</td></tr><tr><td><code>-h</code>, <code>--help</code></td><td>显示 JSDoc 的命令行选项的信息，然后退出。</td></tr><tr><td><code>--match &lt;value&gt;</code></td><td>只运行测试，其名称中包含 value。</td></tr><tr><td><code>--nocolor</code></td><td>当运行测试时，在控制台输出信息不要使用的颜色。在 Windows 中，这个选项是默认启用的。</td></tr><tr><td><code>-p</code>, <code>--private</code></td><td>将标记有<a href="/tags-private">@private 标签</a>的标识符也生成到文档中。默认情况下，不包括私有标识符。</td></tr><tr><td><code>-P</code>, <code>--package</code></td><td>包含项目名称，版本，和其他细节的 <code>package.json</code> 文件。默认为在源路径中找到的第一个 <code>package.json</code> 文件。</td></tr><tr><td><code>--pedantic</code></td><td>将错误视为致命错误，将警告视为错误。默认为 <code>false</code>。</td></tr><tr><td><code>-q &lt;value&gt;</code>, <code>--query &lt;value&gt;</code></td><td>一个查询字符串用来解析和存储到全局变量 <code>env.opts.query</code> 中。示例：foo=bar&amp;baz=true。</td></tr><tr><td><code>-r</code>, <code>--recurse</code></td><td>扫描源文件和导览时递归到子目录。</td></tr><tr><td><code>-R</code>, <code>--readme</code></td><td>用来包含到生成文档的 <code>README.md</code> 文件。默认为在源路径中找到的第一 <code>README.md</code> 文件。</td></tr><tr><td><code>-t &lt;value&gt;</code>, <code>--template &lt;value&gt;</code></td><td>用于生成输出文档的模板的路径。默认为 <code>templates/default</code>，JSDoc 内置的默认模板。</td></tr><tr><td><code>-T</code>, <code>--test</code></td><td>运行 JSDoc 的测试套件，并把结果打印到控制台。</td></tr><tr><td><code>-u &lt;value&gt;</code>, <code>--tutorials &lt;value&gt;</code></td><td>导览路径，JSDoc 要搜索的目录。如果省略，将不生成导览页。查看<a href="/about-tutorials">导览说明</a>，以了解更多信息。</td></tr><tr><td><code>-v</code>, <code>--version</code></td><td>显示 JSDoc 的版本号，然后退出。</td></tr><tr><td><code>--verbose</code></td><td>日志的详细信息到控制台 JSDoc 运行。默认为 <code>false</code>。</td></tr><tr><td><code>-X</code>, <code>--explain</code></td><td>以 JSON 格式转储所有的 doclet 到控制台，然后退出。</td></tr></tbody></table>


## 模版

- [docdash](https://github.com/clenemt/docdash)

## 缺点

- 维护负担： 编写和维护`JSDoc`注释需要额外的工作和时间，尤其是在大型代码库中。开发人员需要随着代码的变化及时更新注释，这在快速发展的项目中可能很难维护。

- 代码重复： 有时，`JSDoc`注释中的信息可能已经在代码本身中表现出来。在这种情况下，添加冗余的注释可能会导致代码重复，可能是不必要的。

- 不一致或过时的注释： 在较大的团队中，确保`JSDoc`注释的一致性可能是困难的。开发人员可能会忘记更新或添加注释，导致不一致或过时的信息。

- 学习曲线： 对于不熟悉`JSDoc`语法和约定的开发人员，`JSDoc`有一定的学习曲线。采用`JSDoc`可能需要一些时间和努力，使新的团队成员或贡献者能够理解和遵循注释样式。

- 潜在错误： 如果`JSDoc`注释包含错误信息或与代码更改不同步，可能导致误导性的文档，无法反映代码的实际行为。

- 有限的类型检查： 尽管`JSDoc`注释可以为JavaScript函数和变量提供类型信息，但它们不像静态类型语言（如TypeScript）那样提供相同程度的类型安全和静态分析。

- 过度使用或不相关的注释： 有时开发人员可能会觉得有必要对每个函数或变量添加`JSDoc`注释，即使代码本身已经很清晰。这可能会导致混乱，使注释变得不那么有价值。

尽管有这些潜在的缺点，`JSDoc`仍然是一种有价值的工具，用于记录JavaScript代码，特别是当谨慎使用并结合良好的实践时。适当维护和相关的`JSDoc`注释可以显著增强代码理解、协作和可维护性。


如果有条件和能力的话，推荐使用typescript