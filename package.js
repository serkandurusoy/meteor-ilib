Package.describe({
  name: 'serkandurusoy:ilib',
  version: '11.0.3_3',
  summary: 'Wrapper for iLib, a cross-engine library of internationalization (i18n) classes written in pure JS',
  git: 'https://github.com/serkandurusoy/meteor-ilib',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  Npm.depends({
    ilib: "11.0.3"
  });
  api.versionsFrom('1.0');
  api.addFiles('ilib.js', 'server');
  api.export("ilib");
});
