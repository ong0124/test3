import { _ as _sfc_main$1 } from './BackBtn--Dn8uilg.mjs';
import __nuxt_component_0 from './index-CnNrVT_7.mjs';
import { defineComponent, ref, reactive, computed, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { d as dayjs } from '../_/index.mjs';
import { c as useRoute, d as useRouter, b as useI18n } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const id = route.params.id;
    const { t } = useI18n();
    const refundType = ref("");
    const refundReason = ref("");
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
      shuttle_date: dayjs(),
      shuttle_time: "",
      return_shuttle_date: dayjs(),
      return_shuttle_time: ""
    });
    const departure_loc = computed(() => t(form.departure_loc || "defaultKey"));
    const destination_loc = computed(() => t(form.destination_loc || "defaultKey"));
    computed(() => t(form.return_departure || "defaultKey"));
    computed(() => t(form.return_destination || "defaultKey"));
    const formatDate = (date) => {
      return date ? dayjs(date).format("YYYY-MM-DD") : "N/A";
    };
    const formRefund = reactive({
      booking_id: id,
      user_id: 7,
      get refund_type() {
        return refundType.value;
      },
      get reason() {
        return refundReason.value;
      }
    });
    console.log("checkRefundForm" + JSON.stringify(formRefund));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BackBtn = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      _push(`<!--[--><header class="py-4 border-b bg-green-400 flex items-center"><div>`);
      _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
      _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold capitalize">${ssrInterpolate(_ctx.$t("RefundPage.title"))}</h1></header><div class="px-6 pt-4 pb-4"><div class="bg-white p-4 rounded-lg flex flex-col mb-4"><div><p class="font-bold text-lg">${ssrInterpolate(_ctx.$t("confirmationPage.tripInfo"))}</p></div><div class="flex border-b-2 py-2"><p>${ssrInterpolate(formatDate(unref(form).shuttle_date))}</p><p class="pl-4">${ssrInterpolate(unref(form).shuttle_time)}</p><div class="flex ml-32"><p>${ssrInterpolate(unref(departure_loc))}</p>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "material-symbols-arrow-right-alt",
        class: "mx-2 w-6 h-6"
      }, null, _parent));
      _push(`<p>${ssrInterpolate(unref(destination_loc))}</p></div></div><p>${ssrInterpolate(_ctx.$t("Booking.flightNumber"))} : MF1544</p><div class="flex py-2"><p>${ssrInterpolate(_ctx.$t("Booking.adultTicket"))} X ${ssrInterpolate(unref(form).adult_num)}</p><p class="mx-auto">${ssrInterpolate(_ctx.$t("Booking.childTicket"))} X ${ssrInterpolate(unref(form).child_num)}</p><p class="mx-auto">${ssrInterpolate(_ctx.$t("RefundPage.paid"))} : NT$ ${ssrInterpolate(_ctx.$t("confirmationPage.amount"))}</p></div><div class="flex"><p>${ssrInterpolate(_ctx.$t("Booking.contact"))} \uFF1A</p><p>${ssrInterpolate(unref(form).contact_name)}</p></div><div class="flex py-2"><label class="self-center pr-2">${ssrInterpolate(_ctx.$t("RefundPage.refundType"))} :</label><select class="w-4/6 h-fit border rounded-lg px-3 py-2 focus:ring-green-500"><option value="RefundType1"${ssrIncludeBooleanAttr(Array.isArray(refundType.value) ? ssrLooseContain(refundType.value, "RefundType1") : ssrLooseEqual(refundType.value, "RefundType1")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("RefundPage.changeOfPlans"))}</option><option value="RefundType2"${ssrIncludeBooleanAttr(Array.isArray(refundType.value) ? ssrLooseContain(refundType.value, "RefundType2") : ssrLooseEqual(refundType.value, "RefundType2")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("RefundPage.tripCancellationOrAdjustment"))}</option><option value="RefundType3"${ssrIncludeBooleanAttr(Array.isArray(refundType.value) ? ssrLooseContain(refundType.value, "RefundType3") : ssrLooseEqual(refundType.value, "RefundType3")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("RefundPage.bookingError"))}</option><option value="RefundType4"${ssrIncludeBooleanAttr(Array.isArray(refundType.value) ? ssrLooseContain(refundType.value, "RefundType4") : ssrLooseEqual(refundType.value, "RefundType4")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("RefundPage.flightOrFerryIssue"))}</option><option value="RefundType5"${ssrIncludeBooleanAttr(Array.isArray(refundType.value) ? ssrLooseContain(refundType.value, "RefundType5") : ssrLooseEqual(refundType.value, "RefundType5")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("RefundPage.systemError"))}</option><option value="RefundType6"${ssrIncludeBooleanAttr(Array.isArray(refundType.value) ? ssrLooseContain(refundType.value, "RefundType6") : ssrLooseEqual(refundType.value, "RefundType6")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("RefundPage.other"))}</option></select></div><label class="">${ssrInterpolate(_ctx.$t("RefundPage.refundReason"))} :</label><textarea placeholder=" " class="w-full border rounded-lg px-3 py-2 h-24">${ssrInterpolate(refundReason.value)}</textarea><div class="flex justify-end pt-6"><button class="bg-green-400 text-white w-1/6 py-2 rounded flex justify-center">${ssrInterpolate(_ctx.$t("RefundPage.applyRefund"))}</button></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/refund/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-BCaUvcZR.mjs.map
