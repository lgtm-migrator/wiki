# Electron

Build cross platform desktop apps with JavaScript, HTML, and CSS.

## starter

use [electron-vue](https://github.com/SimulatedGREG/electron-vue) starter

the starter includes:

* eslint
* vue
* electron build tool
* babel

`init`

```bash
vue init simulatedgreg/electron-vue my-project
```

---

Also, you could start your project with [electron-quick-start](https://github.com/electron/electron-quick-start), it's a simple electron example, without any FE frameworks.

## start dev

start dev with command:

```bash
npm i
npm run dev
```

## build

build installer with command:

```bash
npm run build
```

find installer at `build` directory

## advantage & disadvantage

### advantage

* use web stack to dev desktop client
* clear arch
* native api support

### disadvantage

* difficult to build. (in china mainland)
* restricted with official apis

## sample

image-tool

![](https://res.cloudinary.com/digf90pwi/image/upload/v1504353841/2017-09-02_20-00-45_x6v4jy.gif)

see [here](https://github.com/Soontao/image-tool), it's a simple image process tool.