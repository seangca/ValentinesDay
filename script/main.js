// Animation Timeline

const animationTimeline = () => {

  // Spit chars that needs to be animated individually

  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];

  const chatText = textBoxChars.textContent.trim();

  textBoxChars.innerHTML = `<span>${chatText.split("").join("</span><span>")}</span>`;



  // iMessage bubble pop-in: scale up from bottom with bounce

  const bubbleIn = {

    opacity: 0,

    scale: 0.3,

    y: 30,

    transformOrigin: "bottom right",

  };

  const bubbleInTo = {

    opacity: 1,

    scale: 1,

    y: 0,

    ease: Back.easeOut.config(1.7),

  };

  const bubbleInReceived = {

    opacity: 0,

    scale: 0.3,

    y: 30,

    transformOrigin: "bottom left",

  };

  const bubbleOut = {

    opacity: 0,

    scale: 0.95,

    y: -10,

  };



  const tl = new TimelineMax();



  // Hide ALL sections at start so nothing overlaps

  tl.set(".one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .photo-gallery, .first-date, .our-memories", {

    opacity: 0,

  })

    .to(".container", 0.1, {

      visibility: "visible",

    })

    // Section One - received bubble pops in from bottom-left

    .set(".one", { opacity: 1 })

    .fromTo(".one .bubble.received", 0.4, bubbleInReceived, bubbleInTo)

    .fromTo(".one .bubble.sent", 0.4, bubbleIn, bubbleInTo, "+=0.3")

    .to(".one", 0.5, bubbleOut, "+=2.5")

    // Section Three - received bubble

    .set(".three", { opacity: 1 })

    .fromTo(".three .bubble", 0.4, bubbleInReceived, bubbleInTo)

    .to(".three", 0.5, bubbleOut, "+=2")

    // Section Four - text input

    .to(".four", 0.5, { opacity: 1, scale: 1 })

    .fromTo(".fake-btn", 0.3, { scale: 0.2, opacity: 0 }, { scale: 1, opacity: 1 })

    .staggerTo(

      ".hbd-chatbox span",

      0.5,

      { visibility: "visible" },

      0.05

    )

    .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" })

    .to(".four", 0.5, { opacity: 0, y: -50 }, "+=0.7")

    // Section Five - ideas as iMessage bubbles

    .set(".five", { opacity: 1 })

    .fromTo(".idea-1", 0.4, bubbleIn, bubbleInTo)

    .to(".idea-1", 0.4, bubbleOut, "+=1.5")

    .fromTo(".idea-2", 0.4, bubbleIn, bubbleInTo)

    .to(".idea-2", 0.4, bubbleOut, "+=1.5")

    .fromTo(".idea-4", 0.4, bubbleInReceived, bubbleInTo)

    .to(".idea-4", 0.4, bubbleOut, "+=1.5")

    .fromTo(".idea-5", 0.4, bubbleIn, bubbleInTo)

    .to(".idea-5", 0.4, bubbleOut, "+=1.5")

    .staggerFromTo(

      ".idea-6 span",

      0.8,

      { scale: 3, opacity: 0, rotation: 15 },

      { scale: 1, opacity: 1, rotation: 0, ease: Expo.easeOut },

      0.2

    )

    .staggerTo(

      ".idea-6 span",

      0.8,

      { scale: 3, opacity: 0, rotation: -15, ease: Expo.easeOut },

      0.2,

      "+=1"

    )

    // Section Seven - balloons

    .set(".seven", { opacity: 1 })

    .staggerFromTo(

      ".flying-emoji",

      1.8,

      { opacity: 0.9, y: 1400 },

      { opacity: 1, y: -1000 },

      0.12

    )

    // Section Six - photo & wish
    .set(".seven", { opacity: 0 })
    .set(".six", { opacity: 1 })
    .fromTo(".girl-dp", 0.6, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, ease: Back.easeOut.config(1.2) })
    .fromTo(".wish-hbd", 0.5, { opacity: 0, y: 15 }, { opacity: 1, y: 0, color: "#ff69b4", ease: Power2.easeOut }, "+=0.2")
    .fromTo(".wish h5", 0.4, { opacity: 0, y: 10 }, { opacity: 1, y: 0, ease: Power2.easeOut }, "+=0.1")

    // Section Eight - confetti

    .set(".eight", { opacity: 1 })

    .staggerTo(

      ".eight svg",

      1.5,

      { visibility: "visible", opacity: 0, scale: 80, repeat: 3, repeatDelay: 1.4 },

      0.3

    )

    .to(".six", 0.5, { opacity: 0, y: 30, zIndex: "-1" })

    // First Date
    .set(".first-date", { opacity: 1 })
    .fromTo(".first-date-title", 0.8,
      { opacity: 0, y: -20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, ease: Back.easeOut.config(1.2) }
    )
    .fromTo(".first-date-card", 0.7,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, ease: Power3.easeOut },
      "+=0.3"
    )
    .staggerFromTo(
      ".first-date-detail",
      0.5,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, ease: Power2.easeOut },
      0.3
    )
    .fromTo(".first-date-memory", 0.7,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, ease: Power2.easeOut },
      "+=0.4"
    )
    .to({}, 3.5, {})
    .to(".first-date", 0.6, { opacity: 0, y: -20 })

    // Photo Gallery (Our Moments)

    .set(".photo-gallery", { opacity: 1 })

    .fromTo(".gallery-title", 0.7,

      { opacity: 0, y: -30 },

      { opacity: 1, y: 0, ease: Expo.easeOut }

    )

    .staggerFromTo(

      ".gallery-item",

      0.6,

      { opacity: 0, scale: 0.5, y: 40 },

      { opacity: 1, scale: 1, y: 0, ease: Back.easeOut.config(1.7) },

      0.2

    )

    .to({}, 3.5, {})
    .to(".photo-gallery", 0.6, { opacity: 0, y: -20 })

    // Future Things
    .set(".our-memories", { opacity: 1 })
    .fromTo(".memories-title", 0.8,
      { opacity: 0, y: -20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, ease: Back.easeOut.config(1.2) }
    )
    .fromTo(".memories-timeline", 0.7,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, ease: Power3.easeOut },
      "+=0.3"
    )
    .staggerFromTo(
      ".memory-item",
      0.5,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, ease: Power2.easeOut },
      0.3
    )
    .to({}, 3.5, {})
    .to(".our-memories", 0.6, { opacity: 0, y: -20 })

    // Section Nine - ending

    .set(".nine", { opacity: 1 })

    .fromTo(".nine .bubble.received", 0.4, bubbleInReceived, bubbleInTo)

    .fromTo(".nine .bubble.sent", 0.4, bubbleIn, bubbleInTo, "+=0.5");



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

  return fetch("customize.json")

    .then((data) => data.json())

    .then((data) => {

      // Handle name (appears in header and avatar circle)

      if (data.name && data.name !== "") {

        const nameEl = document.getElementById("name");

        if (nameEl) nameEl.innerText = data.name;

        const avatarLetter = document.getElementById("avatarLetter");

        if (avatarLetter) avatarLetter.innerText = data.name.charAt(0).toUpperCase();

      }



      // Handle wishText

      if (data.wishText && data.wishText !== "") {

        const wishEl = document.getElementById("wishText");

        if (wishEl) wishEl.innerText = data.wishText;

      }



      // Handle imagePath

      if (data.imagePath && data.imagePath !== "") {

        const imgEl = document.getElementById("imagePath");

        if (imgEl) imgEl.setAttribute("src", data.imagePath);

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
            <div class="memory-text">
              <h3 class="memory-title-text">${memory.title}</h3>
              <p class="memory-desc">${memory.description}</p>
            </div>
          `;

          timeline.appendChild(item);

        });

      }

    });

};



// Run fetch THEN animation — wait for data before starting

fetchData().then(() => animationTimeline());

