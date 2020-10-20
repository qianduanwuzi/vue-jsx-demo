import Child from "./Child";
import Comp from "./Comp";
import FunCon from "./FunCom";
import SelfCom from "./SelfCom";
import { WZTestJsx } from "wuzi-package";
const About = {
  data() {
    return {
      test: "1111",
      isShow: false,
      tabValue: "",
      arr: []
    };
  },
  methods: {
    clickHandler() {
      alert("this is click");
    },
    clickHandler1(value) {
      alert(value);
    },
    clickChild() {
      this.$refs.child.childPipe();
    },
    childPipe() {
      alert("child pipe");
    },
    childPipe1() {
      alert("child pipe1");
    },
    nativeClickHandler() {
      alert("this is com native click");
    },
    forbianli() {
      alert(1);
      // const a = [
      //   { name: 1, value: 1 },
      //   { name: 2, value: 2 }
      // ];
      // console.log(
      //   a.map(item => {
      //     <div>{item.name}</div>;
      //   })
      // );
      // return a.map(item => {
      //   <div>{item.name}</div>;
      // });
    }
  },
  render() {
    const { test } = this;
    const a = [
      { name: 1, value: 1 },
      { name: 2, value: 2 }
    ];
    const scopedSlots = {
      test: ({ user }) => <div>this is {user.username}</div>
    };
    const pipeprops = {
      name: "老五",
      age: 27
    };
    const tab = [{ name: "tab1" }, { name: "tab2" }];
    this.arr = [1, 2, 3];
    return (
      <div title={test}>
        <WZTestJsx />
        {this.arr.map(item => (
          <div>{item}</div>
        ))}
        <SelfCom tab={tab} vModel={this.tabValue}></SelfCom>
        {this.tabValue}
        <div onClick={() => this.$refs.child.childPipe()}>
          {this.isShow ? "false" : "true"}
        </div>
        <div onClick={this.clickHandler}>click event</div>
        <div onClick={this.clickHandler1.bind(this, 1)}>click event1</div>
        {this.forbianli}
        {a.map(item => (
          <div>{item.name}</div>
        ))}
        <Child
          opt={[{ name: 111111111 }]}
          ref="child"
          nativeOnClick={this.nativeClickHandler}
          onChildPipe={this.childPipe}
          onChildPipe1={this.childPipe1}
        >
          this is child
        </Child>
        <Comp scopedSlots={scopedSlots}></Comp>
        <div>----------------------------</div>
        <Comp
          name="陈楠"
          {...{ props: pipeprops }}
          {...{
            scopedSlots: {
              test: ({ user }) => (
                <div style={{ color: "red" }}>{user.username}</div>
              )
            }
          }}
        >
          <div>this is default</div>
          <div slot="title">this is title slot</div>
        </Comp>
        <FunCon message="world"></FunCon>
      </div>
    );
  }
};

export default About;
