(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{291:function(e,t,a){"use strict";a.r(t);var s=a(4),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"自定义自己的application-yml中的配置信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义自己的application-yml中的配置信息","aria-hidden":"true"}},[e._v("#")]),e._v(" 自定义自己的application.yml中的配置信息")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("         <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-configuration-processor</artifactId>\n            <optional>true</optional>\n        </dependency>\n\n")])])]),a("h2",{attrs:{id:"spring-security-securedenabled-jsr250enabled-prepostenabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-security-securedenabled-jsr250enabled-prepostenabled","aria-hidden":"true"}},[e._v("#")]),e._v(" spring security securedEnabled /jsr250Enabled  / prePostEnabled")]),e._v(" "),a("h2",{attrs:{id:"resttemplate获取的json对象是泛型的会自动转换为map对象，如何转为正确的实体类？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resttemplate获取的json对象是泛型的会自动转换为map对象，如何转为正确的实体类？","aria-hidden":"true"}},[e._v("#")]),e._v(" resttemplate获取的json对象是泛型的会自动转换为map对象，如何转为正确的实体类？")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 泛型的数据返回值\n        ParameterizedTypeReference<WebResponse<WeixinUserInfoResponse>> webResponseParameterizedTypeReference =\n                new ParameterizedTypeReference<WebResponse<WeixinUserInfoResponse>>() {\n                };\n        ResponseEntity<WebResponse<WeixinUserInfoResponse>> responseEntity = restTemplate.\n                exchange(userInfoRequestUrl, HttpMethod.GET, null, webResponseParameterizedTypeReference);\n        // 获取正确了token值\n        WebResponse<WeixinUserInfoResponse> webResponse = responseEntity.getBody();\n")])])]),a("h2",{attrs:{id:"data-truncation-truncated-incorrect-double-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-truncation-truncated-incorrect-double-value","aria-hidden":"true"}},[e._v("#")]),e._v(" Data truncation: Truncated incorrect DOUBLE value")]),e._v(" "),a("blockquote",[a("p",[e._v("在网上的主要错误原因是：update语句中的set中出现了and关键字，而应该使用逗号<,>代替之；这里的报错不属于这种情况；")])]),e._v(" "),a("h2",{attrs:{id:"mysql表名不区分大小写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql表名不区分大小写","aria-hidden":"true"}},[e._v("#")]),e._v(" mysql表名不区分大小写")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("需要改 MySQL 的配置文件，Linux 下 MySQL 的配置文件可能是 /etc/my.cnf，或 /etc/mysql/my.cnf，这依赖于你的安装方式。假如是 /etc/my.cnf，那么执行\n\nsudo vi /etc/my.cnf\n\n在 [mysqld] 节中添加：\n\nlower_case_table_names=1\n\n然后保存，用 sudo /etc/init.d/mysql restart 重启 MySQL 服务便让 Linux 系统对表名大小写不敏感了。\n\n其实准确来说不是说 Linux 对于 MySQL 表名忽略大小写，而是应用上面的配置后，MySQL 服务程序会来自于应用程序里的请求的表名转换为小写，如你查询 select*  UNMI_TABLE，MySQL 会认为是查询的 select * from unmi_table，所以在加入\n\nlower_case_table_names=1\n\n之前时你必须把表名都改为小写。也就是在创建表时都用小写名字，如果创建的表名为 UNMI_TABLE，那么程序中无论是执行 select * from UNMI_TABLE 还是执行 select * from unmi_table 都会碰到类似下面的错误：\n\n")])])]),a("p",[e._v("但是mysql8 不能更改")]),e._v(" "),a("p",[e._v("遇到同样问题，翻看MySQL官方文档发现")]),e._v(" "),a("p",[e._v("lower_case_table_names can only be configured when initializing the server. Changing the lower_case_table_names setting after the server is initialized is prohibited.")]),e._v(" "),a("p",[e._v("别指望了改了")]),e._v(" "),a("p",[e._v("经过尝试，只有在安装完成之后，初始化数据库之前，修改my.cnf\n然后再初始化数据库才有效")]),e._v(" "),a("h2",{attrs:{id:"spring-quartz任务调度超时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-quartz任务调度超时","aria-hidden":"true"}},[e._v("#")]),e._v(" spring quartz任务调度超时")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/daxin/p/3919927.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考博客"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[e._v("        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("jobStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" org.quartz.impl.jdbcjobstore.JobStoreTX\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("driverDelegateClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" org.quartz.impl.jdbcjobstore.StdJDBCDelegate\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("tablePrefix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" QRTZ_\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 调度引擎比较忙得时候出现这个问题")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 当前线程有10个，但是现在有12个任务需要在13:00处理，所以有两个任务需要延迟处理，")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果延迟到13:60，就是延迟了60分钟， 大于下面的50分钟，所以就是misfire的。")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果延迟到13:40 ，触发器发现小于50秒，调度引擎认为这个延迟时间可以忍受，所以不算超时(Misfires)")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("misfireThreshold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("50000")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 集群配置")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("isClustered")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("false")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("clusterCheckinInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("50000")]),e._v("\n\n")])])])])},[],!1,null,null,null);t.default=n.exports}}]);