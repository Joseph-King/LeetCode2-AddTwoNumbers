function solution(list1, list2){
    let quotient = 0;
    let remainder = 0;

    var head = null;
    let current = null;

    while(list1 !== null && list2 !== null){
        let sum = list1.val + list2.val + quotient;

        quotient = Math.floor(sum/10);
        remainder = sum % 10;

        let node = {
            val: remainder,
            next: null
        }

        if(head === null){
            head = node;
            current = head;
        }
        else{
            current.next = node;
            current = current.next;
        }
        
        list1 = list1.next;
        list2 = list2.next;
    }

    while(list1 !== null){
        let sum = list1.val + quotient;

        quotient = Math.floor(sum/10);
        remainder = sum % 10;

        let node = {
            val: remainder,
            next: null
        }

        if(head === null){
            head = node;
            current = head;
        }
        else{
            current.next = node;
            current = current.next;
        }

        list1 = list1.next;
    }
    
    while(list2 !== null){
        let sum = list2.val + quotient;

        quotient = Math.floor(sum/10);
        remainder = sum % 10;

        let node = {
            val: remainder,
            next: null
        }

        if(head === null){
            head = node;
            current = head;
        }
        else{
            current.next = node;
            current = current.next;
        }

        list2 = list2.next;
    }

    if(quotient !==0){
        let node = {
            val: quotient,
            next: null
        }

        current.next = node
    }

    return head;
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