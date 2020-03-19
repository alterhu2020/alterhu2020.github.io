(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{280:function(t,a,s){"use strict";s.r(a);var n=s(9),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"extends-quartzjobbean-和-implements-job-difference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extends-quartzjobbean-和-implements-job-difference"}},[t._v("#")]),t._v(" "),s("code",[t._v("extends QuartzJobBean")]),t._v(" 和 "),s("code",[t._v("implements Job")]),t._v("  difference")]),t._v(" "),s("p",[t._v("在spring-boot-quartz中使用提供的接口创建job的时候有两种方式：")]),t._v(" "),s("ul",[s("li",[t._v("实现接口"),s("code",[t._v("Job")])])]),t._v(" "),s("p",[t._v("如果采用的是implements job接口的形式创建job，name我们如何获取任务传递过来的外部参数呢？")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JobExecutionContext")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过访问 JobExecutionContext 获取JobDataMap 对象，从而访问对应的参数")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JobDataMap")]),t._v(" jobDataMap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getJobDetail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getJobDataMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" jobName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jobDataMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("有没有一种更方便的形式进行访问获取"),s("code",[t._v("JobDataMap")]),t._v("中的参数和值呢？是的，这个就是"),s("code",[t._v("QuartzJobBean")]),t._v("类做得")]),t._v(" "),s("ul",[s("li",[t._v("继承抽象类"),s("code",[t._v("QuartzJobBean")])])]),t._v(" "),s("p",[t._v("官方的说明是： 更优雅采用java对象思想来访问传过来的参数。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyJob")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QuartzJobBean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" parameter1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setParameter1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" parameter1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parameter1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" parameter1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JobExecutionContext")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JobExecutionException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My job is running with "')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("parameter1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"disallowconcurrentexecution-配置quartz并发执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disallowconcurrentexecution-配置quartz并发执行"}},[t._v("#")]),t._v(" @DisallowConcurrentExecution 配置quartz并发执行")]),t._v(" "),s("blockquote",[s("p",[t._v("可能有多个触发器使用该job，所以避免并发执行这个任务")])]),t._v(" "),s("p",[t._v("@DisallowConcurrentExecution\n@PersistJobDataAfterExecution")]),t._v(" "),s("h2",{attrs:{id:"常用基本quartz-cron表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用基本quartz-cron表达式"}},[t._v("#")]),t._v(" 常用基本quartz cron表达式")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("            每隔5秒执行一次：*/5 * * * * ?\n\n             每隔1分钟执行一次：0 */1 * * * ?\n\n             每天23点执行一次：0 0 23 * * ?\n\n             每天凌晨1点执行一次：0 0 1 * * ?\n\n             每月1号凌晨1点执行一次：0 0 1 1 * ?\n\n             每月最后一天23点执行一次：0 0 23 L * ?\n\n             每周星期天凌晨1点实行一次：0 0 1 ? * L\n\n             在26分、29分、33分执行一次：0 26,29,33 * * * ?\n\n             每天的0点、13点、18点、21点都执行一次：0 0 0,13,18,21 * * ?\n\n")])])]),s("h2",{attrs:{id:"quartz-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quartz-state"}},[t._v("#")]),t._v(" quartz state")]),t._v(" "),s("p",[t._v("see "),s("a",{attrs:{href:"/org/quartz-scheduler/quartz/2.3.0/quartz-2.3.0-sources.jar!/org/quartz/impl/jdbcjobstore/Constants.java:142"}},[t._v("org/quartz-scheduler/quartz/2.3.0/quartz-2.3.0-sources.jar!/org/quartz/impl/jdbcjobstore/Constants.java:142")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// STATES")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" STATE_WAITING "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WAITING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" STATE_ACQUIRED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACQUIRED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" STATE_EXECUTING "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EXECUTING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" STATE_COMPLETE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"COMPLETE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" STATE_BLOCKED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BLOCKED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" STATE_ERROR "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ERROR"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" STATE_PAUSED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PAUSED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" STATE_PAUSED_BLOCKED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PAUSED_BLOCKED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" STATE_DELETED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DELETED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"mybatis-plus自定义分页出错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-plus自定义分页出错"}},[t._v("#")]),t._v(" mybatis plus自定义分页出错")]),t._v(" "),s("p",[t._v("采用mybatis plus的自定义查询报错如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Caused")]),t._v(" by"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baomidou"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mybatisplus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exceptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MybatisPlusException")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" cannot find column's cache "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.yanzhi.batch.entity.JobListEntity"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" so you cannot used "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"class com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n不支持，不可以使用`"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LambdaQueryWrapper")]),t._v("`来构造自定义查询条件\n\n")])])]),s("p",[t._v("那么该如何优雅的使用mybatis提供的QueryWrapper构造子查询条件呢？避免在xml中写大量的"),s("code",[t._v("<if test>")]),t._v("进行判断子查询，生成动态的查询条件，如下是操作步骤：")]),t._v(" "),s("ol",[s("li",[t._v("首先确定配置了拦截器如下：")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n    * 分页拦截器\n    *\n    * @return\n    */")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PaginationInterceptor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("paginationInterceptor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PaginationInterceptor")]),t._v(" paginationInterceptor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PaginationInterceptor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n       "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ISqlParser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" sqlParserList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 攻击 SQL 阻断解析器、加入解析链作用！阻止恶意的全表更新删除")]),t._v("\n       sqlParserList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlockAttackSqlParser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n       paginationInterceptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSqlParserList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sqlParserList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" paginationInterceptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("在mapper中定义对应的接口（主要看对应的两个方法参数"),s("code",[t._v("IPage")]),t._v(", "),s("code",[t._v("@Param(Constants.WRAPPER) Wrapper")]),t._v("，还有返回类型: "),s("code",[t._v("IPage")]),t._v("，其他的根据自己的实体调整）:")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("     "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IPage")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JobListEntity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getJobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IPage")]),t._v(" page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Constants")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WRAPPER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wrapper")]),t._v(" entityWrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("在mapper的xml对应的查询SQL最后定义如下自定义查询:")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("        "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("where"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ew"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sqlSegment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("where"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("在service层调用mapper层的方法代码：")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Page")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JobListEntity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" page "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Page")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pageNum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PageSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者QueryWrapper queryWrapper =Wrappers.query();")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QueryWrapper")]),t._v(" queryWrapper "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wrappers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("emptyWrapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StrUtil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNotEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里填的字段对应查询条件中的数据字段")]),t._v("\n            queryWrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("like")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qjd.JOB_NAME"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IPage")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JobListEntity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" jobListEntityIPage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jobMapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getJobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" queryWrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("关于 "),s("code",[t._v("${ew.sqlSegment}")]),t._v(" 使用了 "),s("code",[t._v("$")]),t._v(" 不要误以为就会被 sql 注入，请放心使用 mp 内部对"),s("code",[t._v("wrapper")]),t._v(" 进行了字符转义处理！")])])}),[],!1,null,null,null);a.default=e.exports}}]);