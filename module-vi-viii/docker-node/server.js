(function () {
    "use strict";
    var express = require('express'),
        app = express(),
        cfenv = require('cfenv'),
        appEnv = cfenv.getAppEnv(),
        bodyParser  =   require("body-parser"),
        path = require('path'),
        request = require('request');
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({"extended" : false}));
    app.use(express.static(__dirname + '/front'));


    require("./controller/controller")(app, request);
    

    app.listen(appEnv.port, '0.0.0.0', function () {

        console.log("server starting on " + appEnv.url);
    });

}());
