import { defineComponent, ref, unref, useSSRContext } from 'vue';
import { ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "test",
  __ssrInlineRender: true,
  setup(__props) {
    const data2 = ref([]);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(unref(data2), (booking) => {
        _push(`<div class="relative w-full border rounded-lg p-5 mb-6"><p>${ssrInterpolate(booking.contact_name)}</p></div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=test-DzXRBNFG.mjs.map
