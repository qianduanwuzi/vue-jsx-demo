/* eslint-disable */

// const glob = require('glob');
// const fs = require('fs');
// const path = require('path');
// const isProd = process.env.NODE_ENV === 'production';
// const publicPath = isProd ? '/common-components/' : '/';

// module.exports = {
//   require: [path.resolve(__dirname, './examples/bootstrap.js')],
//   sections: [
    // {
    //   name: 'Introduction',
    //   content: 'Readme.md',
    // },
    // {
    //   name: 'Icons',
    //   content: 'examples/docs/Icons.md',
    // },
    // {
    //   name: 'Components',
    //   components() {
    //     const paths = [];

    //     glob.sync('./src/components/[A-Z]*').forEach((dir) => {
    //       const name = path.basename(dir);
    //       const comp = path.join(dir, `${name}.js`);
    //       if (fs.existsSync(comp)) {
    //         paths.push(comp);
    //       }
    //     });

    //     return paths;
    //   },
    // },
//   ],
//   assetsDir: 'assets',
//   title: 'common-components',
//   styleguideDir: 'examples/dist',
//   styleguidePublicPath: publicPath,
//   updateDocs(docs) {
//     if (docs && docs.displayName) {
//       docs.visibleName = docs.displayName.replace('Kzz', '');
//     }

//     return docs;
//   },

//   webpackConfig: require('./configs/webpack.styleguidist.js'),
//   jsxInExamples: true,
//   theme: {
//     maxWidth: 1440,
//     sidebarWidth: 258,
//   },
//   styles: {
//     Playground: {
//       preview: {
//         overflow: 'auto',
//       },
//     },
//   },
//   pagePerSection: true,
//   template: {
//     lang: 'zh-Hans',
//     favicon: publicPath + 'favicon.png',
//   },
// };

module.exports = {
    components: 'src/components/**/*.vue'
};
