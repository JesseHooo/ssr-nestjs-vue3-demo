"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppModule", {
    enumerable: true,
    get: function() {
        return AppModule;
    }
});
const _common = require("@nestjs/common");
const _detailmodule = require("./modules/detail-page/detail.module");
const _indexmodule = require("./modules/index-page/index.module");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AppModule = class AppModule {
};
AppModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _detailmodule.DetailModule,
            _indexmodule.indexModule
        ]
    })
], AppModule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xyXG5pbXBvcnQgeyBEZXRhaWxNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvZGV0YWlsLXBhZ2UvZGV0YWlsLm1vZHVsZSdcclxuaW1wb3J0IHsgaW5kZXhNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvaW5kZXgtcGFnZS9pbmRleC5tb2R1bGUnXHJcblxyXG5ATW9kdWxlKHtcclxuICBpbXBvcnRzOiBbRGV0YWlsTW9kdWxlLCBpbmRleE1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiQXBwTW9kdWxlIiwiaW1wb3J0cyIsIkRldGFpbE1vZHVsZSIsImluZGV4TW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7OytCQU9hQTs7O2VBQUFBOzs7d0JBUFU7OEJBQ007NkJBQ0Q7Ozs7Ozs7QUFLckIsSUFBQSxBQUFNQSxZQUFOLE1BQU1BO0FBQVc7OztRQUZ0QkMsU0FBUztZQUFDQywwQkFBWTtZQUFFQyx3QkFBVztTQUFDIn0=