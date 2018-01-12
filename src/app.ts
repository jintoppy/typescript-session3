import * as $ from 'jquery';

const box1 : JQuery<HTMLElement> = $('#box1');
const box2 : JQuery<HTMLElement> = $('#box2');
const box3 : JQuery<HTMLElement> = $('#box3');
const fillBtn : JQuery<HTMLElement> = $('#fillBtn');
const loginBtn: JQuery<HTMLElement> = $('#loginBtn');
const usernameInput: JQuery<HTMLElement> = $('#usernameInput');

class Box1{
    myProp = 'hi';
    fill(){
        box1.text('Box1 content refreshed at ' + new Date());
    }
}

const b = new Box1();
console.log(b);

// class Box2{
//     @authenticate(box2)
//     fill(){
//         box1.text('Box1 content refreshed at ' + new Date());
//     }
// }


// class Box3{
//     @authenticate(box3)
//     fill(){
//         box1.text('Box1 content refreshed at ' + new Date());
//     }
// }

function fillBoxes(){
    new Box1().fill();
    // new Box2().fill();
    // new Box3().fill();
}

$(() => {
    fillBoxes();
});

fillBtn.on('click', () => {
    fillBoxes();
});


loginBtn.on('click', () => {
    sessionStorage.setItem('user', usernameInput.val().toString());
});
