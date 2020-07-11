---
title: Vue nuxtjs插件类库配置集成
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## axios集成封装

1. 在`nuxt.config.js`中配置`axios`:

```
 modules: [
    ['@nuxtjs/axios', {
      progress: true,
      retry: false,
      credentials: true
    }],
```

2. 二次封装的可在外部文件中使用`$axios`的方法,文件为: `@/api/index.js`:

```
// 外部js文件访问$axios实例的方案
let client

export function setClient (newclient) {
  client = newclient
}
// Request helpers
const request = {}
const reqMethods = ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']
reqMethods.forEach((method) => {
  request['$' + method] = function () {
    if (!client) { throw new Error('apiClient not installed') }
    return client[method].apply(null, arguments).then(res => res && res.data)
  }
})

export default request

```

3. 对应的axios插件中注上上面封装的axios对象，文件名为：`@/plugins/axios.js` ：

```
// import { MessageBox, Message } from 'element-ui'
import cfg from '@/config'
import encrypt from '@/util/EncryptUtil'
import { setClient } from '@/api'

const enableSecret = cfg.secretEnabled
const tokenHeader = cfg.tokenHeader
const tokenRefreshHeader = cfg.tokenRefreshHeader
const updateTokenAction = 'sys/user/updateToken'
const logoutAction = 'sys/user/logout'
export default ({ $axios, error, store, router }) => {
  $axios.defaults.timeout = 30000
  // 拦截请求
  $axios.onRequest((config) => {
    //  配置对应的请求token
    const tokenInfo = store.getters.token
    if (tokenInfo) {
      config.headers[tokenHeader] = tokenInfo
    }
    // 是否进行加密数据请求包,只针对json put/post/delete格式的body数据进行加密,其他格式不进行加密
    const data = config.data
    if (enableSecret && data && data instanceof Object & config.headers.common.Accept.startsWith('application/json')) {
      // 如果对应的有data数据并且需要加解密
      config.headers['Content-Type'] = 'application/json;charset=UTF-8'
      const jsonStr = JSON.stringify(data)
      const encryptJsonData = encrypt.encode(jsonStr)
      config.data = encryptJsonData
    }
  })
  $axios.onResponse((response) => {
    const refreshToken = response.headers[tokenRefreshHeader]
    const data = response.data
    // 更新token
    if (refreshToken) {
      store.dispatch(updateTokenAction, refreshToken)
    }
    if (data) {
      const code = data.code
      // 进行json数据的解密
      if (enableSecret && (typeof data === 'string')) {
        const decodeJsonStr = encrypt.decode(data)
        response.data = JSON.parse(decodeJsonStr)
      }
      // 跳转页面
      if (code === 401) {
        store.dispatch(logoutAction).then(() => router.push({ name: cfg.page.loginComponentName }))
      }
    }
  })
  $axios.onError((error) => {
    console.log('err' + error)
  })
  // 暴露$axios对象,方便在外部文件访问对应的$axios实例
  setClient($axios)
  window.axios = $axios
}

```


## express环境搭建

express与nuxt集成，添加如下类库：
1. `consola`， 控制台颜色显示
2. `morgan`，日志记录，日志格式，配置输出到文件日志
3. `cors`， 跨域访问设置
4. `body-parser`， 直接解析返回的数据结果通过`res.body`

