// Lấy Object ngày hiện tại
var today = new Date();

// Giờ, phút, giây hiện tại
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
var ms = today.getMilliseconds();

// Chuyển đổi sang dạng 01, 02, 03
h = checkTime(h);
m = checkTime(m);
s = checkTime(s);