<template>
	<view class="container">
		<uni-card title="设备ID" mode="basic" extra="点击复制" @click="copy(uuid)">
			<view>
				{{uuid}}
			</view>
		</uni-card>
		<uni-card title="推送ID" mode="basic" extra="点击复制" @click="copy(clientid)">
			<view>
				{{clientid}}
			</view>
		</uni-card>
		<view class="hang"></view>
		<view class="box">
			<uni-list>
				<uni-list-item title="接口版本" rightText="v1.0.0" :showArrow="false"></uni-list-item>
				<uni-list-item title="版本号" :rightText="version" :showArrow="false"></uni-list-item>
				<uni-list-item title="测试消息" @click="pushMsg"></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	import clipboard from "../../utils/clipboard.js";
	import request from "../../utils/request.js"

	export default {
		data() {
			return {
				uuid: '',
				version: '',
				clientid: '',
				projecttitle: ""
			};
		},
		onLoad() {
			this.uuid = plus.device.uuid;
			this.version = plus.runtime.version;
			const info = plus.push.getClientInfo();
			this.clientid = info.clientid;
			console.log(info);
		},
		methods: {
			tryreg() {
				// request.get("/api/open/reg?clientid=" + this.clientid)
			},
			pushMsg() {
				plus.push.createMessage("测试本地消息", "消息内容")
			},
			copy(str) {
				clipboard.setText(str);
				plus.nativeUI.toast("已复制");
			}
		}
	}
</script>

<style>
	.container {
		font-size: 14px;
	}

	.hang {
		height: 10px;
	}

	.box {
		border-top: solid 1px #efefef;
		border-bottom: solid 1px #efefef;
	}
</style>
