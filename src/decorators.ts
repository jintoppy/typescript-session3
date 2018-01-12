import {LogLevel} from './models';

export function checkForMinimum(minValue: number){
    return (target: any, propertyKey: string) => {
        let val = this[propertyKey];
        function getterFn() { return val; }
        function setterFn(newVal){
            if(newVal < minValue){
                throw new Error(`${newVal} not valid. Must be greater than ${minValue}`);
            }
            val = newVal;
        }

        Object.defineProperty(
            target, 
            propertyKey,
            {
                get: getterFn,
                set: setterFn
            }
        )

    };
}

export function customComponent(){
    return function(constructorClass){
        return class extends constructorClass {
            newProp = 'myval';
            someNewMethod(){
                console.log('within new method');
            }
        }
    }
}

export function authenticate(box : JQuery<HTMLElement>) : Function {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const originalFn = descriptor.value;

        descriptor.value = function(){
            box.text('');
            const user = sessionStorage.getItem('user');
            if(user === 'admin'){
                originalFn.apply(this);
            }
        };

    }
}

export function logger(loggingLevel: LogLevel){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const originalFn = descriptor.value;
        descriptor.value = function(){
            const msg = `Function ${propertyKey} is called`;
            if(loggingLevel === LogLevel.ERROR){
                console.error(msg);
            }
            if(loggingLevel === LogLevel.WARN){
                console.warn(msg);
            }
            console.info(msg);
            originalFn.apply(this);
        };
    }
}