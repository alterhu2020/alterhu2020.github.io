---
title: scrapy2版本新特性
---

> 2020年3月3日发布了scrapy2.0.0版本，增加了一些新的特性功能。

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## 新版特性

Scrapy 2.0.0 (2020-03-03)
-------------------------

Highlights:

* 去掉Python2支持 Python 2 support has been removed
* 部分协程语法支持和实验性异步支持:`Partial <topics/coroutines>` :ref:`coroutine syntax <async>` support
  and :doc:`experimental <topics/asyncio>` :mod:`asyncio` support
* 增加新的方法，支持多媒体:`Response.follow_all <scrapy.http.Response.follow_all>` method
* FTP对媒体管道的支持:`FTP support <media-pipeline-ftp>` for media pipelines
* 增加新的属性:`Response.certificate <scrapy.http.Response.certificate>`
  attribute
* IPv6支持，通过设置参数:`DNS_RESOLVER`


Backward-incompatible changes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*   Python 2 support has been removed, following `Python 2 end-of-life on
    January 1, 2020`_ (:issue:`4091`, :issue:`4114`, :issue:`4115`,
    :issue:`4121`, :issue:`4138`, :issue:`4231`, :issue:`4242`, :issue:`4304`,
    :issue:`4309`, :issue:`4373`)

*   Retry gaveups (see :setting:`RETRY_TIMES`) are now logged as errors instead
    of as debug information (:issue:`3171`, :issue:`3566`)

*   File extensions that
    :class:`LinkExtractor <scrapy.linkextractors.lxmlhtml.LxmlLinkExtractor>`
    ignores by default now also include ``7z``, ``7zip``, ``apk``, ``bz2``,
    ``cdr``, ``dmg``, ``ico``, ``iso``, ``tar``, ``tar.gz``, ``webm``, and
    ``xz`` (:issue:`1837`, :issue:`2067`, :issue:`4066`)

*   The :setting:`METAREFRESH_IGNORE_TAGS` setting is now an empty list by
    default, following web browser behavior (:issue:`3844`, :issue:`4311`)

*   The
    :class:`~scrapy.downloadermiddlewares.httpcompression.HttpCompressionMiddleware`
    now includes spaces after commas in the value of the ``Accept-Encoding``
    header that it sets, following web browser behavior (:issue:`4293`)

*   The ``__init__`` method of custom download handlers (see
    :setting:`DOWNLOAD_HANDLERS`) or subclasses of the following downloader
    handlers  no longer receives a ``settings`` parameter:

    *   :class:`scrapy.core.downloader.handlers.datauri.DataURIDownloadHandler`

    *   :class:`scrapy.core.downloader.handlers.file.FileDownloadHandler`

    Use the ``from_settings`` or ``from_crawler`` class methods to expose such
    a parameter to your custom download handlers.

    (:issue:`4126`)

*   We have refactored the :class:`scrapy.core.scheduler.Scheduler` class and
    related queue classes (see :setting:`SCHEDULER_PRIORITY_QUEUE`,
    :setting:`SCHEDULER_DISK_QUEUE` and :setting:`SCHEDULER_MEMORY_QUEUE`) to
    make it easier to implement custom scheduler queue classes. See
    :ref:`2-0-0-scheduler-queue-changes` below for details.

*   Overridden settings are now logged in a different format. This is more in
    line with similar information logged at startup (:issue:`4199`)

.. _Python 2 end-of-life on January 1, 2020: https://www.python.org/doc/sunset-python-2/


Deprecation removals
~~~~~~~~~~~~~~~~~~~~

*   The :ref:`Scrapy shell <topics-shell>` no longer provides a `sel` proxy
    object, use :meth:`response.selector <scrapy.http.Response.selector>`
    instead (:issue:`4347`)

*   LevelDB support has been removed (:issue:`4112`)

*   The following functions have been removed from :mod:`scrapy.utils.python`:
    ``isbinarytext``, ``is_writable``, ``setattr_default``, ``stringify_dict``
    (:issue:`4362`)


Deprecations
~~~~~~~~~~~~

*   Using environment variables prefixed with ``SCRAPY_`` to override settings
    is deprecated (:issue:`4300`, :issue:`4374`, :issue:`4375`)

