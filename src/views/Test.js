import Select from "./Select";
const maps = [
  {
    key: "key1",
    opts: [
      { label: "item1", value: 1 },
      { label: "item2", value: 2 },
      { label: "item3", value: 3 }
    ]
  },
  {
    key: "key2",
    opts: [
      { label: "item4", value: 4 },
      { label: "item5", value: 5 },
      { label: "item6", value: 6 }
    ]
  }
];
const Test = {
  data() {
    return {
      apiParam: {},
      testdata: {}
    };
  },
  methods: {
    changeHandler(objKey, val) {
      console.log(objKey, val);
      this.$set(this.apiParam, objKey, val);
      console.log(this.apiParam);
    }
  },
  mounted() {
    this.$set(this.testdata, "a", 2);
  },
  render() {
    return (
      <div>
        {maps.map(item => (
          <Select
            {...{
              props: {
                opts: item.opts,
                objKey: item.key
              }
            }}
            onChange={this.changeHandler}
          ></Select>
        ))}
      </div>
    );
  }
};

export default Test;
