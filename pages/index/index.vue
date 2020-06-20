<template>
	<view class="container">
		<uni-list>
			<uni-list-item v-for="item in list" :title="item.title" :note="item.txts" @click="goDetail(item.id)" :rightText="getDate(item.create_time)"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import request from "../../utils/request.js";
	import DateTime from "../../utils/datetime.js";

	export default {
		data() {
			return {
				list: [],
				pageIndex: 0
			}
		},
		onLoad() {
			this.getList(0);
		},
		methods: {
			getDate(time_sp) {
				if (!time_sp) return '';
				if (time_sp < Date.now() - 7200000) {
					return DateTime.timDateFormart(time_sp, "yyyy-MM-dd")
				} else {
					return DateTime.timDateFormart(time_sp, "hh:mm:ss")
				}
			},
			goDetail(id) {
				console.log(id);
				uni.navigateTo({
					url: "detail?id=" + id,
					fail: function(e) {
						console.log(e)
					}
				})
			},
			async getList(pageIndex) {
				try {
					const list = await request.get("/msg", {
						pageIndex
					})
					this.list = this.list.concat(list);
					uni.stopPullDownRefresh();
				} catch (e) {
					console.log(e)
				}
			}
		},
		onReachBottom() {
			console.log("加载下一页")
			this.pageIndex++;
			this.getList(this.pageIndex);
		},
		onPullDownRefresh() {
			this.list = []
			this.pageIndex = 0
			this.getList(0)
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 3000);
		}
	}
</script>

<style>
	.container {
		font-size: 14px;
		line-height: 24px;
	}
</style>
