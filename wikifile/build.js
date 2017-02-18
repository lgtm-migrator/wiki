const dirTree = require('directory-tree');
const fs = require('fs');
const os = require('os')
const _ = require('lodash');
const capitalize = require('capitalize');

const getFilesFromDir = node => _.filter(node.children, item => item.extension ? true : false)

const getDirsFromDir = node => _.filter(node.children, item => !item.extension && item.children.length > 0 ? true : false)

/**
 * make every words first character upper
 */
const upper = str => capitalize.words(str)

const writeLine = (line) => {
  if (fs.existsSync(targetNavigationFilePath))
    fs.appendFileSync(targetNavigationFilePath, (line || "") + os.EOL)
  else
    fs.writeFileSync(targetNavigationFilePath, (line || "") + os.EOL);
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
  const file = fs.readFileSync(filepath).toString();
  const firstline = file.split('\n')[0];
  const result = firstline.split('#')[1]
  if (!result) throw new Error(`file ${filepath} should have a title in first line`)
  return result.trim()
}



const writeNavigationFile = () => {
  // start write new navigation
  writeLine("# wiki")
  writeLine()
  getFilesFromDir(tree).forEach(item => item.name == 'navigation.md' ? writeLine() : writeLine(makeLink(item)) & writeLine())
  getDirsFromDir(tree).forEach((dir) => {
    // if a directory not have any file, will be skiped
    if (!dir.extension && dir.children.length < 1)
      return
    writeLine(makeLink(dir)) & writeLine()
    getFilesFromDir(dir).forEach(article => writeLine(`* ${makeLink(article)}`))
    getDirsFromDir(dir).forEach((dir, idx, arr) => {
      writeLine(`* # ${upper(dir.name)}`)
      getFilesFromDir(dir).forEach(article => writeLine(`* ${makeLink(article)}`))
      if (arr.length - 1 != idx) writeLine('---')
    })
    writeLine()
  })

  console.log('navigation generate finished')
}



const sw_str = `'use strict';

const version = "${(new Date()).toLocaleString()}";
const __DEVELOPMENT__ = false;
const __DEBUG__ = false;
const offlineResources = [
];

const ignoreFetch = [
];


//////////
// Install
//////////
function onInstall(event) {
  log('install event in progress.');
  self.skipWaiting();
  event.waitUntil(updateStaticCache());
}

function updateStaticCache() {
  return caches
    .open(cacheKey('offline'))
    .then((cache) => {
      return cache.addAll(offlineResources);
    })
    .then(() => {
      log('installation complete!');
    });
}

////////
// Fetch
////////
function onFetch(event) {
  const request = event.request;

  if (shouldAlwaysFetch(request)) {
    event.respondWith(networkedOrOffline(request));
    return;
  }

  if (shouldFetchAndCache(request)) {
    event.respondWith(networkedOrCached(request));
    return;
  }

  event.respondWith(cachedOrNetworked(request));
}

function networkedOrCached(request) {
  return networkedAndCache(request)
    .catch(() => { return cachedOrOffline(request) });
}

// Stash response in cache as side-effect of network request
function networkedAndCache(request) {
  return fetch(request)
    .then((response) => {
      var copy = response.clone();
      caches.open(cacheKey('resources'))
        .then((cache) => {
          cache.put(request, copy);
        });

      log("(network: cache write)", request.method, request.url);
      return response;
    });
}

function cachedOrNetworked(request) {
  return caches.match(request)
    .then((response) => {
      log(response ? '(cached)' : '(network: cache miss)', request.method, request.url);
      return response ||
        networkedAndCache(request)
          .catch(() => { return offlineResponse(request) });
    });
}

function networkedOrOffline(request) {
  return fetch(request)
    .then((response) => {
      log('(network)', request.method, request.url);
      return response;
    })
    .catch(() => {
      return offlineResponse(request);
    });
}

function cachedOrOffline(request) {
  return caches
    .match(request)
    .then((response) => {
      return response || offlineResponse(request);
    });
}

function offlineResponse(request) {
  log('(offline)', request.method, request.url);
  if (request.url.match(/\.(jpg|png|gif|svg|jpeg)(\?.*)?$/)) {
    return caches.match('/offline.svg');
  } else {
    return caches.match('/offline.html');
  }
}

///////////
// Activate
///////////
function onActivate(event) {
  log('activate event in progress.');
  event.waitUntil(removeOldCache());
}

function removeOldCache() {
  return caches
    .keys()
    .then((keys) => {
      return Promise.all( // We return a promise that settles when all outdated caches are deleted.
        keys
         .filter((key) => {
           return !key.startsWith(version); // Filter by keys that don't start with the latest version prefix.
         })
         .map((key) => {
           return caches.delete(key); // Return a promise that's fulfilled when each outdated cache is deleted.
         })
      );
    })
    .then(() => {
      log('removeOldCache completed.');
    });
}

function cacheKey() {
  return [version, ...arguments].join(':');
}

function log() {
  if (developmentMode()) {
    console.log("SW:", ...arguments);
  }
}

function shouldAlwaysFetch(request) {
  return __DEVELOPMENT__ ||
    request.method !== 'GET' ||
      ignoreFetch.some(regex => request.url.match(regex));
}

function shouldFetchAndCache(request) {
  return ~request.headers.get('Accept').indexOf('text/html');
}

function developmentMode() {
  return __DEVELOPMENT__ || __DEBUG__;
}

log("Hello from ServiceWorker land!", version);

self.addEventListener('install', onInstall);

self.addEventListener('fetch', onFetch);

self.addEventListener("activate", onActivate);
`

const tree = dirTree('.', '.md')
const targetNavigationFilePath = 'navigation.md';
const targetSWFilePath = 'sw.js'

if (fs.existsSync(targetNavigationFilePath)) {
  fs.unlinkSync(targetNavigationFilePath);
  console.log('deleted old navigation');
}

writeNavigationFile()

if (fs.existsSync(targetSWFilePath)) {
  fs.unlinkSync(targetSWFilePath);
  console.log('deleted old sw.js')
}

fs.writeFileSync(targetSWFilePath, sw_str);
console.log('regenerate sw.js')

console.log('build success!')