let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

let bookBorrow = parseInt(prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn? "));

for (let i = 0; i < bookBorrow; i++) {
    let cardId;
    let duplicate = true;
    while (duplicate) {
        cardId = prompt(`Nhap the ${i + 1}:`);
        duplicate = false;
        for (let j = 0; j < readerCardIds.length; j++) {
            if (readerCardIds[j].toUpperCase() === cardId.toUpperCase()) {
                alert("Da co roi, nhap cai khac");
                duplicate = true;
                break;
            }
        }
        if (!duplicate) {
            readerCardIds.push(cardId);
        }
    }
    
    let name;
    do {
        name = prompt(`Nhap ten ${i + 1}:`);
        if (name === null || name.trim() === "") {
            alert("Ten ban doc khong de trong");
        }
    } while (name === null || name.trim() === "");
    readerNames.push(name);
    
    let bookCode = prompt(`Nhập mã sách đang mượn ${i + 1}:`);
    if (bookCode === null) {
        bookCode = "";
    }
    borrowedBookCodes.push(bookCode);
    
    let days;
    let badDays = false;
    while (!badDays) {
        days = parseInt(prompt(`Nhập số ngày quá hạn  ${i + 1}:`));
        
        if (isNaN(days) || days < 0) {
            alert("Nhap so nguyen");
        } else {
            badDays = true;
            overdueDays.push(days);
        }
    }
}

let count10Days = 0;
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 10) {
        count10Days++;
    }
}
console.log(` Tổng số bạn đọc có quá hạn ≥ 10 ngày: ${count10Days}`);

let readersWithBothJSandPYT = [];
for (let i = 0; i < borrowedBookCodes.length; i++) {
    let books = borrowedBookCodes[i].split(",");
    let hasJS = false;
    let hasPYT = false;
    
    for (let j = 0; j < books.length; j++) {
        let bookCode = books[j].trim().toUpperCase();
        if (bookCode.startsWith("JS")) {
            hasJS = true;
        }
        if (bookCode.startsWith("PYT")) {
            hasPYT = true;
        }
    }
    
    if (hasJS && hasPYT) {
        readersWithBothJSandPYT.push(readerCardIds[i]);
    }
}

let resultB = readersWithBothJSandPYT.length > 0 
    ? readersWithBothJSandPYT.join(", ") 
    : "Không có bạn đọc nào";
console.log(`\nb) Mã thẻ bạn đọc mượn cả sách JS và PYT: ${resultB}`);


let maxOverdueDays = -1;
let readerWithMaxDays = "";
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] > maxOverdueDays) {
        maxOverdueDays = overdueDays[i];
        readerWithMaxDays = readerNames[i];
    }
}
console.log(` Bạn đọc có số ngày quá hạn cao nhất: ${readerWithMaxDays} (${maxOverdueDays} ngày)`);


let countOver7Days = 0;
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 7) {
        countOver7Days++;
    }
}

let warning = "";
if (countOver7Days === 0) {
    warning = "Tình hình trả sách hôm nay khá tốt!";
} else if (countOver7Days >= 1 && countOver7Days <= 4) {
    warning = "Cần gửi nhắc nhở cho một số bạn đọc!";
} else {
    warning = "Tìn";
}

console.log(`\nd) Cảnh báo: ${warning}`);
alert(`d) Cảnh báo:\n${warning}`);


for (let i = 0; i < readerCardIds.length; i++) {
    console.log(`
Bạn đọc ${i + 1}:
  - Mã thẻ: ${readerCardIds[i]}
  - Tên: ${readerNames[i]}
  - Sách mượn: ${borrowedBookCodes[i]}
  - Quá hạn: ${overdueDays[i]} ngày
    `);
}