<template>
	<view class="container">
		<uni-list>
			<uni-list-item class="items" v-for="item in list" title="测试项目" :showArrow="false">
			</uni-list-item>
		</uni-list>
		<xuan-loading ref="loading" :shadeClick="true"></xuan-loading>
	</view>
</template>

<script>
	import request from "../../utils/request";

	export default {
		data() {
			return {
				list: []
			};
		},
		onLoad() {
			this.getData();
		},
		onPullDownRefresh() {
			this.getData()
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 3000);
		},
		methods: {
			async getData() {
				try {
					const list = await request.get("/project");
					this.list = list;
					uni.stopPullDownRefresh();
				} catch (e) {
					console.log(e.message);
				}
			},
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

	.items {
		border-bottom: solid 1px #efefef;
	}
</style>
