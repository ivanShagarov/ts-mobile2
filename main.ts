import Logger from './log';
import FirstTask from './firstTask';

Logger.log('TypeScript works!!!');

const firstTask = new FirstTask('Ivan');
const helloMsg = firstTask.sayHello();
console.log(helloMsg);
