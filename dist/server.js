"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = 3000;
app_1.default.listen(PORT, () => {
    console.log('express server is listening on port' + PORT);
});
//# sourceMappingURL=server.js.map