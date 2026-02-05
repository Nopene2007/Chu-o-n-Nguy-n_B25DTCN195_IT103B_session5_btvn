let booksId=[];
let booksName=[];
let booksStatus=[];
let bookCheck=parseInt(prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay? "));
for(let i=0; i<bookCheck;i++){
    let bookId=prompt("Nhap ma sach:");
    let bookName=prompt("Nhap ten sach:");
    let bookChoose=prompt(`Nhập tình trạng ban đầu (chọn số 1–3)
        1 → "Hỏng nhẹ" 
        2 → "Hỏng nặng" 
        3 → "Cần sửa gấp"`);
    booksId.push(bookId);
    booksName.push(bookName);
    booksStatus.push(bookChoose);
    if(booksId==0 || booksName==0){
        alert("Nhap lai");
    }
}
for(let i=0;i<booksId.length;i++){
    console.log(`Danh sach hien tai (${bookCheck}):
                ${booksId[i]}-${booksName[i]}-${booksStatus[i]})`);
}
let choice=0;
do{
    choice=parseInt(prompt(`Ban muon lam gi?
        1: Sửa tình trạng một cuốn sách
        2: Loại bỏ (xóa) một cuốn sách khỏi danh sách
        0: Kết thúc và in báo cáo cuối`));
    switch(choice){
        case 1:
            let nameBookFix=prompt("Nhap ma sach can sua:");
            let fixBook=booksId.indexOf(nameBookFix);

            if(fixBook!==-1){
                let newStatus=prompt(`cho phép chọn tình trạng mới:
                     1: Hỏng nhẹ 
                     2: Hỏng nặng 
                     3: Cần sửa gấp 
                     4: Đã sửa xong 
                     5: Loại bỏ`);
            
            if(newStatus==1){
                booksStatus[fixBook]="hong nhe";
            }else if(newStatus==2){
                booksStatus[fixBook]="hong nang";
            }else if(newStatus==3){
                booksStatus[fixBook]="can sua gap";
            }else if(newStatus==4){
                booksStatus[fixBook]="da sua xong";
            }else{
                booksStatus[fixBook]="loai bo";
            }
            }    
            break;
        case 2:
            let nameDeleteBook=prompt("Nhap ma sach can xoa:");
            let deleteBook=booksId.indexOf(nameDeleteBook);
            if(deleteBook!==-1){
                booksId.splice(deleteBook,1);
                booksName.splice(deleteBook,1);
                booksStatus.splice(deleteBook,1);
            }else{
                console.log("Khong tim thay");
            }
            break;
    }
    

}while(choice!==0)
    
    
let fixCount=0;
    let deleteCount=0;
    for(let i=0;i<booksStatus.length;i++){
        if(booksStatus[i]==="da sua xong"){
            fixCount++;
        }else if(booksStatus[i]==="loai bo"){
            deleteCount++;
        }
    }    
console.log(`Tong so sach con lai:${booksId.length}`);
    console.log(`Số sách đã  sửa xong:${fixCount}`);
    console.log(`Số sách Loại bỏ:${deleteCount}`);