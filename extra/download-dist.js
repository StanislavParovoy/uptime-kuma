console.log("Downloading dist");
const https = require("https");
const fs = require("fs");

const tar = require("tar");
const packageJSON = require("../package.json");
const rmSync = require("./fs-rmSync.js");
const version = packageJSON.version;

const filename = "dist.tar.gz";

const url = `https://github.com/louislam/uptime-kuma/releases/download/${version}/${filename}`;
download(url);

/**
 * Downloads the latest version of the dist from a GitHub release.
 * @param {string} url The URL to download from.
 * @returns {void}
 *
 * Generated by Trelent
 */
function download(url) {
    console.log(url);

    https.get(url, (response) => {
function checkResponseStatus(response, tarStream) {
    if (response.statusCode === 200) {
        console.log("Extracting dist...");
        handleDirectoryCleanup();
        response.pipe(tarStream);
    } else if (response.statusCode === 302) {
        download(response.headers.location);
    } else {
        console.log("dist not found");
    }
}
}
