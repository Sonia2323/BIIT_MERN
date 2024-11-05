//Async JavaScript Programming
//Promise

const persons=[
    {name:"Yash",age:18},
	{name:"Shashank",age:19},
	{name:"Shreyansh",age:17}
]

function getDatas(){
	setTimeout(()=>{
		let result="";
		persons.forEach((person,idx)=>{
			result+=`${person.name}<br/>`;
		});
			
		document.getElementById("result").innerHTML=result;
	},1000);
}

function appendData(newdata){
    return new Promise((resolve)=>{
		setTimeout(()=>{
			persons.push(newdata);
		
		    let flag=false;
		    if(!flag){
			      resolve();
		    }else{
				reject("Error occured.");
			}
	    },2000);
    })
}

async function showData(){
	await appendData({name:"Arman",age:18});
	getDatas();
}

showData()