Wrapper for iLib, a cross-engine library of internationalization (i18n) classes written in pure JS.

Exports `ilib` on the server.

    var d = ilib.Date.newInstance();
    var f = new ilib.DateFmt({
        locale: "de-DE",
        type: "datetime",
        length: "long",
        timezone: "Europe/Berlin"
    });
 
    f.format(d);

Result would be:

    '07:45 06. Nov. 2014'

More information available at [https://www.npmjs.com/package/ilib](https://www.npmjs.com/package/ilib)
