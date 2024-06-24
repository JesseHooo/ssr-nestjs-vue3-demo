"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ApiService", {
    enumerable: true,
    get: function() {
        return ApiService;
    }
});
const _common = require("@nestjs/common");
const _indexmock = /*#__PURE__*/ _interop_require_default(require("./index.mock"));
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
let ApiService = class ApiService {
    async index() {
        return await Promise.resolve(_indexmock.default);
    }
};
ApiService = _ts_decorate([
    (0, _common.Injectable)()
], ApiService);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2luZGV4LXBhZ2UvaW5kZXguc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXHJcbmltcG9ydCB7IEluZGV4RGF0YSB9IGZyb20gJ34vdHlwaW5ncy9kYXRhJ1xyXG5pbXBvcnQgbW9jayBmcm9tICcuL2luZGV4Lm1vY2snXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcclxuICBhc3luYyBpbmRleCAoKTogUHJvbWlzZTxJbmRleERhdGE+IHtcclxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUobW9jaylcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkFwaVNlcnZpY2UiLCJpbmRleCIsIlByb21pc2UiLCJyZXNvbHZlIiwibW9jayJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFLYUE7OztlQUFBQTs7O3dCQUxjO2tFQUVWOzs7Ozs7Ozs7Ozs7QUFHVixJQUFBLEFBQU1BLGFBQU4sTUFBTUE7SUFDWCxNQUFNQyxRQUE2QjtRQUNqQyxPQUFPLE1BQU1DLFFBQVFDLE9BQU8sQ0FBQ0Msa0JBQUk7SUFDbkM7QUFDRiJ9