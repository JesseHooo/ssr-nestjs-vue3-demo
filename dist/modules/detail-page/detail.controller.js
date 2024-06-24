"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DetailController", {
    enumerable: true,
    get: function() {
        return DetailController;
    }
});
const _common = require("@nestjs/common");
const _ssrcore = require("ssr-core");
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
let DetailController = class DetailController {
    async handlerDetail(req, res) {
        try {
            const ctx = {
                request: req,
                response: res,
                apiDeatilservice: this.apiDeatilservice
            };
            const stream = await (0, _ssrcore.render)(ctx, {
                stream: true
            });
            stream.pipe(res, {
                end: false
            });
            stream.on('end', ()=>{
                res.end();
            });
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
    constructor(apiDeatilservice){
        this.apiDeatilservice = apiDeatilservice;
    }
};
_ts_decorate([
    (0, _common.Get)('/detail/:id'),
    _ts_param(0, (0, _common.Req)()),
    _ts_param(1, (0, _common.Res)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof Request === "undefined" ? Object : Request,
        typeof Response === "undefined" ? Object : Response
    ]),
    _ts_metadata("design:returntype", Promise)
], DetailController.prototype, "handlerDetail", null);
DetailController = _ts_decorate([
    (0, _common.Controller)('/'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _detailservice.ApiDetailService === "undefined" ? Object : _detailservice.ApiDetailService
    ])
], DetailController);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2RldGFpbC1wYWdlL2RldGFpbC5jb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xsZXIsIEdldCwgUmVxLCBSZXMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcclxuaW1wb3J0IHR5cGUgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCB7IFJlYWRhYmxlIH0gZnJvbSAnc3RyZWFtJ1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdzc3ItY29yZSdcclxuXHJcbmltcG9ydCB7IEFwaURldGFpbFNlcnZpY2UgfSBmcm9tICcuL2RldGFpbC5zZXJ2aWNlJ1xyXG5cclxuQENvbnRyb2xsZXIoJy8nKVxyXG5leHBvcnQgY2xhc3MgRGV0YWlsQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IgKHByaXZhdGUgcmVhZG9ubHkgYXBpRGVhdGlsc2VydmljZTogQXBpRGV0YWlsU2VydmljZSkge31cclxuXHJcbiAgQEdldCgnL2RldGFpbC86aWQnKVxyXG4gIGFzeW5jIGhhbmRsZXJEZXRhaWwgKEBSZXEoKSByZXE6IFJlcXVlc3QsIEBSZXMoKSByZXM6IFJlc3BvbnNlKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGN0eCA9IHtcclxuICAgICAgICByZXF1ZXN0OiByZXEsXHJcbiAgICAgICAgcmVzcG9uc2U6IHJlcyxcclxuICAgICAgICBhcGlEZWF0aWxzZXJ2aWNlOiB0aGlzLmFwaURlYXRpbHNlcnZpY2VcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCByZW5kZXI8UmVhZGFibGU+KGN0eCwge1xyXG4gICAgICAgIHN0cmVhbTogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICBzdHJlYW0ucGlwZShyZXMsIHsgZW5kOiBmYWxzZSB9KVxyXG4gICAgICBzdHJlYW0ub24oJ2VuZCcsICgpID0+IHtcclxuICAgICAgICByZXMuZW5kKClcclxuICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnJvcilcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkRldGFpbENvbnRyb2xsZXIiLCJoYW5kbGVyRGV0YWlsIiwicmVxIiwicmVzIiwiY3R4IiwicmVxdWVzdCIsInJlc3BvbnNlIiwiYXBpRGVhdGlsc2VydmljZSIsInN0cmVhbSIsInJlbmRlciIsInBpcGUiLCJlbmQiLCJvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInNlbmQiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFRYUE7OztlQUFBQTs7O3dCQVI2Qjt5QkFHbkI7K0JBRVU7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFBLEFBQU1BLG1CQUFOLE1BQU1BO0lBR1gsTUFDTUMsY0FBZSxBQUFPQyxHQUFZLEVBQUUsQUFBT0MsR0FBYSxFQUFnQjtRQUM1RSxJQUFJO1lBQ0YsTUFBTUMsTUFBTTtnQkFDVkMsU0FBU0g7Z0JBQ1RJLFVBQVVIO2dCQUNWSSxrQkFBa0IsSUFBSSxDQUFDQSxnQkFBZ0I7WUFDekM7WUFDQSxNQUFNQyxTQUFTLE1BQU1DLElBQUFBLGVBQU0sRUFBV0wsS0FBSztnQkFDekNJLFFBQVE7WUFDVjtZQUNBQSxPQUFPRSxJQUFJLENBQUNQLEtBQUs7Z0JBQUVRLEtBQUs7WUFBTTtZQUM5QkgsT0FBT0ksRUFBRSxDQUFDLE9BQU87Z0JBQ2ZULElBQUlRLEdBQUc7WUFDVDtRQUNGLEVBQUUsT0FBT0UsT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pWLElBQUlhLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNKO1FBQ3ZCO0lBQ0Y7SUFyQkFLLFlBQWEsQUFBaUJYLGdCQUFrQyxDQUFFO2FBQXBDQSxtQkFBQUE7SUFBcUM7QUFzQnJFIn0=