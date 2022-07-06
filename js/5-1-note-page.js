const notePage = {
  con: document.getElementById('con'),
  conLastChild: document.getElementById('con').lastElementChild,
  svgCon: document.getElementById('con').lastElementChild.children[1],
  stickerCon: document.getElementById('sticker-con'),
  button: document.getElementsByTagName('button'),


}

// get #con
const con = document.getElementById('con');
console.log(con);
console.log(con.children);

// get #con>div:nth-child(4)
const conLastChild = con.children[3];
console.log(conLastChild);
console.log(conLastChild.children);

// get #con>div:nth-child(4)>div:nth-child(2)
// 마지막 더하기 부분의 
const svgCon = conLastChild.children[1];
console.dir(svgCon);
console.log(svgCon);

const stickerCon = document.getElementById('sticker-con');
console.dir(stickerCon);

// svgCon을 클릭하면 stickerCon이 나타나도록 한다, 한번 더 클릭하면 사라지도록 해준다
let clickValue = true;
console.log(svgCon);
svgCon.addEventListener('click', function(){
  if(clickValue === true){
    stickerCon.style.display = 'block';
    svgCon.firstElementChild.style.transform = 'rotate(45deg)';
    // !z-index 값이 없어서 클릭해도 겹쳐져서 보이지 않는 단점이 있었다
    console.log(stickerCon.style);
    clickValue = false;
  } else{
    stickerCon.style.display = 'none';
    svgCon.children[0].style.transform = 'rotate(0deg)';
    clickValue = true;
  }
});

// get button
const button = document.getElementsByTagName('button');
console.log(button);

// get #note-con
const noteCon = document.getElementById('note-con');
console.log(noteCon);
console.log(noteCon.children);

// get #note-con>div
// #note-1,2,3, #sticker-con
const note = noteCon.children;
console.log(note);

// 겹쳐주기 위해 absolute와 z-index 값을 노트 부분에 모두 설정해줬다
for(let i = 0; i<note.length-1; i++){
  note[i].style.position = 'absolute';
  note[i].style.zIndex = 1;
  console.log(note[i].style);
}
// 클릭 이벤트로 클릭을 하면 z-index가 증가해 원하는 노트를 위로 올려주는 조건식
// 무지노트
// 줄노트
// 모눈노트
// ?문제는 특정 노트를 자주 클릭하면 z-index 값이 특정 노트만 높아져서 다른 노트를 앞에 겹쳐서 위치시키려면 값이 오를 때까지 몇번을 눌러줘야 한다
console.log(button);
for(let i = 0; i<button.length; i++){
  button[i].addEventListener('click', function(){
    note[i].style.zIndex++;
    console.log(note[i]);
  });
}

// ?스티커 컨테이너의 z-index 값이 낮아서 가장 위로 올라오지 않아서 보이지 않았다
// ?물리적으로 숫자를 적용해줬는데 다른 방법이 없을까?
stickerCon.style.zIndex = '30';




