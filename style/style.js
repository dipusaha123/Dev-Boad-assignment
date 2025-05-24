let count = 0;
let  taskAssign = document.getElementById("task_assign");
let  addNumber = document.getElementById("add23");
let historyContainer = document.getElementById("history_container");



const completeBtns = document.querySelectorAll(".complate_btn");
const titleTask = document.querySelectorAll(".title");

for (let i = 0; i < completeBtns.length; i++) {
  const btn = completeBtns[i];

  btn.addEventListener("click", function (event) {
   
    
      alert("board Update  successful");
    
    event.target.setAttribute("disabled", true);

    let  convertTaskAssign = parseInt(taskAssign.innerText);
    let convertAddNumber = parseInt(addNumber.innerText);
    convertTaskAssign--;
    convertAddNumber++;
    taskAssign.innerText = convertTaskAssign;
    addNumber.innerText = convertAddNumber;

    const currentDate = new Date();
    const time = currentDate.toLocaleTimeString()
   

    const titleHeader =titleTask[i].innerText;
    

    const tranContainer = document.getElementById("history_container");
    const div = document.createElement("div");
    div.classList.add("bg-blue-50", "p-3");
    div.innerHTML = `
    <p class="text-gray-600 para" >You have Complete The Task ${titleHeader}  at ${time} </p>
    `
    tranContainer.appendChild(div);
    count++;
    if (count === 6) {
      alert('Congrates! You have completed all the current task')
    }
     
  })
  
}

const clearHistory = document.getElementById("clearhistorybtn");
  clearHistory.addEventListener('click', function () {
    document.getElementById("history_container").innerText = '';
  })

  
  document.getElementById("blogpage").addEventListener("click", function () {
    window.location.href = "blog.html";
  })


 
   const currentDate = new Date();
  
  const day = currentDate.toLocaleDateString("en-US", { weekday: "short" });
  const month = currentDate.toLocaleDateString("en-US", { month: "short" });
  const date = currentDate.toLocaleDateString("en-US", {  day: "numeric" });
  const year = currentDate.toLocaleDateString("en-US", {   year: "numeric" });


document.getElementById("curentdate").innerText = `${day},\n ${month}  ${date} ${year}`;
 



document.getElementById("change_btn").addEventListener('click', function () {
  const colors = ['red', 'green', 'blue','Yellow', 'Purple', 'Orange', 'Pink',  'Brown'];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() *colors.length)]
})

