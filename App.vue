<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			plus.push.addEventListener('click', function(msg) {
				// 分析msg.payload处理业务逻辑 
				console.log('You clicked: ' + msg.content,msg.payload);
			}, false);

			// uni.navigateTo({
			// 	url: "pages/index/detail",
			// 	fail:function(e){
			// 		console.log(e)
			// 	}
			// })
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style>
	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}

	/* #endif */
</style>
