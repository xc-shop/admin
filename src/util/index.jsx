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
}

export default Util;