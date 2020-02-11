const courses=["Data Structures","Python","PHP","SQL"];
const myFun=()=>{
  let course = document.getElementById("text1").value;
    if(course.toLowerCase()==="data" || course.toLowerCase()==="structures" || course.toLowerCase()==="data structures"){
      window.location.href="https://docs.google.com/document/d/1YRG22RyDPPC4b75BY9OUUlQggzZrELbcjNmFr-uKR5w/edit?usp=sharing";
    
    }
    else if(course.toLowerCase()==="python"){
     window.location.href="https://docs.google.com/document/d/1MrOf7S2VtiGdoNd0fmxWP10geE15LK_aFGEK045u5vs/edit?usp=sharing";

    }
    else if(course.toLowerCase()==="p" || course.toLowerCase()==="php"){
        window.location.href="https://docs.google.com/document/d/1Z2tFRfesriJv7d44CezJd077fwVfxhe7Xtqi3ABWv8k/edit?usp=sharing";
    }
    else if(course.toLowerCase()==="s" || course.toLowerCase()==="sql"){
        window.location.href="https://docs.google.com/document/d/1jV9HLgETcuD_-0BzMVZMVcMxNk_H9pPorAB8sCCLWDI/edit?usp=sharing";
    }
    else{
        alert("Please enter from the content");
    }
    }
