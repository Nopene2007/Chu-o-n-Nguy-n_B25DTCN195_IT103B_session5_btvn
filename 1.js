let a=[];
let returnBook=parseInt(prompt("Ban muon tra bao nhieu cuon sach:"));
for(let i=0; i<=returnBook;i++){
    let nameBook=prompt("Nhap lan luot ten tung cuon sach");
    a.push(nameBook);
}
console.log("Tong so sach da duoc tra:",a.length);
for(let i=0;i<=a.length;i++){
    
    console.log(`${i+1}-${a[i]}`);
}
