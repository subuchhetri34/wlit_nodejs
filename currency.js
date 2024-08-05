// currency-converter

function convert_usd_npr(usd){
    return usd * 130;
}
function convert_npr_usd(npr){
    return npr/130;
}

//export default convert_usd_npr;
export {convert_npr_usd,convert_usd_npr};