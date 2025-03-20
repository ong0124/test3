import { _ as _sfc_main$1 } from './BackBtn--Dn8uilg.mjs';
import __nuxt_component_0 from './index-CnNrVT_7.mjs';
import { b as useI18n, a as __nuxt_component_2$1 } from './server.mjs';
import { defineComponent, ref, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { d as dayjs } from '../_/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const route = useRoute();
    useRouter();
    route.params.id;
    const data = ref([]);
    const formatDate = (date) => {
      return date ? dayjs(date).format("YYYY-MM-DD") : "N/A";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BackBtn = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_2$1;
      _push(`<!--[--><header class="py-4 border-b bg-green-400 flex items-center"><div>`);
      _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
      _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold capitalize">${ssrInterpolate(_ctx.$t("ReschedulePage.selectRescheduleTrip"))}</h1></header><div class="pb-12"><div class="pl-2 pt-4"><!--[-->`);
      ssrRenderList(unref(data), (index) => {
        _push(`<div class="mb-4"><div class="flex p-4 bg-white rounded-lg"><div class="flex text-normal pl-2 flex-1"><div class="flex flex-1"><div class="flex flex-col"><div class="flex border-b-2 border-dashed border-green-200 mb-2"><p>${ssrInterpolate(unref(t)(index.departure_loc))}</p>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols-arrow-right-alt",
          class: "mx-2 w-6 h-6"
        }, null, _parent));
        _push(`<p>${ssrInterpolate(unref(t)(index.destination_loc))}</p></div><p class="text-sm">${ssrInterpolate(_ctx.$t("Booking.adultTicket"))} X ${ssrInterpolate(index.adult_num)}</p><p class="text-sm">${ssrInterpolate(_ctx.$t("Booking.childTicket"))} X ${ssrInterpolate(index.child_num)}</p></div></div><div class="flex flex-col"><div class="text-gray-500"><p class="flex justify-end">${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))}</p><div class="flex"><p>${ssrInterpolate(formatDate(index.shuttle_date))}</p><p class="pl-2">${ssrInterpolate(index.shuttle_time)}</p></div></div><div class="flex justify-end"><p class="text-red-500">${ssrInterpolate(_ctx.$t("bookingStatus.notTraveled"))}</p></div><div class="flex justify-end pt-4 px-2 underline text-blue-500 text-sm">`);
        _push(ssrRenderComponent(_component_nuxt_link, { to: "/reschedulePage" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("forReschedule"))}/${ssrInterpolate(_ctx.$t("cancelOrder"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("forReschedule")) + "/" + toDisplayString(_ctx.$t("cancelOrder")), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div>`);
        if (index.trip_type === "roundTrip") {
          _push(`<div><div class="flex p-4 bg-amber-50 rounded-lg"><div class="flex text-normal pl-2 flex-1"><div class="flex flex-1"><div class="flex flex-col"><div class="border-l-4 border-orange-300"><p class="font-bold pl-2">${ssrInterpolate(_ctx.$t("Booking.return"))}</p></div><div class="flex mb-2"><p>${ssrInterpolate(unref(t)(index.return_departure))}</p>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "material-symbols-arrow-right-alt",
            class: "mx-2 w-6 h-6"
          }, null, _parent));
          _push(`<p>${ssrInterpolate(unref(t)(index.return_destination))}</p></div></div></div><div class="flex flex-col"><div class="text-gray-500"><p class="flex justify-end">${ssrInterpolate(_ctx.$t("Booking.shuttleBusTime"))}</p><div class="flex"><p>${ssrInterpolate(formatDate(index.return_shuttle_date))}</p><p class="pl-2">${ssrInterpolate(index.return_shuttle_time)}</p></div></div></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reschedulePage/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-TpFk3c1J.mjs.map
