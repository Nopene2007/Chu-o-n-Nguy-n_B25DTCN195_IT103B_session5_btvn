let a=[];
let returnBook=parseInt(prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn? " ));
for(let i=0; i<=returnBook;i++){
    let nameBook=prompt("Nhập lần lượt tên từng cuốn sách bị trả muộn");
    a.push(nameBook);
}
console.log("Tong so sach da duoc tra muon:",a.length);
for(let i=0;i<a.length;i++){
    console.log(`${i+1}-${a[i]}`);
}
let countName=0;
for(i=0;i<a.length;i++){
    if(a[i].length>20){
        countName++;
    }
}
console.log("số lượng sách có tên dài hơn 20 ký tự",countName);