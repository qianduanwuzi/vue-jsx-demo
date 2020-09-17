const Child = {
  data() {
    return {};
  },
  methods: {
    childPipe(e) {
      alert("child click pipe to parent");
      e && e.stopPropagation();
      this.$emit("childPipe");
    }
  },
  render() {
    // const { $emit } = this;
    return (
      <div>
        <div
          //   onClick={e => {
          //     e.stopPropagation();
          //     this.childPipe();
          //   }}
          onClick={this.childPipe}
        >
          this is child
        </div>
        {/* <div onClick={$emit("onChildPipe1")}>this is child2</div> */}
      </div>
    );
  }
};

export default Child;
