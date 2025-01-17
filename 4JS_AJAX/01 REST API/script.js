document.getElementById("load").addEventListener("click",function(){
    fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>(
        result.json().then((data)=>{
            getHTMLforTODO(data)
            console.log(data)
        })
    ))

})



function getHTMLforTODO(data){
    let html = "<ul>"
    data.forEach(todo => {
        html += "<li>" + "User " + todo.userId + ": " + todo.title + "</li>"
    });
    html+="</ul>"
    document.getElementById("content").innerHTML = html
}

