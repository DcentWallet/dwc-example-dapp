/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("/dcentWallet/dwc-example-dapp.git/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/dcentWallet/dwc-example-dapp.git/workbox-v3.6.3"});

importScripts(
  "/dcentWallet/dwc-example-dapp.git/precache-manifest.cbbb5712ad063d9c89d969172f5a8776.js"
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/dcentWallet/dwc-example-dapp.git/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});
