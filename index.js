var numbers = [];

function startExercises() {
  numbers = getInputNumbers();
  document.getElementById("exercises").style.display = "block";
}

function getInputNumbers() {
  return document
    .getElementById("inputNumber")
    .value.split(/[ ,]+/)
    .map(Number);
}

function tinhTong() {
  var sum = numbers.reduce((a, b) => a + b, 0);
  document.getElementById("result1").innerText = "Tổng số lương: " + sum;
}

function demSoDuong() {
  var count = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      count++;
    }
  }
  document.getElementById("result2").innerText = "Số dương: " + count;
}

function timSoNhoNhat() {
  var min = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  document.getElementById("result3").innerText = "Số nhỏ nhất: " + min;
}

function timSoDuongNhoNhat() {
  var positiveNumbers = numbers.filter((num) => num > 0);
  if (positiveNumbers.length > 0) {
    var minPositive = positiveNumbers[0];
    for (var i = 1; i < positiveNumbers.length; i++) {
      if (positiveNumbers[i] < minPositive) {
        minPositive = positiveNumbers[i];
      }
    }
    document.getElementById("result4").innerText =
      "Số dương nhỏ nhất: " + minPositive;
  } else {
    document.getElementById("result4").innerText = "Không có số dương";
  }
}

function timSoChanCuoiCung() {
  var lastEven = null;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      lastEven = numbers[i];
    }
  }
  if (lastEven !== null) {
    document.getElementById("result5").innerText =
      "Số chẵn cuối cùng: " + lastEven;
  } else {
    document.getElementById("result5").innerText = "Không có số chẵn";
  }
}

function doiCho() {
  var index1 = parseInt(document.getElementById("swapIndex1").value);
  var index2 = parseInt(document.getElementById("swapIndex2").value);
  if (
    index1 >= 0 &&
    index1 < numbers.length &&
    index2 >= 0 &&
    index2 < numbers.length
  ) {
    var temp = numbers[index1];
    numbers[index1] = numbers[index2];
    numbers[index2] = temp;
    document.getElementById("result6").innerText =
      "Đã đổi chỗ số " + numbers[index1] + " và số " + numbers[index2];
  } else {
    document.getElementById("result6").innerText = "Vị trí không hợp lệ";
  }
}

function sapXepTangDan() {
  var sortedNumbers = numbers.slice().sort(function (a, b) {
    return a - b;
  });
  document.getElementById("result7").innerText =
    "Sắp xếp tăng dần: " + sortedNumbers.join(", ");
}

function timSoNguyenToDauTien() {
  var isPrime = function (number) {
    if (number < 2) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  var foundPrime = false;
  var i = 0;
  while (i < numbers.length && !foundPrime) {
    if (isPrime(numbers[i])) {
      document.getElementById("result8").innerText =
        "Số nguyên tố đầu tiên: " + numbers[i];
      foundPrime = true;
    }
    i++;
  }

  if (!foundPrime) {
    document.getElementById("result8").innerText =
      "Không tìm thấy số nguyên tố";
  }
}

function demSoNguyen() {
  var count = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (Number.isInteger(numbers[i])) {
      count++;
    }
  }
  document.getElementById("result9").innerText = "Số nguyên: " + count;
}

function soSanhSoAmVaSoDuong() {
  var countNegative = 0;
  var countPositive = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      countNegative++;
    } else if (numbers[i] > 0) {
      countPositive++;
    }
  }
  if (countNegative > countPositive) {
    document.getElementById("result10").innerText = "Số âm nhiều hơn số dương";
  } else if (countNegative < countPositive) {
    document.getElementById("result10").innerText = "Số dương nhiều hơn số âm";
  } else {
    document.getElementById("result10").innerText = "Số âm bằng số dương";
  }
}
