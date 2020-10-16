const Comp = {
  data() {
    return { newTodoText: 123 };
  },
  props: {
    name: {
      default: "老王",
      type: String
    },
    age: {
      default: "18",
      type: [Number, String]
    }
  },
  render() {
    this.name = "老王after";
    const HelloWorld = ({ props }) => <p>hello {props.name} -name</p>;
    const { title } = this.$slots;
    const { name, age } = this;
    const inputAttr = {
      type: "email",
      placeholder: "Enter your email"
    };
    return (
      <div>
        <HelloWorld></HelloWorld>
        <input {...{ attrs: inputAttr }} vModel={this.newTodoText} />
        {this.newTodoText}
        {name + age + "岁"}
        {this.$slots.default}
        {title}
        {this.$scopedSlots.test({
          user: { username: "陈楠" }
        })}
        <div>end---</div>
      </div>
    );
  }
};

export default Comp;
