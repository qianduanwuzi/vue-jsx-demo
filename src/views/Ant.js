import { Button, Select, Form, Input } from "ant-design-vue";
const ant = {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this),
      seVal: ""
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        console.log(this.form, err);
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`
      });
    }
  },
  beforeCreate() {
    // this.form = this.$form.createForm(this);
  },
  mounted() {
    this.seVal = "male";
    // this.form.setFieldsValue({ note: "我输入了" });
    this.form.setFieldsValue({ note: "我输入了", gender: "female" });
  },
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Select
          style={{ width: "120px" }}
          placeholder="Select a option and change input text above"
          value={this.seVal}
        >
          <Select.Option value="male">male</Select.Option>
          <Select.Option value="female">female</Select.Option>
        </Select>
        <Form
          form={this.form}
          label-col={{ span: 5 }}
          wrapper-col={{ span: 12 }}
          onSubmit={this.handleSubmit}
        >
          <Form.Item label="Note">
            <Input
              v-decorator={[
                "note",
                {
                  rules: [
                    { required: true, message: "Please input your note!" }
                  ]
                }
              ]}
            />
          </Form.Item>
          <Form.Item label="Gender">
            <Select
              allowClear
              v-decorator={[
                "gender",
                {
                  rules: [
                    { required: true, message: "Please select your gender!" }
                  ],
                  initialValue: "male"
                }
              ]}
              placeholder="Select a option and change input text above"
              onChange={this.handleSelectChange}
            >
              <Select.Option value="male">male</Select.Option>
              <Select.Option value="female">female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item wrapper-col={{ span: 12, offset: 5 }}>
            <Button type="primary" html-type="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
};

export default ant;
