function delay(ms){
    return new Promise((resolve, reject)=>setTimeout(resolve, ms));
}

function talk(){
    return new Promise((resolve, reject)=>resolve("I am talking"));
}



async function fun(){
	await delay2(3000)
	console.log("after 3sec")
}

async function human(){
	await talk().then((value)=>console.log(`${value} + !!!`));
}

// fun();

async function bark(){
    return "woof woof"
}

console.log(bark());