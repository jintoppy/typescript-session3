import * as $ from 'jquery';
import {LogLevel} from './models';
import {logger, authenticate, customComponent, checkForMinimum} from './decorators';

const box1 : JQuery<HTMLElement> = $('#box1');
const box2 : JQuery<HTMLElement> = $('#box2');
const box3 : JQuery<HTMLElement> = $('#box3');
const fillBtn : JQuery<HTMLElement> = $('#fillBtn');
const loginBtn: JQuery<HTMLElement> = $('#loginBtn');
const usernameInput: JQuery<HTMLElement> = $('#usernameInput');

class Square{
    @checkForMinimum(10)
    val: number;

    @checkForMinimum(20)
    val1: number;
}

const square = new Square();
square.val = 13;
square.val1 = 22;
console.log(square.val);


class Box1{
    @logger(LogLevel.WARN)
    @authenticate(box1)
    fill(){
        box1.text('Box1 content refreshed at ' + new Date());
    }
}

class Box2{
    @authenticate(box2)
    fill(){
        box2.text('Box2 content refreshed at ' + new Date());
    }
}


class Box3{
    @authenticate(box3)
    fill(){
        box3.text('Box3 content refreshed at ' + new Date());
    }
}

const a = new Box1();
console.log(a);

function fillBoxes(){
    new Box1().fill();
    new Box2().fill();
    new Box3().fill();
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
