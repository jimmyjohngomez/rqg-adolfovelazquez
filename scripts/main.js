alert("I'm still alive! Viva that...");

var header = document.getElementById("header");

header.style= "background:#999; border: 1px solid #eaea09" ;

var title = document.createElement("h1");
title.textContent="Random Tip Generator";

header.appendChild(title);

var description= document.createElement("p");
description.innerHTML = "This is a description";

header.appendChild(description);