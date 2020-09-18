import style from "./test.less";
const Select = {
  data() {
    return {
      selectedLabel: null
    };
  },
  props: {
    opts: {
      default: () => [],
      type: Array
    },
    objKey: {
      default: "",
      type: String
    }
  },
  methods: {
    optClick(opt) {
      this.selectedLabel = opt.label;
      this.$emit("change", this.objKey, opt.value);
    }
  },
  render() {
    const { opts, selectedLabel } = this;
    return (
      <div>
        <div>{selectedLabel}</div>
        <div>
          {opts.map(opt => (
            <div
              class={style.opt}
              onClick={() => {
                this.optClick(opt);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Select;
