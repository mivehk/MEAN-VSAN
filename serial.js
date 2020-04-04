import serialize from "form-serialize";
import jsdom from "jsdom";

const JS = jsdom.JSDOM;
//const { document } = new JS(jsdom.JSDOM).window;
const { window } = new JS(jsdom.JSDOM.fromFile("./views/layout/index.ejs"));

export const clusterObj =() =>{
	const form = window.document.querySelector('#vsan-form');
	const vsSerial = serialize(form);
	console.log(vsSerial);

	const vsObj = serialize(form , {hash:true})

	console.log( vsObj);

	return vsObj;
};