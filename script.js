

//Xử lý số
//Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function globular(r){
    const pi = 3.14
    return ((4/3) * pi * r*r*r )
}
console.log(globular(3)); //
//Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

function total(a, b){
    let s = 0;
    for( let i = a; i < b; i++){
        s += (i);
    }
    return s - a;
}
console.log(total(3, 8));//22
//Bai 3: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó
function gcd(n){
    let s = 0;
    for(let i=1; i<=n; i++){
        if(n % i == 0) s += i
    }
    return s
}
console.log(gcd(4));//7
//Bài 4: Cho 1 số nguyên dương bất kỳ, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function isPrime(num) {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return true;
}
console.log(isPrime(4));
//Bài 5: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào
function totalIsPrime(n){
    let sum = 0;
    for(let i = 0; i <=n; i++){
        if(isPrime(i) == 0) sum = sum + isPrime(i)
    }
    return sum
}

//Xử lý chuỗi
//Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ:''HELLO world'' => ''Hello World''.

function capitalizeFirst(str){
    let sentence = str.toLowerCase().split(" ");
    for(let i = 0; i< sentence.length; i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(" ");
}

console.log(capitalizeFirst("thai trung"));
//Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''
function spinal(str){
    let splitStr = str.split(" ")
    let newStr = []
    for(let i = 0; i< splitStr.length; i++){
        newStr.push(splitStr[i].slice(0).toLowerCase())
    }
    return (splitStr = newStr.join("-"))
}
console.log(spinal("Hello word"));
//Bài 3: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không
function isPalindrome(str) {
    let a = str.trim().split(" ").join("").toLowerCase();
    if (a == a.trim().split("").reverse().join("").toLowerCase()) return true;
    else return false;
}
console.log(isPalindrome("woow"));

//Xử lý mảng
//Bài 1: Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined,NaN, 0, ''''.
function bouncer(arr) {
    arr = arr.filter(function (n) { 
        return (n !== undefined && n !== null && n !== false && n !== 0 && n !== "" && isNaN()!=NaN);
     });
    return arr;
}
//Bai 2 Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất
arr2 = ['aba', 'aa', 'ad', 'c', 'vcd']
    function fil(arr){
    result = []
    max = arr[0].length;
    for(i = 1; i< arr.length; i++){
        if (arr[i].length > max) max = arr[i].length;
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length ==  max) result.push(arr[i])
    }
    return result;
}
console.log(fil(arr2))
//Bai 3
function bai3arr(arr1, arr2) {
    return arr1.filter(function (x) {
        return !arr2.includes(x);
    })
    .concat(arr2.filter(function (x) {
        return !arr1.includes(x);
        })
    );
}

console.log(bai3arr([1, 2, 3], [1, 3, 4, 5, 5]));


//Xử lý object
trung = {
    name: "trung",
    age: 22
}
dat = {
    name: "dat",
    age: 20
}
thuan = {
    name: "thuan",
    age: 18
}

students = [trung, dat, thuan]
console.log(students);



//Bai 1: Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên
let n = students.length
console.log(n);
students.reduce(function(sum, item, index){
    sum = sum + item.age
    return sum / n
},0)

//Bai2: Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.

students.sort(function(a, b){
    return b.age - a.age
})
//Bai 3: Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).
students.sort(function(a, b){
    return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
})
//Bai 4: Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.
students.filter(function(item){
    return (item.name.charAt(0) === "t" || item.name.charAt(0) === "T")
})

//Tổng hợp
//Bài 1: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham sốthứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Vídụvới t = ''09:20:56'' và x = 7 thì kết quả là ''09:21:03''.
// function time(t, x){
//     t = new Date()
//     if(x < 1000)
// }

