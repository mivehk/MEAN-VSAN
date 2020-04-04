import jsdom from "jsdom";

export const jsdoom = (cuName,numNodes,numDiskgroups,numCapdisks,ssdSize,FTM,isFavorite) =>{

	const JS = jsdom.JSDOM;
	const {document} = ( new JS(jsdom.JSDOM.fromFile("/view/layout/index.ejs"))).window;

	let cuNameF = document.querySelector("#cuName");
	let isFavoriteF = document.querySelector("#isFavorite");
	let numNodesF = document.querySelector("#numNodes");
	let numDiskgroupsF = document.querySelector("#numDiskgroups");
	let numCapdisksF = document.querySelector("#numCapdisks");
	let ssdSizeF = document.querySelector("#ssdSize");
	let FTMF = document.querySelector("#FTM");
	let dt={ 
		cuName: cuNameF,
		numNodes: numNodesF,
		numDiskgroups: numDiskgroupsF,
		numCapdisks: numCapdisksF,
		ssdSize: ssdSizeF,
		FTM: FTMF,
		isFavorite: isFavoriteF,
	};

	return (dt);

};

