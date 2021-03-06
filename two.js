function Substitute() {
var y = document.getElementById("data").value;

a="abcdefghijklmnopqrstuvwxyz";
b="bkvrfaqijnohptumsdgzexwlcy";
c=new Array();

for(i=0; i<26; i++){
c[a.charAt(i)]=b.charAt(i); c[a.charAt(i).toUpperCase()]=b.charAt(i).toUpperCase();} a="";

for(i=0; i<data.value.length; i++){
b = data.value.charAt(i);
a += (b>='A' && b<='Z' || b>='a' && b<='z' ? c[b] : b);
}
document.getElementById("subs").innerHTML = (a);
}


function DeSubstitute() {
var y = document.getElementById("data").value;

b="abcdefghijklmnopqrstuvwxyz";
a="bkvrfaqijnohptumsdgzexwlcy";
c=new Array();

for(i=0; i<26; i++){
c[a.charAt(i)]=b.charAt(i); c[a.charAt(i).toUpperCase()]=b.charAt(i).toUpperCase();} a="";

for(i=0; i<data.value.length; i++){
b = data.value.charAt(i);
a += (b>='A' && b<='Z' || b>='a' && b<='z' ? c[b] : b);
}
document.getElementById("subs").innerHTML = (a);
}
