"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ApiDetailService", {
    enumerable: true,
    get: function() {
        return ApiDetailService;
    }
});
const _common = require("@nestjs/common");
const _detailmock = /*#__PURE__*/ _interop_require_default(require("./detail.mock"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let ApiDetailService = class ApiDetailService {
    async index(id) {
        return await Promise.resolve(_detailmock.default.data[id]);
    }
};
ApiDetailService = _ts_decorate([
    (0, _common.Injectable)()
], ApiDetailService);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2RldGFpbC1wYWdlL2RldGFpbC5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcclxuaW1wb3J0IHsgRGRhdGEgfSBmcm9tICd+L3R5cGluZ3MvZGF0YSdcclxuaW1wb3J0IG1vY2sgZnJvbSAnLi9kZXRhaWwubW9jaydcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwaURldGFpbFNlcnZpY2Uge1xyXG4gIGFzeW5jIGluZGV4IChpZCk6IFByb21pc2U8RGRhdGE+IHtcclxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUobW9jay5kYXRhW2lkXSlcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkFwaURldGFpbFNlcnZpY2UiLCJpbmRleCIsImlkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJtb2NrIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFLYUE7OztlQUFBQTs7O3dCQUxjO21FQUVWOzs7Ozs7Ozs7Ozs7QUFHVixJQUFBLEFBQU1BLG1CQUFOLE1BQU1BO0lBQ1gsTUFBTUMsTUFBT0MsRUFBRSxFQUFrQjtRQUMvQixPQUFPLE1BQU1DLFFBQVFDLE9BQU8sQ0FBQ0MsbUJBQUksQ0FBQ0MsSUFBSSxDQUFDSixHQUFHO0lBQzVDO0FBQ0YifQ==