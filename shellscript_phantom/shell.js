var path = require("path");
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;

    var timeStamp = new Date().getTime();
    var pageurl = "https://cce.cloudapps.cisco.com/guest/assessmentresult/582d579dbcfd1a5a81910341"

    const spawn = require('child_process').spawn;
    var child = spawn(binPath, [path.join(__dirname + '/phantompdf.js'), timeStamp, pageurl]);
    child.stdout.on('data', function (data) { process.stdout.write(data.toString()); });
    //spit stderr to screen
    child.stderr.on('data', function (data) { process.stdout.write(data.toString()); });
    child.on('close', function (code) {
    });
