(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{258:function(e,a,t){e.exports=t.p+"assets/img/gradle_publish.30ebc31e.png"},282:function(e,a,t){"use strict";t.r(a);var n=t(6),s=Object(n.a)({},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"mybatis-真香记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-真香记录","aria-hidden":"true"}},[e._v("#")]),e._v(" mybatis 真香记录")]),e._v(" "),n("h3",{attrs:{id:"踩坑记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#踩坑记录","aria-hidden":"true"}},[e._v("#")]),e._v(" 踩坑记录")]),e._v(" "),n("ul",[n("li",[e._v("问题描述：")])]),e._v(" "),n("blockquote",[n("p",[e._v("单元执行正常，正常service层调用报错，代码很简单：")])]),e._v(" "),n("ol",[n("li",[n("code",[e._v("sysUserMapper.selectOne(Wrappers.<SysUser>lambdaQuery().eq(SysUser::getUsername,username));")])]),e._v(" "),n("li",[e._v("报错信息如下：")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("2019-05-15 20:31:58.892 [http-nio-8085-exec-3] DEBUG org.springframework.web.servlet.mvc.method.annotation.ExceptionHandlerExceptionResolver.doResolveHandlerMethodException:403 - Using @ExceptionHandler public com.yanzhi.common.response.WebResponse com.yanzhi.core.vrpanoapp.exception.GlobalExceptionHandler.handleExceptionHandler(java.lang.Exception)\n2019-05-15 20:31:58.893 [http-nio-8085-exec-3] ERROR com.yanzhi.core.vrpanoapp.exception.GlobalExceptionHandler.handleExceptionHandler:223 - 未捕获的系统异常：nested exception is org.apache.ibatis.builder.BuilderException: Error evaluating expression 'ew.sqlSegment != null and ew.sqlSegment != '' and ew.nonEmptyOfWhere'. Cause: org.apache.ibatis.ognl.OgnlException: sqlSegment [com.baomidou.mybatisplus.core.exceptions.MybatisPlusException: Your property named \"username\" cannot find the corresponding database column name!]\norg.mybatis.spring.MyBatisSystemException: nested exception is org.apache.ibatis.builder.BuilderException: Error evaluating expression 'ew.sqlSegment != null and ew.sqlSegment != '' and ew.nonEmptyOfWhere'. Cause: org.apache.ibatis.ognl.OgnlException: sqlSegment [com.baomidou.mybatisplus.core.exceptions.MybatisPlusException: Your property named \"username\" cannot find the corresponding database column name!]\n")])])]),n("ul",[n("li",[e._v("解决方法：")])]),e._v(" "),n("blockquote",[n("p",[e._v("移除 "),n("code",[e._v("dev-tools")]),e._v(",参见 "),n("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/issues/1137",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/baomidou/mybatis-plus/issues/1137"),n("OutboundLink")],1)])]),e._v(" "),n("h3",{attrs:{id:"gradle-project-publish-to-local-maven-repository"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gradle-project-publish-to-local-maven-repository","aria-hidden":"true"}},[e._v("#")]),e._v(" gradle project publish to local maven repository")]),e._v(" "),n("p",[n("img",{attrs:{src:t(258),alt:"publish"}})]),e._v(" "),n("p",[e._v("or")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("./gradlew build publishToMavenLocal\n")])])])])},[],!1,null,null,null);a.default=s.exports}}]);