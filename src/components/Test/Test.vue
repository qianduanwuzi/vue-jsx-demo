<template>
  <button
    class="btn"
    :type="htmlType"
    :class="btnClass"
    :disabled="disabled"
    @click="handleClick"
  >
    <!-- @slot 按钮的图标 -->
    <slot name="icon" />
    <!-- @slot 按钮的内容 -->
    <slot />
  </button>
</template>

<script>
/**
 * The only true button
 * @displayName Test Button
 */
export default {
  name: "Test",
  props: {
    /**
     * 按钮主题
     */
    theme: {
      type: String,
      required: true
    },
    outline: {
      type: Boolean,
      default: false
    },
    /**
     * The size of the button
     * @values small, normal, large
     */
    size: {
      type: String,
      default: ""
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 按钮类型，有效值：button submit reset
     */
    htmlType: {
      type: String,
      default: "button"
    }
  },
  computed: {
    btnClass() {
      return {
        [`btn-${this.theme}`]: !!this.theme && !this.outline,
        [`btn-outline-${this.theme}`]: this.outline,
        [`btn-${this.size}`]: !!this.size,
        "btn-block": this.block
      };
    }
  },
  methods: {
    handleClick(e) {
      /**
       * 单击事件
       * @type {Event}
       */
      this.$emit("click", e);
    }
  }
};
</script>