*   :class:`scrapy.linkextractors.FilteringLinkExtractor` is deprecated, use
    :class:`scrapy.linkextractors.LinkExtractor
    <scrapy.linkextractors.lxmlhtml.LxmlLinkExtractor>` instead (:issue:`4045`)

*   The ``noconnect`` query string argument of proxy URLs is deprecated and
    should be removed from proxy URLs (:issue:`4198`)

*   The :meth:`next <scrapy.utils.python.MutableChain.next>` method of
    :class:`scrapy.utils.python.MutableChain` is deprecated, use the global
    :func:`next` function or :meth:`MutableChain.__next__
    <scrapy.utils.python.MutableChain.__next__>` instead (:issue:`4153`)


New features
~~~~~~~~~~~~

*   Added :doc:`partial support <topics/coroutines>` for Python’s
    :ref:`coroutine syntax <async>` and :doc:`experimental support
    <topics/asyncio>` for :mod:`asyncio` and :mod:`asyncio`-powered libraries
    (:issue:`4010`, :issue:`4259`, :issue:`4269`, :issue:`4270`, :issue:`4271`,
    :issue:`4316`, :issue:`4318`)

*   The new :meth:`Response.follow_all <scrapy.http.Response.follow_all>`
    method offers the same functionality as
    :meth:`Response.follow <scrapy.http.Response.follow>` but supports an
    iterable of URLs as input and returns an iterable of requests
    (:issue:`2582`, :issue:`4057`, :issue:`4286`)

*   :ref:`Media pipelines <topics-media-pipeline>` now support :ref:`FTP
    storage <media-pipeline-ftp>` (:issue:`3928`, :issue:`3961`)

*   The new :attr:`Response.certificate <scrapy.http.Response.certificate>`
    attribute exposes the SSL certificate of the server as a
    :class:`twisted.internet.ssl.Certificate` object for HTTPS responses
    (:issue:`2726`, :issue:`4054`)

*   A new :setting:`DNS_RESOLVER` setting allows enabling IPv6 support
    (:issue:`1031`, :issue:`4227`)

*   A new :setting:`SCRAPER_SLOT_MAX_ACTIVE_SIZE` setting allows configuring
    the existing soft limit that pauses request downloads when the total
    response data being processed is too high (:issue:`1410`, :issue:`3551`)

*   A new :setting:`TWISTED_REACTOR` setting allows customizing the
    :mod:`~twisted.internet.reactor` that Scrapy uses, allowing to
    :doc:`enable asyncio support <topics/asyncio>` or deal with a
    :ref:`common macOS issue <faq-specific-reactor>` (:issue:`2905`,
    :issue:`4294`)

*   Scheduler disk and memory queues may now use the class methods
    ``from_crawler`` or ``from_settings`` (:issue:`3884`)

*   The new :attr:`Response.cb_kwargs <scrapy.http.Response.cb_kwargs>`
    attribute serves as a shortcut for :attr:`Response.request.cb_kwargs
    <scrapy.http.Request.cb_kwargs>` (:issue:`4331`)

*   :meth:`Response.follow <scrapy.http.Response.follow>` now supports a
    ``flags`` parameter, for consistency with :class:`~scrapy.http.Request`
    (:issue:`4277`, :issue:`4279`)

*   :ref:`Item loader processors <topics-loaders-processors>` can now be
    regular functions, they no longer need to be methods (:issue:`3899`)

*   :class:`~scrapy.spiders.Rule` now accepts an ``errback`` parameter
    (:issue:`4000`)

*   :class:`~scrapy.http.Request` no longer requires a ``callback`` parameter
    when an ``errback`` parameter is specified (:issue:`3586`, :issue:`4008`)

*   :class:`~scrapy.logformatter.LogFormatter` now supports some additional
    methods:

    *   :class:`~scrapy.logformatter.LogFormatter.download_error` for
        download errors

    *   :class:`~scrapy.logformatter.LogFormatter.item_error` for exceptions
        raised during item processing by :ref:`item pipelines
        <topics-item-pipeline>`

    *   :class:`~scrapy.logformatter.LogFormatter.spider_error` for exceptions
        raised from :ref:`spider callbacks <topics-spiders>`

    (:issue:`374`, :issue:`3986`, :issue:`3989`, :issue:`4176`, :issue:`4188`)

