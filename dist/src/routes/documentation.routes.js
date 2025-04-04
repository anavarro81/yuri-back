"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const documentation_controller_1 = require("../controllers/documentation.controller");
const multer_config_1 = require("../config/multer.config");
const dataValidator_1 = require("../utils/dataValidator");
const documentationRouter = express_1.default.Router();
documentationRouter.get("/all-documents", documentation_controller_1.getAllDocuments);
documentationRouter.get("/:filename", documentation_controller_1.getDocument);
documentationRouter.post("/upload", multer_config_1.upload.single("doc"), dataValidator_1.validateDocumentData, documentation_controller_1.uploadDocument);
exports.default = documentationRouter;
