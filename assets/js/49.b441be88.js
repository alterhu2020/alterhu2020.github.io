(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{306:function(n,e,t){"use strict";t.r(e);var a=t(9),i=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("ClientOnly",[t("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),n._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#卸载阿里云背后脚本"}},[n._v("卸载阿里云背后脚本")])]),t("li",[t("a",{attrs:{href:"#卸载阿里云定时任务"}},[n._v("卸载阿里云定时任务")])])])]),t("p"),n._v(" "),t("h2",{attrs:{id:"卸载阿里云背后脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载阿里云背后脚本"}},[n._v("#")]),n._v(" 卸载阿里云背后脚本")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('#!/bin/bash\n\n#check linux Gentoo os \nvar=`lsb_release -a | grep Gentoo`\nif [ -z "${var}" ]; then \n\tvar=`cat /etc/issue | grep Gentoo`\nfi\n\nif [ -d "/etc/runlevels/default" -a -n "${var}" ]; then\n\tLINUX_RELEASE="GENTOO"\nelse\n\tLINUX_RELEASE="OTHER"\nfi\n\nstop_aegis(){\n\tkillall -9 aegis_cli >/dev/null 2>&1\n\tkillall -9 aegis_update >/dev/null 2>&1\n\tkillall -9 AliYunDun >/dev/null 2>&1\n\tkillall -9 AliHids >/dev/null 2>&1\n\tkillall -9 AliHips >/dev/null 2>&1\n\tkillall -9 AliYunDunUpdate >/dev/null 2>&1\n    \n    if [ -d /usr/local/aegis/aegis_debug ];then\n        if [ -d /usr/local/aegis/aegis_debug/tracing/instances/aegis ];then\n            echo > /usr/local/aegis/aegis_debug/tracing/instances/aegis/set_event\n        else\n            echo > /usr/local/aegis/aegis_debug/tracing/set_event\n        fi\n    fi\n    \n    if [ -d /sys/kernel/debug ];then\n        if [ -d /sys/kernel/debug/tracing/instances/aegis ];then\n            echo > /sys/kernel/debug/tracing/instances/aegis/set_event\n        else\n            echo > /sys/kernel/debug/tracing/set_event\n        fi\n    fi\n    \n    printf "%-40s %40s\\n" "Stopping aegis" "[  OK  ]"\n}\n\nremove_aegis(){\nif [ -d /usr/local/aegis ];then\n    rm -rf /usr/local/aegis/aegis_client\n    rm -rf /usr/local/aegis/aegis_update\n\trm -rf /usr/local/aegis/alihids\nfi\n\nif [ -d /usr/local/aegis/aegis_debug ];then\n    umount /usr/local/aegis/aegis_debug\n    rm -rf /usr/local/aegis/aegis_debug\nfi\n}\n\nuninstall_service() {\n   \n   if [ -f "/etc/init.d/aegis" ]; then\n\t\t/etc/init.d/aegis stop  >/dev/null 2>&1\n\t\trm -f /etc/init.d/aegis \n   fi\n\n\tif [ $LINUX_RELEASE = "GENTOO" ]; then\n\t\trc-update del aegis default 2>/dev/null\n\t\tif [ -f "/etc/runlevels/default/aegis" ]; then\n\t\t\trm -f "/etc/runlevels/default/aegis" >/dev/null 2>&1;\n\t\tfi\n    elif [ -f /etc/init.d/aegis ]; then\n         /etc/init.d/aegis  uninstall\n\t    for ((var=2; var<=5; var++)) do\n\t\t\tif [ -d "/etc/rc${var}.d/" ];then\n\t\t\t\t rm -f "/etc/rc${var}.d/S80aegis"\n\t\t    elif [ -d "/etc/rc.d/rc${var}.d" ];then\n\t\t\t\trm -f "/etc/rc.d/rc${var}.d/S80aegis"\n\t\t\tfi\n\t\tdone\n    fi\n\n}\n\nstop_aegis\nuninstall_service\nremove_aegis\n\n\nprintf "%-40s %40s\\n" "Uninstalling aegis"  "[  OK  ]"\n\n\n\n')])])]),t("h2",{attrs:{id:"卸载阿里云定时任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载阿里云定时任务"}},[n._v("#")]),n._v(" 卸载阿里云定时任务")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('#!/bin/bash\n\n#check linux Gentoo os \nvar=`lsb_release -a | grep Gentoo`\nif [ -z "${var}" ]; then \n\tvar=`cat /etc/issue | grep Gentoo`\nfi\n\nif [ -d "/etc/runlevels/default" -a -n "${var}" ]; then\n\tLINUX_RELEASE="GENTOO"\nelse\n\tLINUX_RELEASE="OTHER"\nfi\n\nstop_aegis(){\n\tkillall -9 aegis_cli >/dev/null 2>&1\n\tkillall -9 aegis_update >/dev/null 2>&1\n\tkillall -9 aegis_cli >/dev/null 2>&1\n    printf "%-40s %40s\\n" "Stopping aegis" "[  OK  ]"\n}\n\nstop_quartz(){\n\tkillall -9 aegis_quartz >/dev/null 2>&1\n        printf "%-40s %40s\\n" "Stopping quartz" "[  OK  ]"\n}\n\nremove_aegis(){\nif [ -d /usr/local/aegis ];then\n    rm -rf /usr/local/aegis/aegis_client\n    rm -rf /usr/local/aegis/aegis_update\nfi\n}\n\nremove_quartz(){\nif [ -d /usr/local/aegis ];then\n\trm -rf /usr/local/aegis/aegis_quartz\nfi\n}\n\n\nuninstall_service() {\n   \n   if [ -f "/etc/init.d/aegis" ]; then\n\t\t/etc/init.d/aegis stop  >/dev/null 2>&1\n\t\trm -f /etc/init.d/aegis \n   fi\n\n\tif [ $LINUX_RELEASE = "GENTOO" ]; then\n\t\trc-update del aegis default 2>/dev/null\n\t\tif [ -f "/etc/runlevels/default/aegis" ]; then\n\t\t\trm -f "/etc/runlevels/default/aegis" >/dev/null 2>&1;\n\t\tfi\n    elif [ -f /etc/init.d/aegis ]; then\n         /etc/init.d/aegis  uninstall\n\t    for ((var=2; var<=5; var++)) do\n\t\t\tif [ -d "/etc/rc${var}.d/" ];then\n\t\t\t\t rm -f "/etc/rc${var}.d/S80aegis"\n\t\t    elif [ -d "/etc/rc.d/rc${var}.d" ];then\n\t\t\t\trm -f "/etc/rc.d/rc${var}.d/S80aegis"\n\t\t\tfi\n\t\tdone\n    fi\n\n}\n\nstop_aegis\nstop_quartz\nuninstall_service\nremove_aegis\nremove_quartz\n\nprintf "%-40s %40s\\n" "Uninstalling aegis_quartz"  "[  OK  ]"\n\n\n\n')])])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);