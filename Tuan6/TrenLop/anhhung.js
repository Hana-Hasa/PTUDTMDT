var name="Trần Thị Ngọc Huyền";
var MSSV=88214020018;
document.write(`Tôi tên là ${name} - MSSV: ${MSSV} sẽ quyết tâm trở thành 1 anh hùng JS`);

level = 1;
xp = 0;
skillPoints = 5;

strength = 0.6*skillPoints+0.1*xp
agility = 0.2*skillPoints+0.2*xp
intel = 0.2*skillPoints+10*level;
document.write(`<br>"Chỉ số strength của bạn là: ${strength}`);
document.write(`<br>"Chỉ số agility của bạn là: ${agility}`);
document.write(`<br>"Chỉ số intel của bạn là: ${intel}`);

nameNhapLai = prompt("Tên bạn là gì?","");
if(name == nameNhapLai){
    console.log("Chính xác! Bạn có trí nhớ rất tốt!")
    skillPoints += 5;
}else{
    console.log("Tệ thật! Tên chính mình mà không nhớ sao?")
         skillPoints -= 5;
}

phancap = prompt('Bạn muốn chọn phân cấp nào? a: Chiến Binh | b: Sát Thủ |c: Thợ Săn')
switch (phancap){
    case 'a':
        phancap = "Chiến Binh";
        strength += 10;
        agility -= 10;
        break;
    case 'b':
        phancap = "Sát Thủ";
        strength -= 10;
        agility += 5;
        intel += 5;
        break; 
    case 'c':
        phancap = "Thợ Săn";
        strength -= 10;
        intel += 10;
        break;   
}
document.getElementsByClassName("capnhat")[0].innnerHTML = `<br>Bạn đã chọn phân cấp: ${phancap} 
<br>"Chỉ số strength của bạn là: ${strength} 
<br>"Chỉ số agility của bạn là: ${agility} 
<br>"Chỉ số intel của bạn là: ${intel}`;
document.write(`<br>Bạn đã chọn phân cấp: ${phancap}`);
document.write(`<br>"Chỉ số strength của bạn là: ${strength}`);
document.write(`<br>"Chỉ số agility của bạn là: ${agility}`);
document.write(`<br>"Chỉ số intel của bạn là: ${intel}`);   

