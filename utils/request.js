// const host = "http://10.36.32.27:18801/api/open"
const host = "http://shequ.guofangchao.com/api/open"

let _clientid = ''

function getClientID() {
	if (!_clientid) {
		const info = plus.push.getClientInfo();
		_clientid = info.clientid;
	}
	return _clientid;
}
async function _request(url, data) {
	const header = {
		clienid: getClientID()
	}
	const [err, res] = await uni.request({
		url: host + url,
		method: "GET",
		data: data,
		header,
		sslVerify: false
	});
	if (res.statusCode !== 200) throw new Error("网络失败")
	const result = res.data;
	if (result.code !== 1) throw new Error(result.msg || '服务器连接失败');
	return result.data
}

function get(url, data) {
	return _request(url, data)
}

module.exports = {
	get
}
