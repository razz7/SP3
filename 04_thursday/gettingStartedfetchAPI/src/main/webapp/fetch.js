/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var jokes = fetch("https://api.chucknorris.io/").then(res => res.json()).then(data => {
    console.log("joke", joke)
});


fucntion getData() {
    var jokes = fetch("https://api.chucknorris.io/").then(res => res.json()).then(data => {
    console.log("joke", joke)
});
}