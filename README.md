Wrapper for iLib, a cross-engine library of internationalization (i18n) classes written in pure JS.

Install with `meteor add serkandurusoy:ilib`.

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

*PS: Javascript internationalization is now a first class citizen. This library filled in a great gap until now, but users experienced with it seem to be finding it heavy and moving on to native or more modern libraries. Nonetheless, this is a very comprehensive library, and provides access to `sortkey`s which no other library nor the native solution seems to provide. And that's exactly what I need for another package. Hence this one.*
