import {
	HTTP
} from '../utils/http.js'

class AppModel extends HTTP {

	statistics(wxOpenId, year, month, day, doSuccess, doFail) {
		console.log("参数:", wxOpenId)
		this.request({
			url: `${this.baseUrl}/note/statistics?wxOpenId=` + wxOpenId + "&year=" + year + "&month=" + month + "&day=" + day,
			method: 'GET',
			doSuccess,
			doFail
		})
	}

	plus(wxOpenId, doSuccess, doFail) {
		console.log("参数:", wxOpenId)
		this.request({
			url: `${this.baseUrl}/login/plus?wxOpenId=` + wxOpenId,
			method: 'GET',
			doSuccess,
			doFail
		})
	}

	reduce(wxOpenId, doSuccess, doFail) {
		console.log("参数:", wxOpenId)
		this.request({
			url: `${this.baseUrl}/login/reduce?wxOpenId=` + wxOpenId,
			method: 'GET',
			doSuccess,
			doFail
		})
	}

	groupList(groupUuid, doSuccess, doFail) {
		console.log("参数:", groupUuid)
		this.request({
			url: `${this.baseUrl}/group/list?groupUuid=` + groupUuid,
			method: 'GET',
			doSuccess,
			doFail
		})
	}

	joinGroup(wxOpenId, groupUuid, doSuccess, doFail) {
		console.log("参数:", wxOpenId, groupUuid)
		this.request({
			url: `${this.baseUrl}/group/join?wxOpenId=` + wxOpenId + "&groupUuid=" + groupUuid,
			method: 'GET',
			doSuccess,
			doFail
		})
	}

	creatGroup(wxOpenId, groupName, doSuccess, doFail) {
		console.log("参数:", wxOpenId, groupName)
		this.request({
			url: `${this.baseUrl}/group/save?wxOpenId=` + wxOpenId + "&groupName=" + groupName,
			method: 'GET',
			doSuccess,
			doFail
		})
	}

	login(params, doSuccess, doFail) {
		console.log("登录参数:", params)
		this.request({
			url: `${this.baseUrl}/login/wx`,
			method: 'POST',
			data: params,
			doSuccess,
			doFail
		})
	}

	updateUser(params, doSuccess, doFail) {
		console.log("参数:", params)
		this.request({
			url: `${this.baseUrl}/login/updateUser`,
			method: 'POST',
			data: params,
			doSuccess,
			doFail
		})
	}

	saveNote(params, doSuccess, doFail) {
		console.log("参数:", params)
		this.request({
			url: `${this.baseUrl}/note/save`,
			method: 'POST',
			data: params,
			doSuccess,
			doFail
		})
	}

	getNote(wxOpenId, date, doSuccess, doFail) {
		console.log("参数:", wxOpenId, date)
		this.request({
			url: `${this.baseUrl}/note/get?wxOpenId=` + wxOpenId + "&date=" + date,
			method: 'GET',
			doSuccess,
			doFail
		})
	}



}

export {
	AppModel
}
