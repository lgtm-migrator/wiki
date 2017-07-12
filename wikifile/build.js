const dirTree = require('directory-tree');
const fs = require('fs');
const os = require('os')
const _ = require('lodash');
const capitalize = require('capitalize');

const getFilesFromDir = node => _.filter(node.children, item => item.extension
  ? true
  : false)

const getDirsFromDir = node => _.filter(node.children, item => !item.extension && item.children.length > 0
  ? true
  : false)

/**
 * make every words first character upper
 */
const upper = str => capitalize.words(str)

const writeNavigationLine = (line) => {
  if (fs.existsSync(targetNavigationFilePath))
    fs.appendFileSync(targetNavigationFilePath, (line || "") + os.EOL)
  else
    fs.writeFileSync(targetNavigationFilePath, (line || "") + os.EOL);
}

const writeAppcacheLine = (line) => {
  if (fs.existsSync(targetAppcacheFilePath))
    fs.appendFileSync(targetAppcacheFilePath, (line || "") + os.EOL)
  else
    fs.writeFileSync(targetAppcacheFilePath, (line || "") + os.EOL);
}

/**
 * make a markdown format link
 *
 * @param {Object} item
 * @returns {string}
 */
const makeLink = (item) => {
  if (item.extension)
    return `[${getMdTitle(item.path)}](${item.path.replace(/\\/g, '/')})`
  else
    return upper(`[${item.name}]()`)
}

/**
 * get a title from an existed md file
 *
 * @param {string} filepath
 * @returns {string}
 */
const getMdTitle = filepath => {
  const file = fs
    .readFileSync(filepath)
    .toString();
  const firstline = file.split('\n')[0];
  const result = firstline.split('#')[1]
  if (!result)
    throw new Error(`file ${filepath} should have a title in first line`)
  return result.trim()
}

const writeNavigationFile = () => {
  // start write new navigation
  writeNavigationLine("# wiki")
  writeNavigationLine()
  getFilesFromDir(tree).forEach(item => {
    if (item.name == 'navigation.md' || item.name == 'README.md') {
      writeNavigationLine()
    }
    else {
      writeNavigationLine(makeLink(item)) & writeNavigationLine()
    }
  })
  getDirsFromDir(tree).forEach((dir) => {
    // if a directory not have any file, will be skiped
    if (!dir.extension && dir.children.length < 1)
      return
    writeNavigationLine(makeLink(dir)) & writeNavigationLine()
    getFilesFromDir(dir).forEach(article => {
      writeNavigationLine(`* ${makeLink(article)}`)
    })
    getDirsFromDir(dir).forEach((dir, idx, arr) => {
      writeNavigationLine(`* # ${upper(dir.name)}`)
      getFilesFromDir(dir).forEach(article => writeNavigationLine(`* ${makeLink(article)}`))
      if (arr.length - 1 != idx)
        writeNavigationLine('---')
    })
    writeNavigationLine()
  })

  console.log('navigation generate finished')
}

const get_path_from = (article) => {
  if (article) {
    return article
      .path
      .replace(/\\/g, '/')
  }
  return "";
}

const offline_resource = ["config.json"]

const writeAppcacheFile = () => {
  // start write new appcache file
  writeAppcacheLine("CACHE MANIFEST");
  writeAppcacheLine(`# version: ${(new Date()).toUTCString()}`);
  // cache specific files
  offline_resource.forEach(item => writeAppcacheLine(item));
  writeAppcacheLine(targetNavigationFilePath);
  getFilesFromDir(tree).forEach(article => writeAppcacheLine(get_path_from(article)))
  getDirsFromDir(tree).forEach((dir) => {
    // if a directory not have any file, will be skiped
    if (!dir.extension && dir.children.length < 1)
      return
    getFilesFromDir(dir).forEach(article => writeAppcacheLine(get_path_from(article)))
    getDirsFromDir(dir).forEach((dir, idx, arr) => getFilesFromDir(dir).forEach(article => writeAppcacheLine(get_path_from(article))))
  })
  writeAppcacheLine()
  writeAppcacheLine('NETWORK:');
  writeAppcacheLine('*')
  console.log('appcache generate finished')
}

const tree = dirTree('.', '.md')
const targetNavigationFilePath = 'navigation.md';
const targetAppcacheFilePath = 'wiki.appcache';

if (fs.existsSync(targetNavigationFilePath)) {
  fs.unlinkSync(targetNavigationFilePath);
  console.log('deleted old navigation');
}

if (fs.existsSync(targetAppcacheFilePath)) {
  fs.unlinkSync(targetAppcacheFilePath);
  console.log('deleted old appcache file');
}

writeNavigationFile()
writeAppcacheFile()

console.log('build success!')