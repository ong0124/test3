import { _ as _sfc_main$1 } from './BackBtn--Dn8uilg.mjs';
import { _ as _export_sfc, a as __nuxt_component_2$1 } from './server.mjs';
import { withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  const _component_nuxt_link = __nuxt_component_2$1;
  _push(`<!--[--><header class="py-4 border-b bg-green-400 flex items-center"><div>`);
  _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
  _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold capitalize">${ssrInterpolate(_ctx.$t("orderDetail.title"))}</h1></header><div class="px-6 pt-4"><div class="bg-white p-4 rounded-lg flex flex-col border-b-2"><div class="flex"><div class="flex-1 self-center"><p class="text-end">${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p></div><div class="flex-1 flex-col text-center"><div class="border-b-2 border-dashed mx-4 border-green-400 text-sm"><p>${ssrInterpolate(_ctx.$t("orderDetail.date"))}</p></div><div class="text-sm"><p>${ssrInterpolate(_ctx.$t("orderDetail.time"))}</p></div></div><div class="flex-1 self-center"><p>${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p></div></div></div></div><div class="px-6"><div class="bg-white p-4 rounded-lg flex flex-col text-sm border-b-2"><div><p>${ssrInterpolate(_ctx.$t("Booking.contact"))} : XXX</p></div><div><p>${ssrInterpolate(_ctx.$t("Booking.phone"))} : 183XXXXXX</p></div><div class="pt-4 pl-2 flex-col"><p class="font-bold">${ssrInterpolate(_ctx.$t("PassengerPage.passengers"))}</p><div class="flex"><div class="flex-col"><p>${ssrInterpolate(_ctx.$t("orderDetail.name"))}</p><p>${ssrInterpolate(_ctx.$t("orderDetail.nationality"))}</p><p>${ssrInterpolate(_ctx.$t("PassengerPage.IdNumber"))}</p></div><div class="flex-col px-4"><p>X\u5148\u751F</p><p>${ssrInterpolate(_ctx.$t("PassengerPage.local"))}</p><p>6786XXXXX</p></div></div></div><div class="pt-4 pl-2 flex-col"><p class="font-bold">${ssrInterpolate(_ctx.$t("PassengerPage.passengers"))}2</p><div class="flex"><div class="flex-col"><p>${ssrInterpolate(_ctx.$t("orderDetail.name"))}</p><p>${ssrInterpolate(_ctx.$t("orderDetail.nationality"))}</p><p>${ssrInterpolate(_ctx.$t("PassengerPage.IdNumber"))}</p></div><div class="flex-col px-4"><p>X\u5148\u751F</p><p>${ssrInterpolate(_ctx.$t("PassengerPage.local"))}</p><p>6786XXXXX</p></div></div></div><div class="flex pt-2"><p>${ssrInterpolate(_ctx.$t("orderDetail.status"))} : ${ssrInterpolate(_ctx.$t("orderDetail.ticketIssued"))}</p></div></div></div><div class="px-6 pb-4"><div class="bg-white p-4 rounded-lg flex flex-col mb-4 text-sm"><p>${ssrInterpolate(_ctx.$t("orderDetail.orderNumber"))} : 2025020100001</p><p>${ssrInterpolate(_ctx.$t("orderDetail.orderStatus"))} : ${ssrInterpolate(_ctx.$t("orderDetail.paid"))}</p><p>${ssrInterpolate(_ctx.$t("orderDetail.orderDate"))} : ${ssrInterpolate(_ctx.$t("confirmationPage.dateTime"))}</p><div class="flex justify-end pt-4 px-2 underline text-yellow-500">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/refundApply",
    class: "text-xs"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("applyRefund"))} ---&gt;`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("applyRefund")) + " --->", 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orderDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const orderDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { orderDetail as default };
//# sourceMappingURL=orderDetail-YIB4HVmz.mjs.map
