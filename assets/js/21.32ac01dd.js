(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{275:function(t,e,n){"use strict";n.r(e);var a=n(9),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"通用mysql建表字段模板"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通用mysql建表字段模板","aria-hidden":"true"}},[t._v("#")]),t._v(" 通用MYSQL建表字段模板")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("--\n-- Set character set the client will use to send SQL statements to the server\n--\nSET NAMES 'utf8';\n\n--\n--  创建新表的模板，所有的表创建需要已此为模板\n-- Create table 新表名称\n--\nCREATE TABLE 新表名称 (\n    -- 必须字段 id, uuid, active,version, gmt_create,gmt_modified, create_by, modified_by\n                      id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',\n                      uuid varchar(500) NOT NULL COMMENT '该记录唯一识别码，用于区别主键',\n    -- 其他的字段\n\n    -- 以下为必须添加的额外保留字段\n                      active tinyint(1) UNSIGNED NOT NULL DEFAULT 1 COMMENT '对应该条记录是否可用，1可用，0不可用',\n                      version int(20) UNSIGNED NOT NULL COMMENT '对应乐观锁的版本号',\n                      gmt_create datetime NOT NULL COMMENT '对应记录的创建时间',\n                      gmt_modified datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '对应记录的修改时间',\n                      create_by varchar(250) NOT NULL COMMENT '对应添加记录的人',\n                      modified_by varchar(250) NOT NULL COMMENT '对应最后一次修改记录的',\n                      PRIMARY KEY (id)\n)\n    ENGINE = INNODB,\n    CHARACTER SET utf8mb4,\n    COLLATE utf8mb4_general_ci,\n    COMMENT = '新表说明';\n\n\n")])])]),n("h2",{attrs:{id:"pagehelper-return-pageinfo-total-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pagehelper-return-pageinfo-total-1","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("code",[t._v("PageHelper")]),t._v(" return "),n("code",[t._v("PageInfo")]),t._v(" total =-1")]),t._v(" "),n("blockquote",[n("p",[t._v("Found that the "),n("code",[t._v("PageInfo")]),t._v(" always return the "),n("code",[t._v("total")]),t._v(" field as -1, and the select count(*) sql not run")])]),t._v(" "),n("ul",[n("li",[t._v("The reason is as below:")])]),t._v(" "),n("div",{staticClass:"language-yml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pagehelper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default-count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n")])])]),n("ul",[n("li",[t._v("The sql used here is:")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Page")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" page "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PageHelper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("startPage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pageNum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pageSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PermissionActionResponse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" permissionActions "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" authMapper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPermissionActions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PageInfo")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PermissionActionResponse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" pageInfo "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PageInfo")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("permissionActions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"mybatis-plus-重要坑记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-plus-重要坑记录","aria-hidden":"true"}},[t._v("#")]),t._v(" mybatis-plus 重要坑记录")]),t._v(" "),n("ul",[n("li",[t._v("数据库表的字段为数据库关键字，采用如下声明：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('1. 关键字数据表： @TableName("[user]")\n2. 关键字数据表字段：  @TableField("`desc`")\n')])])]),n("ul",[n("li",[t._v("配置 MapperScan 注解")])]),t._v(" "),n("blockquote",[n("p",[t._v("提到需要写上"),n("code",[t._v('@MapperScan("com.baomidou.mybatisplus.samples.quickstart.mapper")')]),t._v(",可以在mapper类上采用注解"),n("code",[t._v("@Mapper")]),t._v("达到同样的效果")])]),t._v(" "),n("p",[t._v("参考代码： "),n("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus-samples/blob/master/mybatis-plus-sample-auto-fill-metainfo/src/main/java/com/baomidou/samples/metainfo/mapper/UserMapper.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("github 代码段"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("-- 注解 annotation")]),t._v(" "),n("ol",[n("li",[n("code",[t._v("@TableName")])]),t._v(" "),n("li",[n("code",[t._v("@TableId")])]),t._v(" "),n("li",[n("code",[t._v("@TableField")])]),t._v(" "),n("li",[n("code",[t._v("@Version")])])]),t._v(" "),n("ul",[n("li",[t._v("分页")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  // 不进行 count sql 优化，解决 MP 无法自动优化 SQL 问题，这时候你需要自己查询 count 部分\n    // page.setOptimizeCountSql(false);\n    // 当 total 为非 0 时(默认为 0),分页插件不会进行 count 查询\n    // 要点!! 分页返回的对象与传入的对象是同一个\n\n")])])]),n("ul",[n("li",[t._v("常见问题整理")])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://mybatis.plus/guide/faq.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("FAQ"),n("OutboundLink")],1)]),t._v(" "),n("ul",[n("li",[t._v("mybatis plus 详细配置产生实体类及其相关代码")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\nimport cn.hutool.core.io.FileUtil;\nimport cn.hutool.core.util.StrUtil;\nimport com.baomidou.mybatisplus.annotation.DbType;\nimport com.baomidou.mybatisplus.annotation.FieldFill;\nimport com.baomidou.mybatisplus.annotation.IdType;\nimport com.baomidou.mybatisplus.core.exceptions.MybatisPlusException;\nimport com.baomidou.mybatisplus.generator.AutoGenerator;\nimport com.baomidou.mybatisplus.generator.config.DataSourceConfig;\nimport com.baomidou.mybatisplus.generator.config.GlobalConfig;\nimport com.baomidou.mybatisplus.generator.config.PackageConfig;\nimport com.baomidou.mybatisplus.generator.config.StrategyConfig;\nimport com.baomidou.mybatisplus.generator.config.po.TableFill;\nimport com.baomidou.mybatisplus.generator.config.rules.DateType;\nimport com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;\nimport com.baomidou.mybatisplus.generator.engine.FreemarkerTemplateEngine;\nimport com.google.common.collect.Lists;\n\nimport java.util.Scanner;\n\npublic class MybatisCodeGenerator {\n\n\n    public static String scanner(String tip){\n        Scanner scanner = new Scanner(System.in);\n        StringBuilder help = new StringBuilder();\n        help.append("请输入: "+tip+": ");\n        System.out.println(help.toString());\n        if(scanner.hasNext()){\n            String inputTip = scanner.next();\n            if(StrUtil.isNotEmpty(inputTip)){\n                return inputTip;\n            }\n        }\n        throw new MybatisPlusException("请输入正确的"+tip+"!");\n    }\n\n\n    public static void main(String[] args) {\n\n        // 配置信息\n        String url ="jdbc:mysql://192.168.1.108:3306/vrpano?useUnicode=true&useSSL=false&characterEncoding=utf8";\n        String username ="yanzhi";\n        String passwd="yanzhi123!@#";\n        String packageName ="generator";\n\n        // 代码生成器\n        AutoGenerator mpg = new AutoGenerator();\n\n        // 数据源配置\n        DataSourceConfig dsc = new DataSourceConfig();\n        // 必须\n        dsc.setDbType(DbType.MYSQL);\n        dsc.setUrl(url);\n        dsc.setDriverName("com.mysql.cj.jdbc.Driver");\n        dsc.setUsername(username);\n        dsc.setPassword(passwd);\n        mpg.setDataSource(dsc);\n\n        // 全局配置\n        GlobalConfig gc = new GlobalConfig();\n\n\n        String currentFilePath =MybatisCodeGenerator.class.getClassLoader().getResource("").getPath();\n        String projectPath = FileUtil.getParent(currentFilePath, 2);\n        gc.setOutputDir(projectPath + "/src/main/java");\n\n        gc.setFileOverride(true);\n        gc.setOpen(true);\n        // 是否在xml中添加二级缓存\n        gc.setEnableCache(false);\n\n        gc.setAuthor("Walter Hu");\n\n        gc.setKotlin(false);\n        gc.setSwagger2(false);\n\n        gc.setActiveRecord(false);\n\n        // xml中添加返回结果的基本类型\n        gc.setBaseResultMap(true);\n        // xml中添加基本的数据列\n        gc.setBaseColumnList(true);\n        // java8 时间映射，所有的时间映射被LocalDate,LocalDateTime类型\n        gc.setDateType(DateType.TIME_PACK);\n\n        gc.setEntityName("%sEntity");\n        gc.setMapperName("%sMapper");\n        gc.setXmlName("%sMapper");\n        gc.setIdType(IdType.AUTO);\n\n        mpg.setGlobalConfig(gc);\n\n        //数据库表配置 策略配置\n        StrategyConfig strategy = new StrategyConfig();\n        // 表名是否大写\n        strategy.setCapitalMode(false);\n        strategy.setSkipView(true);\n        // 表名到实体类的映射关系\n        strategy.setNaming(NamingStrategy.underline_to_camel);\n//        数据库表字段映射到实体的命名策略, 未指定按照 naming 执行\n        strategy.setColumnNaming(NamingStrategy.underline_to_camel);\n\n        String tables = scanner("表名，多个英文逗号分割");\n         if(!tables.contains("a")){\n             // 全部的表\n             String[] parseTables = tables.split(",");\n             strategy.setInclude(parseTables);\n         }\n\n        // 实体类设置\n        // 初始化字段值\n        strategy.setEntityColumnConstant(false);\n        // lombok类型\n        strategy.setEntityLombokModel(true);\n        // 将boolean类型的字段去掉前面的is字段\n        strategy.setEntityBooleanColumnRemoveIsPrefix(true);\n        //\n        strategy.setEntitySerialVersionUID(true);\n        // 乐观锁字段\n        strategy.setVersionFieldName("version");\n        // 默认字段\n        strategy.setTableFillList(Lists.newArrayList(\n                new TableFill("gmt_create", FieldFill.INSERT),\n                new TableFill("gmt_modified",FieldFill.INSERT_UPDATE),\n                new TableFill("version", FieldFill.INSERT),\n                new TableFill("is_active", FieldFill.INSERT)\n                ));\n\n        mpg.setStrategy(strategy);\n        // 默认是采用velocity 模板的\n        mpg.setTemplateEngine(new FreemarkerTemplateEngine());\n\n        // 包配置\n        PackageConfig pc = new PackageConfig();\n//        pc.setModuleName(scanner("模块名"));\n        pc.setParent(packageName);\n        mpg.setPackageInfo(pc);\n\n\n        mpg.execute();\n    }\n}\n\n')])])])])},[],!1,null,null,null);e.default=s.exports}}]);