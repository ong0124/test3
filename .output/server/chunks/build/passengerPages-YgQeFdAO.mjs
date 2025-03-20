import { _ as _sfc_main$1 } from './BackBtn--Dn8uilg.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './GreaterThan-DGAsIMnN.mjs';
import { u as useLocalePath, c as useRoute } from './server.mjs';
import './index-CnNrVT_7.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '@unhead/shared';
import 'vue-router';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';
import 'pinia';
import 'unhead';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "passengerPages",
  __ssrInlineRender: true,
  setup(__props) {
    useLocalePath();
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BackBtn = _sfc_main$1;
      _push(`<!--[--><header class="py-4 border-b bg-green-400 flex items-center"><div class="flex">`);
      _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
      _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold capitalize">${ssrInterpolate(_ctx.$t("profileSettings.passenger"))}</h1></header><div><div class="px-6 py-4"><p class="text-2xl pb-2 font-bold">${ssrInterpolate(_ctx.$t("PassengerPage.passengers"))}</p><div class="bg-white p-4 rounded-lg flex mb-4"><div class="flex text-normal pl-2 flex-1"><div class="flex flex-1 flex-col"><div class="flex flex-1"><div class="bg-green-200 py-1 px-2 text-green-900 rounded-sm"><p>${ssrInterpolate(_ctx.$t("PassengerPage.passengers"))}</p></div></div><div></div><div class="pt-4 mx-4"><div class="flex"><p class="font-bold">${ssrInterpolate(_ctx.$t("PassengerPage.passengers1"))}</p></div><div class="text-gray-400"><div class="flex"><p>${ssrInterpolate(_ctx.$t("PassengerPage.password"))} : </p><p class="pl-2">9314XXXXX0932</p></div><div class="flex"><p>${ssrInterpolate(_ctx.$t("PassengerPage.birthday"))} : </p><p class="pl-2">2000-01-01</p></div></div></div></div></div><div class="place-content-center"><img${ssrRenderAttr("src", _imports_0)} alt="More" class="w-6 h-6"></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/passengerPages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=passengerPages-YgQeFdAO.mjs.map
