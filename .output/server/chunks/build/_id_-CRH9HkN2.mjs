import { _ as _sfc_main$1 } from './BackBtn--Dn8uilg.mjs';
import __nuxt_component_0 from './index-CnNrVT_7.mjs';
import { _ as __nuxt_component_5 } from './DashLine-CPTPPRRu.mjs';
import { u as useLocalePath, b as useI18n, a as __nuxt_component_2$1 } from './server.mjs';
import { defineComponent, computed, reactive, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
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
    const localPath = useLocalePath();
    const route = useRoute();
    const { t } = useI18n();
    route.params.id;
    const formatDate = (date) => {
      return date ? dayjs(date).format("YYYY-MM-DD") : "N/A";
    };
    const isSwapped = computed(() => route.query.isSwapped === "true");
    const form = reactive({
      trip_type: "",
      user_id: "",
      adult_num: "",
      child_num: "",
      contact_phone: "",
      totalprice: "",
      contact_name: "",
      departure_loc: "",
      destination_loc: "",
      return_departure: "",
      return_destination: "",
      arrivalpoint_date: "",
      arrivalpoint_time: "",
      flight_num: "",
      ferry_time: "",
      flight_time: "",
      shuttle_date: "",
      shuttle_time: "",
      return_shuttle_date: "",
      return_shuttle_time: ""
    });
    const departure_loc = computed(() => t(form.departure_loc || "defaultKey"));
    const destination_loc = computed(() => t(form.destination_loc || "defaultKey"));
    const return_departure = computed(() => t(form.return_departure || "defaultKey"));
    const return_destination = computed(() => t(form.return_destination || "defaultKey"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BackBtn = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      const _component_DashLine = __nuxt_component_5;
      const _component_NuxtLink = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen bg-gray-200" }, _attrs))}><div class="h-1/3 bg-gradient-to-b from-green-400"><header class="flex items-center py-4">`);
      _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
      _push(`<h1 class="absolute left-1/2 transform -translate-x-1/2 text-base font-bold capitalize text-white">${ssrInterpolate(_ctx.$t("confirmationPage.title"))}</h1></header><div class="mx-3 pt-4 pb-8 rounded-lg bg-white"><div class="px-4"><div class="px-2"><p class="border-l-4 border-orange-400 pl-2">${ssrInterpolate(unref(t)("confirmationPage.tripInfo"))}</p><p class="my-2">${ssrInterpolate(formatDate(unref(form).shuttle_date))} ${ssrInterpolate(unref(form).shuttle_time)}</p><div class="flex justify-between"><div class="flex"><p>${ssrInterpolate(departure_loc.value)}</p>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "material-symbols-arrow-right-alt",
        class: "mx-2 w-6 h-6"
      }, null, _parent));
      _push(`<p>${ssrInterpolate(destination_loc.value)}</p></div><div><p>${ssrInterpolate(isSwapped.value ? _ctx.$t("Booking.ferryTime") : _ctx.$t("Booking.flightTime"))} : ${ssrInterpolate(isSwapped.value ? unref(form).ferry_time : unref(form).flight_time)}</p></div></div></div>`);
      _push(ssrRenderComponent(_component_DashLine, null, null, _parent));
      if (unref(form).trip_type === "roundTrip") {
        _push(`<div><div class="px-2"><p class="border-l-4 border-orange-400 pl-2">${ssrInterpolate(_ctx.$t("confirmationPage.returnTripInfo"))}</p><p class="my-2">${ssrInterpolate(formatDate(unref(form).return_shuttle_date))} ${ssrInterpolate(unref(form).return_shuttle_time)}</p><div class="flex justify-between"><div class="flex"><p>${ssrInterpolate(return_departure.value)}</p>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols-arrow-right-alt",
          class: "mx-2 w-6 h-6"
        }, null, _parent));
        _push(`<p>${ssrInterpolate(return_destination.value)}</p></div><div><p>${ssrInterpolate(isSwapped.value ? _ctx.$t("Booking.flightTime") : _ctx.$t("Booking.ferryTime"))} : ${ssrInterpolate(isSwapped.value ? unref(form).flight_time : unref(form).ferry_time)}</p></div></div></div>`);
        _push(ssrRenderComponent(_component_DashLine, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="px-2"><p>${ssrInterpolate(unref(form).contact_phone)}</p><p>${ssrInterpolate(unref(form).contact_name)}</p><div class="flex py-2"><p class="border-l-4 border-orange-400 pl-2 flex-1">${ssrInterpolate(_ctx.$t("confirmationPage.OrderTotal"))}</p><a href="#" class="text-sm text-gray-600 ml-1">${ssrInterpolate(_ctx.$t("confirmationPage.refundPolicy"))}</a></div><div class="flex"><p class="flex-1">${ssrInterpolate(_ctx.$t("confirmationPage.adultTicket"))} ${ssrInterpolate(unref(form).adult_num)}</p><p>NT$ \xA0 ${ssrInterpolate(unref(form).totalprice)}</p></div><div class="flex"><p class="flex-1">${ssrInterpolate(_ctx.$t("confirmationPage.infantTicket"))} ${ssrInterpolate(unref(form).child_num)}</p><p>NT$ \xA00.00</p></div></div></div></div><div class="text-xs p-6 text-gray-700"><p>${ssrInterpolate(_ctx.$t("reminder.notice"))}</p><p>${ssrInterpolate(_ctx.$t("reminder.tips1"))}</p><p>${ssrInterpolate(_ctx.$t("reminder.tips2"))}</p><p>${ssrInterpolate(_ctx.$t("reminder.tips3"))}</p><p>${ssrInterpolate(_ctx.$t("reminder.tips4"))}</p><p>${ssrInterpolate(_ctx.$t("reminder.tips5"))}</p></div><footer class="border-t bg-white fixed inset-x-0 bottom-6"><div class="py-6 mx-6 flex"><div class="flex flex-1"><p>${ssrInterpolate(_ctx.$t("confirmationPage.total"))} \xA0 \xA0</p><p class="text-red-500">NT$ \xA0${ssrInterpolate(unref(form).totalprice)}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localPath)("/payment"),
        class: "bg-red-500 text-white rounded px-2 py-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("confirmationPage.submitOrder"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("confirmationPage.submitOrder")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></footer></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/confirmationPage/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-CRH9HkN2.mjs.map
