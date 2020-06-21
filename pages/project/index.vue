<template>
	<view class="container">
		<uni-list>
			<uni-list-item class="items" v-for="item in list" :title="item.name" :rightText="getDate(item.createdAt)" :showArrow="false" thumb="https://img5.daling.com/zin/public/specialTopic/2020/06/20/18/44/22/525400B9EA93HWRJF000008056333.png">
			</uni-list-item>
		</uni-list>
		<xuan-loading ref="loading" :shadeClick="true"></xuan-loading>
	</view>
</template>

<script>
	import request from "../../utils/request";
	import DateTime from "../../utils/datetime.js";
	
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
			getDate(time) {
				if (!time) return '';
				return time.split('T')[0];
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
