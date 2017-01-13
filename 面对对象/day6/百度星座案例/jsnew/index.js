//多个星座
var data = [
    { name: '白羊座', time: '3.21-4.19' },
    { name: '白羊座', time: '3.21-4.19' },
    { name: '白羊座', time: '3.21-4.19' },
    { name: '白羊座', time: '3.21-4.19' },
    { name: '白羊座', time: '3.21-4.19' },
    { name: '白羊座', time: '3.21-4.19' },
    { name: '白羊座', time: '3.21-4.19' },
    { name: '白羊座', time: '3.21-4.19' },
    { name: '白羊座', time: '3.21-4.19' },
    { name: '白羊座', time: '3.21-4.19' },
    { name: '白羊座', time: '3.21-4.19' },
    { name: '白羊座', time: '3.21-4.19' },
];

//循环

for (var i = 0; i < data.length; i++) {
    new Xingzuo(data[i], i);
}