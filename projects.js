const projectsData = [
    {
        id:"Fabric_defects",
        image:"./images/Fabric.svg",
        title: "Fabric defects",
        tech: "Built using image processing techniques, python",
        description: "Detects the defects in the fabric clothes which are plain with no design on it.",
        url: "https://github.com/Anvesh77/Fabric_defects"
    },
    {
        id:"Piston",
        image:"./images/piston.svg",
        title: "Piston defect detection",
        tech: "Built using image processing techniques, python",
        description: "Detects the defects like scratches, holes, stains on a cylindrical piston.",
        url: "https://github.com/Anvesh77/Piston"
    },
    {
        id: "Gesture control",
        image: "./images/hand.svg",
        title: "Multi-feature gesture control",
        tech: "Built using OpenCV techniques, python",
        description: "A person can control the settings like volume, brightness by hand gestures. This project is useful for physically handicapped persons.",
        url: "https://github.com/Anvesh77/Multi-feature-Gesture-Control-System"
    },
    /*{
        id:"Github",
        image:"./images/github.svg",
        title: "Github Profile Fetcher",
        tech: "Built using Angular, TailwindCSS, Github REST API",
        description: "Fetches Github details like bio,repositories,tech used for each project of a user",
        url: "https://github-profile-fetcher-nine.vercel.app/"
    },
    {
        id: "Pong",
        image: "./images/pong.svg",
        title: "Pong Game",
        tech: "Built using Python",
        description: "Multiplayer Pong game based on turtle module and OOPs concept",
        url: "https://github.com/Sahith-03/Pong-Game"
    },
    {
        id: "Snake",
        image: "./images/snake.svg",
        title: "Snake Game",
        tech: "Built using Python",
        description: "Classic snake game based on turtle module and OOPs concept",
        url: "https://github.com/Sahith-03/Snake-Game/"
    },
    {
      id: "Login",
      image: "./images/Auth.svg",
      title: "Login-Signup Page",
      tech: "Built using NextJS, Firebase, TailwindCSS",
      description: "Allows users to login and signup using GoogleAuth,Email/Password",
      url: "https://authentication-sahith-03s-projects.vercel.app/"
    },
    {
      id: "dict",
      image: "./images/dictionary.svg",
      title: "Dictionary",
      tech: "Built using HTML,CSS,JavaScript.",
      description: "Uses real-time data as Free Dictionary API is used",
      url: "https://sahith-03.github.io/Dictionary/"
    },
    {
      id: "drum",
      image: "./images/drum-icon.svg",
      title: "Drum-Kit",
      tech: "Built using HTML,CSS,JavaScript.",
      description: "Allows users to play drum sounds by clicking on buttons.",
      url: "https://sahith-03.github.io/Drum-Kit/"
    },*/
    {
      id: "Leave-Pred",
      image: "./images/avatar-icon.svg",
      title: "Leave Prediction",
      tech: "Built using Pandas,Seaborn,Scikit-learn libraries of Python.",
      description: "I predicted student leave based on date, nearby festival, weekend proximity, distance from university, and leave option in the given data.",
      url: "https://github.com/Anvesh77/Leave-Prediction"
    }
];
  
// Function to generate HTML for projects
function generateProjectsHTML() {
    const projectsContainer = document.querySelector('.projects');
    
    projectsData.forEach(project => {
      const projectHTML = `
        <div id="${project.id}" class="project" onclick="window.open('${project.url}', '_blank')">
          <img src="${project.image}" alt="${project.title} icon">
          <div>
            <h2>${project.title}</h2>
            <p><span>${project.tech}</span><br>
              ${project.description}
            </p>
          </div>
          <img src="./images/arrow.svg" alt="" class="arrow">
        </div>
      `;
      projectsContainer.innerHTML += projectHTML;
    });
}
  
document.addEventListener('DOMContentLoaded', generateProjectsHTML);