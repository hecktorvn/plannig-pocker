"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./http");
require("./websocket");
http_1.serverHttp.listen(3000, function () { return console.log("Server is running on PORT 3000"); });