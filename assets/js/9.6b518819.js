(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{256:function(e,a,t){e.exports=t.p+"assets/img/gradle_publish.30ebc31e.png"},277:function(e,a,t){"use strict";t.r(a);var s=t(9),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"mybatis-真香记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-真香记录"}},[e._v("#")]),e._v(" mybatis 真香记录")]),e._v(" "),s("h3",{attrs:{id:"踩坑记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#踩坑记录"}},[e._v("#")]),e._v(" 踩坑记录")]),e._v(" "),s("ul",[s("li",[e._v("问题描述：")])]),e._v(" "),s("blockquote",[s("p",[e._v("单元执行正常，正常service层调用报错，代码很简单：")])]),e._v(" "),s("ol",[s("li",[s("code",[e._v("sysUserMapper.selectOne(Wrappers.<SysUser>lambdaQuery().eq(SysUser::getUsername,username));")])]),e._v(" "),s("li",[e._v("报错信息如下：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("2019-05-15 20:31:58.892 [http-nio-8085-exec-3] DEBUG org.springframework.web.servlet.mvc.method.annotation.ExceptionHandlerExceptionResolver.doResolveHandlerMethodException:403 - Using @ExceptionHandler public com.yanzhi.common.response.WebResponse com.yanzhi.core.vrpanoapp.exception.GlobalExceptionHandler.handleExceptionHandler(java.lang.Exception)\n2019-05-15 20:31:58.893 [http-nio-8085-exec-3] ERROR com.yanzhi.core.vrpanoapp.exception.GlobalExceptionHandler.handleExceptionHandler:223 - 未捕获的系统异常：nested exception is org.apache.ibatis.builder.BuilderException: Error evaluating expression 'ew.sqlSegment != null and ew.sqlSegment != '' and ew.nonEmptyOfWhere'. Cause: org.apache.ibatis.ognl.OgnlException: sqlSegment [com.baomidou.mybatisplus.core.exceptions.MybatisPlusException: Your property named \"username\" cannot find the corresponding database column name!]\norg.mybatis.spring.MyBatisSystemException: nested exception is org.apache.ibatis.builder.BuilderException: Error evaluating expression 'ew.sqlSegment != null and ew.sqlSegment != '' and ew.nonEmptyOfWhere'. Cause: org.apache.ibatis.ognl.OgnlException: sqlSegment [com.baomidou.mybatisplus.core.exceptions.MybatisPlusException: Your property named \"username\" cannot find the corresponding database column name!]\n")])])]),s("ul",[s("li",[e._v("解决方法：")])]),e._v(" "),s("blockquote",[s("p",[e._v("移除 "),s("code",[e._v("dev-tools")]),e._v(",参见 "),s("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/issues/1137",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/baomidou/mybatis-plus/issues/1137"),s("OutboundLink")],1)])]),e._v(" "),s("h3",{attrs:{id:"gradle-project-publish-to-local-maven-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gradle-project-publish-to-local-maven-repository"}},[e._v("#")]),e._v(" gradle project publish to local maven repository")]),e._v(" "),s("p",[s("img",{attrs:{src:t(256),alt:"publish"}})]),e._v(" "),s("p",[e._v("or")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("./gradlew build publishToMavenLocal\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);