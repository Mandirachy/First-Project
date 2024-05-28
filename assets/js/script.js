// ARRAY
// const myname = ["Demo A","Demo B","Demo C"];
// document.getElementById("main-demo").innerHTML = myname[2];

// OBJECT-CREATE
// let object = {
//   Id : 1, 
//   Name : 'Merry',
//   Location : 'Kathmandu'
// };
// document.getElementById('main-demo').innerHTML = object.Name + " " + object.Location ;
// console.log(object);

// let fruits = ['Apple' , 'Mango' , 'Grapes'];
// document.getElementById("main-demo").innerHTML = fruits;

// DOM-MANIPULATION
document.querySelector(".blog-b").innerHTML = "Blog B";

function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var demoElements = document.getElementsByClassName("demo");
      for (var i = 0; i < demoElements.length; i++) {
        demoElements[i].innerHTML = this.responseText;
      }
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  xhttp.send();
}
// GETTING-RESOURCES
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

// LISTING-A-RESOURCES
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));

//  POST
let Options = {
  method: " POST",
  headers: {
    "Content-type": "application/json",
  },
};
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
   Name: "Merry",
   Faculty: "BSc.Csit",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// PUT
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 2,
    Name: "Julie",
    Faculty: "BIM",
    userId: 2,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// PATCHING
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  body: JSON.stringify({
  Faculty: "BIT",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//   DELETING
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
});

// FILTERING
fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
  .then((response) => response.json())
  .then((json) => console.log(json));

// API-FETCH
let p = fetch("https://jsonplaceholder.typicode.com/posts/1");
p.then((value1) => {
  return value1;
}).then((value2) => {
  return value2;
});

// displaying blog-c from js
// Sample data
const blogData = {
  imageSrc: "assets/images/blog_1.jpg",
  title: "Blog C",
  date: "May 05, 2024",
  content:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, consequuntur.",
  link: "your-read-more-link",
};

// Create a function to create the blog module
const blogModules = document.querySelectorAll('.blog-module');
// Iterate over the blog modules and extract the data
blogModules.forEach((blogModule, index) => {
    const imageSrc = blogModule.querySelector('img').src;
    const title = blogModule.querySelector('h6').textContent;
    const date = blogModule.querySelector('span').textContent;
    const content = blogModule.querySelector('p').textContent;
    const link = blogModule.querySelector('.blog-btn a').href;

    // Display the data in the console
    console.log(`Blog ${String.fromCharCode(65 + index)}:`);
    console.log(`Image Source: ${imageSrc}`);
    console.log(`Title: ${title}`);
    console.log(`Date: ${date}`);
    console.log(`Content: ${content}`);
    console.log(`Link: ${link}`);
});

// function createBlogModule(data) {
//   const blogModule = document.createElement("div");
//   blogModule.classList.add("blog-module");
//   blogModule.innerHTML = `
//       <img src="${data.imageSrc}" alt="Blog" class="img-responsive">
//       <div class="flex f-d-c space-between">
//           <div class="blog-text">
//               <h6>${data.title}</h6>
//               <span><i class="fa-regular fa-calendar-days"></i> ${data.date}</span>
//               <p>${data.content}</p>
//           </div>
//           <div class="blog-btn">
//               <a href="${data.link}" class="btn red-btn">Read More</a>
//           </div>
//       </div>`;
//   return blogModule;
// }
// // Get the container where you want to append the blog module
// const container = document.getElementById("blog-c");

// // Create the blog module
// const blogModule = createBlogModule(blogData);

// // Append the blog module to the container
// container.appendChild(blogModule);

// // Log the data to the console
// console.log(blogData);

