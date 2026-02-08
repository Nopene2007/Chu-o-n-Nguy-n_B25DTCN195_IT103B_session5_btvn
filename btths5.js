let signInTime = 0;
let successSignIn = false;

do {
  let namePeople = prompt("Mời bạn nhập tài khoản:");
  let password = prompt("Mời bạn nhập mật khẩu:");

  if (namePeople === "admin" && password === "12345") {
    alert("Đăng nhập thành công!");
    successSignIn = true;
  } else {
    signInTime++;
    let falseTime = 3 - signInTime;

    if (namePeople !== "admin" && password !== "12345") {
      alert(`Sai cả tài khoản và mật khẩu! Bạn còn ${falseTime} lần thử.`);
    } else if (namePeople !== "admin") {
      alert(`Sai tài khoản! Bạn còn ${falseTime} lần thử.`);
    } else {
      alert(`Sai mật khẩu! Bạn còn ${falseTime} lần thử.`);
    }
  }
} while (signInTime < 3 && !successSignIn);

if (!successSignIn) {
  alert("Tài khoản đã bị khóa do nhập sai quá 3 lần!");
} else {
let choice;
let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
do{
    choice+=prompt(`
        -- THƯ VIỆN KHOA HỌC ---

        1. Xem danh sách

        2. Nhập sách mới

        3. Mượn sách (Xóa)

        4. Sửa tên sách

        5. Sắp xếp kệ

        0. Thoát`)
    switch(choice){
        case 1:
            console.log("So luong sach trong kho:",books.length);
            console.log("Danh sach cac quyen sach trong kho:");
            for(let i=0; i<books.length;i++){
                console.log(`${i+1}.${books[i]}`);
            }
            break;
        case 2:
            const bookNameAdd=prompt("nhap sach can them");
            books.push(bookNameAdd);
            alert("them danh sach thanh cong");
            break;
        case 3:
            const bookBorrow=prompt("nhap ten sach can muon");
            const searchIndex=bookBorrow.includes(bookBorrow);
            if(searchIndex !==-1){
                alert(`da muon sach ${bookBorrow}`);
                books.splice(searchIndex,1);

            }else{
                alert("khong co sach trong kho");
            }
            break;
        case 4:
            const bookNameOld=prompt("nhap ten sach can cap nhat:");
            const searchBookNameOld=books.indexOf(bookNameOld);

            if(searchBookNameOld!==-1){
                const bookNameNew=prompt("nhap ten danh sach moi");
                books[searchBookNameOld]=bookNameNew;
                alert("cap nhat thanh cong!");
            }else{

            }
            break;
        case 5:
            books.sort();
            console.log("danh sach sau khi sap xep lai",books);
            for(let i=0;i<books.length;i++){
                console.log(`${i+1}.${books[i]}`);
            }
            break;

        default:
            alert("nhap lai!");
            break; 
    }
}while(choice!==0);
}