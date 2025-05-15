"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = generateId;
const MaxLen = 5;
function generateId() {
    const chars = '0123456789ghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdef';
    let id = '';
    for (let i = 0; i < MaxLen; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}
