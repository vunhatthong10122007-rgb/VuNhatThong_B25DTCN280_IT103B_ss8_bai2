const hangDoiXeCho = ['30A-98765', '29B-12345', '51C-45678'];

const xeVaoSac = hangDoiXeCho.shift();
console.log('Xe được điều phối vào sạc:', xeVaoSac);

hangDoiXeCho.push('43D-88888');

console.log('--- Danh sách xe đang chờ ---');
for (let i = 0; i < hangDoiXeCho.length; i++) {
  console.log(`STT ${i + 1}: ${hangDoiXeCho[i]}`);
}
// Đã sửa 

// const xeVaoSac = hangDoiXeCho.pop(), pop() loại bỏ và trả về phần tử nằm ở cuối mảng
// for (let i = 0; i <= hangDoiXeCho.length; i++), sai vì có = làm vượt chỉ số mảng có thể sửa i = 1 hoặc để mỗi dấu <

// tc1: Điều phối xe vào sạc -> hangDoiXeCho = ['30A-98765', '29B-12345', '51C-45678']
// -> sai: xeVaoSac = '51C-45678' -> đúng: xeVaoSac = '30A-98765'

// tc2: In danh sách xe trong hàng đợi -> ['29B-12345', '51C-45678', '43D-88888']
//  -> 4: undefined -> chỉ in đến STT 3: 43D-88888

