let booksId=[];
let booksName=[];
let booksCategory=[];
let inventoryQuality=[];
let book=parseInt(prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay? "));

for(let i=0; i<book;i++){
    let id=prompt("Nhap ma sach");
    let nameBook=prompt("Nhap ten sach");
    let category=prompt("Nhap the loai:");
    let allBook=prompt("Nhap so luong ton kho");

    while (id === null || id === " " || booksId.indexOf (id) !== -1) {
        alert ("Mã sách không hợp lệ hoặc đã bị trùng");
        id = prompt ("Nhập mã sách: ");
    }
    booksId.push(id);
    booksName.push(nameBook);
    booksCategory=category.split(",");
    inventoryQuality.push(allBook);
}    
let bookProgram=0;
for(let i=0;i<booksCategory.length;i++){
    if(booksCategory[i].toLowerCase().includes("lập trình")){
        bookProgram++;
    }
}
console.log(`tổng số sách thuộc thể loại "Lập trình":${bookProgram}`);
let bookJavaWeb="";
for(let i=0;i<booksCategory.length;i++){
    if(booksCategory[i].toLowerCase().includes("JavaScript")&& booksCategory[i].toLowerCase().includes("Web")){
        bookJavaWeb += booksId[i] + " ";
    }
}
console.log(`tất cả mã sách thuộc cả hai thể loại "JavaScript" và "Web":${bookJavaWeb}`);
let minQuanlity = inventoryQuality[0];
let minIndex = 0;

for (let i = 1; i < inventoryQuatity.length; i++) {
    if (inventoryQuality[i] < inventoryQuanlity) {
        minQuanlity = inventoryQuality[i];
        minIndex = i;
    }
}
console.log(`Loại sách có số lượng tồn kho thấp nhất:
    Mã sách: ${booksId[minIndex]}, Tên sách: ${booksName[minIndex]}, Tồn kho: ${inventoryQuatity[minIndex]}`)
