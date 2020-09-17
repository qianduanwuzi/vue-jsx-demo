const SelfCom = {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    tab: {
      default: () => [],
      type: Array
    },
    checked: {
      default: "",
      type: String
    }
  },
  methods: {
    tabClick(tabname) {
      this.$emit("change", tabname);
    }
  },
  render() {
    const { tab, checked } = this;
    return (
      <div>
        checked: {checked}
        {tab.map(tabItem => (
          <div onClick={this.tabClick.bind(this, tabItem.name)}>
            {tabItem.name}
          </div>
        ))}
      </div>
    );
  }
};

export default SelfCom;
