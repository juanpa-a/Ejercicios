let numbers = [3,7,1,9,2,10,5,4,8,6];
let order = [];
//    1
//    2
//    3
//    4
//    5
//    6
//    7
//    8
//    9
//    10
function sort(data){
    let min = 0;
    let spot = 0;
    while (data.length != 0) {
        min = data[0];
        for (var i = 0; i < data.length; i++) {
            if (min > data[i]) {
                min = data[i]
                spot = i
        }
    }
    order.push(min)
    console.log(data.length);
    data.splice(spot, 1)
    //console.debug(order);
    }
}

sort(numbers)
