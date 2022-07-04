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
//Bài tập 5
/*Sơ đồ ba khối:
Input:
Người dùng nhập vào ngày, tháng, năm
Output:
Xuất ra ngày tháng năm của ngày trước đó hoặc ngày tháng năm của ngày tiếp theo
Progress:
Tạo biến d, m, y, dBefore, dAfter, mBefore, mAfter, yBefore, yAfter, month
Tháng 1,3,5,7,8,10,12 có 31 ngày
Tháng 2 có 28 ngày
Tháng 4,6,9,11 có 30 ngày
- Nếu người dùng nhập vào d > 0, m > 0, y > 0
    thì dBefore = d - 1
        dAfter = d + 1
        mBefore = m
        mAfter = m
        yBefore = y
        yAfter = y 
- Nếu người dùng nhập vào d = 31 hoặc d = 30 hoặc d = 28 và m < 12
    thì dBefore = d - 1
        dAfter = 1
        mAfter = m + 1
        mBefore = m
        yBefore = y
        yAfter = y 
- Nếu người dùng nhập vào d = 28 và m = 2
    thì dBefore = d - 1
        dAfter = 1
        mAfter = m + 1
        mBefore = m
        yBefore = y
        yAfter = y        
- Nếu người dùng nhập vào d = 1 và m = 2, 4, 6, 8, 9, 11
    thì dBefore = 31
        dAfter = d + 1
        mbefore = m - 1
        mAfter = m
        yBefore = y
        yAfter = y 
- Nếu người dùng nhập vào d = 1 và m = 5, 7, 10
    thì dBefore = 30
        dAfter = d + 1
        mbefore = m - 1
        mAfter = m
        yBefore = y
        yAfter = y
- Nếu người dùng nhập vào d = 1 và m = 1
    thì dBefore = 31
        dAfter = d + 1
        mBefore = 12
        mAfter = m
        yBefore = y - 1
        yAfter = y        
- Nếu người dùng nhập vào d = 1 và m = 3
    thì dBefore = 28
        dAfter = d + 1
        mBefore = 2
        mAfter = m
        yBefore = y
        yAfter = y 
- Nếu người dùng nhập vào d = 31 và m = 12
    thì dBefore = d - 1
        dAfter = 1
        mAfter = 1
        mBefore = m
        yBefore = y
        yAfter = y + 1
*/
var d = 30;
var m = 3;
var y = 2000;
var dBefore = 0;
var dAfter = 0;
var mBefore = 0;
var mAfter = 0;
var yBefore = 0;
var yAfter = 0;
if (d > 0 && m > 0 && y > 0) {
  dBefore = d - 1;
  dAfter = d + 1;
  mBefore = m;
  mAfter = m;
  yBefore = y;
  yAfter = y;
}
if ((d == 30 || d == 31) && m < 12) {
  dBefore = d - 1;
  dAfter = 1;
  mAfter = m + 1;
  mBefore = m;
  yBefore = y;
  yAfter = y;
}
if (d == 28 && m == 2) {
  dBefore = d - 1;
  dAfter = 1;
  mAfter = m + 1;
  mBefore = m;
  yBefore = y;
  yAfter = y;
}
if (d == 1 && (m == 2 || m == 4 || m == 6 || m == 8 || m == 9 || m == 11)) {
  dBefore = 31;
  dAfter = d + 1;
  mBefore = m - 1;
  mAfter = m;
  yBefore = y;
  yAfter = y;
}
if (d == 1 && (m == 5 || m == 7 || m == 10)) {
  dBefore = 30;
  dAfter = d + 1;
  mBefore = m - 1;
  mAfter = m;
  yBefore = y;
  yAfter = y;
}
if (d == 1 && m == 1) {
  dBefore = 31;
  dAfter = d + 1;
  mBefore = 12;
  mAfter = m;
  yBefore = y - 1;
  yAfter = y;
}
if (d == 1 && m == 3) {
  dBefore = 28;
  dAfter = d + 1;
  mBefore = 2;
  mAfter = m;
  yBefore = y;
  yAfter = y;
}
if (d == 31 && m == 12) {
  dBefore = d - 1;
  dAfter = 1;
  mAfter = 1;
  mBefore = m;
  yBefore = y;
  yAfter = y + 1;
}
console.log("Ngày hôm qua là ngày:", dBefore, "tháng", mBefore, "năm", yBefore);
console.log("Ngày mai là ngày:", dAfter, "tháng", mAfter, "năm", yAfter);

