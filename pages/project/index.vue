<template>
	<view class="container">
		<uni-list>
			<uni-list-item title="测试项目" :showSwitch="true" :showArrow="false" @switchChange="switchChange(1)">
			</uni-list-item>
		</uni-list>
		<button @click="open">测试</button>
		<xuan-loading ref="loading" :shadeClick="true"></xuan-loading>
	</view>
</template>

<script>
	import request from "../../utils/request";

	export default {
		data() {
			return {

			};
		},
		async onLoad() {
			try {
				const data = await request.get("http://xc.fe.corp.daling.com/api_config/resource/wxapp");
				console.log(data)
			} catch (e) {
				console.log(e)
			}
		},
		methods: {
			switchChange(e, id) {
				console.log(e, id)
			},
			close: function() {
				this.$refs.loading.close();
			},
			open: function() {
				this.$refs.loading.open();
				setTimeout(() => {
					this.close();
				}, 10000)
			},
		}
	}
</script>

<style>
	.container {
		font-size: 12px;
	}
</style>
