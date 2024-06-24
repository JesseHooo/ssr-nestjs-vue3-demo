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
const _detailservice = require("./detail.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let ApiController = class ApiController {
    async getDetailData(params) {
        const data = await this.apiDetailService.index(params.id);
        return data;
    }
    constructor(apiDetailService){
        this.apiDetailService = apiDetailService;
    }
};
_ts_decorate([
    (0, _common.Get)('/detail/:id'),
    _ts_param(0, (0, _common.Param)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        void 0
    ]),
    _ts_metadata("design:returntype", Promise)
], ApiController.prototype, "getDetailData", null);
ApiController = _ts_decorate([
    (0, _common.Controller)('/api'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _detailservice.ApiDetailService === "undefined" ? Object : _detailservice.ApiDetailService
    ])
], ApiController);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2RldGFpbC1wYWdlL2FwaS5jb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xsZXIsIEdldCwgUGFyYW0gfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcclxuaW1wb3J0IHsgQXBpRGV0YWlsU2VydmljZSB9IGZyb20gJy4vZGV0YWlsLnNlcnZpY2UnXHJcblxyXG5AQ29udHJvbGxlcignL2FwaScpXHJcbmV4cG9ydCBjbGFzcyBBcGlDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSByZWFkb25seSBhcGlEZXRhaWxTZXJ2aWNlOiBBcGlEZXRhaWxTZXJ2aWNlKSB7fVxyXG5cclxuICBAR2V0KCcvZGV0YWlsLzppZCcpXHJcbiAgYXN5bmMgZ2V0RGV0YWlsRGF0YSAoQFBhcmFtKCkgcGFyYW1zKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5hcGlEZXRhaWxTZXJ2aWNlLmluZGV4KHBhcmFtcy5pZClcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJBcGlDb250cm9sbGVyIiwiZ2V0RGV0YWlsRGF0YSIsInBhcmFtcyIsImRhdGEiLCJhcGlEZXRhaWxTZXJ2aWNlIiwiaW5kZXgiLCJpZCIsImNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7OytCQUlhQTs7O2VBQUFBOzs7d0JBSjBCOytCQUNOOzs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBQSxBQUFNQSxnQkFBTixNQUFNQTtJQUdYLE1BQ01DLGNBQWUsQUFBU0MsTUFBTSxFQUFFO1FBQ3BDLE1BQU1DLE9BQU8sTUFBTSxJQUFJLENBQUNDLGdCQUFnQixDQUFDQyxLQUFLLENBQUNILE9BQU9JLEVBQUU7UUFDeEQsT0FBT0g7SUFDVDtJQU5BSSxZQUFhLEFBQWlCSCxnQkFBa0MsQ0FBRTthQUFwQ0EsbUJBQUFBO0lBQXFDO0FBT3JFIn0=