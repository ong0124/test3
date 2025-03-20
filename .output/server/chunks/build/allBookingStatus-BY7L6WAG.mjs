import { _ as _sfc_main$1 } from './BackBtn--Dn8uilg.mjs';
import { _ as _export_sfc, a as __nuxt_component_2$1 } from './server.mjs';
import __nuxt_component_0 from './index-CnNrVT_7.mjs';
import { withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
import '@unhead/shared';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BackBtn = _sfc_main$1;
  const _component_nuxt_link = __nuxt_component_2$1;
  const _component_Icon = __nuxt_component_0;
  _push(`<!--[--><header class="py-4 border-b bg-green-400 flex items-center"><div>`);
  _push(ssrRenderComponent(_component_BackBtn, null, null, _parent));
  _push(`</div><h1 class="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold capitalize">${ssrInterpolate(_ctx.$t("bookingStatus.all"))}</h1></header><div>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/toPay" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="pl-2 pt-4"${_scopeId}><!--[-->`);
        ssrRenderList(2, (index) => {
          _push2(`<div class="bg-white p-4 rounded-lg flex mb-4"${_scopeId}><div class="flex text-normal pl-2 flex-1"${_scopeId}><div class="flex flex-1"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "material-symbols-arrow-right-alt",
            class: "mx-2 w-6 h-6"
          }, null, _parent2, _scopeId));
          _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p></div><p class="text-red-500"${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.toPay"))}</p></div></div>`);
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "pl-2 pt-4" }, [
            (openBlock(), createBlock(Fragment, null, renderList(2, (index) => {
              return createVNode("div", {
                key: index,
                class: "bg-white p-4 rounded-lg flex mb-4"
              }, [
                createVNode("div", { class: "flex text-normal pl-2 flex-1" }, [
                  createVNode("div", { class: "flex flex-1" }, [
                    createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.pier")), 1),
                    createVNode(_component_Icon, {
                      name: "material-symbols-arrow-right-alt",
                      class: "mx-2 w-6 h-6"
                    }),
                    createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.airport")), 1)
                  ]),
                  createVNode("p", { class: "text-red-500" }, toDisplayString(_ctx.$t("bookingStatus.toPay")), 1)
                ])
              ]);
            }), 64))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/notTraveled" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="pl-2"${_scopeId}><!--[-->`);
        ssrRenderList(2, (index) => {
          _push2(`<div class="bg-white p-4 rounded-lg flex mb-4"${_scopeId}><div class="flex text-normal pl-2 flex-1"${_scopeId}><div class="flex flex-1"${_scopeId}><div class="flex flex-col"${_scopeId}><div class="flex border-b-2 border-green-200 mb-2"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "material-symbols-arrow-right-alt",
            class: "mx-2 w-6 h-6"
          }, null, _parent2, _scopeId));
          _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p></div><p class="text-sm"${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.adultTicket"))}</p><p class="text-sm"${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.infantTicket"))}</p><p class="text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.dateTime"))}</p></div></div><div class="flex flex-col justify-center"${_scopeId}><p class="text-red-500"${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.notTraveled"))}</p></div></div></div>`);
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "pl-2" }, [
            (openBlock(), createBlock(Fragment, null, renderList(2, (index) => {
              return createVNode("div", {
                key: index,
                class: "bg-white p-4 rounded-lg flex mb-4"
              }, [
                createVNode("div", { class: "flex text-normal pl-2 flex-1" }, [
                  createVNode("div", { class: "flex flex-1" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("div", { class: "flex border-b-2 border-green-200 mb-2" }, [
                        createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.airport")), 1),
                        createVNode(_component_Icon, {
                          name: "material-symbols-arrow-right-alt",
                          class: "mx-2 w-6 h-6"
                        }),
                        createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.pier")), 1)
                      ]),
                      createVNode("p", { class: "text-sm" }, toDisplayString(_ctx.$t("bookingStatus.adultTicket")), 1),
                      createVNode("p", { class: "text-sm" }, toDisplayString(_ctx.$t("bookingStatus.infantTicket")), 1),
                      createVNode("p", { class: "text-gray-500" }, toDisplayString(_ctx.$t("bookingStatus.dateTime")), 1)
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col justify-center" }, [
                    createVNode("p", { class: "text-red-500" }, toDisplayString(_ctx.$t("bookingStatus.notTraveled")), 1)
                  ])
                ])
              ]);
            }), 64))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/refundApply" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="pl-2"${_scopeId}><div class="bg-white p-4 rounded-lg flex mb-4"${_scopeId}><div class="flex text-normal pl-2 flex-1"${_scopeId}><div class="flex flex-1"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p>`);
        _push2(ssrRenderComponent(_component_Icon, {
          name: "material-symbols-arrow-right-alt",
          class: "mx-2 w-6 h-6"
        }, null, _parent2, _scopeId));
        _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p></div><p class="text-orange-400"${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.refundedApproving"))} NT$ \xA030.00 </p></div></div><!--[-->`);
        ssrRenderList(2, (index) => {
          _push2(`<div class="bg-white p-4 rounded-lg flex mb-4"${_scopeId}><div class="flex text-normal pl-2 flex-1"${_scopeId}><div class="flex flex-1"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "material-symbols-arrow-right-alt",
            class: "mx-2 w-6 h-6"
          }, null, _parent2, _scopeId));
          _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p></div><p class="text-green-500"${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.refundedtoUser"))} NT$ \xA030.00 </p></div></div>`);
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "pl-2" }, [
            createVNode("div", { class: "bg-white p-4 rounded-lg flex mb-4" }, [
              createVNode("div", { class: "flex text-normal pl-2 flex-1" }, [
                createVNode("div", { class: "flex flex-1" }, [
                  createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.pier")), 1),
                  createVNode(_component_Icon, {
                    name: "material-symbols-arrow-right-alt",
                    class: "mx-2 w-6 h-6"
                  }),
                  createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.airport")), 1)
                ]),
                createVNode("p", { class: "text-orange-400" }, toDisplayString(_ctx.$t("bookingStatus.refundedApproving")) + " NT$ \xA030.00 ", 1)
              ])
            ]),
            (openBlock(), createBlock(Fragment, null, renderList(2, (index) => {
              return createVNode("div", {
                key: index,
                class: "bg-white p-4 rounded-lg flex mb-4"
              }, [
                createVNode("div", { class: "flex text-normal pl-2 flex-1" }, [
                  createVNode("div", { class: "flex flex-1" }, [
                    createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.pier")), 1),
                    createVNode(_component_Icon, {
                      name: "material-symbols-arrow-right-alt",
                      class: "mx-2 w-6 h-6"
                    }),
                    createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.airport")), 1)
                  ]),
                  createVNode("p", { class: "text-green-500" }, toDisplayString(_ctx.$t("bookingStatus.refundedtoUser")) + " NT$ \xA030.00 ", 1)
                ])
              ]);
            }), 64))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/orderDetail" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="pl-2 pb-16"${_scopeId}><!--[-->`);
        ssrRenderList(5, (index) => {
          _push2(`<div class="bg-white p-4 rounded-lg flex mb-4 text-gray-500"${_scopeId}><div class="flex text-normal pl-2 flex-1"${_scopeId}><div class="flex flex-1"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.pier"))}</p>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "material-symbols-arrow-right-alt",
            class: "mx-2 w-6 h-6"
          }, null, _parent2, _scopeId));
          _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.airport"))}</p></div><p class="text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.$t("bookingStatus.complete"))}</p></div></div>`);
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "pl-2 pb-16" }, [
            (openBlock(), createBlock(Fragment, null, renderList(5, (index) => {
              return createVNode("div", {
                key: index,
                class: "bg-white p-4 rounded-lg flex mb-4 text-gray-500"
              }, [
                createVNode("div", { class: "flex text-normal pl-2 flex-1" }, [
                  createVNode("div", { class: "flex flex-1" }, [
                    createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.pier")), 1),
                    createVNode(_component_Icon, {
                      name: "material-symbols-arrow-right-alt",
                      class: "mx-2 w-6 h-6"
                    }),
                    createVNode("p", null, toDisplayString(_ctx.$t("bookingStatus.airport")), 1)
                  ]),
                  createVNode("p", { class: "text-gray-500" }, toDisplayString(_ctx.$t("bookingStatus.complete")), 1)
                ])
              ]);
            }), 64))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/allBookingStatus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const allBookingStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { allBookingStatus as default };
//# sourceMappingURL=allBookingStatus-BY7L6WAG.mjs.map
