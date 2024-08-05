function sum(a,b){
    return a+b;
}
function mul(a,b){
    return a*b;
}
function sub(a,b){
    return a-b;
}

export default sub;   // only one default can be exported
export {sum,mul};     // for multiple exporting