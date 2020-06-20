<template>
	<view class="container">
		<uni-card title="设备信息" mode="basic" extra="点击复制" @click="copy(uuid)">
			<view>
				{{uuid}}
			</view>
		</uni-card>
		<view class="hang"></view>
		<view class="box">
			<uni-list>
				<uni-list-item title="所属项目" :rightText="projecttitle" :showArrow="false"></uni-list-item>
				<uni-list-item title="版本号" :rightText="version" :showArrow="false"></uni-list-item>
				<uni-list-item title="测试消息" @click="pushMsg"></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	import clipboard from "../../utils/clipboard.js";

	export default {
		data() {
			return {
				uuid: '',
				version: '',
				projecttitle: ""
			};
		},
		onLoad() {
			this.uuid = plus.device.uuid;
			this.version = plus.runtime.version;
		},
		methods: {
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
		border-top: solid 1px #ccc;
		border-bottom: solid 1px #ccc;
	}
</style>
