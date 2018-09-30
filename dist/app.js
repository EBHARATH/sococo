"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
class App {
    constructor() {
        this.app = express();
        this.config();
    }
    config() {
        //to support application/json type post data
        this.app.use(bodyParser.json());
        //to support application/x-www-form-urlencoded  post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map