// 防抖(ts)
export class Debounced {
  /**
   * @param func 需要包装的函数
   * @param delay 延迟时间，单位ms
   * @param immediate 是否默认执行一次(第一次不延迟)
   */
  public use = (func: Function, delay: number, immediate: boolean = false): Function => {
    let timer: number | undefined
    return (...args: any) => {
      if (immediate) {
        func.apply(this, args) // 确保引用函数的指向正确，并且函数的参数也不变
        immediate = false
        return
      }
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }
}

export class Throttle {
  public use = (func: Function, delay: number): Function => {
    let valid = true
    return () => {
      if (!valid) {
        //休息时间 暂不接客
        return false
      } else {
        func()
      }
      // 工作时间，执行函数并且在间隔期内把状态位设为无效
      valid = false
      setTimeout(() => {
        valid = true;
      }, delay)
    }
  }
}



export const px2vw = (number: number) => {
  return `${(100 / 750) * number}vw`;
};
export const urlParse = (params: string) => {
  const removeQuestionMark = params.split("?");
  const query = removeQuestionMark[1];
  const removeAndMark = query.split("&");
  const search: any = {};
  for (let item of removeAndMark) {
    let proxyArr = item.split("=");
    let left = proxyArr[0];
    let right = proxyArr[1];
    search[left] = right;
  }
  return search;
};

export const convert = (date: any, format: any) => {
  let _this = date
  var args: any = {
    "M+": _this.getMonth() + 1,
    "d+": _this.getDate(),
    "h+": _this.getHours(),
    "m+": _this.getMinutes(),
    "s+": _this.getSeconds(),
    "q+": Math.floor((_this.getMonth() + 3) / 3), //quarter
    "S": _this.getMilliseconds()
  };
  if (/(y+)/.test(format))
    format = format.replace(RegExp.$1, (_this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var i in args) {
    var n = args[i];
    if (new RegExp("(" + i + ")").test(format))
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
  }
  return format;
};