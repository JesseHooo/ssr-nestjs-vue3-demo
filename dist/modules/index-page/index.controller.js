"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppController", {
    enumerable: true,
    get: function() {
        return AppController;
    }
});
const _common = require("@nestjs/common");
const _ssrcore = require("ssr-core");
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
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let AppController = class AppController {
    async handlerIndex(req, res) {
        try {
            const ctx = {
                request: req,
                response: res,
                apiService: this.apiService
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
    constructor(apiService){
        this.apiService = apiService;
    }
};
_ts_decorate([
    (0, _common.Get)('/'),
    _ts_param(0, (0, _common.Req)()),
    _ts_param(1, (0, _common.Res)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof Request === "undefined" ? Object : Request,
        typeof Response === "undefined" ? Object : Response
    ]),
    _ts_metadata("design:returntype", Promise)
], AppController.prototype, "handlerIndex", null);
AppController = _ts_decorate([
    (0, _common.Controller)('/'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _indexservice.ApiService === "undefined" ? Object : _indexservice.ApiService
    ])
], AppController);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2luZGV4LXBhZ2UvaW5kZXguY29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyLCBHZXQsIFJlcSwgUmVzIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXHJcbmltcG9ydCB0eXBlIHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgeyBSZWFkYWJsZSB9IGZyb20gJ3N0cmVhbSdcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnc3NyLWNvcmUnXHJcblxyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9pbmRleC5zZXJ2aWNlJ1xyXG5cclxuQENvbnRyb2xsZXIoJy8nKVxyXG5leHBvcnQgY2xhc3MgQXBwQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IgKHByaXZhdGUgcmVhZG9ubHkgYXBpU2VydmljZTogQXBpU2VydmljZSkge31cclxuXHJcbiAgQEdldCgnLycpXHJcbiAgYXN5bmMgaGFuZGxlckluZGV4IChAUmVxKCkgcmVxOiBSZXF1ZXN0LCBAUmVzKCkgcmVzOiBSZXNwb25zZSk6IFByb21pc2U8YW55PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjdHggPSB7XHJcbiAgICAgICAgcmVxdWVzdDogcmVxLFxyXG4gICAgICAgIHJlc3BvbnNlOiByZXMsXHJcbiAgICAgICAgYXBpU2VydmljZTogdGhpcy5hcGlTZXJ2aWNlXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgcmVuZGVyPFJlYWRhYmxlPihjdHgsIHtcclxuICAgICAgICBzdHJlYW06IHRydWVcclxuICAgICAgfSlcclxuICAgICAgc3RyZWFtLnBpcGUocmVzLCB7IGVuZDogZmFsc2UgfSlcclxuICAgICAgc3RyZWFtLm9uKCdlbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgcmVzLmVuZCgpXHJcbiAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJBcHBDb250cm9sbGVyIiwiaGFuZGxlckluZGV4IiwicmVxIiwicmVzIiwiY3R4IiwicmVxdWVzdCIsInJlc3BvbnNlIiwiYXBpU2VydmljZSIsInN0cmVhbSIsInJlbmRlciIsInBpcGUiLCJlbmQiLCJvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInNlbmQiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFRYUE7OztlQUFBQTs7O3dCQVI2Qjt5QkFHbkI7OEJBRUk7Ozs7Ozs7Ozs7Ozs7OztBQUdwQixJQUFBLEFBQU1BLGdCQUFOLE1BQU1BO0lBR1gsTUFDTUMsYUFBYyxBQUFPQyxHQUFZLEVBQUUsQUFBT0MsR0FBYSxFQUFnQjtRQUMzRSxJQUFJO1lBQ0YsTUFBTUMsTUFBTTtnQkFDVkMsU0FBU0g7Z0JBQ1RJLFVBQVVIO2dCQUNWSSxZQUFZLElBQUksQ0FBQ0EsVUFBVTtZQUM3QjtZQUNBLE1BQU1DLFNBQVMsTUFBTUMsSUFBQUEsZUFBTSxFQUFXTCxLQUFLO2dCQUN6Q0ksUUFBUTtZQUNWO1lBQ0FBLE9BQU9FLElBQUksQ0FBQ1AsS0FBSztnQkFBRVEsS0FBSztZQUFNO1lBQzlCSCxPQUFPSSxFQUFFLENBQUMsT0FBTztnQkFDZlQsSUFBSVEsR0FBRztZQUNUO1FBQ0YsRUFBRSxPQUFPRSxPQUFPO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWlYsSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0o7UUFDdkI7SUFDRjtJQXJCQUssWUFBYSxBQUFpQlgsVUFBc0IsQ0FBRTthQUF4QkEsYUFBQUE7SUFBeUI7QUFzQnpEIn0=