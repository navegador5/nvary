uglifyjs index.js     -m -c -o ../index.js
cd ../
npm version patch
cd WORKDIR

rollup -c cjs.rollup.config.js
uglifyjs nvary-cjs.js -m -c -o nvary-cjs.js


rollup -c umd.rollup.config.js
uglifyjs nvary-umd.js -m -c -o nvary-umd.js


