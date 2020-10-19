// import './style.less';
import Vue from "vue";
// import Antd from 'ant-design-vue';
// import Icon from '../src/components/Icon';

// const ctx = require.context("./components", true, /index\.(jsx?|tsx?)$/);

const ctx = require.context("../src/components", true, /^*\.vue$/);
console.log(ctx.keys());
ctx.keys().forEach(key => {
  const Comp = ctx(key).default;
  Vue.component(Comp.name, Comp);
});

// Vue.use(Antd);
// Vue.use(Icon);

console.log(
  `VERSION: %c${process.env.VERSION}`,
  "color:#1a6bac;font-style:italic;"
);
