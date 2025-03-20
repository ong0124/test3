import { i as buildAssetsURL } from '../_/nitro.mjs';
import { _ as _sfc_main$1 } from './BackBtn--Dn8uilg.mjs';
import { u as useLocalePath, _ as _export_sfc, a as __nuxt_component_2$1 } from './server.mjs';
import { defineComponent, useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';
import './index-CnNrVT_7.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '@unhead/shared';
import 'vue-router';
import 'pinia';
import 'unhead';

const _sfc_main = defineComponent({
  setup() {
    const localPath = useLocalePath();
    return {
      localPath
    };
  }
});
const _imports_0 = "data:image/png;base64,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";
const _imports_1 = "" + buildAssetsURL("PayPalIcon.BmYfvmyX.png");
const _imports_2 = "" + buildAssetsURL("download.bT0GQJsx.png");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BackBtn = _sfc_main$1;
  const _component_NuxtLink = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen" }, _attrs))}><div class="py-4 bg-green-400"><header class="flex items-center">`);
  _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
  _push(`<h1 class="absolute left-1/2 transform -translate-x-1/2 text-base font-bold capitalize text-white">${ssrInterpolate(_ctx.$t("paymentPage.title"))}</h1></header></div><div class="px-6"><p class="pt-4 pb-2">${ssrInterpolate(_ctx.$t("paymentPage.choose_method"))}</p><div class="flex flex-col"><button class="flex mb-4 bg-green-300 rounded-lg text-white justify-between px-6 py-1"> LinePay <img${ssrRenderAttr("src", _imports_0)} alt="LinePay Icon" class="w-6 h-6 mr-2 bg-white p-1 rounded"></button><button class="flex mb-4 bg-white rounded-lg text-gray-500 justify-between px-6 py-1"> PayPal <img${ssrRenderAttr("src", _imports_1)} alt="LinePay Icon" class="w-6 h-6 mr-2 bg-white rounded"></button><button class="flex mb-4 bg-white rounded-lg text-gray-500 justify-between px-6 py-1">${ssrInterpolate(_ctx.$t("paymentPage.credit_card"))} <img${ssrRenderAttr("src", _imports_2)} alt="LinePay Icon" class="h-6 mr-2 bg-white rounded"></button></div></div><div class="fixed inset-x-0 bottom-12 flex justify-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.localPath("/boardingpoint"),
    class: "bg-green-400 text-white w-1/3 py-2 rounded flex justify-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("paymentPage.pay_button"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("paymentPage.pay_button")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/payment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const payment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { payment as default };
//# sourceMappingURL=payment-CBQcl05M.mjs.map
