import { store, mutations } from "./store";
import GrandChild from "./grandChild";
export default {
  computed: {
    count() {
      return store.count;
    }
  },
  methods: {
    addCount(count) {
      mutations.setCount(count);
    }
  },
  render() {
    return (
      <div>
        <div>这是子组件</div>
        <div>count值: {this.count}</div>
        <div
          onClick={() => {
            this.addCount(this.count + 1);
          }}
        >
          子组件add count
        </div>
        <GrandChild />
        <div
          onClick={() => {
            this.$router.push("/detail");
          }}
        >
          去详情页看看
        </div>
      </div>
    );
  }
};
