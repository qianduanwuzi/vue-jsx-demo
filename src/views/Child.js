const Child = {
  data() {
    return {};
  },
  functional: true,
  methods: {
    childPipe(e) {
      alert("child click pipe to parent");
      e && e.stopPropagation();
      this.$emit("childPipe");
    }
  },
  render(h, { children, listeners }) {
    return (
      <div>
        <div
          //   onClick={e => {
          //     e.stopPropagation();
          //     this.childPipe();
          //   }}
          onClick={listeners.childPipe}
        >
          this is child com
        </div>
        <div>{children}</div>
      </div>
    );
  }
};

export default Child;
