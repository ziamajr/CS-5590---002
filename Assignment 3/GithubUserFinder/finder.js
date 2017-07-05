var finder;

var api = 'https://api.github.com/users/';
var input;

function setup() { 
    createCanvas(500, 500);
    
    var button = select('#finduser');
    button.mousePressed(userask);
    
    input = select('#user');
}
    
function userask(){
    var url = api + input.value();
    loadJSON(url, gotData);    
}

function gotData(data) {
   println(data.name);   
   //println(data.gravatar_id);
   //println(data.url);
   //println(data.following); 
   //println(data.followers_url);
   //println(data.following_url);
   //println(data.repos_url);
}
    