//Bài tập 6
/*Sơ đồ ba khối:
Input:
Người dùng nhập vào tháng và năm
Output:
Xuất ra tháng đó có bao nhiêu ngày
Progress:
Tháng 1, 3, 5, 7, 8, 10, 12 có 31 ngày
Tháng 4, 6, 9, 11 có 30 ngày
Tháng 2 có 28 ngày, đối với năm nhuận tháng 2 có 29 ngày
Cách tính năm nhuận : Năm đó chia hết cho 4 nhưng không chia hết cho 100 hoặc năm chia hết cho 400
Tạo các biến date, month, year sau đó xét trường hợp */
var date = 0;
var month = 2;
var year = 2020;
if (
  (month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12) &&
  year > 0
) {
  date = 31;
}
if (month == 4 || month == 6 || month == 9 || (month == 11 && year > 0)) {
  date = 30;
}
if (month == 2 && year > 0) {
  date = 28;
}
if (month == 2 && ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)) {
  date = 29;
}
console.log("Tháng", month, "năm", year, "có", date, "ngày");

//Bài tập 7
/*Sơ đồ ba khối:
Input:
Người dùng nhập vào số nguyên có ba chữ số
Output:
Xuất ra cách đọc số đó
Progress:
Sử dụng cách lấy ra số hàng trăm, hàng chục và hàng đơn vị
Sử dụng switch case để xuất cách đọc */
var number = 0;
var x = Math.floor(number / 100);
var y = Math.floor((number % 100) / 10);
var z = Math.floor((number % 100) % 10);
var speakx;
var speaky;
var speakz;
if (x > 0) {
  if (x == 1) {
    speakx = "Một";
  } else if (x == 2) {
    speakx = "Hai";
  } else if (x == 3) {
    speakx = "Ba";
  } else if (x == 4) {
    speakx = "Bốn";
  } else if (x == 5) {
    speakx = "Năm";
  } else if (x == 6) {
    speakx = "Sáu";
  } else if (x == 7) {
    speakx = "Bảy";
  } else if (x == 8) {
    speakx = "Tám";
  } else if (x == 9) {
    speakx = "Chín";
  }
}
if (y > 0) {
  if (y == 1) {
    speaky = "Một";
  } else if (y == 2) {
    speaky = "Hai";
  } else if (y == 3) {
    speaky = "Ba";
  } else if (y == 4) {
    speaky = "Bốn";
  } else if (y == 5) {
    speaky = "Năm";
  } else if (y == 6) {
    speaky = "Sáu";
  } else if (y == 7) {
    speaky = "Bảy";
  } else if (y == 8) {
    speaky = "Tám";
  } else if (y == 9) {
    speaky = "Chín";
  }
}
if (z > 0) {
  if (z == 1) {
    speakz = "Một";
  } else if (z == 2) {
    speakz = "Hai";
  } else if (z == 3) {
    speakz = "Ba";
  } else if (z == 4) {
    speakz = "Bốn";
  } else if (z == 5) {
    speakz = "Năm";
  } else if (z == 6) {
    speakz = "Sáu";
  } else if (z == 7) {
    speakz = "Bảy";
  } else if (z == 8) {
    speakz = "Tám";
  } else if (z == 9) {
    speakz = "Chín";
  }
}
if (x > 0 && y > 0 && z > 0) {
  console.log(speakx, "trăm", speaky, "mươi", speakz);
}
if (x > 0 && y > 0 && z == 0) {
  console.log(speakx, "trăm", speaky, "mươi");
}
if (x > 0 && y == 0 && z == 0) {
  console.log(speakx, "trăm");
}
if (x > 0 && y == 0 && z > 0) {
  console.log(speakx, "trăm", "linh", speakz);
}

//Bài tập 8
/*Sơ đồ ba khối:
Input:
Tên của ba người và tọa độ nhà
Có tọa độ của trường học
Output:
Xuất ra tên của bạn xa trường nhất
Progress:
Tạo biến name1 có tọa độ x1, y1; name2 có tọa độ x2, y2; name3 có tọa độ x3, y3
Tạo biến tọa độ của trường x , y
Khoảng cách từ nhà đến trường của ba người lần lượt là d1, d2, d3
Khoảng cách từ nhà đến trường được xác định bằng công thức:
 d1 = căn bậc hai của (x - x1)*(x - x1)+(y - y1)*(y - y1)
 làm tương tự với d2 và d3
 Sau đó so sánh khoảng cách rồi tìm ra người ở xa nhất và xuất ra*/
var name1 = "Trung";
var name2 = "Toàn";
var name3 = "Hùng";
var x1 = 10;
var x2 = 20;
var x3 = 5;
var y1 = 50;
var y2 = 6;
var y3 = 7;
var x = 13;
var y = 15;
var d1 = Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1));
var d2 = Math.sqrt((x - x2) * (x - x2) + (y - y2) * (y - y2));
var d3 = Math.sqrt((x - x3) * (x - x3) + (y - y3) * (y - y3));
if (d1 > d2 && d1 > d3) {
  console.log("Bạn", name1, "nhà ở xa trường nhất");
} else if (d2 > d1 && d2 > d3) {
  console.log("Bạn", name2, "nhà ở xa trường nhất");
} else if (d3 > d1 && d3 > d2) {
  console.log("Bạn", name3, "nhà ở xa trường nhất");
}
