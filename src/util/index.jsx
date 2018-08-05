class Util {
    request(param) {
        return new Promise((resolve, reject)=>{
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success: res=>{
                    if(0===res.status){
                        //数据请求成功
                        typeof resolve === 'function'&&resolve(res.data, res.msg);
                    }else if(10===res.status){
                        //要登录
                        this.doLogin();
                    }else {
                        typeof reject === 'function'&&resolve(res.data || res.msg);
                    }
                },
                error: err=>{
                    typeof reject === 'function'&&resolve(err.statusText);
                }
            })
        })
    }
    doLogin(){
        window.location.href='/login?redirect='+ encodeURIComponent(window.location);
    }
    getUrlParam(name){
        let queryString = window.location.search.split('?')[1]||'',
            reg = new RegExp('(^|&)'+name+'=([^&]*)(&|$)'),
            result = queryString.match(reg);
            return result ? decodeURIComponent(result[2]): null;
    }
    errorTips(errMsg){
        alert(errMsg||'这里那里不对')
    }
    setStorage(name, data) {
        let dataType = typeof data;
        if(dataType=== 'object'){
            window.localStorage.setItem(name, JSON.stringify(data));
        }else  if(['number', 'string', 'boolean'].indexOf(dataType)){
            window.localStorage.setItem(name, data);
        }else {
            alert('该类型不能用于本地存储');
        }
    }
    getStorage(name){
        let data = window.localStorage.getItem(name);
        if(data){
            return JSON.parse(data);
        }else {
            return '';
        }
    }
    removeStorage(name){
        window.localStorage.removeItem(name);
    }
}

export default Util;