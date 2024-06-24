"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "indexModule", {
    enumerable: true,
    get: function() {
        return indexModule;
    }
});
const _common = require("@nestjs/common");
const _indexcontroller = require("./index.controller");
const _apicontroller = require("./api.controller");
const _indexservice = require("./index.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let indexModule = class indexModule {
};
indexModule = _ts_decorate([
    (0, _common.Module)({
        imports: [],
        controllers: [
            _indexcontroller.AppController,
            _apicontroller.ApiController
        ],
        providers: [
            _indexservice.ApiService
        ]
    })
], indexModule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2luZGV4LXBhZ2UvaW5kZXgubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xyXG5pbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSAnLi9pbmRleC5jb250cm9sbGVyJ1xyXG5pbXBvcnQgeyBBcGlDb250cm9sbGVyIH0gZnJvbSAnLi9hcGkuY29udHJvbGxlcidcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vaW5kZXguc2VydmljZSdcclxuXHJcbkBNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuXHJcbiAgXSxcclxuICBjb250cm9sbGVyczogW0FwcENvbnRyb2xsZXIsIEFwaUNvbnRyb2xsZXJdLFxyXG4gIHByb3ZpZGVyczogW0FwaVNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgaW5kZXhNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbImluZGV4TW9kdWxlIiwiaW1wb3J0cyIsImNvbnRyb2xsZXJzIiwiQXBwQ29udHJvbGxlciIsIkFwaUNvbnRyb2xsZXIiLCJwcm92aWRlcnMiLCJBcGlTZXJ2aWNlIl0sIm1hcHBpbmdzIjoiOzs7OytCQWFhQTs7O2VBQUFBOzs7d0JBYlU7aUNBQ087K0JBQ0E7OEJBQ0g7Ozs7Ozs7QUFVcEIsSUFBQSxBQUFNQSxjQUFOLE1BQU1BO0FBQWE7OztRQVB4QkMsU0FBUyxFQUVSO1FBQ0RDLGFBQWE7WUFBQ0MsOEJBQWE7WUFBRUMsNEJBQWE7U0FBQztRQUMzQ0MsV0FBVztZQUFDQyx3QkFBVTtTQUFDIn0=