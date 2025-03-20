import { unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useUserStore } from './user-BdxJm4S8.mjs';
import 'pinia';

const _sfc_main = {
  __name: "test2",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    userStore.loadUser();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(userStore).user_id) {
        _push(`<div><p>\u6B61\u8FCE\uFF0C${ssrInterpolate(unref(userStore).user_name)}</p><img${ssrRenderAttr("src", unref(userStore).user_picture)} class="w-16 h-16 rounded-full"><button class="bg-red-500 text-white px-4 py-2 rounded"> \u767B\u51FA </button></div>`);
      } else {
        _push(`<div><button class="bg-green-500 text-white px-4 py-2 rounded"> \u4F7F\u7528 LINE \u767B\u5165 </button></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=test2-BFWw161n.mjs.map
