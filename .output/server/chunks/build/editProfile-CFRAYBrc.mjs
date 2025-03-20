import { _ as _sfc_main$1 } from './BackBtn--Dn8uilg.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BackBtn = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen" }, _attrs))}><div class="h-1/4 bg-green-400"><header class="flex items-center py-4">`);
  _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
  _push(`<h1 class="absolute left-1/2 transform -translate-x-1/2 text-base font-bold capitalize text-white">${ssrInterpolate(_ctx.$t("accountInfo.title"))}</h1></header><div class="mx-3 pt-2 pb-8 rounded-lg bg-white flex flex-col"><div class="border-b-2 mx-4 flex"><p class="px-4 py-2">${ssrInterpolate(_ctx.$t("accountInfo.userId"))}</p><input type="text" placeholder="213xxxx548" class="flex-1 px-2 bg-inherit focus:outline-none text-sm min-w-0"></div><div class="border-b-2 mx-4 flex"><p class="px-4 py-2">${ssrInterpolate(_ctx.$t("accountInfo.nickname"))}</p><input type="text" placeholder="X\u5148\u751F/\u5973\u751F" class="flex-1 px-6 bg-inherit focus:outline-none text-sm min-w-0"></div><div class="border-b-2 mx-4 flex"><p class="px-4 py-2">${ssrInterpolate(_ctx.$t("accountInfo.phone"))}</p><input type="text" placeholder="121XXXXXX123" class="flex-1 px-6 bg-inherit focus:outline-none text-sm min-w-0"></div><div class="border-b-2 mx-4 flex"><p class="px-4 py-2">${ssrInterpolate(_ctx.$t("accountInfo.email"))}</p><input type="text" placeholder="XX4549@gmail.com" class="flex-1 px-6 bg-inherit focus:outline-none text-sm min-w-0"></div><button class="mt-4 mx-12 bg-green-400 rounded p-2 text-white">${ssrInterpolate(_ctx.$t("accountInfo.saveButton"))}</button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/editProfile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const editProfile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { editProfile as default };
//# sourceMappingURL=editProfile-CFRAYBrc.mjs.map
