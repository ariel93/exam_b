
const container = document.getElementById('container')
const registerBtn = document.getElementById('register')

registerBtn.addEventListener('click',()=>{
    container.classList.add("active")
})

loginBth.addEventListener('click',()=>{
    container.classList.remove("active")
})


async function create(event) {
    event.preventDefault();
    let courseName = event.target.courseName.value;
    let numOfStudents = event.target.numOfStudents.value;
    let startYear = event.target.startYear.value;
    try {
        const response = await axios.post("http://localhost:4000/users",
           { courseName, numOfStudents, startYear });
           
        if (response.data !== undefined) {
          console.log("create successful");
        }
      } catch (error) {
        console.error("Error fetching, " + error);
      } 
      
}


  