*   The :setting:`FEED_URI` setting now supports :class:`pathlib.Path` values
    (:issue:`3731`, :issue:`4074`)

*   A new :signal:`request_left_downloader` signal is sent when a request
    leaves the downloader (:issue:`4303`)

*   Scrapy logs a warning when it detects a request callback or errback that
    uses ``yield`` but also returns a value, since the returned value would be
    lost (:issue:`3484`, :issue:`3869`)

*   :class:`~scrapy.spiders.Spider` objects now raise an :exc:`AttributeError`
    exception if they do not have a :class:`~scrapy.spiders.Spider.start_urls`
    attribute nor reimplement :class:`~scrapy.spiders.Spider.start_requests`,
    but have a ``start_url`` attribute (:issue:`4133`, :issue:`4170`)

*   :class:`~scrapy.exporters.BaseItemExporter` subclasses may now use
    ``super().__init__(**kwargs)`` instead of ``self._configure(kwargs)`` in
    their ``__init__`` method, passing ``dont_fail=True`` to the parent
    ``__init__`` method if needed, and accessing ``kwargs`` at ``self._kwargs``
    after calling their parent ``__init__`` method (:issue:`4193`,
    :issue:`4370`)

*   A new ``keep_fragments`` parameter of
    :func:`scrapy.utils.request.request_fingerprint` allows to generate
    different fingerprints for requests with different fragments in their URL
    (:issue:`4104`)

*   Download handlers (see :setting:`DOWNLOAD_HANDLERS`) may now use the
    ``from_settings`` and ``from_crawler`` class methods that other Scrapy
    components already supported (:issue:`4126`)

*   :class:`scrapy.utils.python.MutableChain.__iter__` now returns ``self``,
    `allowing it to be used as a sequence <https://lgtm.com/rules/4850080/>`_
    (:issue:`4153`)


Bug fixes
~~~~~~~~~

*   The :command:`crawl` command now also exits with exit code 1 when an
    exception happens before the crawling starts (:issue:`4175`, :issue:`4207`)

*   :class:`LinkExtractor.extract_links
    <scrapy.linkextractors.lxmlhtml.LxmlLinkExtractor.extract_links>` no longer
    re-encodes the query string or URLs from non-UTF-8 responses in UTF-8
    (:issue:`998`, :issue:`1403`, :issue:`1949`, :issue:`4321`)

*   The first spider middleware (see :setting:`SPIDER_MIDDLEWARES`) now also
    processes exceptions raised from callbacks that are generators
    (:issue:`4260`, :issue:`4272`)

