<template>
	<uni-card :title="model.txts" mode="title" thumbnail="https://img3.daling.com/zin/public/specialTopic/2020/06/12/11/43/03/5254000300B21KBUY000007857079.png">
		<view class="txts">{{model.link}}</view>
		<view class="links">{{model.createdAt}}</view>
	</uni-card>
</template>

<script>
	import request from "../../utils/request.js";
	import DateTime from "../../utils/datetime.js";

	export default {
		data() {
			return {
				id: 0,
				model: {
					title: "",
					txts: "",
					link: "",
					createdAt: ''
				}
			}
		},
		onLoad(opts) {
			this.id = opts.id * 1;
			this.getDetail();

		},
		methods: {
			async getDetail() {
				try {
					const data = await request.get("/msg/" + this.id);
					this.model = data;
					uni.setNavigationBarTitle({
						title: data.title
					});
				} catch (e) {
					console.log(e.message);
				}
			}
		}
	}
</script>

<style>
	.txts {
		font-size: 14px;
	}

	.links {
		font-size: 12px;
	}
</style>
