<template>
	<view class="container">
		<uni-list>
			<uni-list-item title="标题" note="描述" @click="goDetail(1)"></uni-list-item>
			<uni-list-item title="标题" note="描述" @click="goDetail(2)"></uni-list-item>
			<uni-list-item title="标题" note="描述" @click="goDetail(2)"></uni-list-item>
			<uni-list-item title="标题" note="描述" @click="goDetail(2)"></uni-list-item>
			<uni-list-item title="标题" note="描述" @click="goDetail(2)"></uni-list-item>
			<uni-list-item title="标题" note="描述" @click="goDetail(2)"></uni-list-item>
			<uni-list-item title="标题" note="描述" @click="goDetail(2)"></uni-list-item>
			<uni-list-item title="标题" note="描述" @click="goDetail(2)"></uni-list-item>
			<uni-list-item title="标题" note="描述" @click="goDetail(2)"></uni-list-item>
			<uni-list-item title="标题" note="描述" @click="goDetail(2)"></uni-list-item>
		</uni-list>
		<uni-load-more></uni-load-more>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {
			goDetail(id) {
				console.log(id);
				uni.navigateTo({
					url: "detail",
					animationType: 'pop-in',
					animationDuration: 200,
					fail:function(e){
						console.log(e)
					}
				})
			}
		},
		onReachBottom() {
			console.log("加载下一页")
		},
		onPullDownRefresh() {
			console.log("下拉刷新");
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		}
	}
</script>

<style>
	.container {
		font-size: 14px;
		line-height: 24px;
	}
</style>