*   Redirects to URLs starting with 3 slashes (``///``) are now supported
    (:issue:`4032`, :issue:`4042`)

*   :class:`~scrapy.http.Request` no longer accepts strings as ``url`` simply
    because they have a colon (:issue:`2552`, :issue:`4094`)

*   The correct encoding is now used for attach names in
    :class:`~scrapy.mail.MailSender` (:issue:`4229`, :issue:`4239`)

*   :class:`~scrapy.dupefilters.RFPDupeFilter`, the default
    :setting:`DUPEFILTER_CLASS`, no longer writes an extra ``\r`` character on
    each line in Windows, which made the size of the ``requests.seen`` file
    unnecessarily large on that platform (:issue:`4283`)

*   Z shell auto-completion now looks for ``.html`` files, not ``.http`` files,
    and covers the ``-h`` command-line switch (:issue:`4122`, :issue:`4291`)

*   Adding items to a :class:`scrapy.utils.datatypes.LocalCache` object
    without a ``limit`` defined no longer raises a :exc:`TypeError` exception
    (:issue:`4123`)

*   Fixed a typo in the message of the :exc:`ValueError` exception raised when
    :func:`scrapy.utils.misc.create_instance` gets both ``settings`` and
    ``crawler`` set to ``None`` (:issue:`4128`)


Documentation
~~~~~~~~~~~~~

*   API documentation now links to an online, syntax-highlighted view of the
    corresponding source code (:issue:`4148`)

*   Links to unexisting documentation pages now allow access to the sidebar
    (:issue:`4152`, :issue:`4169`)

*   Cross-references within our documentation now display a tooltip when
    hovered (:issue:`4173`, :issue:`4183`)

*   Improved the documentation about :meth:`LinkExtractor.extract_links
    <scrapy.linkextractors.lxmlhtml.LxmlLinkExtractor.extract_links>` and
    simplified :ref:`topics-link-extractors` (:issue:`4045`)

*   Clarified how :class:`ItemLoader.item <scrapy.loader.ItemLoader.item>`
    works (:issue:`3574`, :issue:`4099`)

*   Clarified that :func:`logging.basicConfig` should not be used when also
    using :class:`~scrapy.crawler.CrawlerProcess` (:issue:`2149`,
    :issue:`2352`, :issue:`3146`, :issue:`3960`)

*   Clarified the requirements for :class:`~scrapy.http.Request` objects
    :ref:`when using persistence <request-serialization>` (:issue:`4124`,
    :issue:`4139`)

*   Clarified how to install a :ref:`custom image pipeline
    <media-pipeline-example>` (:issue:`4034`, :issue:`4252`)

*   Fixed the signatures of the ``file_path`` method in :ref:`media pipeline
    <topics-media-pipeline>` examples (:issue:`4290`)

*   Covered a backward-incompatible change in Scrapy 1.7.0 affecting custom
    :class:`scrapy.core.scheduler.Scheduler` subclasses (:issue:`4274`)

*   Improved the ``README.rst`` and ``CODE_OF_CONDUCT.md`` files
    (:issue:`4059`)

*   Documentation examples are now checked as part of our test suite and we
    have fixed some of the issues detected (:issue:`4142`, :issue:`4146`,
    :issue:`4171`, :issue:`4184`, :issue:`4190`)

*   Fixed logic issues, broken links and typos (:issue:`4247`, :issue:`4258`,
    :issue:`4282`, :issue:`4288`, :issue:`4305`, :issue:`4308`, :issue:`4323`,
    :issue:`4338`, :issue:`4359`, :issue:`4361`)

*   Improved consistency when referring to the ``__init__`` method of an object
    (:issue:`4086`, :issue:`4088`)

*   Fixed an inconsistency between code and output in :ref:`intro-overview`
    (:issue:`4213`)

*   Extended :mod:`~sphinx.ext.intersphinx` usage (:issue:`4147`,
    :issue:`4172`, :issue:`4185`, :issue:`4194`, :issue:`4197`)

*   We now use a recent version of Python to build the documentation
    (:issue:`4140`, :issue:`4249`)

*   Cleaned up documentation (:issue:`4143`, :issue:`4275`)


Quality assurance
~~~~~~~~~~~~~~~~~

*   Re-enabled proxy ``CONNECT`` tests (:issue:`2545`, :issue:`4114`)

*   Added Bandit_ security checks to our test suite (:issue:`4162`,
    :issue:`4181`)

*   Added Flake8_ style checks to our test suite and applied many of the
    corresponding changes (:issue:`3944`, :issue:`3945`, :issue:`4137`,
    :issue:`4157`, :issue:`4167`, :issue:`4174`, :issue:`4186`, :issue:`4195`,
    :issue:`4238`, :issue:`4246`, :issue:`4355`, :issue:`4360`, :issue:`4365`)

*   Improved test coverage (:issue:`4097`, :issue:`4218`, :issue:`4236`)

*   Started reporting slowest tests, and improved the performance of some of
    them (:issue:`4163`, :issue:`4164`)

*   Fixed broken tests and refactored some tests (:issue:`4014`, :issue:`4095`,
    :issue:`4244`, :issue:`4268`, :issue:`4372`)

*   Modified the :doc:`tox <tox:index>` configuration to allow running tests
    with any Python version, run Bandit_ and Flake8_ tests by default, and
    enforce a minimum tox version programmatically (:issue:`4179`)

*   Cleaned up code (:issue:`3937`, :issue:`4208`, :issue:`4209`,
    :issue:`4210`, :issue:`4212`, :issue:`4369`, :issue:`4376`, :issue:`4378`)

.. _Bandit: https://bandit.readthedocs.io/
.. _Flake8: https://flake8.pycqa.org/en/latest/


.. _2-0-0-scheduler-queue-changes:

Changes to scheduler queue classes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following changes may impact any custom queue classes of all types:

*   The ``push`` method no longer receives a second positional parameter
    containing ``request.priority * -1``. If you need that value, get it
    from the first positional parameter, ``request``, instead, or use
    the new :meth:`~scrapy.core.scheduler.ScrapyPriorityQueue.priority`
    method in :class:`scrapy.core.scheduler.ScrapyPriorityQueue`
    subclasses.

The following changes may impact custom priority queue classes:

*   In the ``__init__`` method or the ``from_crawler`` or ``from_settings``
    class methods:

    *   The parameter that used to contain a factory function,
        ``qfactory``, is now passed as a keyword parameter named
        ``downstream_queue_cls``.

    *   A new keyword parameter has been added: ``key``. It is a string
        that is always an empty string for memory queues and indicates the
        :setting:`JOB_DIR` value for disk queues.

    *   The parameter for disk queues that contains data from the previous
        crawl, ``startprios`` or ``slot_startprios``, is now passed as a
        keyword parameter named ``startprios``.

    *   The ``serialize`` parameter is no longer passed. The disk queue
        class must take care of request serialization on its own before
        writing to disk, using the
        :func:`~scrapy.utils.reqser.request_to_dict` and
        :func:`~scrapy.utils.reqser.request_from_dict` functions from the
        :mod:`scrapy.utils.reqser` module.

The following changes may impact custom disk and memory queue classes:

*   The signature of the ``__init__`` method is now
    ``__init__(self, crawler, key)``.

The following changes affect specifically the
:class:`~scrapy.core.scheduler.ScrapyPriorityQueue` and
:class:`~scrapy.core.scheduler.DownloaderAwarePriorityQueue` classes from
:mod:`scrapy.core.scheduler` and may affect subclasses:

*   In the ``__init__`` method, most of the changes described above apply.

    ``__init__`` may still receive all parameters as positional parameters,
    however:

    *   ``downstream_queue_cls``, which replaced ``qfactory``, must be
        instantiated differently.

        ``qfactory`` was instantiated with a priority value (integer).

        Instances of ``downstream_queue_cls`` should be created using
        the new
        :meth:`ScrapyPriorityQueue.qfactory <scrapy.core.scheduler.ScrapyPriorityQueue.qfactory>`
        or
        :meth:`DownloaderAwarePriorityQueue.pqfactory <scrapy.core.scheduler.DownloaderAwarePriorityQueue.pqfactory>`
        methods.

    *   The new ``key`` parameter displaced the ``startprios``
        parameter 1 position to the right.

*   The following class attributes have been added:

    *   :attr:`~scrapy.core.scheduler.ScrapyPriorityQueue.crawler`

    *   :attr:`~scrapy.core.scheduler.ScrapyPriorityQueue.downstream_queue_cls`
        (details above)

    *   :attr:`~scrapy.core.scheduler.ScrapyPriorityQueue.key` (details above)

*   The ``serialize`` attribute has been removed (details above)

The following changes affect specifically the
:class:`~scrapy.core.scheduler.ScrapyPriorityQueue` class and may affect
subclasses:

*   A new :meth:`~scrapy.core.scheduler.ScrapyPriorityQueue.priority`
    method has been added which, given a request, returns
    ``request.priority * -1``.

    It is used in :meth:`~scrapy.core.scheduler.ScrapyPriorityQueue.push`
    to make up for the removal of its ``priority`` parameter.

*   The ``spider`` attribute has been removed. Use
    :attr:`crawler.spider <scrapy.core.scheduler.ScrapyPriorityQueue.crawler>`
    instead.

The following changes affect specifically the
:class:`~scrapy.core.scheduler.DownloaderAwarePriorityQueue` class and may
affect subclasses:

*   A new :attr:`~scrapy.core.scheduler.DownloaderAwarePriorityQueue.pqueues`
    attribute offers a mapping of downloader slot names to the
    corresponding instances of
    :attr:`~scrapy.core.scheduler.DownloaderAwarePriorityQueue.downstream_queue_cls`.

(:issue:`3884`)

