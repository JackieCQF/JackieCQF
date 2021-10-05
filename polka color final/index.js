let buttona = document.getElementById('one');
buttona.addEventListener('click', function() {            
    fetch("index.json")
    .then(response => response.json())
    .then(data => {
        //console.log(data.colors[0].hex);
        let i=data.colors.length;
        var rand=Math.round(Math.random()*i);
        var cl=data.colors[rand].hex;
        //console.log(cl);
        var d="radial-gradient(" + cl + " 30%,transparent 0)";
        var e=d + " ," + d;
        //console.log(e);
        document.getElementById('square').style.backgroundImage=e;
        document.getElementById('a').innerHTML=cl;
    })
    .catch(err => {
        console.log("error is: " + err);
        
    })
})
let buttonb = document.getElementById('two');
buttonb.addEventListener('click', function() {            
    fetch("index.json")
    .then(response => response.json())
    .then(data => {
        let i=data.colors.length;
        var rand=Math.round(Math.random()*i);
        var cl=data.colors[rand].hex;
        document.getElementById('square').style.backgroundColor=cl;
        document.getElementById('b').innerHTML=cl;
    })
    .catch(err => {
        console.log("error is: " + err);
        
    })
})
var i=0;
let buttonc = document.getElementById('three');
buttonc.addEventListener('click', function() {            
    fetch("index.json")
    .then(response => response.json())
    .then(data => {
        
        i++;
        if(i%2 ==1){
            document.getElementById('square').style.backgroundSize="200px 200px";
            document.getElementById('square').style.backgroundPosition="250px 250px,150px 150px";
        }if(i%2 ==0){
            document.getElementById('square').style.backgroundSize="100px 100px";
            document.getElementById('square').style.backgroundPosition="125px 125px,75px 75px";
        }
        
    })
    .catch(err => {
        console.log("error is: " + err);
        
    })
})