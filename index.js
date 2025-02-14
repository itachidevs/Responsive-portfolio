const projects=[
    {name:"Password Tracker",
      desc:"A user friendly React App to store your passwords efficiently",
      stack:["HTML","CSS","React","JavaScript"],
      live:"https://passwordtracker.ccbp.tech/",
      source:"https://github.com/itachidevs/Password-Manager.git"

    },
    {name:"Landing Page of Time Tracking Dashboard",
        desc:"A user friendly time tracking page and full responsive for small devices.",
        stack:["HTML","CSS","JavaScript"],
        live:"https://itachidevs.github.io/Time-tracking-dashboard/",
        source:"https://github.com/itachidevs/Time-tracking-dashboard.git"
    },
      {name:"Letters Caluculator App",
        desc:"A small react fun app that calucutaes the count of the letters you entered.",
        stack:["HTML","CSS","JavaScript","React"],
        source:"https://github.com/itachidevs/Letters-Calculator.git",
        live:"https://itachidevs.github.io/Letters-Calculator/"
      },
      {
      name:"Portfolio",
        desc:"A simple responsive portfolio which showcase my skills.",
        stack:["HTML","CSS","JavaScript",],
        live:"",
        source:""
      },
      {
      name:"Emoji Game",
        desc:"A small emoji game that is fun to create. Using logic and problem solvig  I achieved this.",
        stack:["HTML","CSS","JavaScript","React"],
        source:"https://github.com/itachidevs/Emoji-Game.git",
        live:"https://emojigame.ccbp.tech/"
      },
      
      {
        name:"Money Manager",
          desc:"A small emoji game that is fun to create. Using logic and problem solvig  I achieved this.",
          stack:["HTML","CSS","JavaScript","React"],
          source:"https://github.com/itachidevs/Money-Manager.git",
          live:""
        },

      
        {
            name:"Coin Toss Game",
              desc:"A game that is fun to create. Using logic in React I achieved this.",
              stack:["HTML","CSS","JavaScript","React"],
              source:"https://github.com/itachidevs/Coin-Toss-Game.git",
              live:""
            },]
            
       


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project card hover effect (optional)
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

const projectel=document.getElementById("projects");

appendProject=(each)=>{
    const card=document.createElement("div");
    card.classList.add("project-card");
    const spanel=document.createElement("div"); 
    spanel.classList.add("span");
    spanel.textContent="*_*"
    card.appendChild(spanel);
    projectel.appendChild(card);
    const head=document.createElement("h3");
    head.classList.add("card-head");
    head.textContent=each.name;
    card.appendChild(head);

    const desc=document.createElement("p");
    desc.classList.add("project-desc");
    desc.textContent=each.desc;
    card.appendChild(desc);

    
    
    const badges=each.stack;
    badges.map((each)=>{
        const badge=document.createElement("span");
        badge.classList.add("tech-badge");
        badge.textContent=each;
    card.appendChild(badge);

    });
    const links=document.createElement("div");
    links.classList.add("project-links");
    card.appendChild(links);
    const livelink=document.createElement("a");
    const islive=each.live;
 
    islive==""?
    livelink.textContent="No Live Available":   livelink.textContent="Live";
    livelink.href=each.live;
    livelink.classList.add("livelink");

    links.appendChild(livelink);
    const sourcelink=document.createElement("a");
    sourcelink.textContent="Source";
    sourcelink.href=each.source;
    sourcelink.classList.add("sourcelink");
    links.appendChild(sourcelink);


}

projects.forEach((each)=>{appendProject(each)});

