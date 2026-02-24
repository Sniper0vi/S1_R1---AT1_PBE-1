//import { application } from "express";
import createMulter from "../config/produto.multer.js";

import multer from "multer";
export const uploadDocuments = createMulter({
    folder : 'documents',
    allowedTypes : [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocesssingml.document'
    ],
    fileSize : 20*1024*1024
}).single('doc');

