/* Be carefull even though we have virtual scrolling the browser table is still
    limitted to a certain number of columns. Have fun finding that number for every browser.
    
    ¯\_(ツ)_/¯
*/
const ARRAY_LENGTH = 300000;
export const dummyData = Array.from({ length: ARRAY_LENGTH }, (_, index) => [
    index + 1,
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
]);