### `index.js`入口express总配置代码如下：
```
const path = require('path')
const fs = require('fs')
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
// start express app
const isDev = process.env.NODE_ENV !== 'production'
const rootPwd = process.cwd()
const app = express()
// ------cors: registering cors
const cors = require('cors')
app.use(cors())
// ------body-parser: configure body parser,grabbing the HTTP body, decoding the information, and appending it to the req.body
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// ------morgan: configure morgan
const FileStreamRotator = require('file-stream-rotator')
const morgan = require('morgan')
const devModify = '[:date[clf]] ":method :url HTTP/:http-version" :status - :res[content-length] - :response-time ms ":referrer" ":user-agent"'
const combinedModify = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :response-time ms ":referrer" ":user-agent"'
const morganFormat = isDev ? devModify : combinedModify
// ensure log directory exists
const logDirectory = path.join(rootPwd, 'logs')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
// 1. create stream
// const accessLogStream = fs.createWriteStream(logPath, { flags: 'a' })
// 2. create a rotating write stream
const accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename: path.join(logDirectory, 'access-%DATE%.log'),
  frequency: 'daily',
  verbose: false
})
app.use(morgan(morganFormat, { stream: accessLogStream })) // configire morgan

// Router: Import API Routes
const config = require('./api/config')
const api = require('./api/controller')
app.use(config.prefix, api)
async function start () {
  // Init Nuxt.js
  const nuxtConfig = require('../../nuxt.config.js')
  // Import and Set Nuxt.js options
  nuxtConfig.dev = isDev
  const nuxt = new Nuxt(nuxtConfig)
  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (nuxtConfig.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()


```

## node-mysql库配置

推荐类库: https://github.com/mysqljs/mysql#install

类库代码: 
```
const mysql = require('mysql')
const config = require('../config')
// 雪花算法计算id
const Snowflake = require('./snowflake')
const idWorker = new Snowflake(config.snowflake.worker_id, config.snowflake.datacenter_id)
// 建立连接池，并设置连接池
const pool = mysql.createPool(config.db)
pool.on('acquire', function (connection) {
  console.log('Connection %d acquired', connection.threadId)
})
pool.on('enqueue', function () {
  console.log('Waiting for available connection slot')
})
pool.on('release', function (connection) {
  console.log('Connection %d released', connection.threadId)
})

/**
 * select,update,delete,insert操作
 * @param query
 * @param bindParameters
 * @return 返回结果
 *     得到返回id: results.insertId
 *     得到insert, update or delete的数据条数: results.affectedRows
 *     得到update更改的条数，如果数据没有更改则不会计数： results.changedRows
 *     得到count(1)对应的数据条数: results[0].count
 */
const exec = function (query, ...bindParameters) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log('CONNECT Thread ', connection.threadId, ', ERROR:', err.message)
        resolve(err)
      } else {
        connection.query(query, bindParameters, (error, results, fields) => {
          // When done with the connection, release it.
          // if (error) { throw error }
          // Handle error after the release.
          connection.release()
          resolve(error, results, fields)
        })
      }
    })
  })
}
const nextId = function () {
  return idWorker.nextId()
}

module.exports = { exec, nextId }

```

## snowflake雪花算法nodejs实现

