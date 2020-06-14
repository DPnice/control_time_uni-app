const appId = 'wx86f60901dd463818' //此处为appId
class HTTP {

  // constructor() {
  //   this.baseUrl = 'http://localhost:10021/control'
  // }
  constructor() {
    this.baseUrl = 'https://www.dpnice.online/control'
  }
 
  request({
    url,
    data = {},
    method = 'GET',
	doSuccess,
	doFail
  }){
	  return this._request(url, data, method, doSuccess, doFail);
    }
  
  _request(url, data = {}, method = 'GET', doSuccess, doFail) {
  	uni.request({
  		url: url,
  		method: method,
  		data: data,
  		header: {
  		  'content-type': 'application/json',
  		  'appId': appId
  		},
  		success: (res) => {
			console.log('request success', res)
			doSuccess(res);
  		},
  		fail: (err) => {
			console.log('request fail', err);
			doFail(err);
  		},
  		complete: () => {
  			
  		}
  	});
  }
 
}
 
export {
	HTTP
}