/**
 * 打印项目信息
 */
import preval from 'preval.macro';
import { format } from 'date-fns';

function consoleInfo(...args) {
  const _args = args
    .map((value) => {
      if (value === undefined) {
        return 'undefined';
      } else if (typeof value === 'string') {
        return JSON.stringify(value);
      }
      try {
        return JSON.stringify(value);
      } catch (error) {
        return '[TypeError]';
      }
    })
    .join(' ')
    .replace(/\"/g, '');

  console.log(
    `%c [${process.env.NODE_ENV}]   ${_args}`,
    `background:${process.env.NODE_ENV === 'production' ? '#000' : '#f00'}; color:#fff`,
  );
}

const date = preval`module.exports = Date.now()`;

consoleInfo(process.env.VUE_APP_PACKAGE_VERSION, process.env.VUE_APP_PACKAGE_NAME, format(date, 'yyyy-MM-dd HH:mm:ss'));
