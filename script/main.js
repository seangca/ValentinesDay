// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    // Photo Gallery animations
    .from(".gallery-title", 0.7, {
      opacity: 0,
      y: -30,
      ease: Expo.easeOut,
    })
    .staggerFrom(
      ".gallery-item",
      0.6,
      {
        opacity: 0,
        scale: 0.5,
        y: 40,
        ease: Back.easeOut.config(1.7),
      },
      0.2
    )
    .to(
      ".photo-gallery",
      0.7,
      {
        opacity: 0,
        y: 30,
      },
      "+=3"
    )
    // First Date animations
    .from(".first-date-title", 0.7, {
      opacity: 0,
      y: -30,
      ease: Expo.easeOut,
    })
    .from(".first-date-card", 0.7, {
      opacity: 0,
      scale: 0.8,
      ease: Back.easeOut.config(1.4),
    })
    .staggerFrom(
      ".first-date-detail",
      0.5,
      {
        opacity: 0,
        x: -30,
      },
      0.2
    )
    .from(".first-date-memory", 0.5, {
      opacity: 0,
      y: 20,
    })
    .to(
      ".first-date",
      0.7,
      {
        opacity: 0,
        y: 30,
      },
      "+=3"
    )
    // Memories timeline animations
    .from(".memories-title", 0.7, {
      opacity: 0,
      y: -30,
      ease: Expo.easeOut,
    })
    .staggerFrom(
      ".memory-item",
      0.6,
      {
        opacity: 0,
        x: -50,
        ease: Power2.easeOut,
      },
      0.3
    )
    .to(
      ".our-memories",
      0.7,
      {
        opacity: 0,
        y: 30,
      },
      "+=3"
    )
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      // Handle name (appears in header and inline bubble)
      if (data.name && data.name !== "") {
        document.getElementById("name").innerText = data.name;
        const nameInline = document.getElementById("nameInline");
        if (nameInline) nameInline.innerText = data.name;
      }

      // Handle greetingText
      if (data.greetingText && data.greetingText !== "") {
        const greetingEl = document.getElementById("greetingText");
        const bubbleText = greetingEl.querySelector(".bubble-text");
        if (bubbleText) {
          bubbleText.innerText = data.greetingText;
        } else {
          greetingEl.innerText = data.greetingText;
        }
      }

      // Handle wishText
      if (data.wishText && data.wishText !== "") {
        document.getElementById("wishText").innerText = data.wishText;
      }

      // Handle imagePath
      if (data.imagePath && data.imagePath !== "") {
        document.getElementById("imagePath").setAttribute("src", data.imagePath);
      }

      // Handle photos gallery
      if (data.photos && data.photos.length > 0) {
        const galleryGrid = document.getElementById("galleryGrid");
        galleryGrid.innerHTML = "";
        data.photos.forEach((photo) => {
          const item = document.createElement("div");
          item.className = "gallery-item";
          item.innerHTML = `
            <img src="${photo.src}" alt="${photo.caption}" />
            <p class="gallery-caption">${photo.caption}</p>
          `;
          galleryGrid.appendChild(item);
        });
      }

      // Handle first date
      if (data.firstDate) {
        if (data.firstDate.date)
          document.getElementById("firstDateDate").innerText = data.firstDate.date;
        if (data.firstDate.place)
          document.getElementById("firstDatePlace").innerText = data.firstDate.place;
        if (data.firstDate.memory)
          document.getElementById("firstDateMemory").innerText = data.firstDate.memory;
      }

      // Handle memories
      if (data.memories && data.memories.length > 0) {
        const timeline = document.getElementById("memoriesTimeline");
        timeline.innerHTML = "";
        data.memories.forEach((memory) => {
          const item = document.createElement("div");
          item.className = "memory-item";
          item.innerHTML = `
            <span class="memory-icon">${memory.icon}</span>
            <h3 class="memory-title-text">${memory.title}</h3>
            <p class="memory-desc">${memory.description}</p>
          `;
          timeline.appendChild(item);
        });
      }
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());
