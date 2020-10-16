const Child = {
  data() {
    return {};
  },
  props: {
    opt: {
      default: () => [],
      type: Array
    }
  },
  functional: true,
  methods: {
    childPipe(e) {
      alert("child click pipe to parent");
      e && e.stopPropagation();
      this.$emit("childPipe");
    }
  },
  render(h, { children, listeners, props }) {
    return (
      <div>
        <div
          //   onClick={e => {
          //     e.stopPropagation();
          //     this.childPipe();
          //   }}
          onClick={listeners.childPipe}
        >
          this is child's com
        </div>
        <div>{children}</div>
        <div>
          测试opt
          {props.opt}
          {props.opt.map(item => {
            <div>{item.name}</div>;
          })}
        </div>
      </div>
    );
  }
};

export default Child;
