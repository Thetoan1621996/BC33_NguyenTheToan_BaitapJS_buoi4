//Bài tập 1:
/*Sơ đồ ba khối:
In put:
Người dùng nhập ba số nguyên a, b, c
Out put:
Sắp xếp ba số này theo thứ tự tăng dần
Progress:
Xét các trường họp:
Nếu a > b và a > c thì xuất ra c < b < a
Nếu a > b và c > b thì xuất ra b < c < a
Nếu a > b và c > a thì xuất ra b < a < c
Nếu b > a và a > c thì xuất ra c < a < b
Nếu b > a và c > a thì xuất ra a < c < b
Nếu tất cả trên không thỏa thì xuất ra a < b < c*/
var a = 5;
var b = 15;
var c = 8;
if (a > b && a > c) {
  console.log("Giá trị theo thứ tự tăng dần là:", c, b, a);
} else if (a > b && c > b) {
  console.log("Giá trị theo thứ tự tăng dần là:", b, c, a);
} else if (a > b && c > a) {
  console.log("Giá trị theo thứ tự tăng dần là:", b, a, c);
} else if (b > a && a > c) {
  console.log("Giá trị theo thứ tự tăng dần là:", c, a, b);
} else if (b > a && c > a) {
  console.log("Giá trị theo thứ tự tăng dần là:", a, c, b);
} else {
  console.log("Giá trị theo thứ tự tăng dần là:", a, b, c);
}

//Bài tập 2
/*Sơ đồ ba khối:
Input:
Các thành viên sẽ nhập vào đặc điểm nhận dạng
Output:
Dựa vào đặc điểm của từng người để đưa ra lời chào phù hợp
Progress:
- Cách 1: Tạo biến greeting và sử dụng if else*/
var greeting = "";
if (greeting === "A") {
  console.log("Chào bố");
} else if (greeting === "M") {
  console.log("Chào mẹ");
} else if (greeting === "A") {
  console.log("Chào anh trai");
} else if (greeting === "E") {
  console.log("Chào em gái");
} else {
  console.log("Chào người lạ không quen");
}
// - Cách 2: Tạo biến greeting và sử dụng switch case để xử lí.
// var greeting = "";
// switch (greeting) {
//     case 'D':
//         console.log("Chào bố thân yêu");
//         break;
//     case 'M':
//         console.log("Chào mẹ thân yêu");
//         break;
//     case 'A':
//         console.log("Chào anh chàng đẹp trai");
//         break;
//     case 'E':
//         console.log("Chào em gái dễ thương");
//         break;
//     default:
//         console.log("Chào người lạ không quen");
// }

//Bài tập 3
/*Sơ đồ ba khối:
Input:
Người dùng nhập vào ba số nguyên
Output:
Xuất ra có bao nhiêu số chẵn và bao nhiêu số lẻ
Progress:
Tạo ba biến a, b, c và gán giá trị là ba số nguyên, tạo thêm một biến evneNumber gán giá trị bằng 0
Một số là số chẵn khi số đó chia hết cho 2, số lẻ thì không chia hết cho hai. Tìm được có bao nhiêu số chẵn rồi lấy 3 - số chẵn = số lẻ*/
var a = 5;
var b = 8;
var c = 11;
var evenNumber = 0;
if (a % 2 == 0) {
  evenNumber = evenNumber + 1;
}
if (b % 2 == 0) {
  evenNumber = evenNumber + 1;
}
if (c % 2 == 0) {
  evenNumber = evenNumber + 1;
}
var odd = 3 - evenNumber;
console.log("Số chẵn:", evenNumber, "Số lẻ:", odd);

//Bài tập 4
/*Sơ đồ ba khối:
Input:
Người dùng nhập vào ba cạnh của một tam giác
Output:
Kiểm tra xem đó là tam giác gì
Progress:
Tạo ba biến a, b, c là độ dài ba cạnh của tam giác.
Có bốn trường hợp xảy ra:
- Tam giác cân: có 2 cạnh bằng nhau
- Tam giác đều: có 3 cạnh bằng nhau
- Tam giác vuông: áp dụng định lí Py-ta-go
- Còn lại là tam giác thường */
var a = 5;
var b = 3;
var c = 5;
if (a == b && a == c && b == c) {
  console.log("Đây là tam giác đều");
} else if (a == b || a == c || b == c) {
  console.log("Đây là tam giác cân");
} else if (
  c * c == a * a + b * b ||
  b * b == a * a + c * c ||
  a * a == b * b + c * c
) {
  console.log("Đây là tam giác vuông");
} else {
  console.log("Đây là tam giác thường");
}

