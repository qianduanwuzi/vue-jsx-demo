import { store, mutations } from "./store";
import Child from "./child";
export default {
  computed: {
    count() {
      return store.count;
    },
    name() {
      return store.name;
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
        <div>this is parent</div>
        <div
          onClick={() => {
            this.addCount(this.count + 1);
          }}
        >
          add count
        </div>
        <div>父组件增加count：{this.count}</div>
        <Child />
      </div>
    );
  }
};
