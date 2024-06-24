"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _path = require("path");
const _core = require("@nestjs/core");
const _ssrcommonutils = require("ssr-common-utils");
const _appmodule = require("./app.module");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    await (0, _ssrcommonutils.initialSSRDevProxy)(app, {
        express: true
    });
    app.useStaticAssets((0, _path.join)((0, _ssrcommonutils.getCwd)(), './build'));
    app.useStaticAssets((0, _path.join)((0, _ssrcommonutils.getCwd)(), './build/client'));
    app.useStaticAssets((0, _path.join)((0, _ssrcommonutils.getCwd)(), './public'));
    const { serverPort } = (0, _ssrcommonutils.loadConfig)();
    await app.listen(serverPort);
}
bootstrap().catch((err)=>{
    console.log(err);
    process.exit(1);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBOZXN0RmFjdG9yeSB9IGZyb20gJ0BuZXN0anMvY29yZSdcclxuaW1wb3J0IHsgTmVzdEV4cHJlc3NBcHBsaWNhdGlvbiB9IGZyb20gJ0BuZXN0anMvcGxhdGZvcm0tZXhwcmVzcydcclxuaW1wb3J0IHsgaW5pdGlhbFNTUkRldlByb3h5LCBsb2FkQ29uZmlnLCBnZXRDd2QgfSBmcm9tICdzc3ItY29tbW9uLXV0aWxzJ1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJ1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gYm9vdHN0cmFwICgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICBjb25zdCBhcHAgPSBhd2FpdCBOZXN0RmFjdG9yeS5jcmVhdGU8TmVzdEV4cHJlc3NBcHBsaWNhdGlvbj4oQXBwTW9kdWxlKVxyXG4gIGF3YWl0IGluaXRpYWxTU1JEZXZQcm94eShhcHAsIHtcclxuICAgIGV4cHJlc3M6IHRydWVcclxuICB9KVxyXG4gIGFwcC51c2VTdGF0aWNBc3NldHMoam9pbihnZXRDd2QoKSwgJy4vYnVpbGQnKSlcclxuICBhcHAudXNlU3RhdGljQXNzZXRzKGpvaW4oZ2V0Q3dkKCksICcuL2J1aWxkL2NsaWVudCcpKVxyXG4gIGFwcC51c2VTdGF0aWNBc3NldHMoam9pbihnZXRDd2QoKSwgJy4vcHVibGljJykpXHJcbiAgY29uc3QgeyBzZXJ2ZXJQb3J0IH0gPSBsb2FkQ29uZmlnKClcclxuICBhd2FpdCBhcHAubGlzdGVuKHNlcnZlclBvcnQpXHJcbn1cclxuXHJcbmJvb3RzdHJhcCgpLmNhdGNoKGVyciA9PiB7XHJcbiAgY29uc29sZS5sb2coZXJyKVxyXG4gIHByb2Nlc3MuZXhpdCgxKVxyXG59KVxyXG4iXSwibmFtZXMiOlsiYm9vdHN0cmFwIiwiYXBwIiwiTmVzdEZhY3RvcnkiLCJjcmVhdGUiLCJBcHBNb2R1bGUiLCJpbml0aWFsU1NSRGV2UHJveHkiLCJleHByZXNzIiwidXNlU3RhdGljQXNzZXRzIiwiam9pbiIsImdldEN3ZCIsInNlcnZlclBvcnQiLCJsb2FkQ29uZmlnIiwibGlzdGVuIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImV4aXQiXSwibWFwcGluZ3MiOiI7Ozs7c0JBQXFCO3NCQUNPO2dDQUUyQjsyQkFFN0I7QUFFMUIsZUFBZUE7SUFDYixNQUFNQyxNQUFNLE1BQU1DLGlCQUFXLENBQUNDLE1BQU0sQ0FBeUJDLG9CQUFTO0lBQ3RFLE1BQU1DLElBQUFBLGtDQUFrQixFQUFDSixLQUFLO1FBQzVCSyxTQUFTO0lBQ1g7SUFDQUwsSUFBSU0sZUFBZSxDQUFDQyxJQUFBQSxVQUFJLEVBQUNDLElBQUFBLHNCQUFNLEtBQUk7SUFDbkNSLElBQUlNLGVBQWUsQ0FBQ0MsSUFBQUEsVUFBSSxFQUFDQyxJQUFBQSxzQkFBTSxLQUFJO0lBQ25DUixJQUFJTSxlQUFlLENBQUNDLElBQUFBLFVBQUksRUFBQ0MsSUFBQUEsc0JBQU0sS0FBSTtJQUNuQyxNQUFNLEVBQUVDLFVBQVUsRUFBRSxHQUFHQyxJQUFBQSwwQkFBVTtJQUNqQyxNQUFNVixJQUFJVyxNQUFNLENBQUNGO0FBQ25CO0FBRUFWLFlBQVlhLEtBQUssQ0FBQ0MsQ0FBQUE7SUFDaEJDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWkcsUUFBUUMsSUFBSSxDQUFDO0FBQ2YifQ==