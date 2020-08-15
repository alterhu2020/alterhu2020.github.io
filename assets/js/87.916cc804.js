(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{341:function(n,e,t){"use strict";t.r(e);var s=t(9),r=Object(s.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("ClientOnly",[t("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),n._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#axios集成封装"}},[n._v("axios集成封装")])]),t("li",[t("a",{attrs:{href:"#express环境搭建"}},[n._v("express环境搭建")]),t("ul",[t("li",[t("a",{attrs:{href:"#index-js-入口express总配置代码如下："}},[n._v("index.js入口express总配置代码如下：")])])])]),t("li",[t("a",{attrs:{href:"#node-mysql库配置"}},[n._v("node-mysql库配置")])]),t("li",[t("a",{attrs:{href:"#snowflake雪花算法nodejs实现"}},[n._v("snowflake雪花算法nodejs实现")])])])]),t("p"),n._v(" "),t("h2",{attrs:{id:"axios集成封装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#axios集成封装"}},[n._v("#")]),n._v(" axios集成封装")]),n._v(" "),t("ol",[t("li",[n._v("在"),t("code",[n._v("nuxt.config.js")]),n._v("中配置"),t("code",[n._v("axios")]),n._v(":")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v(" modules: [\n    ['@nuxtjs/axios', {\n      progress: true,\n      retry: false,\n      credentials: true\n    }],\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[n._v("二次封装的可在外部文件中使用"),t("code",[n._v("$axios")]),n._v("的方法,文件为: "),t("code",[n._v("@/api/index.js")]),n._v(":")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 外部js文件访问$axios实例的方案\nlet client\n\nexport function setClient (newclient) {\n  client = newclient\n}\n// Request helpers\nconst request = {}\nconst reqMethods = ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']\nreqMethods.forEach((method) => {\n  request['$' + method] = function () {\n    if (!client) { throw new Error('apiClient not installed') }\n    return client[method].apply(null, arguments).then(res => res && res.data)\n  }\n})\n\nexport default request\n\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[n._v("对应的axios插件中注上上面封装的axios对象，文件名为："),t("code",[n._v("@/plugins/axios.js")]),n._v(" ：")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// import { MessageBox, Message } from 'element-ui'\nimport cfg from '@/config'\nimport encrypt from '@/util/EncryptUtil'\nimport { setClient } from '@/api'\n\nconst enableSecret = cfg.secretEnabled\nconst tokenHeader = cfg.tokenHeader\nconst tokenRefreshHeader = cfg.tokenRefreshHeader\nconst updateTokenAction = 'sys/user/updateToken'\nconst logoutAction = 'sys/user/logout'\nexport default ({ $axios, error, store, router }) => {\n  $axios.defaults.timeout = 30000\n  // 拦截请求\n  $axios.onRequest((config) => {\n    //  配置对应的请求token\n    const tokenInfo = store.getters.token\n    if (tokenInfo) {\n      config.headers[tokenHeader] = tokenInfo\n    }\n    // 是否进行加密数据请求包,只针对json put/post/delete格式的body数据进行加密,其他格式不进行加密\n    const data = config.data\n    if (enableSecret && data && data instanceof Object & config.headers.common.Accept.startsWith('application/json')) {\n      // 如果对应的有data数据并且需要加解密\n      config.headers['Content-Type'] = 'application/json;charset=UTF-8'\n      const jsonStr = JSON.stringify(data)\n      const encryptJsonData = encrypt.encode(jsonStr)\n      config.data = encryptJsonData\n    }\n  })\n  $axios.onResponse((response) => {\n    const refreshToken = response.headers[tokenRefreshHeader]\n    const data = response.data\n    // 更新token\n    if (refreshToken) {\n      store.dispatch(updateTokenAction, refreshToken)\n    }\n    if (data) {\n      const code = data.code\n      // 进行json数据的解密\n      if (enableSecret && (typeof data === 'string')) {\n        const decodeJsonStr = encrypt.decode(data)\n        response.data = JSON.parse(decodeJsonStr)\n      }\n      // 跳转页面\n      if (code === 401) {\n        store.dispatch(logoutAction).then(() => router.push({ name: cfg.page.loginComponentName }))\n      }\n    }\n  })\n  $axios.onError((error) => {\n    console.log('err' + error)\n  })\n  // 暴露$axios对象,方便在外部文件访问对应的$axios实例\n  setClient($axios)\n  window.axios = $axios\n}\n\n")])])]),t("h2",{attrs:{id:"express环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#express环境搭建"}},[n._v("#")]),n._v(" express环境搭建")]),n._v(" "),t("p",[n._v("express与nuxt集成，添加如下类库：")]),n._v(" "),t("ol",[t("li",[t("code",[n._v("consola")]),n._v("， 控制台颜色显示")]),n._v(" "),t("li",[t("code",[n._v("morgan")]),n._v("，日志记录，日志格式，配置输出到文件日志")]),n._v(" "),t("li",[t("code",[n._v("cors")]),n._v("， 跨域访问设置")]),n._v(" "),t("li",[t("code",[n._v("body-parser")]),n._v("， 直接解析返回的数据结果通过"),t("code",[n._v("res.body")])])]),n._v(" "),t("h3",{attrs:{id:"index-js入口express总配置代码如下："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#index-js入口express总配置代码如下："}},[n._v("#")]),n._v(" "),t("code",[n._v("index.js")]),n._v("入口express总配置代码如下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("const path = require('path')\nconst fs = require('fs')\nconst express = require('express')\nconst consola = require('consola')\nconst { Nuxt, Builder } = require('nuxt')\n// start express app\nconst isDev = process.env.NODE_ENV !== 'production'\nconst rootPwd = process.cwd()\nconst app = express()\n// ------cors: registering cors\nconst cors = require('cors')\napp.use(cors())\n// ------body-parser: configure body parser,grabbing the HTTP body, decoding the information, and appending it to the req.body\nconst bodyParser = require('body-parser')\napp.use(bodyParser.urlencoded({ extended: false }))\napp.use(bodyParser.json())\n// ------morgan: configure morgan\nconst FileStreamRotator = require('file-stream-rotator')\nconst morgan = require('morgan')\nconst devModify = '[:date[clf]] \":method :url HTTP/:http-version\" :status - :res[content-length] - :response-time ms \":referrer\" \":user-agent\"'\nconst combinedModify = ':remote-addr - :remote-user [:date[clf]] \":method :url HTTP/:http-version\" :status :response-time ms \":referrer\" \":user-agent\"'\nconst morganFormat = isDev ? devModify : combinedModify\n// ensure log directory exists\nconst logDirectory = path.join(rootPwd, 'logs')\nfs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)\n// 1. create stream\n// const accessLogStream = fs.createWriteStream(logPath, { flags: 'a' })\n// 2. create a rotating write stream\nconst accessLogStream = FileStreamRotator.getStream({\n  date_format: 'YYYYMMDD',\n  filename: path.join(logDirectory, 'access-%DATE%.log'),\n  frequency: 'daily',\n  verbose: false\n})\napp.use(morgan(morganFormat, { stream: accessLogStream })) // configire morgan\n\n// Router: Import API Routes\nconst config = require('./api/config')\nconst api = require('./api/controller')\napp.use(config.prefix, api)\nasync function start () {\n  // Init Nuxt.js\n  const nuxtConfig = require('../../nuxt.config.js')\n  // Import and Set Nuxt.js options\n  nuxtConfig.dev = isDev\n  const nuxt = new Nuxt(nuxtConfig)\n  const { host, port } = nuxt.options.server\n\n  await nuxt.ready()\n  // Build only in dev mode\n  if (nuxtConfig.dev) {\n    const builder = new Builder(nuxt)\n    await builder.build()\n  }\n\n  // Give nuxt middleware to express\n  app.use(nuxt.render)\n\n  // Listen the server\n  app.listen(port, host)\n  consola.ready({\n    message: `Server listening on http://${host}:${port}`,\n    badge: true\n  })\n}\nstart()\n\n\n")])])]),t("h2",{attrs:{id:"node-mysql库配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-mysql库配置"}},[n._v("#")]),n._v(" node-mysql库配置")]),n._v(" "),t("p",[n._v("推荐类库: https://github.com/mysqljs/mysql#install")]),n._v(" "),t("p",[n._v("类库代码:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("const mysql = require('mysql')\nconst config = require('../config')\n// 雪花算法计算id\nconst Snowflake = require('./snowflake')\nconst idWorker = new Snowflake(config.snowflake.worker_id, config.snowflake.datacenter_id)\n// 建立连接池，并设置连接池\nconst pool = mysql.createPool(config.db)\npool.on('acquire', function (connection) {\n  console.log('Connection %d acquired', connection.threadId)\n})\npool.on('enqueue', function () {\n  console.log('Waiting for available connection slot')\n})\npool.on('release', function (connection) {\n  console.log('Connection %d released', connection.threadId)\n})\n\n/**\n * select,update,delete,insert操作\n * @param query\n * @param bindParameters\n * @return 返回结果\n *     得到返回id: results.insertId\n *     得到insert, update or delete的数据条数: results.affectedRows\n *     得到update更改的条数，如果数据没有更改则不会计数： results.changedRows\n *     得到count(1)对应的数据条数: results[0].count\n */\nconst exec = function (query, ...bindParameters) {\n  return new Promise((resolve, reject) => {\n    pool.getConnection((err, connection) => {\n      if (err) {\n        console.log('CONNECT Thread ', connection.threadId, ', ERROR:', err.message)\n        resolve(err)\n      } else {\n        connection.query(query, bindParameters, (error, results, fields) => {\n          // When done with the connection, release it.\n          // if (error) { throw error }\n          // Handle error after the release.\n          connection.release()\n          resolve(error, results, fields)\n        })\n      }\n    })\n  })\n}\nconst nextId = function () {\n  return idWorker.nextId()\n}\n\nmodule.exports = { exec, nextId }\n\n")])])]),t("h2",{attrs:{id:"snowflake雪花算法nodejs实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#snowflake雪花算法nodejs实现"}},[n._v("#")]),n._v(" snowflake雪花算法nodejs实现")]),n._v(" "),t("p",[n._v("代码如下:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("/**\n * 网上搜到的方案基本是按照推特的方案（10位的数据机器位分成 5位机器ID + 5位数据ID ），目前代码按照这个方案来做的；\n * 代码是参考网上的一个 Java 版本的实现方案：https://www.cnblogs.com/relucent/p/4955340.html 编写的，\n * 这个Java方案的实现是参考：https://github.com/twitter-archive/snowflake\n *\n * 名词说明：\n * Twitter_Snowflake\n * SnowFlake的结构如下(每部分用-分开):\n *\n * 0 - 0000000000 0000000000 0000000000 0000000000 0 - 00000 - 00000 - 000000000000\n * A-|--------------------B--------------------------|-------C-------|------D------|\n *\n * A区：1位标识，由于long基本类型在Java中是带符号的，最高位是符号位，正数是0，负数是1，所以id一般是正数，最高位是0\n * B区：41位时间截(毫秒级)，注意，41位时间截不是存储当前时间的时间截，而是存储时间截的差值（当前时间截 - 开始时间截)得到的值，\n *      这里的的开始时间截，一般是我们的id生成器开始使用的时间，由我们程序来指定的（如下下面程序IdWorker类的startTime属性）。41位的时间截，可以使用69年，\n *      年T = (1n << 41n) / (1000n * 60n * 60n * 24n * 365n) = 69n\n * C区：10位的数据机器位，可以部署在1024个节点，包括5位datacenterId和5位workerId（2^5 * 2^5 = 1024）\n * D区：12位序列，毫秒内的计数，12位 的计数顺序号支持每个节点每毫秒(同一机器，同一时间截)产生4096个ID序号（2^12=4096）\n * 加起来刚好64位，为一个Long型。\n *\n * SnowFlake的优点是，整体上按照时间自增排序，并且整个分布式系统内不会产生ID碰撞(由数据ID和机器ID作区分)，并且效率较高。\n * 理论1S内生成的ID数量是 1000*4096 = 4096000（四百零九万六千个）\n * 代码中使用Bigint实现，该类型在Node10.X版本才开始支持，返回出去的结果是Bigint转为String后的字符串类型，toString方法消耗总性能的三分之一时间；\n * 性能测试结果：\n *      生成100W条ID，      约850-1000ms；  如果不toString后再转，  时间约 640-660ms\n *      生成409.6WW条ID，   约3600-3850ms； 如果不toString后再转，  时间约约 2600-2800ms\n */\n\n//= =============================Constructors=====================================\n/**\n * 构造函数\n * @param workerId 工作ID (0~31)\n * @param datacenterId 数据标识ID (0~31)\n */\n\nconst Snowflake = (function () {\n  function Snowflake (_workerId, _dataCenterId) {\n    /** 开始时间截 ：2019-12-20 13:52:35 */\n    this.twepoch = 1576821155667n\n\n    /** 机器id所占的位数 */\n    this.workerIdBits = 5n\n\n    /** 数据标识id所占的位数 */\n    this.dataCenterIdBits = 5n\n\n    /**\n     * 支持的最大机器id，结果是31 (这个移位算法可以很快的计算出几位二进制数所能表示的最大十进制数)\n     * 用位运算计算n个bit能表示的最大数值，计算是 -1 左移 5，得结果a，然后 -1 异或 a\n     *\n     * 步骤\n     * 先 -1 左移 5，得结果a ：\n     11111111 11111111 11111111 11111111 //-1的二进制表示（补码，补码的意义是拿补码和原码相加，最终加出一个“溢出的0”）\n     11111 11111111 11111111 11111111 11100000 //高位溢出的不要，低位补0\n     11111111 11111111 11111111 11100000 //结果a\n     * 再 -1 异或 a ：\n     11111111 11111111 11111111 11111111 //-1的二进制表示（补码）\n     ^   11111111 11111111 11111111 11100000 //两个操作数的位中，相同则为0，不同则为1\n     ---------------------------------------------------------------------------\n     00000000 00000000 00000000 00011111 //最终结果31\n     * */\n    this.maxWrokerId = -1n ^ (-1n << this.workerIdBits) // 值为：31\n\n    /** 支持的最大数据标识id，结果是31 */\n    this.maxDataCenterId = -1n ^ (-1n << this.dataCenterIdBits) // 值为：31\n\n    /** 序列在id中占的位数 */\n    this.sequenceBits = 12n\n\n    /** 机器ID向左移12位 */\n    this.workerIdShift = this.sequenceBits // 值为：12\n\n    /** 数据标识id向左移17位(12序列id+5机器ID) */\n    this.dataCenterIdShift = this.sequenceBits + this.workerIdBits // 值为：17\n\n    /** 时间截向左移22位( 12序列id + 5机器ID + 5数据ID) */\n    this.timestampLeftShift = this.sequenceBits + this.workerIdBits + this.dataCenterIdBits // 值为：22\n\n    /** 生成序列的掩码，这里为4095\n     * 用位运算计算n个bit能表示的最大数值，计算是 -1 左移 12，得结果a，然后 -1 异或 a\n     *\n     * 步骤\n     * 先 -1 左移 12，得结果a ：\n     11111111 11111111 11111111 11111111 //-1的二进制表示（补码，补码的意义是拿补码和原码相加，最终加出一个“溢出的0”）\n     1111 11111111 11111111 11111111 11110000 00000000 //高位溢出的不要，低位补0\n     11111111 11111111 11110000 00000000 //结果a\n     * 再 -1 异或 a ：\n     11111111 11111111 11111111 11111111 //-1的二进制表示（补码）\n     ^   11111111 11111111 11110000 00000000 //两个操作数的位中，相同则为0，不同则为1\n     ---------------------------------------------------------------------------\n     00000000 00000000 00001111 11111111 //最终结果2^12  = 4096\n     */\n    this.sequenceMask = -1n ^ (-1n << this.sequenceBits) // 值为：4095\n\n    /** 工作机器ID(0~31) */\n    // this.workerId = 0n\n    /** 数据中心ID(0~31) */\n    // this.dataCenterId = 0n\n\n    /** 上次生成ID的时间截 */\n    this.lastTimestamp = -1n\n\n    this.workerId = BigInt(_workerId || 0n) // 工作机器ID(0~31)\n    this.dataCenterId = BigInt(_dataCenterId || 0n) // 数据标识ID(0~31)\n    this.sequence = 0n // 毫秒内序列(0~4095)\n\n    // workerId 校验\n    if (this.workerId > this.maxWrokerId || this.workerId < 0) {\n      throw new Error(`workerId must max than 0 and small than maxWrokerId ${this.maxWrokerId}`)\n    }\n    // dataCenterId 校验\n    if (this.dataCenterId > this.maxDataCenterId || this.dataCenterId < 0) {\n      throw new Error(`dataCenterId must max than 0 and small than maxDataCenterId ${this.maxDataCenterId}`)\n    }\n  }\n  // ==============================Methods==========================================\n  /**\n   * 获得下一个ID (该方法是线程安全的)\n   * @return SnowflakeId\n   */\n  Snowflake.prototype.nextId = function () {\n    let timestamp = this.timeGen()\n\n    // 如果当前时间小于上一次ID生成的时间戳，说明系统时钟回退过这个时候应当抛出异常\n    if (timestamp < this.lastTimestamp) {\n      throw new Error('Clock moved backwards. Refusing to generate id for ' +\n        (this.lastTimestamp - timestamp))\n    }\n\n    // 如果是同一时间生成的，则进行毫秒内序列\n    if (this.lastTimestamp === timestamp) {\n      /**\n       * 按位于操作 对于每一个比特位，只有两个操作数相应的比特位都是1时，结果才为1，否则为0。\n       * 假设最开始 this.sequence 为 0n 加1后，则为1\n       * 结果如下\n       00000000 00000000 00000000 00000001 //1的二进制\n       00000000 00000000 00001111 11111111 //最终结果2^12  = 4096\n       ---------------------------------------------------------------------------\n       00000000 00000000 00000000 00000001 //结果1的二进制\n       */\n      this.sequence = (this.sequence + 1n) & this.sequenceMask\n      // 毫秒内序列溢出\n      if (this.sequence === 0n) {\n        // 阻塞到下一个毫秒,获得新的时间戳\n        timestamp = this.tilNextMillis(this.lastTimestamp)\n      }\n    } else {\n      // 时间戳改变，毫秒内序列重置\n      this.sequence = 0n\n    }\n\n    // 上次生成ID的时间截\n    this.lastTimestamp = timestamp\n\n    // 移位并通过或运算拼到一起组成64位的ID\n    const result = ((timestamp - this.twepoch) << this.timestampLeftShift) |\n      (this.dataCenterId << this.dataCenterIdShift) |\n      (this.workerId << this.workerIdShift) |\n      this.sequence\n    return result\n  }\n\n  /**\n   * 阻塞到下一个毫秒，直到获得新的时间戳\n   * @param lastTimestamp 上次生成ID的时间截\n   * @return 当前时间戳\n   */\n  Snowflake.prototype.tilNextMillis = function (lastTimestamp) {\n    let timestamp = this.timeGen()\n    while (timestamp <= lastTimestamp) {\n      timestamp = this.timeGen()\n    }\n    return timestamp\n  }\n\n  /**\n   * 返回以毫秒为单位的当前时间\n   * @return 当前时间(毫秒)\n   */\n  Snowflake.prototype.timeGen = function () {\n    return BigInt(Date.now())\n  }\n\n  return Snowflake\n}())\n// console.log(new Snowflake(1n, 1n).nextId());\nmodule.exports = Snowflake\n\n")])])]),t("ClientOnly",[t("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);