# Java代码风格检测

We recommend that developers install the `checkstyle tool` to check java code styles

## code style and checkstyle.xml file

checkstyle.xml is used to define the java code style stadard.

`checkstyle tool` check java code style based on the xml configuration file, and return warning infos to ide.

check [here](https://github.com/Soontao/checkstyles) to get my checkstyle xmls

## install ide plugins

for Eclipse, search `checkstyle-plug` in `Eclipse Market`, and install, and restart ide.

(guide use version: Eclipse Neon, checkstyle-plug 7.6.0)

for IDEA, search `checkstyle-IDEA` in `settings -> plugins -> Browse repositories`, and install, and restart ide.

(guide use version: IDEA 2017.1 Ultimate, checkstyle-IDEA 5.8.1)

## usage

after configuration, ide will show code style warnings in somewhere.

### Eclipse

1. in `Window -> Preferences -> CheckStyle`, New and import your `checkstyle.xml`, and click ok button.

1. `right click a project -> Properties -> CheckStyle`, set options and checkstyle config, and click ok button.

1. checkstyle warnings will show in `Problem` tab

### IDEA

1. in `settings -> Other Settings -> CheckStyle`, import your checkstyle.xml and active it.

1. in `settings -> Editor -> Code Style -> Java`, set `codestyle.xml` to idea's code formatter

1. checkstyle warnings will show in `CheckStyle real-time Scan` tab