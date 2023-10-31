"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationController = void 0;
const common_1 = require("@nestjs/common");
let OperationController = class OperationController {
    operation(n1, n2, n3) {
        return Math.sqrt(n1) * Math.sqrt(n2) * Math.sqrt(n3);
    }
};
exports.OperationController = OperationController;
__decorate([
    (0, common_1.Get)(':n1-:n2-:n3'),
    __param(0, (0, common_1.Param)('n1')),
    __param(1, (0, common_1.Param)('n2')),
    __param(2, (0, common_1.Param)('n3')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Number)
], OperationController.prototype, "operation", null);
exports.OperationController = OperationController = __decorate([
    (0, common_1.Controller)('operation')
], OperationController);
//# sourceMappingURL=operation.controller.js.map