// const selectedPage = {
//   slideCon: document.getElementById('slide'),
//   slideItem: Array.from(selectedPage.slideCon.children),
//   thumnailArr: [1, 2, 3],
//   btnCon: document.querySelector('.con-1').firstElementChild.children[1],
//   leftBtn: selectedPage.btnCon.firstElementChild,
//   rightBtn: selectedPage.btnCon.lastElementChild
// }

const slideCon = document.getElementById('slide');
console.log(slideCon);
slideCon.style.position = 'absolute';
slideCon.style.zIndex = -1;
slideCon.style.top = 0;
// slideCon.style.width = '100vw';
slideCon.style.height = '100%';
// slideCon.style.overflow = ;

console.log(slideCon.children);
const slideItem = Array.from(slideCon.children);
// todo: slideItem들의 크기를 슬라이드 컨테이너와 똑같이 지정해준다
slideItem.map(elem => {
  elem.style.width = '100vw';
  elem.style.height = '100%';
})

const thumbnailArr = [1, 2 ,3];
// todo: slideItem이 양 옆 버튼을 통해서 오른쪽 왼쪽으로 움직이도록 해준다
// todo: 양 옆으로 움직이는버튼 이벤트
// ?클릭할 때마다 href 값이 변화하도록 해야 슬라이드를 구성할 때 편하겠지???

const btnCon = document.querySelector('.con-1').firstElementChild.children[1];
const leftBtn = btnCon.firstElementChild;
const rightBtn = btnCon.lastElementChild;
leftBtn.firstElementChild.style.transform = 'rotate(180deg)';
console.log(btnCon);
console.log(leftBtn);
console.log(rightBtn);

let isStatus = 1;
    // *left btn
    leftBtn.addEventListener('click', function(){
      console.log(isStatus);
      // todo: 1보다 크거나 -1; 아니면 그대로
      isStatus > 1 && isStatus <= 3 ? isStatus-- : isStatus = isStatus;
      console.log(isStatus);
      // todo: window에 hashchange 이벤트를 넣어줘야 한다
      window.addEventListener('hashchange', function(){
        window.location.href = `#slide-${isStatus}`;
      })
    });
    // *right btn
    rightBtn.addEventListener('click', function(){
      console.log(isStatus);
      // todo: 1보다 크거나 3보다 작거나 같으면 +1; 아니면 그대로
      isStatus > 1 && isStatus <= 3 ? isStatus++ : isStatus = isStatus;
      console.log(isStatus);
      // todo: window에 hashchange 이벤트를 넣어줘야 한다
      window.addEventListener('hashchange', function(){
        window.location.href = `#slide-${isStatus}`;
      })
    })
