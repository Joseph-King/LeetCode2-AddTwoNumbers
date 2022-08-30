function solution(list1, list2){
    let num1 = get_num(list1);
    let num2 = get_num(list2);

    let sum = num1 + num2;
    sum = sum.toString();

    var head = {
        val: sum[sum.length-1],
        next: null
    }
    let current = head;

    for(let i = sum.length-2; i >= 0; i--){
        let node = {
            val: sum[i],
            next: null
        }

        current.next = node;
        current = current.next;
    }

    return head;
}

function get_num(list){
    let current = list;
    let count = 0;
    var num = 0;

    while(current != null){
        if(count === 0)
            num = current.val;
        else{
            let temp = Math.pow(10, count);
            temp = temp * current.val;
            num += temp;
        }

        current = current.next;
        count++;
    }

    return num
}

function make_list(arr){
    var head = {
        val: arr[0],
        next: null
    }

    let current = head;

    for(let i=1; i<arr.length; i++){
        var node = {
            val: arr[i],
            next: null
        }

        current.next = node;
        current = node;
    }

    return head;
}

function print_list(head){
    let current = head;
    var string = `[`;

    while(current !== null){
        string += `${current.val},`;

        current = current.next;
    }

    string += ']';

    console.log(string);
}

var t1_l1 = [2, 4, 3];
var t1_l2 = [5, 6, 4];

var t2_l1 = [0];
var t2_l2 = [0];

var t3_l1 = [9, 9, 9, 9, 9, 9, 9];
var t3_l2 = [9, 9, 9, 9];

t1_l1 = make_list(t1_l1);
t1_l2 = make_list(t1_l2);
var result1 = solution(t1_l1, t1_l2);
print_list(result1);

t2_l1 = make_list(t2_l1);
t2_l2 = make_list(t2_l2);
var result2 = solution(t2_l1, t2_l2);
print_list(result2);

t3_l1 = make_list(t3_l1);
t3_l2 = make_list(t3_l2);
var result3 = solution(t3_l1, t3_l2);
print_list(result3);