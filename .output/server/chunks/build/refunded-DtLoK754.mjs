import { _ as _sfc_main$1 } from './BackBtn--Dn8uilg.mjs';
import __nuxt_component_0 from './index-CnNrVT_7.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '@unhead/shared';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BackBtn = _sfc_main$1;
  const _component_Icon = __nuxt_component_0;
  _push(`<!--[--><header class="py-4 border-b bg-green-400 flex items-center"><div>`);
  _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
  _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold capitalize">${ssrInterpolate(_ctx.$t("bookingStatus.refunded"))}</h1></header><div><div class="pl-2 pt-4 pb-4"><!--[-->`);
  ssrRenderList(2, (index) => {
    _push(`<div class="bg-white p-4 rounded-lg flex mb-4"><div class="flex text-normal pl-2 flex-1"><div class="flex flex-1"><p>${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p>`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "material-symbols-arrow-right-alt",
      class: "mx-2 w-6 h-6"
    }, null, _parent));
    _push(`<p>${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p></div><p class="text-green-500">${ssrInterpolate(_ctx.$t("bookingStatus.refundedApproving"))} NT$ \xA030.00 </p></div></div>`);
  });
  _push(`<!--]--><!--[-->`);
  ssrRenderList(5, (index) => {
    _push(`<div class="bg-white p-4 rounded-lg flex mb-4"><div class="flex text-normal pl-2 flex-1"><div class="flex flex-1"><p>${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p>`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "material-symbols-arrow-right-alt",
      class: "mx-2 w-6 h-6"
    }, null, _parent));
    _push(`<p>${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p></div><p class="text-orange-500">${ssrInterpolate(_ctx.$t("bookingStatus.refundedtoUser"))} NT$ \xA030.00 </p></div></div>`);
  });
  _push(`<!--]--></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/refunded.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const refunded = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { refunded as default };
//# sourceMappingURL=refunded-DtLoK754.mjs.map
