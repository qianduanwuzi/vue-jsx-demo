import { store } from "./store";
export default {
  computed: {
    count() {
      return store.count;
    }
  },
  render() {
    return (
      <div>
        <div>这是孙子组件</div>
        <div>count值: {this.count}</div>
      </div>
    );
  }
};
