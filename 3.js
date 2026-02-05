let booksId=[];
let booksName=[];
let inventoryQuantity=[];
let book=parseInt(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay? "));
for(let i=0;i<book;i++){
    let bookId=prompt("Nhap ma sach:");
    let nameBook=prompt("Nhap ten sach");
    let allbook=parseInt(prompt("Nhập số lượng tồn kho hiện tại"));
    booksId.push(bookId);
    booksName.push(nameBook);
    inventoryQuantity.push(allbook);
    if(bookId=="" || nameBook==""){
        alert("nhap lai");
    }
    
    
}
for(let i=0;i<booksId.length;i++){
    console.log(`${i+1}.${booksId[i]}-${booksName[i]}-${inventoryQuantity[i]}`);    

}
let littleBook=0;
for(let i=0;i<inventoryQuantity.length;i++){
    if(inventoryQuantity[i]<=5){
        littleBook++;
    }
}
console.log(" số lượng sách có tồn kho ≤ 5 bản",littleBook);
let noBook=[];
for(let j=0; j<inventoryQuantity.length;j++){
    if(inventoryQuantity[j]<=0){
        noBook.push(booksId[j]);
    }
}
if(noBook.length>0){
    console.log(`tất cả mã sách của những cuốn có tồn kho bằng 0 (đã hết hàng):${noBook.join(",")}`);
}else{
    console.log("khong co sach het hang");
}
