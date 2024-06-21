"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vue = require("vue");
var ssrCommonUtils = require("ssr-common-utils");
var pinia = require("pinia");
var ssrSerializeJavascript = require("ssr-serialize-javascript");
var serverRenderer$1 = require("@vue/server-renderer");
var serverRenderer = require("vue/server-renderer");
var vueRouter = require("vue-router");
var vuex = require("vuex");
var ssrDeepclone = require("ssr-deepclone");
var vue$1 = require("swiper/vue");
var swiper = require("swiper");
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$9 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<html${serverRenderer.ssrRenderAttrs(_attrs)}><head><meta charSet="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><meta name="theme-color" content="#000000"><title>Serverless Side Render for Vue3</title>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "remInitial", {}, null, _push, _parent);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "injectHeader", {}, null, _push, _parent);
  _push(`</head><body>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
  _push(`</body></html>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("web/components/layout/index.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var index = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender]]);
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main$8 = vue.defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  props: {
    ssrApp: {},
    asyncData: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = vue.resolveComponent("router-view");
      _push(serverRenderer.ssrRenderComponent(_component_router_view, vue.mergeProps({ asyncData: _ctx.asyncData }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("web/components/layout/App.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var fetch$4 = async ({ store: store2, router }, ctx) => {
};
const FeRoutes$2 = [{
  "path": "/detail/:id",
  "component": function dynamicComponent() {
    return Promise.resolve().then(function() {
      return render$id;
    });
  },
  "webpackChunkName": "detail-id",
  "fetch": () => Promise.resolve().then(function() {
    return fetch$3;
  }),
  "name": "detail-id"
}, {
  "path": "/",
  "component": function dynamicComponent2() {
    return Promise.resolve().then(function() {
      return render;
    });
  },
  "webpackChunkName": "index",
  "fetch": () => Promise.resolve().then(function() {
    return fetch$1;
  }),
  "name": "index"
}];
var declareRoutes = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FeRoutes: FeRoutes$2,
  Layout: index,
  App: _sfc_main$8,
  layoutFetch: fetch$4
}, Symbol.toStringTag, { value: "Module" }));
var ManualRoutes = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const Routes = ssrCommonUtils.combineRoutes(declareRoutes, ManualRoutes);
const { store, FeRoutes: FeRoutes$1 } = Routes;
function createRouter(options = {}) {
  var _a;
  (_a = options.base) !== null && _a !== void 0 ? _a : "/";
  return vueRouter.createRouter({
    history: vueRouter.createMemoryHistory(),
    routes: FeRoutes$1
  });
}
function createStore() {
  return vuex.createStore(ssrDeepclone.deepClone(store));
}
const getInlineCssVNode = (arr) => arr.map((item) => vue.h("style", {
  innerHTML: item
}));
const getVNode = (arr) => arr.map((item) => {
  var _a;
  return vue.h((_a = item.tagName) !== null && _a !== void 0 ? _a : "script", Object.assign({}, item.describe, {
    innerHTML: item.content
  }));
});
const { FeRoutes, App, layoutFetch, Layout } = Routes;
const staticConfig = ssrCommonUtils.getStaticConfig();
const serverRender = async (ctx, config) => {
  var _a;
  const { mode, customeHeadScript, customeFooterScript, parallelFetch, prefix, isVite, isDev, clientPrefix, stream, fePort, https, rootId, bigpipe, hashRouter } = config;
  const store2 = createStore();
  const router = createRouter();
  const pinia$1 = pinia.createPinia();
  const rawPath = (_a = ctx.request.path) !== null && _a !== void 0 ? _a : ctx.request.url;
  const [path, url] = [ssrCommonUtils.normalizePath(rawPath, prefix), ssrCommonUtils.normalizePath(ctx.request.url, prefix)];
  const routeItem = ssrCommonUtils.findRoute(FeRoutes, path);
  ssrCommonUtils.checkRoute({ routeItem, path });
  const getApp = ({ combineAysncData, state, layoutFetchData, asyncData, manifest, isCsr, jsInject, cssInject, inlineCssOrder, rootId: rootId2 }) => {
    const app = vue.createSSRApp({
      render: function() {
        const ssrDevInfo = { manifest: isDev ? manifest : "", rootId: rootId2, fePort: isDev ? fePort : "", https: isDev ? https : "" };
        const innerHTML = ssrCommonUtils.splitPageInfo({
          "window.__USE_SSR__": !isCsr,
          "window.__INITIAL_DATA__": isCsr ? {} : ssrSerializeJavascript.serialize(state),
          "window.__INITIAL_PINIA_DATA__": isCsr ? {} : ssrSerializeJavascript.serialize(pinia$1.state.value),
          "window.__USE_VITE__": isVite,
          "window.prefix": `"${prefix}"`,
          "window.clientPrefix": `"${clientPrefix !== null && clientPrefix !== void 0 ? clientPrefix : ""}"`,
          "window.ssrDevInfo": JSON.stringify(ssrDevInfo),
          "window.hashRouter": Boolean(hashRouter)
        });
        const initialData = vue.h("script", { innerHTML });
        const children = bigpipe ? "" : vue.h(App, { ctx, config, asyncData, fetchData: combineAysncData, reactiveFetchData: { value: combineAysncData }, ssrApp: app });
        const customeHeadScriptArr = getVNode(ssrCommonUtils.getUserScriptVue({ script: customeHeadScript, ctx, position: "header", staticConfig })).concat(getInlineCssVNode(inlineCssOrder));
        const customeFooterScriptArr = getVNode(ssrCommonUtils.getUserScriptVue({ script: customeFooterScript, ctx, position: "footer", staticConfig }));
        return vue.h(Layout, { ctx, config, asyncData, fetchData: layoutFetchData, reactiveFetchData: { value: layoutFetchData } }, {
          remInitial: () => vue.h("script", { innerHTML: ssrCommonUtils.remInitial }),
          customeHeadScript: () => customeHeadScriptArr,
          customeFooterScript: () => customeFooterScriptArr,
          children: () => children,
          initialData: () => initialData,
          cssInject: () => cssInject,
          jsInject: () => jsInject,
          injectHeader: () => [
            customeHeadScriptArr,
            cssInject
          ],
          content: () => [
            vue.h("div", {
              id: rootId2.replace("#", "")
            }, vue.renderSlot(this.$slots, "default", {}, () => [children])),
            initialData,
            customeFooterScriptArr,
            jsInject
          ]
        });
      }
    });
    return app;
  };
  const fn = async () => {
    var _a2, _b;
    const { fetch: fetch2, webpackChunkName } = routeItem;
    const dynamicCssOrder = await ssrCommonUtils.getAsyncCssChunk(ctx, webpackChunkName, config);
    const dynamicJsOrder = await ssrCommonUtils.getAsyncJsChunk(ctx, webpackChunkName, config);
    const manifest = await ssrCommonUtils.getManifest(config);
    const [inlineCssOrder, extraCssOrder] = await ssrCommonUtils.getInlineCss({ dynamicCssOrder, manifest, config, type: "vue3" });
    const isCsr = !!(mode === "csr" || ((_a2 = ctx.request.query) === null || _a2 === void 0 ? void 0 : _a2.csr));
    const cssInject = (isVite && isDev ? [vue.h("script", {
      type: "module",
      src: "/@vite/client"
    })] : extraCssOrder.map((css) => manifest[css]).filter(Boolean).map((css) => vue.h("link", {
      rel: "stylesheet",
      href: css
    }))).concat(isVite && isDev ? [] : dynamicJsOrder.map((js) => manifest[js]).filter(Boolean).map((js) => vue.h("link", {
      href: js,
      as: "script",
      rel: isVite ? "modulepreload" : "preload"
    })));
    const jsInject = isVite && isDev ? [vue.h("script", {
      type: "module",
      src: "/node_modules/ssr-plugin-vue3/esm/entry/client-entry.js"
    })] : dynamicJsOrder.map((js) => manifest[js]).filter(Boolean).map((js) => vue.h("script", {
      src: js,
      type: isVite ? "module" : "text/javascript"
    }));
    let [layoutFetchData, fetchData] = [{}, {}];
    if (!isCsr && !bigpipe) {
      router.push(url);
      await router.isReady();
      const currentFetch = fetch2 ? (await fetch2()).default : null;
      const { value } = router.currentRoute;
      const lF = layoutFetch ? layoutFetch({ store: store2, router: value, ctx, pinia: pinia$1 }, ctx) : Promise.resolve({});
      const CF = currentFetch ? currentFetch({ store: store2, router: value, ctx, pinia: pinia$1 }, ctx) : Promise.resolve({});
      [layoutFetchData, fetchData] = parallelFetch ? await Promise.all([lF, CF]) : [await lF, await CF];
    } else {
      ssrCommonUtils.logGreen(`Current path ${path} use csr render mode`);
    }
    const combineAysncData = Object.assign({}, layoutFetchData !== null && layoutFetchData !== void 0 ? layoutFetchData : {}, fetchData !== null && fetchData !== void 0 ? fetchData : {});
    const asyncData = {
      value: combineAysncData
    };
    const state = Object.assign({}, (_b = store2.state) !== null && _b !== void 0 ? _b : {}, asyncData.value);
    let err = null;
    const app = getApp({
      state,
      asyncData,
      layoutFetchData,
      combineAysncData,
      manifest,
      jsInject,
      cssInject,
      isCsr,
      inlineCssOrder,
      rootId
    });
    if (!app.config.errorHandler) {
      app.config.errorHandler = (e) => {
        err = e;
      };
    }
    app.use(router);
    app.use(store2);
    app.use(pinia$1);
    const res2 = await ssrCommonUtils.appLocalStoreageWrapper.run({
      app
    }, async () => {
      if (stream) {
        const stream2 = serverRenderer$1.renderToNodeStream(app);
        if (err) {
          throw new Error(err);
        }
        return stream2;
      } else {
        const teleportsContext = {};
        const html = await serverRenderer$1.renderToString(app, teleportsContext);
        if (err) {
          throw new Error(err);
        }
        return {
          html,
          teleportsContext
        };
      }
    });
    return res2;
  };
  const res = await ssrCommonUtils.localStorageWrapper.run({
    pinia: pinia$1,
    store: store2,
    ctx
  }, fn);
  return res;
};
var index_vue_vue_type_style_index_0_scoped_true_lang$5 = "";
const _sfc_main$7 = vue.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const playData = vue.toRefs(props.data[0].data);
    const play = vue.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)} data-v-927d8e0c>`);
      if (play.value) {
        _push(`<div data-v-927d8e0c><video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls autoPlay class="video" data-v-927d8e0c> your browser does not support the video tag </video></div>`);
      } else {
        _push(`<div class="playerContainer" style="${serverRenderer.ssrRenderStyle({ background: `url(${vue.unref(playData).img}) 0 0 /cover` })}" data-v-927d8e0c><div class="title" data-v-927d8e0c>${serverRenderer.ssrInterpolate(vue.unref(playData).title)}</div><img class="ico" src="https://gw.alicdn.com/tfs/TB1eA6FEW61gK0jSZFlXXXDKFXa-135-135.png" data-v-927d8e0c><div class="layer" data-v-927d8e0c></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("web/components/player/index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var Player = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-927d8e0c"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$4 = "";
const _sfc_main$6 = vue.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const briefData = vue.toRefs(props.data[0].data);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "brief-info" }, _attrs))} data-v-b8a72e34><div class="brief-title" data-v-b8a72e34><span class="[&#39;icon-GOLDEN&#39;]" data-v-b8a72e34>${serverRenderer.ssrInterpolate(vue.unref(briefData).mark.value.data.text)}</span><h1 data-v-b8a72e34>${serverRenderer.ssrInterpolate(vue.unref(briefData).showName)}</h1></div><div class="brief-score" data-v-b8a72e34><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(briefData).subTitleList.value, (item, index2) => {
        _push(`<span class="${serverRenderer.ssrRenderClass(item.subtitleType === "PLAY_VV" ? "hotVv" : "")}" data-v-b8a72e34>`);
        if (item.subtitleType === "PLAY_VV") {
          _push(`<img${serverRenderer.ssrRenderAttr("src", vue.unref(briefData).heatIcon.value)} alt="" data-v-b8a72e34>`);
        } else {
          _push(`<!---->`);
        }
        if (index2 > 0) {
          _push(`<span class="divide" data-v-b8a72e34>/</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span data-v-b8a72e34>${serverRenderer.ssrInterpolate(item.subtitle)}</span></span>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("web/components/brief/index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var Brief = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-b8a72e34"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$3 = "";
const _sfc_main$5 = vue.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)} data-v-3db1c761><div class="title" data-v-3db1c761> \u4E3A\u4F60\u63A8\u8350 </div><div class="reContainer" data-v-3db1c761><!--[-->`);
      serverRenderer.ssrRenderList(_ctx.data, (item) => {
        _push(`<div class="reContent" data-v-3db1c761><img${serverRenderer.ssrRenderAttr("src", item.data.img)} data-v-3db1c761><div class="vTitle" data-v-3db1c761>${serverRenderer.ssrInterpolate(item.data.title)}</div><div class="subTitle" data-v-3db1c761>${serverRenderer.ssrInterpolate(item.data.subtitle)}</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("web/components/recommend/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var Recommend = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-3db1c761"]]);
const useIndexStore = pinia.defineStore("indexStore", {
  state: () => {
    return { data: {} };
  },
  actions: {
    setData(payload) {
      this.data = payload.data;
    }
  }
});
const useDetailStore = pinia.defineStore("detailStore", {
  state: () => {
    return { data: {} };
  },
  actions: {
    setData(payload) {
      this.data = payload.data;
    }
  }
});
const useSearchStore = pinia.defineStore("searchStore", {
  state: () => {
    return { searchText: "" };
  },
  actions: {
    setData(payload) {
      this.searchText = payload.text;
    }
  }
});
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
const _sfc_main$4 = vue.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store2 = useSearchStore();
    const { searchText } = pinia.storeToRefs(store2);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "searchContainer" }, _attrs))} data-v-4db84b9c><input${serverRenderer.ssrRenderAttr("value", vue.unref(searchText))} type="text" class="input" placeholder="\u8BE5\u641C\u7D22\u6846\u5185\u5BB9\u4F1A\u5728\u6240\u6709\u9875\u9762\u5171\u4EAB" data-v-4db84b9c><img src="https://img.alicdn.com/tfs/TB15zSoX21TBuNjy0FjXXajyXXa-48-48.png" alt="" class="searchImg" data-v-4db84b9c></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("web/components/search/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var Search = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-4db84b9c"]]);
const _sfc_main$3 = vue.defineComponent({
  __name: "render$id",
  __ssrInlineRender: true,
  setup(__props) {
    const detailStore = useDetailStore();
    const detailData = detailStore.data;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.ssrRenderComponent(Search, null, null, _parent));
      if (vue.unref(detailData)) {
        _push(`<!--[-->`);
        _push(serverRenderer.ssrRenderComponent(Player, {
          data: vue.unref(detailData)[0].dataNode
        }, null, _parent));
        _push(serverRenderer.ssrRenderComponent(Brief, {
          data: vue.unref(detailData)[1].dataNode
        }, null, _parent));
        _push(serverRenderer.ssrRenderComponent(Recommend, {
          data: vue.unref(detailData)[2].dataNode
        }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<img src="https://gw.alicdn.com/tfs/TB1v.zIE7T2gK0jSZPcXXcKkpXa-128-128.gif" class="loading">`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("web/pages/detail/render$id.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var render$id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
var fetch$2 = async ({ store: store2, router, pinia: pinia2, ctx }) => {
  var _a;
  const detailStore = useDetailStore(pinia2);
  const data = await ((_a = ctx == null ? void 0 : ctx.apiDeatilservice) == null ? void 0 : _a.index(ctx.request.params.id));
  detailStore.setData(data);
};
var fetch$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": fetch$2
}, Symbol.toStringTag, { value: "Module" }));
var swiperBundle = "";
var pagination = "";
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _sfc_main$2 = vue.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const Router = vueRouter.useRouter();
    swiper.Swiper.use([swiper.Autoplay, swiper.Pagination]);
    const toDetail = () => {
      Router.push("/detail/cbba934b14f747049187");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "swiperContainer" }, _attrs))} data-v-2bca0a3c>`);
      _push(serverRenderer.ssrRenderComponent(vue.unref(vue$1.Swiper), { ref: "mySwiper" }, {
        pagination: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            ;
          else {
            return [];
          }
        }),
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            serverRenderer.ssrRenderList(_ctx.data[0].itemMap, (val) => {
              _push2(serverRenderer.ssrRenderComponent(vue.unref(vue$1.SwiperSlide), {
                key: val.img,
                class: "sliderContainer",
                onClick: toDetail
              }, {
                default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${serverRenderer.ssrRenderAttr("src", val.img)} class="carouselImg" data-v-2bca0a3c${_scopeId2}><div class="sliderDescContainer" data-v-2bca0a3c${_scopeId2}><span class="sliderTitle" data-v-2bca0a3c${_scopeId2}>${serverRenderer.ssrInterpolate(val.title)}</span></div>`);
                  } else {
                    return [
                      vue.createVNode("img", {
                        src: val.img,
                        class: "carouselImg"
                      }, null, 8, ["src"]),
                      vue.createVNode("div", { class: "sliderDescContainer" }, [
                        vue.createVNode("span", { class: "sliderTitle" }, vue.toDisplayString(val.title), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.data[0].itemMap, (val) => {
                return vue.openBlock(), vue.createBlock(vue.unref(vue$1.SwiperSlide), {
                  key: val.img,
                  class: "sliderContainer",
                  onClick: toDetail
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode("img", {
                      src: val.img,
                      class: "carouselImg"
                    }, null, 8, ["src"]),
                    vue.createVNode("div", { class: "sliderDescContainer" }, [
                      vue.createVNode("span", { class: "sliderTitle" }, vue.toDisplayString(val.title), 1)
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("web/components/slider/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Slider = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2bca0a3c"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = vue.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    vueRouter.useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "pbbContainer" }, _attrs))} data-v-bb4dbc66><!--[-->`);
      serverRenderer.ssrRenderList(_ctx.data[0].itemMap, (val) => {
        _push(`<div class="pbbItemContainer" data-v-bb4dbc66><div class="pbbDescContainer" data-v-bb4dbc66><div class="defaultItemBg" style="${serverRenderer.ssrRenderStyle({ background: `url(${val.img}) 0 0 /cover` })}" data-v-bb4dbc66></div><div class="pName pbbName" data-v-bb4dbc66>${serverRenderer.ssrInterpolate(val.title)}</div><div class="pDesc pbbName" data-v-bb4dbc66>${serverRenderer.ssrInterpolate(val.subtitle)}</div></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("web/components/rectangle/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Rectangle = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bb4dbc66"]]);
const _sfc_main = vue.defineComponent({
  __name: "render",
  __ssrInlineRender: true,
  setup(__props) {
    const indexStore = useIndexStore();
    const indexData = indexStore.data;
    const arr1 = vue.ref([1, 2, 3]);
    const arr2 = [...arr1.value];
    vue.onMounted(() => {
      console.log("arr2", arr2);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.ssrRenderComponent(Search, null, null, _parent));
      if (vue.unref(indexData)) {
        _push(`<!--[-->`);
        _push(serverRenderer.ssrRenderComponent(Slider, {
          data: vue.unref(indexData)[0].components
        }, null, _parent));
        _push(serverRenderer.ssrRenderComponent(Rectangle, {
          data: vue.unref(indexData)[1].components
        }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<img src="https://gw.alicdn.com/tfs/TB1v.zIE7T2gK0jSZPcXXcKkpXa-128-128.gif" class="loading">`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("web/pages/index/render.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var render = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
var fetch = async ({ store: store2, router, pinia: pinia2, ctx }) => {
  var _a;
  const indexStore = useIndexStore(pinia2);
  const data = await ((_a = ctx == null ? void 0 : ctx.apiService) == null ? void 0 : _a.index());
  indexStore.setData(data);
};
var fetch$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": fetch
}, Symbol.toStringTag, { value: "Module" }));
exports.Routes = Routes;
exports.serverRender = serverRender;