代码如下:
```
/**
 * 网上搜到的方案基本是按照推特的方案（10位的数据机器位分成 5位机器ID + 5位数据ID ），目前代码按照这个方案来做的；
 * 代码是参考网上的一个 Java 版本的实现方案：https://www.cnblogs.com/relucent/p/4955340.html 编写的，
 * 这个Java方案的实现是参考：https://github.com/twitter-archive/snowflake
 *
 * 名词说明：
 * Twitter_Snowflake
 * SnowFlake的结构如下(每部分用-分开):
 *
 * 0 - 0000000000 0000000000 0000000000 0000000000 0 - 00000 - 00000 - 000000000000
 * A-|--------------------B--------------------------|-------C-------|------D------|
 *
 * A区：1位标识，由于long基本类型在Java中是带符号的，最高位是符号位，正数是0，负数是1，所以id一般是正数，最高位是0
 * B区：41位时间截(毫秒级)，注意，41位时间截不是存储当前时间的时间截，而是存储时间截的差值（当前时间截 - 开始时间截)得到的值，
 *      这里的的开始时间截，一般是我们的id生成器开始使用的时间，由我们程序来指定的（如下下面程序IdWorker类的startTime属性）。41位的时间截，可以使用69年，
 *      年T = (1n << 41n) / (1000n * 60n * 60n * 24n * 365n) = 69n
 * C区：10位的数据机器位，可以部署在1024个节点，包括5位datacenterId和5位workerId（2^5 * 2^5 = 1024）
 * D区：12位序列，毫秒内的计数，12位 的计数顺序号支持每个节点每毫秒(同一机器，同一时间截)产生4096个ID序号（2^12=4096）
 * 加起来刚好64位，为一个Long型。
 *
 * SnowFlake的优点是，整体上按照时间自增排序，并且整个分布式系统内不会产生ID碰撞(由数据ID和机器ID作区分)，并且效率较高。
 * 理论1S内生成的ID数量是 1000*4096 = 4096000（四百零九万六千个）
 * 代码中使用Bigint实现，该类型在Node10.X版本才开始支持，返回出去的结果是Bigint转为String后的字符串类型，toString方法消耗总性能的三分之一时间；
 * 性能测试结果：
 *      生成100W条ID，      约850-1000ms；  如果不toString后再转，  时间约 640-660ms
 *      生成409.6WW条ID，   约3600-3850ms； 如果不toString后再转，  时间约约 2600-2800ms
 */

//= =============================Constructors=====================================
/**
 * 构造函数
 * @param workerId 工作ID (0~31)
 * @param datacenterId 数据标识ID (0~31)
 */

const Snowflake = (function () {
  function Snowflake (_workerId, _dataCenterId) {
    /** 开始时间截 ：2019-12-20 13:52:35 */
    this.twepoch = 1576821155667n

    /** 机器id所占的位数 */
    this.workerIdBits = 5n

    /** 数据标识id所占的位数 */
    this.dataCenterIdBits = 5n

    /**
     * 支持的最大机器id，结果是31 (这个移位算法可以很快的计算出几位二进制数所能表示的最大十进制数)
     * 用位运算计算n个bit能表示的最大数值，计算是 -1 左移 5，得结果a，然后 -1 异或 a
     *
     * 步骤
     * 先 -1 左移 5，得结果a ：
     11111111 11111111 11111111 11111111 //-1的二进制表示（补码，补码的意义是拿补码和原码相加，最终加出一个“溢出的0”）
     11111 11111111 11111111 11111111 11100000 //高位溢出的不要，低位补0
     11111111 11111111 11111111 11100000 //结果a
     * 再 -1 异或 a ：
     11111111 11111111 11111111 11111111 //-1的二进制表示（补码）
     ^   11111111 11111111 11111111 11100000 //两个操作数的位中，相同则为0，不同则为1
     ---------------------------------------------------------------------------
     00000000 00000000 00000000 00011111 //最终结果31
     * */
    this.maxWrokerId = -1n ^ (-1n << this.workerIdBits) // 值为：31

    /** 支持的最大数据标识id，结果是31 */
    this.maxDataCenterId = -1n ^ (-1n << this.dataCenterIdBits) // 值为：31

    /** 序列在id中占的位数 */
    this.sequenceBits = 12n

    /** 机器ID向左移12位 */
    this.workerIdShift = this.sequenceBits // 值为：12

    /** 数据标识id向左移17位(12序列id+5机器ID) */
    this.dataCenterIdShift = this.sequenceBits + this.workerIdBits // 值为：17

    /** 时间截向左移22位( 12序列id + 5机器ID + 5数据ID) */
    this.timestampLeftShift = this.sequenceBits + this.workerIdBits + this.dataCenterIdBits // 值为：22

    /** 生成序列的掩码，这里为4095
     * 用位运算计算n个bit能表示的最大数值，计算是 -1 左移 12，得结果a，然后 -1 异或 a
     *
     * 步骤
     * 先 -1 左移 12，得结果a ：
     11111111 11111111 11111111 11111111 //-1的二进制表示（补码，补码的意义是拿补码和原码相加，最终加出一个“溢出的0”）
     1111 11111111 11111111 11111111 11110000 00000000 //高位溢出的不要，低位补0
     11111111 11111111 11110000 00000000 //结果a
     * 再 -1 异或 a ：
     11111111 11111111 11111111 11111111 //-1的二进制表示（补码）
     ^   11111111 11111111 11110000 00000000 //两个操作数的位中，相同则为0，不同则为1
     ---------------------------------------------------------------------------
     00000000 00000000 00001111 11111111 //最终结果2^12  = 4096
     */
    this.sequenceMask = -1n ^ (-1n << this.sequenceBits) // 值为：4095

    /** 工作机器ID(0~31) */
    // this.workerId = 0n
    /** 数据中心ID(0~31) */
    // this.dataCenterId = 0n

    /** 上次生成ID的时间截 */
    this.lastTimestamp = -1n

    this.workerId = BigInt(_workerId || 0n) // 工作机器ID(0~31)
    this.dataCenterId = BigInt(_dataCenterId || 0n) // 数据标识ID(0~31)
    this.sequence = 0n // 毫秒内序列(0~4095)

    // workerId 校验
    if (this.workerId > this.maxWrokerId || this.workerId < 0) {
      throw new Error(`workerId must max than 0 and small than maxWrokerId ${this.maxWrokerId}`)
    }
    // dataCenterId 校验
    if (this.dataCenterId > this.maxDataCenterId || this.dataCenterId < 0) {
      throw new Error(`dataCenterId must max than 0 and small than maxDataCenterId ${this.maxDataCenterId}`)
    }
  }
  // ==============================Methods==========================================
  /**
   * 获得下一个ID (该方法是线程安全的)
   * @return SnowflakeId
   */
  Snowflake.prototype.nextId = function () {
    let timestamp = this.timeGen()

    // 如果当前时间小于上一次ID生成的时间戳，说明系统时钟回退过这个时候应当抛出异常
    if (timestamp < this.lastTimestamp) {
      throw new Error('Clock moved backwards. Refusing to generate id for ' +
        (this.lastTimestamp - timestamp))
    }

    // 如果是同一时间生成的，则进行毫秒内序列
    if (this.lastTimestamp === timestamp) {
      /**
       * 按位于操作 对于每一个比特位，只有两个操作数相应的比特位都是1时，结果才为1，否则为0。
       * 假设最开始 this.sequence 为 0n 加1后，则为1
       * 结果如下
       00000000 00000000 00000000 00000001 //1的二进制
       00000000 00000000 00001111 11111111 //最终结果2^12  = 4096
       ---------------------------------------------------------------------------
       00000000 00000000 00000000 00000001 //结果1的二进制
       */
      this.sequence = (this.sequence + 1n) & this.sequenceMask
      // 毫秒内序列溢出
      if (this.sequence === 0n) {
        // 阻塞到下一个毫秒,获得新的时间戳
        timestamp = this.tilNextMillis(this.lastTimestamp)
      }
    } else {
      // 时间戳改变，毫秒内序列重置
      this.sequence = 0n
    }

    // 上次生成ID的时间截
    this.lastTimestamp = timestamp

    // 移位并通过或运算拼到一起组成64位的ID
    const result = ((timestamp - this.twepoch) << this.timestampLeftShift) |
      (this.dataCenterId << this.dataCenterIdShift) |
      (this.workerId << this.workerIdShift) |
      this.sequence
    return result
  }

  /**
   * 阻塞到下一个毫秒，直到获得新的时间戳
   * @param lastTimestamp 上次生成ID的时间截
   * @return 当前时间戳
   */
  Snowflake.prototype.tilNextMillis = function (lastTimestamp) {
    let timestamp = this.timeGen()
    while (timestamp <= lastTimestamp) {
      timestamp = this.timeGen()
    }
    return timestamp
  }

  /**
   * 返回以毫秒为单位的当前时间
   * @return 当前时间(毫秒)
   */
  Snowflake.prototype.timeGen = function () {
    return BigInt(Date.now())
  }

  return Snowflake
}())
// console.log(new Snowflake(1n, 1n).nextId());
module.exports = Snowflake

```