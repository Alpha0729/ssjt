

// 百度地图API功能
var map = new BMap.Map("allmap");    // 创建Map
map.centerAndZoom(new BMap.Point(116.391, 39.9745), 18);  // 初始化地图,设置中心点坐标和地图级别
map.setCurrentCity("北京");     // 设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom(true);    //开启鼠标滚轮缩放
//地图、卫星、混合模式切换
map.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP]}));

//获取坐标点
map.addEventListener('click', function(e){
	console.log(e.point);
});

//创建标注对象并添加到地图
var point = new BMap.Point(116.3933,39.9753);  //默认

var marker = new BMap.Marker(point);
map.addOverlay(marker);

var point = new BMap.Point(116.380,39.975);  //图片
var myIcon = new BMap.Icon('http://t3.baidu.com/it/u=1119318591,884730191&fm=0&gp=0.jpg', new BMap.Size(20, 32), {
	anchor: new BMap.Size(10, 30)
});

var marker =new BMap.Marker(Point,{icon:myIcon});

map.addOverlay(mkr);

//添加地图控件
var opts = {anchor: BMAP_ANCHOR_TOP_RIGHT,offset: new BMap.Size(10, 45),type: BMAP_NAVIGATION_CONTROL_SMALL}
//type控件的类型：LARGE、SMALL、PAN（平移）、ZOOM（缩放）
map.addControl(new BMap.NavigationControl(opts));  //地图平移缩放控件，PC端默认位于地图左上方，它包含控制地图的平移和缩放的功能。
map.addControl(new BMap.ScaleControl());    //比例尺控件，默认位于地图左下方，显示地图的比例关系。

//城市切换
var size = new BMap.Size(10, 15);
map.addControl(new BMap.CityListControl({
	anchor: BMAP_ANCHOR_TOP_LEFT,
	offset: size,
}));
//城市定位
var myCity = new BMap.LocalCity();
myCity.get(myFun);
function myFun(result){
	var cityName = result.name;
	map.setCenter(cityName);
	//alert("当前定位城市:"+cityName);
}

var startId = document.getElementById("start");
var endId = document.getElementById("end");

/*startId.onchange = function(){
 alert(this.value)

 };
 endId.onchange = function(){
 alert(this.value)
 };*/



var transit = new BMap.TransitRoute(map, {
	renderOptions: {map: map,panel: "r-result"}
});
transit.search(startId.value,endId.value);

//输入关键进行查找字
function G(id) {
	return document.getElementById(id);
}
var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
		{"input" : "suggestId"
			,"location" : map
		});

ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
	var str = "";
	var _value = e.fromitem.value;
	var value = "";
	if (e.fromitem.index > -1) {
		value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
	}
	str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

	value = "";
	if (e.toitem.index > -1) {
		_value = e.toitem.value;
		value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
	}
	str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
	G("searchResultPanel").innerHTML = str;
});

var myValue;
ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
	var _value = e.item.value;
	myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
	G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
	setPlace();
});

function setPlace(){
	map.clearOverlays();    //清除地图上所有覆盖物
	function myFun(){
		var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
		map.centerAndZoom(pp, 18);
		map.addOverlay(new BMap.Marker(pp));    //添加标注
	}
	var local = new BMap.LocalSearch(map, {   //智能搜索
		onSearchComplete: myFun
	});
	local.search(myValue);
}

