$(function () {
	$("#dianji").on("touchend",function () {
		$("#zhezhao").show();
	})
	$("#close").on("touchend",function () {
		$("#zhezhao").hide();
	})
	$("#sent2").on("click",function () {
		var zhufu = $("#txt").val();
		console.log(zhufu)
		var name=$("#name").val();
		console.log(name)
		if (zhufu!==''&& name!=="") {
			var lis = $('<li><p class="name">'+name+'</p><p class="bai">'+zhufu+'</p></li>');
			$("#list").prepend(lis);
		}
	})
})
