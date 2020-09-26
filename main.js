/*function loadJson(file,callback)
{
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function()
	{
		if(xhr.readyState===4 && xhr.status=="200")
		{
			callback(xhr.responseText);
		}
	};
	xhr.send(null);

}
loadJson("data.json",function(text)
{
  let data=JSON.parse(text);
  console.log(data);
  basic(data.details);
})

var child1=document.querySelector(".child1");

function basic(det)
{
	var img1=document.createElement("img");
	img1.src=det.image;
	child1.appendChild(img1);

	var name=document.createElement("h1");
	name.textContent=det.name;
	child1.appendChild(name);

	var email = document.createElement("a");
 email.href="mailto:venkat@gmailcom";
 email.textContent=det.email;
 child1.appendChild(email);
  

    var phn=document.createElement("h1");
    phn.textContent=det.phnumber;
    child1.appendChild(phn);

    var addr=document.createElement("h2");
    addr.textContent=det.address;
    child1.appendChild(addr);
}  */

function loadjson(file)
{
	return new Promise((resolve,reject)=>
	{
		return fetch(file).then(response=>{
			if(response.ok)
			{
				resolve(response.json());
			}
			else
			{
				reject(new Error('error'));
			}
		})
	})
}

var newfile=loadjson("data.json");
newfile.then(data=>{
	console.log(data);
});