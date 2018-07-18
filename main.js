function getfile(file,callback){
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange = function()
{
  if(xhr.readyState === 4 && xhr.status == "200"){
    callback(xhr.responseText);
  }
};
   xhr.send(null);
}
getfile("g.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  details(data.basics);
  career(data.CareerObjective);

})
var child = document.querySelector(".childone");
function details(det){
var img = document.createElement("img");
img.src =det.image;
child.appendChild(img);

var name = document.createElement("h1");
name.textContent = det.name;
child.appendChild(name);

var no = document.createElement("h2");
no.textContent = det.phoneno;
child.appendChild(no);

var mail = document.createElement("mail");
mail.href = "mailto:sarwari1967@gmail.com";
mail.textContent = det.email;
child.appendChild(mail);

var a = document.createElement("h2");
a.textContent = ("address");
child.appendChild(a);

var hr=document.createElement("hr");
child.appendChild(hr);

var add = document.createElement("h2");
add.textContent = det.address;
child.appendChild(add);

}
var child1 = document.querySelector(".childtwo");
function career(careerinfo){

var ch= document.createElement("h2");
ch.textContent=("CAREER OBJECTIVE");
child1.appendChild(ch);

 var hr= document.createElement("hr");
 child1.appendChild(hr);


var b = document.createElement("p");
b.textContent = careerinfo.Info;
child1.appendChild(b);
}
