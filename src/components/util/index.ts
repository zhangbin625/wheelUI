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