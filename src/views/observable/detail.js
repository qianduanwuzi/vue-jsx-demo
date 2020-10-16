import { store } from "./store";
import { Upload } from "ant-design-vue";
import "./upload.less";
export default {
  computed: {
    count() {
      return store.count;
    }
  },
  data() {
    return {
      imgurl: ""
    };
  },
  methods: {
    beforeUpload() {},
    handleChange() {}
  },
  render() {
    return (
      <div>
        <div>detail</div>
        <div>{this.count}</div>
        <Upload
          name="avatar"
          class="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={this.beforeUpload}
          onChange={this.handleChange}
        >
          <img v-if="imgurl" src={this.imgurl} alt="avatar" />
          <div v-else>
            {/* <a-icon :type="loading ? 'loading' : 'plus'" /> */}
            <div class="ant-upload-text">Upload</div>
          </div>
        </Upload>
      </div>
    );
  }
};
