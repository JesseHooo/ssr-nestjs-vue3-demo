"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ApiController", {
    enumerable: true,
    get: function() {
        return ApiController;
    }
});
const _common = require("@nestjs/common");
const _indexservice = require("./index.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let ApiController = class ApiController {
    async getIndexData() {
        return await this.apiService.index();
    }
    constructor(apiService){
        this.apiService = apiService;
    }
};
_ts_decorate([
    (0, _common.Get)('/index'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], ApiController.prototype, "getIndexData", null);
ApiController = _ts_decorate([
    (0, _common.Controller)('/api'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _indexservice.ApiService === "undefined" ? Object : _indexservice.ApiService
    ])
], ApiController);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2luZGV4LXBhZ2UvYXBpLmNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbGxlciwgR2V0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2luZGV4LnNlcnZpY2UnXHJcblxyXG5AQ29udHJvbGxlcignL2FwaScpXHJcbmV4cG9ydCBjbGFzcyBBcGlDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSByZWFkb25seSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlKSB7fVxyXG5cclxuICBAR2V0KCcvaW5kZXgnKVxyXG4gIGFzeW5jIGdldEluZGV4RGF0YSAoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmFwaVNlcnZpY2UuaW5kZXgoKVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQXBpQ29udHJvbGxlciIsImdldEluZGV4RGF0YSIsImFwaVNlcnZpY2UiLCJpbmRleCIsImNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7OytCQUlhQTs7O2VBQUFBOzs7d0JBSm1COzhCQUNMOzs7Ozs7Ozs7O0FBR3BCLElBQUEsQUFBTUEsZ0JBQU4sTUFBTUE7SUFHWCxNQUNNQyxlQUE4QjtRQUNsQyxPQUFPLE1BQU0sSUFBSSxDQUFDQyxVQUFVLENBQUNDLEtBQUs7SUFDcEM7SUFMQUMsWUFBYSxBQUFpQkYsVUFBc0IsQ0FBRTthQUF4QkEsYUFBQUE7SUFBeUI7QUFNekQifQ==