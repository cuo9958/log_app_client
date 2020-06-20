async function _request(url, data, header = {}) {
	const [err, res] = await uni.request({
		url: url, //仅为示例，并非真实接口地址。
		data: data,
		header
	});
	if (res.statusCode !== 200) throw new Error("网络失败")
	const result = res.data;
	console.log("result", result, result.status)
	if (result.status !== 0) throw new Error(result.msg);
	console.log("data", result.data)
	return result.data
}

function get(url, data) {
	return _request(url, data)
}

module.exports = {
	get
}
