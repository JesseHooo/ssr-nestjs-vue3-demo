"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DetailModule", {
    enumerable: true,
    get: function() {
        return DetailModule;
    }
});
const _common = require("@nestjs/common");
const _apicontroller = require("./api.controller");
const _detailcontroller = require("./detail.controller");
const _detailservice = require("./detail.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let DetailModule = class DetailModule {
};
DetailModule = _ts_decorate([
    (0, _common.Module)({
        imports: [],
        controllers: [
            _detailcontroller.DetailController,
            _apicontroller.ApiController
        ],
        providers: [
            _detailservice.ApiDetailService
        ]
    })
], DetailModule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2RldGFpbC1wYWdlL2RldGFpbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXHJcbmltcG9ydCB7IEFwaUNvbnRyb2xsZXIgfSBmcm9tICcuL2FwaS5jb250cm9sbGVyJ1xyXG5pbXBvcnQgeyBEZXRhaWxDb250cm9sbGVyIH0gZnJvbSAnLi9kZXRhaWwuY29udHJvbGxlcidcclxuaW1wb3J0IHsgQXBpRGV0YWlsU2VydmljZSB9IGZyb20gJy4vZGV0YWlsLnNlcnZpY2UnXHJcblxyXG5ATW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcblxyXG4gIF0sXHJcbiAgY29udHJvbGxlcnM6IFtEZXRhaWxDb250cm9sbGVyLCBBcGlDb250cm9sbGVyXSxcclxuICBwcm92aWRlcnM6IFtBcGlEZXRhaWxTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERldGFpbE1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiRGV0YWlsTW9kdWxlIiwiaW1wb3J0cyIsImNvbnRyb2xsZXJzIiwiRGV0YWlsQ29udHJvbGxlciIsIkFwaUNvbnRyb2xsZXIiLCJwcm92aWRlcnMiLCJBcGlEZXRhaWxTZXJ2aWNlIl0sIm1hcHBpbmdzIjoiOzs7OytCQWFhQTs7O2VBQUFBOzs7d0JBYlU7K0JBQ087a0NBQ0c7K0JBQ0E7Ozs7Ozs7QUFVMUIsSUFBQSxBQUFNQSxlQUFOLE1BQU1BO0FBQWM7OztRQVB6QkMsU0FBUyxFQUVSO1FBQ0RDLGFBQWE7WUFBQ0Msa0NBQWdCO1lBQUVDLDRCQUFhO1NBQUM7UUFDOUNDLFdBQVc7WUFBQ0MsK0JBQWdCO1NBQUMifQ==