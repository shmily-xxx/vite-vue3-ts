import _ from 'lodash';
/**
 * 获取接口返回的流转成blob对象下载
 * @param fileName  自定义文件名称
 * @param blob  接口返回的流数据
 *  const content = res;
    const blob = new Blob([content]);
 */

export function downLoadFile(fileName: 'string', blob: any) {
  if (!fileName || !blob) {
    return false;
  }
  if ('download' in document.createElement('a')) {
    // 非IE下载
    const elink = document.createElement('a');
    elink.download = fileName;
    elink.style.display = 'none';
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
  } else {
    // IE10+下载
    (navigator as any).msSaveBlob(blob, fileName);
  }
}

/*
判断浏览器的类型
*/
export function BrowserType() {
  const userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
  const isOpera = userAgent.indexOf('Opera') > -1; // 判断是否Opera浏览器
  const isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera || userAgent.indexOf('rv:11') > -1; // 判断是否IE浏览器
  const isEdge = userAgent.indexOf('Windows NT 6.1; Trident/7.0;') > -1 && !isIE; // 判断是否IE的Edge浏览器
  const isFF = userAgent.indexOf('Firefox') > -1; // 判断是否Firefox浏览器
  const isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1; // 判断是否Safari浏览器
  const isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1; // 判断Chrome浏览器
  const isUC = userAgent.indexOf('UBrowser') > -1 || userAgent.indexOf('UCBrowser') > -1;
  if (isIE) {
    if (userAgent.indexOf('rv:11') > -1) {
      return 'IE11';
    }
    if (userAgent.indexOf('rv:12') > -1) { // 这一段还没验证
      return 'IE12';
    }
    /* var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
                                                        reIE.test(userAgent); */
    var fIEVersion = parseFloat(RegExp['$1']);
    if (fIEVersion === 7) { return 'IE7'; } else if (fIEVersion === 8) { return 'IE8'; } else if (fIEVersion === 9) { return 'IE9'; } else if (fIEVersion === 10) { return 'IE10'; } else if (fIEVersion === 11) { return 'IE11'; } else if (fIEVersion === 12) { return 'IE12'; } else { return '0'; } // IE版本过低
  } // isIE end
  if (isUC) { return 'UC'; }else
  if (isFF) { return 'FF'; }else
  if (isOpera) { return 'Opera'; }else
  if (isSafari) { return 'Safari'; }else
  if (isChrome) { return 'Chrome'; }else
  if (isEdge) { return 'Edge'; }else{return '未知'}
}

// 两个浮点数求和
export function accAdd(num1:number, num2:number) {
  let r1, r2;
  try {
    r1 = num1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  const m = Math.pow(10, Math.max(r1, r2));
  return Math.round(num1 * m + num2 * m) / m;
}

// 两个浮点数相减
export function accSub(num1:number, num2:number) {
  let r1, r2;
  try {
    r1 = num1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  const m = Math.pow(10, Math.max(r1, r2));
  const n = (r1 >= r2) ? r1 : r2;
  return (Math.round(num1 * m - num2 * m) / m).toFixed(n);
}
// 两数相除
export function accDiv(num1:number, num2:number) {
  let t1, t2;
  try {
    t1 = num1.toString().split('.')[1].length;
  } catch (e) {
    t1 = 0;
  }
  try {
    t2 = num2.toString().split('.')[1].length;
  } catch (e) {
    t2 = 0;
  }
  const r1 = Number(num1.toString().replace('.', ''));
  const r2 = Number(num2.toString().replace('.', ''));
  const sh = (r1 / r2);
  let chu = Math.pow(10, Math.abs(t2 - t1)); // 小数位差值
  chu = t2 >= t1 ? chu : 1 / chu; // 小数位差值正负转换
  const result = accMul(sh, chu);
  return result;
}
// js计算两浮点数相乘-精确算法--整数也适用
export function accMul(arg1:number, arg2:number) {
  var m = 0;
  var s1 = arg1.toString();
  var s2 = arg2.toString();
  // eslint-disable-next-line no-empty
  try { m += s1.split('.')[1].length; } catch (e) {}
  // eslint-disable-next-line no-empty
  try { m += s2.split('.')[1].length; } catch (e) {}
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}

// 金额转千分位处理
export function toThousands(outNum:string|number) {
  // 负号，整数，小数
  let negative = '';
  let integer;
  let decimal = '';
  try {
    // 拆分小数和整数
    const numsArr = outNum.toString().split('.');
    integer = numsArr[0];
    decimal = numsArr[1] ? numsArr[1] : '';
    if (_.startsWith(integer, '-')) {
      negative = integer.slice(0, 1);
      integer = Math.abs(+integer).toString();
    }
    // eslint-disable-next-line no-empty
  } catch (e) {}
  // 整数部分长度，添加逗号
  let num = (integer || 0).toString();
  var result = '';
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result;
    num = num.slice(0, num.length - 3);
  }
  if (num) { result = num + result; }
  result = negative + result;
  return decimal ? result + '.' + decimal : result;
}

// 计算字符长度（1个汉字算两个字节）
export function getStringLength(str:string) {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    len += (str.charCodeAt(i) > 255) ? 2 : 1;
  }
  return len;
}

// 截取字符串长度（1个汉字算两个字节）
export function getStringSplice(str:string, len:number) {
  const temp = str;
  if (!str) {
    return '';
  }
  let num = 0;
  for (let i = 0, lens = temp.length; i < lens; i++) {
    num += ((temp.charCodeAt(i) > 255) ? 2 : 1);
    if (num > len) {
      break;
    } else {
      str = temp.substring(0, i + 1);
    }
  }
  return str;
}

// 数字三位加逗号
export function numberFormatWithSeparator(num :number|string) {
  num = (num || 0).toString();
  let result = '';
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result;
    num = num.slice(0, num.length - 3);
  }
  if (num) { result = num + result; }
  return result;
}

/**
* @method 复制方法
* @param {string} 需要复制内容
*/
export function copy(value:string) {
  const input = document.createElement('textarea');
  input.style.position = 'fixed';
  input.value = value;
  document.body.appendChild(input);
  input.select();
  if (document.execCommand('Copy')) {
    document.execCommand('Copy');
  }
  if (BrowserType().includes('IE')) {
    const removeElement = function(_element:any) {
      const _parentElement = _element.parentNode;
      if (_parentElement) {
        _parentElement.removeChild(_element);
      }
    };
    removeElement(input);
  } else {
    input.remove();
  }
}