(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{325:function(e,s,n){"use strict";n.r(s);var t=n(9),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("blockquote",[n("p",[e._v("2020年3月3日发布了scrapy2.0.0版本，增加了一些新的特性功能。")])]),e._v(" "),n("ClientOnly",[n("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),e._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#新版特性"}},[e._v("新版特性")])]),n("li",[n("a",{attrs:{href:"#scrapy-2-0-0-2020-03-03"}},[e._v("Scrapy 2.0.0 (2020-03-03)")])])])]),n("p"),e._v(" "),n("h2",{attrs:{id:"新版特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新版特性"}},[e._v("#")]),e._v(" 新版特性")]),e._v(" "),n("h2",{attrs:{id:"scrapy-2-0-0-2020-03-03"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#scrapy-2-0-0-2020-03-03"}},[e._v("#")]),e._v(" Scrapy 2.0.0 (2020-03-03)")]),e._v(" "),n("p",[e._v("Highlights:")]),e._v(" "),n("ul",[n("li",[e._v("去掉Python2支持 Python 2 support has been removed")]),e._v(" "),n("li",[e._v("部分协程语法支持和实验性异步支持:"),n("code",[e._v("Partial <topics/coroutines>")]),e._v(" :ref:"),n("code",[e._v("coroutine syntax <async>")]),e._v(" support\nand :doc:"),n("code",[e._v("experimental <topics/asyncio>")]),e._v(" :mod:"),n("code",[e._v("asyncio")]),e._v(" support")]),e._v(" "),n("li",[e._v("增加新的方法，支持多媒体:"),n("code",[e._v("Response.follow_all <scrapy.http.Response.follow_all>")]),e._v(" method")]),e._v(" "),n("li",[e._v("FTP对媒体管道的支持:"),n("code",[e._v("FTP support <media-pipeline-ftp>")]),e._v(" for media pipelines")]),e._v(" "),n("li",[e._v("增加新的属性:"),n("code",[e._v("Response.certificate <scrapy.http.Response.certificate>")]),e._v("\nattribute")]),e._v(" "),n("li",[e._v("IPv6支持，通过设置参数:"),n("code",[e._v("DNS_RESOLVER")])])]),e._v(" "),n("p",[e._v("Backward-incompatible changes")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n*   Python 2 support has been removed, following `Python 2 end-of-life on\n    January 1, 2020`_ (:issue:`4091`, :issue:`4114`, :issue:`4115`,\n    :issue:`4121`, :issue:`4138`, :issue:`4231`, :issue:`4242`, :issue:`4304`,\n    :issue:`4309`, :issue:`4373`)\n\n*   Retry gaveups (see :setting:`RETRY_TIMES`) are now logged as errors instead\n    of as debug information (:issue:`3171`, :issue:`3566`)\n\n*   File extensions that\n    :class:`LinkExtractor <scrapy.linkextractors.lxmlhtml.LxmlLinkExtractor>`\n    ignores by default now also include ``7z``, ``7zip``, ``apk``, ``bz2``,\n    ``cdr``, ``dmg``, ``ico``, ``iso``, ``tar``, ``tar.gz``, ``webm``, and\n    ``xz`` (:issue:`1837`, :issue:`2067`, :issue:`4066`)\n\n*   The :setting:`METAREFRESH_IGNORE_TAGS` setting is now an empty list by\n    default, following web browser behavior (:issue:`3844`, :issue:`4311`)\n\n*   The\n    :class:`~scrapy.downloadermiddlewares.httpcompression.HttpCompressionMiddleware`\n    now includes spaces after commas in the value of the ``Accept-Encoding``\n    header that it sets, following web browser behavior (:issue:`4293`)\n\n*   The ``__init__`` method of custom download handlers (see\n    :setting:`DOWNLOAD_HANDLERS`) or subclasses of the following downloader\n    handlers  no longer receives a ``settings`` parameter:\n\n    *   :class:`scrapy.core.downloader.handlers.datauri.DataURIDownloadHandler`\n\n    *   :class:`scrapy.core.downloader.handlers.file.FileDownloadHandler`\n\n    Use the ``from_settings`` or ``from_crawler`` class methods to expose such\n    a parameter to your custom download handlers.\n\n    (:issue:`4126`)\n\n*   We have refactored the :class:`scrapy.core.scheduler.Scheduler` class and\n    related queue classes (see :setting:`SCHEDULER_PRIORITY_QUEUE`,\n    :setting:`SCHEDULER_DISK_QUEUE` and :setting:`SCHEDULER_MEMORY_QUEUE`) to\n    make it easier to implement custom scheduler queue classes. See\n    :ref:`2-0-0-scheduler-queue-changes` below for details.\n\n*   Overridden settings are now logged in a different format. This is more in\n    line with similar information logged at startup (:issue:`4199`)\n\n.. _Python 2 end-of-life on January 1, 2020: https://www.python.org/doc/sunset-python-2/\n\n\nDeprecation removals\n~~~~~~~~~~~~~~~~~~~~\n\n*   The :ref:`Scrapy shell <topics-shell>` no longer provides a `sel` proxy\n    object, use :meth:`response.selector <scrapy.http.Response.selector>`\n    instead (:issue:`4347`)\n\n*   LevelDB support has been removed (:issue:`4112`)\n\n*   The following functions have been removed from :mod:`scrapy.utils.python`:\n    ``isbinarytext``, ``is_writable``, ``setattr_default``, ``stringify_dict``\n    (:issue:`4362`)\n\n\nDeprecations\n~~~~~~~~~~~~\n\n*   Using environment variables prefixed with ``SCRAPY_`` to override settings\n    is deprecated (:issue:`4300`, :issue:`4374`, :issue:`4375`)\n\n*   :class:`scrapy.linkextractors.FilteringLinkExtractor` is deprecated, use\n    :class:`scrapy.linkextractors.LinkExtractor\n    <scrapy.linkextractors.lxmlhtml.LxmlLinkExtractor>` instead (:issue:`4045`)\n\n*   The ``noconnect`` query string argument of proxy URLs is deprecated and\n    should be removed from proxy URLs (:issue:`4198`)\n\n*   The :meth:`next <scrapy.utils.python.MutableChain.next>` method of\n    :class:`scrapy.utils.python.MutableChain` is deprecated, use the global\n    :func:`next` function or :meth:`MutableChain.__next__\n    <scrapy.utils.python.MutableChain.__next__>` instead (:issue:`4153`)\n\n\nNew features\n~~~~~~~~~~~~\n\n*   Added :doc:`partial support <topics/coroutines>` for Python’s\n    :ref:`coroutine syntax <async>` and :doc:`experimental support\n    <topics/asyncio>` for :mod:`asyncio` and :mod:`asyncio`-powered libraries\n    (:issue:`4010`, :issue:`4259`, :issue:`4269`, :issue:`4270`, :issue:`4271`,\n    :issue:`4316`, :issue:`4318`)\n\n*   The new :meth:`Response.follow_all <scrapy.http.Response.follow_all>`\n    method offers the same functionality as\n    :meth:`Response.follow <scrapy.http.Response.follow>` but supports an\n    iterable of URLs as input and returns an iterable of requests\n    (:issue:`2582`, :issue:`4057`, :issue:`4286`)\n\n*   :ref:`Media pipelines <topics-media-pipeline>` now support :ref:`FTP\n    storage <media-pipeline-ftp>` (:issue:`3928`, :issue:`3961`)\n\n*   The new :attr:`Response.certificate <scrapy.http.Response.certificate>`\n    attribute exposes the SSL certificate of the server as a\n    :class:`twisted.internet.ssl.Certificate` object for HTTPS responses\n    (:issue:`2726`, :issue:`4054`)\n\n*   A new :setting:`DNS_RESOLVER` setting allows enabling IPv6 support\n    (:issue:`1031`, :issue:`4227`)\n\n*   A new :setting:`SCRAPER_SLOT_MAX_ACTIVE_SIZE` setting allows configuring\n    the existing soft limit that pauses request downloads when the total\n    response data being processed is too high (:issue:`1410`, :issue:`3551`)\n\n*   A new :setting:`TWISTED_REACTOR` setting allows customizing the\n    :mod:`~twisted.internet.reactor` that Scrapy uses, allowing to\n    :doc:`enable asyncio support <topics/asyncio>` or deal with a\n    :ref:`common macOS issue <faq-specific-reactor>` (:issue:`2905`,\n    :issue:`4294`)\n\n*   Scheduler disk and memory queues may now use the class methods\n    ``from_crawler`` or ``from_settings`` (:issue:`3884`)\n\n*   The new :attr:`Response.cb_kwargs <scrapy.http.Response.cb_kwargs>`\n    attribute serves as a shortcut for :attr:`Response.request.cb_kwargs\n    <scrapy.http.Request.cb_kwargs>` (:issue:`4331`)\n\n*   :meth:`Response.follow <scrapy.http.Response.follow>` now supports a\n    ``flags`` parameter, for consistency with :class:`~scrapy.http.Request`\n    (:issue:`4277`, :issue:`4279`)\n\n*   :ref:`Item loader processors <topics-loaders-processors>` can now be\n    regular functions, they no longer need to be methods (:issue:`3899`)\n\n*   :class:`~scrapy.spiders.Rule` now accepts an ``errback`` parameter\n    (:issue:`4000`)\n\n*   :class:`~scrapy.http.Request` no longer requires a ``callback`` parameter\n    when an ``errback`` parameter is specified (:issue:`3586`, :issue:`4008`)\n\n*   :class:`~scrapy.logformatter.LogFormatter` now supports some additional\n    methods:\n\n    *   :class:`~scrapy.logformatter.LogFormatter.download_error` for\n        download errors\n\n    *   :class:`~scrapy.logformatter.LogFormatter.item_error` for exceptions\n        raised during item processing by :ref:`item pipelines\n        <topics-item-pipeline>`\n\n    *   :class:`~scrapy.logformatter.LogFormatter.spider_error` for exceptions\n        raised from :ref:`spider callbacks <topics-spiders>`\n\n    (:issue:`374`, :issue:`3986`, :issue:`3989`, :issue:`4176`, :issue:`4188`)\n\n*   The :setting:`FEED_URI` setting now supports :class:`pathlib.Path` values\n    (:issue:`3731`, :issue:`4074`)\n\n*   A new :signal:`request_left_downloader` signal is sent when a request\n    leaves the downloader (:issue:`4303`)\n\n*   Scrapy logs a warning when it detects a request callback or errback that\n    uses ``yield`` but also returns a value, since the returned value would be\n    lost (:issue:`3484`, :issue:`3869`)\n\n*   :class:`~scrapy.spiders.Spider` objects now raise an :exc:`AttributeError`\n    exception if they do not have a :class:`~scrapy.spiders.Spider.start_urls`\n    attribute nor reimplement :class:`~scrapy.spiders.Spider.start_requests`,\n    but have a ``start_url`` attribute (:issue:`4133`, :issue:`4170`)\n\n*   :class:`~scrapy.exporters.BaseItemExporter` subclasses may now use\n    ``super().__init__(**kwargs)`` instead of ``self._configure(kwargs)`` in\n    their ``__init__`` method, passing ``dont_fail=True`` to the parent\n    ``__init__`` method if needed, and accessing ``kwargs`` at ``self._kwargs``\n    after calling their parent ``__init__`` method (:issue:`4193`,\n    :issue:`4370`)\n\n*   A new ``keep_fragments`` parameter of\n    :func:`scrapy.utils.request.request_fingerprint` allows to generate\n    different fingerprints for requests with different fragments in their URL\n    (:issue:`4104`)\n\n*   Download handlers (see :setting:`DOWNLOAD_HANDLERS`) may now use the\n    ``from_settings`` and ``from_crawler`` class methods that other Scrapy\n    components already supported (:issue:`4126`)\n\n*   :class:`scrapy.utils.python.MutableChain.__iter__` now returns ``self``,\n    `allowing it to be used as a sequence <https://lgtm.com/rules/4850080/>`_\n    (:issue:`4153`)\n\n\nBug fixes\n~~~~~~~~~\n\n*   The :command:`crawl` command now also exits with exit code 1 when an\n    exception happens before the crawling starts (:issue:`4175`, :issue:`4207`)\n\n*   :class:`LinkExtractor.extract_links\n    <scrapy.linkextractors.lxmlhtml.LxmlLinkExtractor.extract_links>` no longer\n    re-encodes the query string or URLs from non-UTF-8 responses in UTF-8\n    (:issue:`998`, :issue:`1403`, :issue:`1949`, :issue:`4321`)\n\n*   The first spider middleware (see :setting:`SPIDER_MIDDLEWARES`) now also\n    processes exceptions raised from callbacks that are generators\n    (:issue:`4260`, :issue:`4272`)\n\n*   Redirects to URLs starting with 3 slashes (``///``) are now supported\n    (:issue:`4032`, :issue:`4042`)\n\n*   :class:`~scrapy.http.Request` no longer accepts strings as ``url`` simply\n    because they have a colon (:issue:`2552`, :issue:`4094`)\n\n*   The correct encoding is now used for attach names in\n    :class:`~scrapy.mail.MailSender` (:issue:`4229`, :issue:`4239`)\n\n*   :class:`~scrapy.dupefilters.RFPDupeFilter`, the default\n    :setting:`DUPEFILTER_CLASS`, no longer writes an extra ``\\r`` character on\n    each line in Windows, which made the size of the ``requests.seen`` file\n    unnecessarily large on that platform (:issue:`4283`)\n\n*   Z shell auto-completion now looks for ``.html`` files, not ``.http`` files,\n    and covers the ``-h`` command-line switch (:issue:`4122`, :issue:`4291`)\n\n*   Adding items to a :class:`scrapy.utils.datatypes.LocalCache` object\n    without a ``limit`` defined no longer raises a :exc:`TypeError` exception\n    (:issue:`4123`)\n\n*   Fixed a typo in the message of the :exc:`ValueError` exception raised when\n    :func:`scrapy.utils.misc.create_instance` gets both ``settings`` and\n    ``crawler`` set to ``None`` (:issue:`4128`)\n\n\nDocumentation\n~~~~~~~~~~~~~\n\n*   API documentation now links to an online, syntax-highlighted view of the\n    corresponding source code (:issue:`4148`)\n\n*   Links to unexisting documentation pages now allow access to the sidebar\n    (:issue:`4152`, :issue:`4169`)\n\n*   Cross-references within our documentation now display a tooltip when\n    hovered (:issue:`4173`, :issue:`4183`)\n\n*   Improved the documentation about :meth:`LinkExtractor.extract_links\n    <scrapy.linkextractors.lxmlhtml.LxmlLinkExtractor.extract_links>` and\n    simplified :ref:`topics-link-extractors` (:issue:`4045`)\n\n*   Clarified how :class:`ItemLoader.item <scrapy.loader.ItemLoader.item>`\n    works (:issue:`3574`, :issue:`4099`)\n\n*   Clarified that :func:`logging.basicConfig` should not be used when also\n    using :class:`~scrapy.crawler.CrawlerProcess` (:issue:`2149`,\n    :issue:`2352`, :issue:`3146`, :issue:`3960`)\n\n*   Clarified the requirements for :class:`~scrapy.http.Request` objects\n    :ref:`when using persistence <request-serialization>` (:issue:`4124`,\n    :issue:`4139`)\n\n*   Clarified how to install a :ref:`custom image pipeline\n    <media-pipeline-example>` (:issue:`4034`, :issue:`4252`)\n\n*   Fixed the signatures of the ``file_path`` method in :ref:`media pipeline\n    <topics-media-pipeline>` examples (:issue:`4290`)\n\n*   Covered a backward-incompatible change in Scrapy 1.7.0 affecting custom\n    :class:`scrapy.core.scheduler.Scheduler` subclasses (:issue:`4274`)\n\n*   Improved the ``README.rst`` and ``CODE_OF_CONDUCT.md`` files\n    (:issue:`4059`)\n\n*   Documentation examples are now checked as part of our test suite and we\n    have fixed some of the issues detected (:issue:`4142`, :issue:`4146`,\n    :issue:`4171`, :issue:`4184`, :issue:`4190`)\n\n*   Fixed logic issues, broken links and typos (:issue:`4247`, :issue:`4258`,\n    :issue:`4282`, :issue:`4288`, :issue:`4305`, :issue:`4308`, :issue:`4323`,\n    :issue:`4338`, :issue:`4359`, :issue:`4361`)\n\n*   Improved consistency when referring to the ``__init__`` method of an object\n    (:issue:`4086`, :issue:`4088`)\n\n*   Fixed an inconsistency between code and output in :ref:`intro-overview`\n    (:issue:`4213`)\n\n*   Extended :mod:`~sphinx.ext.intersphinx` usage (:issue:`4147`,\n    :issue:`4172`, :issue:`4185`, :issue:`4194`, :issue:`4197`)\n\n*   We now use a recent version of Python to build the documentation\n    (:issue:`4140`, :issue:`4249`)\n\n*   Cleaned up documentation (:issue:`4143`, :issue:`4275`)\n\n\nQuality assurance\n~~~~~~~~~~~~~~~~~\n\n*   Re-enabled proxy ``CONNECT`` tests (:issue:`2545`, :issue:`4114`)\n\n*   Added Bandit_ security checks to our test suite (:issue:`4162`,\n    :issue:`4181`)\n\n*   Added Flake8_ style checks to our test suite and applied many of the\n    corresponding changes (:issue:`3944`, :issue:`3945`, :issue:`4137`,\n    :issue:`4157`, :issue:`4167`, :issue:`4174`, :issue:`4186`, :issue:`4195`,\n    :issue:`4238`, :issue:`4246`, :issue:`4355`, :issue:`4360`, :issue:`4365`)\n\n*   Improved test coverage (:issue:`4097`, :issue:`4218`, :issue:`4236`)\n\n*   Started reporting slowest tests, and improved the performance of some of\n    them (:issue:`4163`, :issue:`4164`)\n\n*   Fixed broken tests and refactored some tests (:issue:`4014`, :issue:`4095`,\n    :issue:`4244`, :issue:`4268`, :issue:`4372`)\n\n*   Modified the :doc:`tox <tox:index>` configuration to allow running tests\n    with any Python version, run Bandit_ and Flake8_ tests by default, and\n    enforce a minimum tox version programmatically (:issue:`4179`)\n\n*   Cleaned up code (:issue:`3937`, :issue:`4208`, :issue:`4209`,\n    :issue:`4210`, :issue:`4212`, :issue:`4369`, :issue:`4376`, :issue:`4378`)\n\n.. _Bandit: https://bandit.readthedocs.io/\n.. _Flake8: https://flake8.pycqa.org/en/latest/\n\n\n.. _2-0-0-scheduler-queue-changes:\n\nChanges to scheduler queue classes\n")])])]),n("p",[e._v("The following changes may impact any custom queue classes of all types:")]),e._v(" "),n("ul",[n("li",[e._v("The "),n("code",[e._v("push")]),e._v(" method no longer receives a second positional parameter\ncontaining "),n("code",[e._v("request.priority * -1")]),e._v(". If you need that value, get it\nfrom the first positional parameter, "),n("code",[e._v("request")]),e._v(", instead, or use\nthe new :meth:"),n("code",[e._v("~scrapy.core.scheduler.ScrapyPriorityQueue.priority")]),e._v("\nmethod in :class:"),n("code",[e._v("scrapy.core.scheduler.ScrapyPriorityQueue")]),e._v("\nsubclasses.")])]),e._v(" "),n("p",[e._v("The following changes may impact custom priority queue classes:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("In the "),n("code",[e._v("__init__")]),e._v(" method or the "),n("code",[e._v("from_crawler")]),e._v(" or "),n("code",[e._v("from_settings")]),e._v("\nclass methods:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The parameter that used to contain a factory function,\n"),n("code",[e._v("qfactory")]),e._v(", is now passed as a keyword parameter named\n"),n("code",[e._v("downstream_queue_cls")]),e._v(".")])]),e._v(" "),n("li",[n("p",[e._v("A new keyword parameter has been added: "),n("code",[e._v("key")]),e._v(". It is a string\nthat is always an empty string for memory queues and indicates the\n:setting:"),n("code",[e._v("JOB_DIR")]),e._v(" value for disk queues.")])]),e._v(" "),n("li",[n("p",[e._v("The parameter for disk queues that contains data from the previous\ncrawl, "),n("code",[e._v("startprios")]),e._v(" or "),n("code",[e._v("slot_startprios")]),e._v(", is now passed as a\nkeyword parameter named "),n("code",[e._v("startprios")]),e._v(".")])]),e._v(" "),n("li",[n("p",[e._v("The "),n("code",[e._v("serialize")]),e._v(" parameter is no longer passed. The disk queue\nclass must take care of request serialization on its own before\nwriting to disk, using the\n:func:"),n("code",[e._v("~scrapy.utils.reqser.request_to_dict")]),e._v(" and\n:func:"),n("code",[e._v("~scrapy.utils.reqser.request_from_dict")]),e._v(" functions from the\n:mod:"),n("code",[e._v("scrapy.utils.reqser")]),e._v(" module.")])])])])]),e._v(" "),n("p",[e._v("The following changes may impact custom disk and memory queue classes:")]),e._v(" "),n("ul",[n("li",[e._v("The signature of the "),n("code",[e._v("__init__")]),e._v(" method is now\n"),n("code",[e._v("__init__(self, crawler, key)")]),e._v(".")])]),e._v(" "),n("p",[e._v("The following changes affect specifically the\n:class:"),n("code",[e._v("~scrapy.core.scheduler.ScrapyPriorityQueue")]),e._v(" and\n:class:"),n("code",[e._v("~scrapy.core.scheduler.DownloaderAwarePriorityQueue")]),e._v(" classes from\n:mod:"),n("code",[e._v("scrapy.core.scheduler")]),e._v(" and may affect subclasses:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("In the "),n("code",[e._v("__init__")]),e._v(" method, most of the changes described above apply.")]),e._v(" "),n("p",[n("code",[e._v("__init__")]),e._v(" may still receive all parameters as positional parameters,\nhowever:")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("downstream_queue_cls")]),e._v(", which replaced "),n("code",[e._v("qfactory")]),e._v(", must be\ninstantiated differently.")]),e._v(" "),n("p",[n("code",[e._v("qfactory")]),e._v(" was instantiated with a priority value (integer).")]),e._v(" "),n("p",[e._v("Instances of "),n("code",[e._v("downstream_queue_cls")]),e._v(" should be created using\nthe new\n:meth:"),n("code",[e._v("ScrapyPriorityQueue.qfactory <scrapy.core.scheduler.ScrapyPriorityQueue.qfactory>")]),e._v("\nor\n:meth:"),n("code",[e._v("DownloaderAwarePriorityQueue.pqfactory <scrapy.core.scheduler.DownloaderAwarePriorityQueue.pqfactory>")]),e._v("\nmethods.")])]),e._v(" "),n("li",[n("p",[e._v("The new "),n("code",[e._v("key")]),e._v(" parameter displaced the "),n("code",[e._v("startprios")]),e._v("\nparameter 1 position to the right.")])])])]),e._v(" "),n("li",[n("p",[e._v("The following class attributes have been added:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v(":attr:"),n("code",[e._v("~scrapy.core.scheduler.ScrapyPriorityQueue.crawler")])])]),e._v(" "),n("li",[n("p",[e._v(":attr:"),n("code",[e._v("~scrapy.core.scheduler.ScrapyPriorityQueue.downstream_queue_cls")]),e._v("\n(details above)")])]),e._v(" "),n("li",[n("p",[e._v(":attr:"),n("code",[e._v("~scrapy.core.scheduler.ScrapyPriorityQueue.key")]),e._v(" (details above)")])])])]),e._v(" "),n("li",[n("p",[e._v("The "),n("code",[e._v("serialize")]),e._v(" attribute has been removed (details above)")])])]),e._v(" "),n("p",[e._v("The following changes affect specifically the\n:class:"),n("code",[e._v("~scrapy.core.scheduler.ScrapyPriorityQueue")]),e._v(" class and may affect\nsubclasses:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("A new :meth:"),n("code",[e._v("~scrapy.core.scheduler.ScrapyPriorityQueue.priority")]),e._v("\nmethod has been added which, given a request, returns\n"),n("code",[e._v("request.priority * -1")]),e._v(".")]),e._v(" "),n("p",[e._v("It is used in :meth:"),n("code",[e._v("~scrapy.core.scheduler.ScrapyPriorityQueue.push")]),e._v("\nto make up for the removal of its "),n("code",[e._v("priority")]),e._v(" parameter.")])]),e._v(" "),n("li",[n("p",[e._v("The "),n("code",[e._v("spider")]),e._v(" attribute has been removed. Use\n:attr:"),n("code",[e._v("crawler.spider <scrapy.core.scheduler.ScrapyPriorityQueue.crawler>")]),e._v("\ninstead.")])])]),e._v(" "),n("p",[e._v("The following changes affect specifically the\n:class:"),n("code",[e._v("~scrapy.core.scheduler.DownloaderAwarePriorityQueue")]),e._v(" class and may\naffect subclasses:")]),e._v(" "),n("ul",[n("li",[e._v("A new :attr:"),n("code",[e._v("~scrapy.core.scheduler.DownloaderAwarePriorityQueue.pqueues")]),e._v("\nattribute offers a mapping of downloader slot names to the\ncorresponding instances of\n:attr:"),n("code",[e._v("~scrapy.core.scheduler.DownloaderAwarePriorityQueue.downstream_queue_cls")]),e._v(".")])]),e._v(" "),n("p",[e._v("(:issue:"),n("code",[e._v("3884")]),e._v(")")])],1)}),[],!1,null,null,null);s.default=r.exports}}]);