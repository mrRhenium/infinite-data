const content_data = document.querySelector("#content_data");
var count = 1;

const url = "https://jsonplaceholder.typicode.com/posts";

//paste the fetch data from the jason placeholder
const scroll_effect = async () => {
  const comment = await fetch(url); //fetch the data
  const json = await comment.json(); //data convert into jason formate

  for (var i = 0; i < 10; i++) {
    const comment_data = `${json[count].body}`;
    const data = `
     <div class="row border m-3 border-info">
       <div class="col-sm-2 col-lg-1 border border-info text-light text-center  display-4">${count++}.
       </div>
       <div class="col-sm-10 col-lg-11">
           <div class="row">
           <p class="text-center text-light">${comment_data}</p>
           </div>
       </div>
     </div>`;
    content_data.insertAdjacentHTML("beforeend", data);
  }
};

// define the scroll fuction for container
// const container = document.querySelector("#container");
// container.addEventListener("scroll", () => {
//   const { scrollHeight, scrollTop, clientHeight } = container;
//   if (scrollHeight <= scrollTop + clientHeight) {
//     scroll_effect();
//   }
//   console.log(scrollHeight + " " + scrollTop + " " + clientHeight);
// });

// define the scroll function
window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollHeight <= scrollTop + clientHeight) {
    scroll_effect();
    console.log(scrollHeight, scrollTop, clientHeight);
  }
});

scroll_effect();
