(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{250:function(t,a,s){t.exports=s.p+"assets/img/actionsheet.359fcf45.png"},270:function(t,a,s){"use strict";s.r(a);var e=s(9),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"ionic-优秀资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ionic-优秀资源"}},[t._v("#")]),t._v(" ionic 优秀资源")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://my.oschina.net/u/1416844/blog/514361",target:"_blank",rel:"noopener noreferrer"}},[t._v("copepen上的ionic优秀demo"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"如何将ionic的actionsheet改成水平的horizontal-button？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何将ionic的actionsheet改成水平的horizontal-button？"}},[t._v("#")]),t._v(" 如何将ionic的actionsheet改成水平的horizontal button？")]),t._v(" "),e("ol",[e("li",[t._v("参考Android的一个样式： "),e("a",{attrs:{href:"https://material.angularjs.org/latest/demo/bottomSheet",target:"_blank",rel:"noopener noreferrer"}},[t._v("水平的bottom sheet"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"ionic-图钉affix实现固定任意位置的内容？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ionic-图钉affix实现固定任意位置的内容？"}},[t._v("#")]),t._v(" ionic 图钉affix实现固定任意位置的内容？")]),t._v(" "),e("p",[t._v("暂无")]),t._v(" "),e("h2",{attrs:{id:"ionic-bottomsheet弹出带有表格的actionsheet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ionic-bottomsheet弹出带有表格的actionsheet"}},[t._v("#")]),t._v(" ionic bottomsheet弹出带有表格的actionsheet?")]),t._v(" "),e("p",[t._v("全局样式中如下定义：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/*// 一半的弹出框*/\n.half-modal {\n  .modal-wrapper {\n    height: 50%;\n    top: 50%;\n    position: absolute;\n    display: block;\n  }\n}\n\n")])])]),e("p",[t._v("效果如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(250),alt:"效果"}})]),t._v(" "),e("h2",{attrs:{id:"vant中的toast默认情况下，同一时间只允许一个实例存在，如何同时显示多个实例不影响？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vant中的toast默认情况下，同一时间只允许一个实例存在，如何同时显示多个实例不影响？"}},[t._v("#")]),t._v(" vant中的toast默认情况下，同一时间只允许一个实例存在，如何同时显示多个实例不影响？")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" mounted () {\n    // 注意此处的巨坑，\n    this.$toast.allowMultiple()\n  }\n")])])]),e("h2",{attrs:{id:"上传的图片右上角加上一个删除的按钮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上传的图片右上角加上一个删除的按钮"}},[t._v("#")]),t._v(" 上传的图片右上角加上一个删除的按钮")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<div style="position: relative">\n    <img src="http://www.google.co.in/images/srpr/logo4w.png" />\n    <img src="http://wecision.com/enterprise/images/icons/closeIcon.png" style="position: absolute; top: 4px; right: 5px"/>\n</div>\n\n')])])]),e("h2",{attrs:{id:"mysql-树查询，递归查询，查询子节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-树查询，递归查询，查询子节点"}},[t._v("#")]),t._v(" Mysql 树查询，递归查询，查询子节点")]),t._v(" "),e("ol",[e("li",[t._v("树查询的一个讲解： "),e("a",{attrs:{href:"https://mariadb.com/kb/en/library/recursive-common-table-expressions-overview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mariadb"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("mysql解决方案: "),e("a",{attrs:{href:"https://stackoverflow.com/questions/20215744/how-to-create-a-mysql-hierarchical-recursive-query",target:"_blank",rel:"noopener noreferrer"}},[t._v("statckoverflow"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/elevenlang/p/3490844.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("一个详细的讲解递归的例子文章:"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n  with recursive cte (PanoUserKey, PanoManagerUserKey) as (\n  select     \n             pum.PanoUserKey,\n            pum.PanoManagerUserKey\n  from       PanoUserManager pum\n  where      pum.PanoManagerUserKey = 258\n  union all\n  select     \n             pum.PanoUserKey,\n            pum.PanoManagerUserKey\n  from        PanoUserManager pum\n  inner join cte\n          on pum.PanoManagerUserKey = cte.PanoUserKey\n)\nselect * from cte;\n\n")])])]),e("p",[e("strong",[t._v("讲解")]),t._v("步骤：")]),t._v(" "),e("ol",[e("li",[t._v("CTE支持递归查询，定义一个递归CTE至少需要两个(可能更多)查询：第一个查询称为定位点成员，第二个查询称为递归成员")])]),t._v(" "),e("p",[t._v("1.1 至少定义两个查询，第一个查询是定位查询，定位查询只被调用一次， 第二个查询为递归成员")]),t._v(" "),e("ul",[e("li",[t._v("此处的定位查询只返回谁的上级是 258的员工，只执行一次，获取当前结果")]),t._v(" "),e("li",[t._v("第二个递归查询，在第一次定位查询后， cte返回的结果集是上级258的员工的结果集。")]),t._v(" "),e("li",[t._v("然后与总的结果表进行内联，内联的条件是这次的查询的节点id对应的总结果的父节点id（"),e("strong",[t._v("注意因为我们需要得到的是父节点下面的所有子节点")]),t._v("，所以是当前结果的节点id对应总结果的父节点id,这个同定位查询的子查询后面的字段一致），返回上一次调用的结果中返回的直接下属。")]),t._v(" "),e("li",[t._v("接下来的就是多次调用递归查询与总表一直在递归查询，直到无法再查询到结果集为止。")])]),t._v(" "),e("h3",{attrs:{id:"其他参考sql语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他参考sql语句"}},[t._v("#")]),t._v(" 其他参考SQL语句")]),t._v(" "),e("ul",[e("li",[t._v("定位查询可以是任意查询SQL")])]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" CTE_TEMP   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--公用表表达式（Common Table Expression)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" ProvinceCity_Test "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%西安%'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("union")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALL")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" ProvinceCity_Test a\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNER")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" CTE_TEMP b "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ID "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ParentID    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--父子级关系,递归,递归部分不允许使用外部联接(不允许使用left join等)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" CTE_TEMP   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- CTE后面必须直接跟使用CTE的SQL语句（如select、insert、update等），否则，CTE将失效。")]),t._v("\n\n")])])]),e("ul",[e("li",[t._v("递归查询中查询结果分隔符")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/dufemt/article/details/80773394",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考递归查询结果分隔符"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdn.net/20180622145111389?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2R1ZmVtdA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:"alter"}})]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" RECURSIVE cte "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cast"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tb a "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'002'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("union")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("all")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" k"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cast"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'>'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("k"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" name  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tb k "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inner")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" cte c "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" k"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" cte "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"建表规范参考阿里巴巴手册"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建表规范参考阿里巴巴手册"}},[t._v("#")]),t._v(" 建表规范参考阿里巴巴手册")]),t._v(" "),e("ol",[e("li",[t._v("UNSIGNED属性就是将数字类型无符号化，与C、C++这些程序语言中的unsigned含义相同。例如，INT的类型范围是-2 147 483 648 ～ 2 147 483 647， INT UNSIGNED的范围类型就是0 ～ 4 294 967 295")])]),t._v(" "),e("h2",{attrs:{id:"raspberry上没有mariadb-10-3支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raspberry上没有mariadb-10-3支持"}},[t._v("#")]),t._v(" raspberry上没有mariadb 10.3支持")]),t._v(" "),e("blockquote",[e("p",[t._v("MariaDB's 10.3 builds are only for i386 (32-bit), amd64 (64-bit) and ppc64el (PowerPC). Your Pi has an ARM processor which needs a particular build for that architecture.\n官方没有发布对应的这种包。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);