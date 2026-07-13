// Portfolio Core Script File
// Integrates portfolioData config and handles interactive logic

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial Content Binding from portfolioData
  initContentBinding();

  // 2. Navigation Scroll & Mobile Burger Menu
  initNavigation();

  // 3. Typwriter Text Animation (Hero)
  if (document.getElementById("typed-text")) {
    initTypewriter();
  }

  // 4. Interactive Game Controls
  if (document.getElementById("btn-play-game")) {
    initGameController();
  }

  // 5. Terminal CLI Emulator
  if (document.getElementById("terminal-input")) {
    initTerminalEmulator();
  }
});

// Reusable SVG Icons for Socials
const SVG_ICONS = {
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
  youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>`,
  linktree: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  email: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
};

function initContentBinding() {
  const data = window.portfolioData || (typeof portfolioData !== 'undefined' ? portfolioData : null);
  if (!data) return;

  // Set Profile details
  const nameNodes = document.querySelectorAll("#brand-name");
  nameNodes.forEach(node => node.textContent = data.profile.name);

  const titleNodes = document.querySelectorAll("#brand-title");
  titleNodes.forEach(node => node.textContent = data.profile.title);

  // Set resume urls
  const resumeLinks = document.querySelectorAll("#resume-nav-link, #resume-mobile-link");
  resumeLinks.forEach(link => {
    const currentHref = link.getAttribute("href");
    if (!currentHref || currentHref === "#") {
      link.href = data.profile.resumeUrl;
    }
  });

  // Home Page Specific bindings
  if (document.getElementById("avatar-img-front")) {
    document.getElementById("avatar-img-front").src = data.profile.avatarFront;
    document.getElementById("avatar-img-front").alt = data.profile.name;
    document.getElementById("avatar-img-back").src = data.profile.avatarBack;
    document.getElementById("avatar-img-back").alt = data.profile.name;

    // Populating hero tags
    const tagContainer = document.getElementById("hero-tags-container");
    tagContainer.innerHTML = "";
    data.profile.typedStrings.forEach(str => {
      const pill = document.createElement("span");
      pill.className = "tag-pill";
      pill.textContent = str;
      tagContainer.appendChild(pill);
    });

    // Populate hero socials
    const heroSocials = document.getElementById("hero-socials-container");
    heroSocials.innerHTML = "";
    Object.entries(data.socials).forEach(([key, val]) => {
      if (SVG_ICONS[key]) {
        const a = document.createElement("a");
        let href = val;
        if (key === "email") {
          href = `mailto:${val}`;
        } else if (key === "phone") {
          href = `tel:${val.replace(/\s+/g, '')}`;
        }
        a.href = href;
        if (key !== "email" && key !== "phone") {
          a.target = "_blank";
          a.rel = "noopener noreferrer";
        }
        a.className = "social-icon-btn";
        a.ariaLabel = key;
        a.innerHTML = SVG_ICONS[key];
        heroSocials.appendChild(a);
      }
    });

    // Render Skills Grid
    const skillsGrid = document.getElementById("skills-grid");
    if (skillsGrid && data.skills) {
      skillsGrid.innerHTML = "";
      data.skills.forEach(cat => {
        const card = document.createElement("div");
        card.className = "skill-card";
        card.style.setProperty("--cat-color", cat.color);
        card.innerHTML = `
          <div class="skill-card-header">
            <span class="skill-cat-icon">${cat.icon}</span>
            <h3 class="skill-cat-name">${cat.category}</h3>
          </div>
          <div class="skill-pills">
            ${cat.items.map(item => `<span class="skill-pill">${item}</span>`).join("")}
          </div>
        `;
        skillsGrid.appendChild(card);
      });
    }

    // Render projects grid

    const projectsGrid = document.getElementById("projects-grid");
    projectsGrid.innerHTML = "";
    data.projects.forEach(proj => {
      const card = document.createElement("div");
      card.className = proj.featured ? "project-card featured" : "project-card";
      card.style.cursor = "pointer";

      const isSlideshow = proj.images && proj.images.length > 0;

      // --- Card thumbnail area ---
      let imgAreaHtml = "";
      if (isSlideshow) {
        imgAreaHtml = `
          <div class="project-thumb-wrapper">
            ${proj.images.map((img, idx) => `
              <img src="${img}" alt="${proj.title}" class="thumb-slide-img ${idx === 0 ? 'active' : ''}" data-index="${idx}">
            `).join('')}
          </div>
          <div class="thumb-dots">
            ${proj.images.map((_, idx) => `
              <span class="slideshow-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>
            `).join('')}
          </div>
        `;


      } else {
        const imgContent = proj.image
          ? `<img src="${proj.image}" alt="${proj.title}" class="project-img">`
          : `<div class="project-img-placeholder">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3">
                 <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                 <polyline points="21 15 16 10 5 21"/>
               </svg>
               <span>Screenshot coming soon</span>
             </div>`;
        imgAreaHtml = `
          <div class="project-img-wrapper">
            ${imgContent}
          </div>
        `;
      }

      // --- Truncated tags (3 visible + "+N more") ---
      const MAX_TAGS = 3;
      const visibleTags = proj.tags.slice(0, MAX_TAGS);
      const extraCount = proj.tags.length - MAX_TAGS;
      let tagsHtml = visibleTags.map(t => `<span class="project-tag-pill">${t}</span>`).join("");
      if (extraCount > 0) tagsHtml += `<span class="project-tag-more">+${extraCount} more</span>`;

      // --- Store buttons (stop propagation to avoid triggering modal) ---
      const storeBtns = buildStoreBtns(proj);
      const linksHtml = storeBtns ? `<div class="project-links-row">${storeBtns}</div>` : "";

      card.innerHTML = `
        ${imgAreaHtml}
        <div class="project-info">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc project-desc--clamp">${proj.description}</p>
          <div class="project-tags">${tagsHtml}</div>
        </div>
      `;


      // Stop store button clicks from bubbling up to modal
      card.querySelectorAll(".store-btn").forEach(btn => {
        btn.addEventListener("click", e => e.stopPropagation());
      });

      // Click card → open modal
      card.addEventListener("click", () => openProjectModal(proj));

      if (proj.featured) {
        const wrapper = document.createElement("div");
        wrapper.className = "featured-card-wrapper";
        wrapper.innerHTML = `
          <div class="featured-tag-above">★ FEATURED</div>
          <div class="featured-card-border"></div>
        `;
        wrapper.appendChild(card);
        projectsGrid.appendChild(wrapper);
      } else {
        projectsGrid.appendChild(card);
      }
    });

    // Init thumbnail auto-rotate (no nav buttons on cards)
    initThumbSlideshows();

    // Render Laboratory Marquee
    const marqueeTrack = document.getElementById("lab-marquee-track");
    marqueeTrack.innerHTML = "";
    // Duplicate twice for infinite loop width matching
    const doubleLab = [...data.laboratory, ...data.laboratory];
    doubleLab.forEach(lab => {
      const card = document.createElement("a");
      card.className = "lab-card";
      card.href = lab.link;
      card.innerHTML = `
        <img src="${lab.image}" alt="${lab.title}" class="lab-card-img">
        <div class="project-engine-badge">
          <img src="${lab.engineIcon}" alt="${lab.engine}" class="project-engine-icon">
          <span class="project-engine-name">${lab.engine}</span>
        </div>
        <div class="lab-card-footer">
          <p class="lab-card-title">${lab.title}</p>
        </div>
      `;
      marqueeTrack.appendChild(card);
    });

    // About Me bio
    const bioTitle = document.getElementById("bio-title");
    bioTitle.textContent = data.profile.bioTitle;
    const bioContainer = document.getElementById("bio-content-container");
    bioContainer.innerHTML = "";
    data.profile.bioParagraphs.forEach(para => {
      const p = document.createElement("p");
      p.className = "about-paragraph";
      p.textContent = para;
      bioContainer.appendChild(p);
    });
  }

  // Populate Footer Socials on all pages
  const footerSocials = document.getElementById("footer-socials-container");
  if (footerSocials) {
    footerSocials.innerHTML = "";
    Object.entries(data.socials).forEach(([key, val]) => {
      if (SVG_ICONS[key]) {
        const a = document.createElement("a");
        let href = val;
        if (key === "email") {
          href = `mailto:${val}`;
        } else if (key === "phone") {
          href = `tel:${val.replace(/\s+/g, '')}`;
        }
        a.href = href;
        if (key !== "email" && key !== "phone") {
          a.target = "_blank";
          a.rel = "noopener noreferrer";
        }
        a.className = "social-icon-btn";
        a.ariaLabel = key;
        a.innerHTML = SVG_ICONS[key];
        footerSocials.appendChild(a);
      }
    });

    // Add text contact info dynamically under social icons
    if (data.socials.email || data.socials.phone) {
      const existingDetails = footerSocials.parentNode.querySelector(".footer-contact-details");
      if (existingDetails) {
        existingDetails.remove();
      }

      const contactDiv = document.createElement("div");
      contactDiv.className = "footer-contact-details";

      let contactHtml = "";
      if (data.socials.email) {
        contactHtml += `
          <a href="mailto:${data.socials.email}" class="footer-contact-link">
            ${SVG_ICONS.email}
            <span>${data.socials.email}</span>
          </a>
        `;
      }
      if (data.socials.phone) {
        if (data.socials.email) {
          contactHtml += `<span class="contact-separator">·</span>`;
        }
        contactHtml += `
          <a href="tel:${data.socials.phone.replace(/\s+/g, '')}" class="footer-contact-link">
            ${SVG_ICONS.phone}
            <span>${data.socials.phone}</span>
          </a>
        `;
      }
      contactDiv.innerHTML = contactHtml;
      footerSocials.parentNode.insertBefore(contactDiv, footerSocials.nextSibling);
    }
  }

  // Copyright year & name
  const copyright = document.getElementById("footer-copyright-text");
  if (copyright) {
    copyright.innerHTML = `&copy; ${new Date().getFullYear()} ${data.profile.name}. All rights reserved.`;
  }

  // Work Experience page specific timeline binding
  const timelineContainer = document.getElementById("experience-timeline");
  if (timelineContainer && data.experience) {
    timelineContainer.innerHTML = "";
    data.experience.forEach(exp => {
      const item = document.createElement("div");
      item.className = "timeline-item";

      let bulletsHtml = "";
      exp.bullets.forEach(bullet => {
        bulletsHtml += `<li class="timeline-bullet">${bullet}</li>`;
      });

      item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-header">
          <h3 class="timeline-role-comp">${exp.role} <span class="timeline-company">@ ${exp.company}</span></h3>
          <span class="timeline-date">${exp.timeline}</span>
        </div>
        <ul class="timeline-bullets">
          ${bulletsHtml}
        </ul>
      `;
      timelineContainer.appendChild(item);
    });
  }

  // Unreleased page specific grid binding
  const labGrid = document.getElementById("lab-grid");
  if (labGrid && data.unreleased) {
    labGrid.innerHTML = "";
    data.unreleased.forEach(lab => {
      const item = document.createElement("div");
      item.className = "lab-grid-item";

      let tagsHtml = "";
      lab.tags.forEach(tag => {
        tagsHtml += `<span class="project-tag-pill">${tag}</span>`;
      });

      item.innerHTML = `
        <div class="lab-grid-img-wrapper">
          <div class="project-engine-badge">
            <img src="${lab.engineIcon}" alt="${lab.engine}" class="project-engine-icon">
            <span class="project-engine-name">${lab.engine}</span>
          </div>
          <img src="${lab.image}" alt="${lab.title}" class="lab-grid-img">
        </div>
        <div class="lab-grid-info">
          <h3 class="lab-grid-title">${lab.title}</h3>
          <p class="lab-grid-desc">${lab.description}</p>
          <div class="project-tags">
            ${tagsHtml}
          </div>
        </div>
      `;
      labGrid.appendChild(item);
    });
  }
}

// Navigation scroll and mobile drawer
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const burger = document.getElementById("nav-burger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-menu .nav-link");

  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    
    // Transparent / background tint transition on scroll
    if (currentScroll > 50) {
      navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.05)";
    } else {
      navbar.style.boxShadow = "none";
    }

    // Hide/show navbar on scroll down/up
    if (currentScroll > lastScroll && currentScroll > 200) {
      navbar.style.transform = "translateY(-100%)";
    } else {
      navbar.style.transform = "translateY(0)";
    }
    lastScroll = currentScroll;
  });

  // Burger Menu Click Toggle
  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  // Close Mobile Drawer on Link Clicks
  mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });
}

// Typewriter Hero Animation
function initTypewriter() {
  const data = window.portfolioData || (typeof portfolioData !== 'undefined' ? portfolioData : null);
  if (!data || !data.profile) return;
  const element = document.getElementById("typed-text");
  const strings = data.profile.typedStrings;
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentString = strings[wordIndex];
    
    if (isDeleting) {
      element.textContent = currentString.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentString.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = 100;
    if (isDeleting) speed /= 2; // Backspace faster

    if (!isDeleting && charIndex === currentString.length) {
      // Pause at full word
      speed = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % strings.length;
      speed = 500; // Pause before typing next word
    }

    setTimeout(type, speed);
  }

  // Start typing
  setTimeout(type, 500);
}

// Fullscreen & Simulated Game Controller
function initGameController() {
  const playBtn = document.getElementById("btn-play-game");
  const overlay = document.getElementById("game-overlay");
  const fullscreenBtn = document.getElementById("btn-fullscreen");
  const viewport = document.getElementById("game-viewport");

  playBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    // Usually iframe is initialized here. For our replica, we load a neat pixel canvas/video
  });

  fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      viewport.requestFullscreen().catch(err => {
        alert(`Error enabling fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  });
}

// Terminal CLI Emulator Implementation
function initTerminalEmulator() {
  const terminalInput = document.getElementById("terminal-input");
  const terminalBody = document.getElementById("terminal-body");
  const data = window.portfolioData || (typeof portfolioData !== 'undefined' ? portfolioData : null);
  if (!data) return;

  // Command History tracking
  let commandHistory = [];
  let historyIndex = -1;

  // Virtual File System Structure
  const virtualFS = {
    "/": {
      dirs: ["projects", "unreleased_projects"],
      files: ["about_me.txt", "experience.txt", "contact.txt", "skills.json", "resume.pdf"]
    },
    "/projects": {
      dirs: [],
      files: data.projects.map(p => p.title.toLowerCase().replace(/\s+/g, "_") + ".txt")
    },
    "/unreleased_projects": {
      dirs: [],
      files: data.unreleased.map(p => p.title.toLowerCase().replace(/\s+/g, "_") + ".txt")
    }
  };

  let currentPath = "/";

  // Focus terminal input on box clicks
  terminalBody.parentElement.addEventListener("click", () => {
    terminalInput.focus();
  });

  // Handle CLI Keyboard inputs (Arrow keys, tab, enter)
  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const commandString = terminalInput.value.trim();
      terminalInput.value = "";
      if (commandString.length > 0) {
        commandHistory.push(commandString);
        historyIndex = commandHistory.length;
        executeCLICommand(commandString);
      }
    } 
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
    } 
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = "";
      }
    }
    else if (e.key === "Tab") {
      e.preventDefault();
      handleCLITabComplete();
    }
  });

  function executeCLICommand(rawCommand) {
    // Print input line in logs
    const inputLine = document.createElement("div");
    inputLine.className = "terminal-line";
    inputLine.innerHTML = `<span class="terminal-prompt-sym">$</span> <span class="terminal-prompt-user">guest</span><span class="terminal-prompt-dir">${currentPath === "/" ? "~" : "~" + currentPath}</span> ${rawCommand}`;
    terminalBody.insertBefore(inputLine, terminalInput.parentElement);

    // Parse command
    const parts = rawCommand.split(/\s+/);
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    let output = "";
    let isError = false;
    let isHtml = false;

    switch (command) {
      case "help":
        output = `Available commands:
  ls [dir]        - Lists files and directories.
  cat &lt;file&gt;     - Displays file contents.
  cd &lt;dir&gt;       - Navigates directories.
  pwd             - Prints current working directory.
  whoami          - Shows user profile metadata.
  skills          - Displays skills bars.
  social          - Displays social links.
  game.exe        - Launches portfolio game simulator.
  clear           - Clears terminal output.
  easter-egg      - Finds hidden secret code.`;
        break;

      case "ls":
        let targetDir = currentPath;
        if (args.length > 0) {
          const pathArg = args[0];
          if (pathArg === "..") {
            targetDir = "/";
          } else if (pathArg.startsWith("/")) {
            targetDir = pathArg;
          } else {
            targetDir = (currentPath === "/" ? "" : currentPath) + "/" + pathArg;
          }
        }

        if (virtualFS[targetDir]) {
          const contents = [...virtualFS[targetDir].dirs.map(d => d + "/"), ...virtualFS[targetDir].files];
          output = contents.length > 0 ? contents.join("   ") : "(empty)";
        } else {
          output = `ls: directory not found: ${args[0]}`;
          isError = true;
        }
        break;

      case "cd":
        if (args.length === 0 || args[0] === "~") {
          currentPath = "/";
        } else {
          const dest = args[0];
          if (dest === "..") {
            currentPath = "/";
          } else if (dest === "/" || dest === "") {
            currentPath = "/";
          } else {
            const potentialPath = (currentPath === "/" ? "" : currentPath) + "/" + dest.replace(/^\/+|\/+$/g, "");
            if (virtualFS[potentialPath]) {
              currentPath = potentialPath;
            } else {
              output = `cd: no such file or directory: ${dest}`;
              isError = true;
            }
          }
        }
        // Update user host panel indicator
        document.getElementById("terminal-user-host").textContent = `guest@portfolio:~${currentPath === "/" ? "" : currentPath}`;
        break;

      case "pwd":
        output = currentPath;
        break;

      case "whoami":
        output = `${data.profile.name} - ${data.profile.title}
${data.profile.bioParagraphs.join("\n\n")}`;
        break;

      case "cat":
        if (args.length === 0) {
          output = "cat: missing file name operand";
          isError = true;
        } else {
          const filename = args[0].toLowerCase();
          
          if (currentPath === "/") {
            if (filename === "about_me.txt") {
              output = data.profile.bioParagraphs.join("\n\n");
            } else if (filename === "experience.txt") {
              output = data.experience.map(e => `${e.role} @ ${e.company} (${e.timeline})\n` + e.bullets.map(b => `  - ${b}`).join("\n")).join("\n\n");
            } else if (filename === "contact.txt") {
              output = Object.entries(data.socials).map(([k, v]) => `${k}: ${v}`).join("\n");
            } else if (filename === "skills.json") {
              output = `{
  "developer": "${data.profile.name}",
  "engine_competency": {
    "Unity": "Expert (C# scripting, gameplay flow)",
    "Godot": "Advanced (GDScript, shaders, UI)",
    "WebDev": "Senior (React, Full Stack, Vanilla JS)"
  }
}`;
            } else if (filename === "resume.pdf") {
              output = `Opening Resume PDF in browser...
Link: <a href="${data.profile.resumeUrl}" target="_blank" style="color: #6366f1; text-decoration: underline;">${data.profile.resumeUrl}</a>`;
              isHtml = true;
              window.open(data.profile.resumeUrl, "_blank");
            } else {
              output = `cat: ${args[0]}: No such file or directory`;
              isError = true;
            }
          } else if (currentPath === "/projects") {
            const matchProj = data.projects.find(p => p.title.toLowerCase().replace(/\s+/g, "_") + ".txt" === filename);
            if (matchProj) {
              output = `${matchProj.title} [Engine: ${matchProj.engine}]
${matchProj.description}
Tags: ${matchProj.tags.join(", ")}
Link: ${matchProj.link}`;
            } else {
              output = `cat: ${args[0]}: No such file or directory`;
              isError = true;
            }
          } else if (currentPath === "/unreleased_projects") {
            const matchLab = data.unreleased.find(p => p.title.toLowerCase().replace(/\s+/g, "_") + ".txt" === filename);
            if (matchLab) {
              output = `${matchLab.title} [Engine: ${matchLab.engine}]
${matchLab.description}
Tags: ${matchLab.tags.join(", ")}`;
            } else {
              output = `cat: ${args[0]}: No such file or directory`;
              isError = true;
            }
          }
        }
        break;

      case "skills":
        output = `Skill Matrix:
Unity Engine  [====================] 100%
Godot Engine  [==================  ] 90%
C# / GDScript [====================] 100%
Web FullStack [==================  ] 90%
UI UX Design  [================    ] 80%`;
        break;

      case "social":
        output = `Socials Portfolio:
LinkedIn: ${data.socials.linkedin}
GitHub:   ${data.socials.github}
Twitter:  ${data.socials.twitter}
YouTube:  ${data.socials.youtube}`;
        break;

      case "game.exe":
        output = "Launching portfolio game simulation... Check the game viewport above!";
        const gameOverlay = document.getElementById("game-overlay");
        if (gameOverlay) gameOverlay.style.display = "none";
        break;

      case "clear":
        // Clear all previous children except the input line
        const lines = Array.from(terminalBody.querySelectorAll(".terminal-line"));
        lines.forEach(l => l.remove());
        terminalBody.scrollTop = 0;
        return;

      case "easter-egg":
        output = "⭐ EASTER EGG FOUND! You unlocked Retro-Color Hack! Color themes inverted.";
        document.documentElement.classList.toggle("dark");
        break;

      default:
        output = `Command not found: ${command}. Type 'help' for suggestions.`;
        isError = true;
    }

    // Append CLI Output block
    const outputLine = document.createElement("div");
    outputLine.className = `terminal-line ${isError ? "output-error" : (isHtml ? "" : "output-text")}`;
    if (isHtml) {
      outputLine.innerHTML = output;
    } else {
      outputLine.textContent = output;
    }
    terminalBody.insertBefore(outputLine, terminalInput.parentElement);

    // Scroll to bottom
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function handleCLITabComplete() {
    const inputVal = terminalInput.value.trim();
    if (!inputVal) return;

    const parts = inputVal.split(/\s+/);
    if (parts.length < 2) return; // Need at least command + start of file/dir

    const cmd = parts[0].toLowerCase();
    const fragment = parts[1].toLowerCase();

    if (cmd === "cat" || cmd === "cd" || cmd === "ls") {
      const fsNode = virtualFS[currentPath];
      if (!fsNode) return;

      const candidates = [...fsNode.dirs, ...fsNode.files];
      const matches = candidates.filter(c => c.toLowerCase().startsWith(fragment));

      if (matches.length === 1) {
        // Complete the word
        terminalInput.value = `${cmd} ${matches[0]}`;
      } else if (matches.length > 1) {
        // Print all matches as prompt suggestions
        const matchesLine = document.createElement("div");
        matchesLine.className = "terminal-line output-text";
        matchesLine.textContent = matches.join("    ");
        terminalBody.insertBefore(matchesLine, terminalInput.parentElement);
        terminalBody.scrollTop = terminalBody.scrollHeight;
      }
    }
  }
}

function initProjectSlideshows() {
  const containers = document.querySelectorAll(".project-slideshow-container");
  
  containers.forEach(container => {
    const imgs = container.querySelectorAll(".slideshow-img");
    const dots = container.querySelectorAll(".slideshow-dot");
    const prevBtn = container.querySelector(".prev-btn");
    const nextBtn = container.querySelector(".next-btn");
    
    if (imgs.length === 0) return;
    
    let activeIndex = 0;
    let timer = null;
    
    function showIndex(newIndex) {
      imgs[activeIndex].classList.remove("active");
      if (dots[activeIndex]) dots[activeIndex].classList.remove("active");
      
      activeIndex = (newIndex + imgs.length) % imgs.length;
      
      imgs[activeIndex].classList.add("active");
      if (dots[activeIndex]) dots[activeIndex].classList.add("active");
    }
    
    function showNext() {
      showIndex(activeIndex + 1);
    }
    
    function showPrev() {
      showIndex(activeIndex - 1);
    }
    
    function startTimer() {
      stopTimer();
      timer = setInterval(showNext, 3500);
    }
    
    function stopTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }
    
    // Auto-advance by default
    startTimer();
    
    // Pause on hover, resume on leave
    container.addEventListener("mouseenter", stopTimer);
    container.addEventListener("mouseleave", startTimer);
    
    // Prev / Next manual controls
    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        showPrev();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        showNext();
      });
    }
    
    // Dot click triggers
    dots.forEach(dot => {
      dot.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const idx = parseInt(dot.getAttribute("data-index"));
        showIndex(idx);
      });
    });
  });
}

// ─── Helper: build store button HTML ─────────────────────────────────────────
function buildStoreBtns(proj) {
  let html = "";
  if (proj.playStore) {
    html += `<a href="${proj.playStore}" target="_blank" rel="noopener noreferrer" class="store-btn">
      <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M5,3L19,12L5,21V3Z"/></svg>Play Store</a>`;
  }
  if (proj.appStore) {
    html += `<a href="${proj.appStore}" target="_blank" rel="noopener noreferrer" class="store-btn">
      <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22C14.32,22.05 13.89,21.24 12.37,21.24C10.84,21.24 10.37,21.97 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.1,16.67C20.08,16.74 19.67,18.11 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z"/></svg>App Store</a>`;
  }
  if (proj.webglLink) {
    html += `<a href="${proj.webglLink}" target="_blank" rel="noopener noreferrer" class="store-btn">
      <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/></svg>WebGL Demo</a>`;
  }
  return html;
}

// ─── Card thumbnail auto-rotate (no nav buttons) ──────────────────────────────
function initThumbSlideshows() {
  document.querySelectorAll(".project-thumb-wrapper").forEach(wrapper => {
    const imgs = wrapper.querySelectorAll(".thumb-slide-img");
    const dots = wrapper.parentElement.querySelectorAll(".slideshow-dot");
    if (imgs.length < 2) return;

    let idx = 0;
    setInterval(() => {
      imgs[idx].classList.remove("active");
      if (dots[idx]) dots[idx].classList.remove("active");
      idx = (idx + 1) % imgs.length;
      imgs[idx].classList.add("active");
      if (dots[idx]) dots[idx].classList.add("active");
    }, 3000);
  });
}

// ─── Project Modal ────────────────────────────────────────────────────────────
let _modalSlideTimer = null;

function openProjectModal(proj) {
  // Remove existing modal if any
  const existing = document.getElementById("project-modal-overlay");
  if (existing) existing.remove();

  const hasImages = proj.images && proj.images.length > 0;
  const allTags = proj.tags.map(t => `<span class="project-tag-pill">${t}</span>`).join("");
  const storeBtns = buildStoreBtns(proj);

  // Build image gallery HTML
  let galleryHtml = "";
  if (hasImages) {
    galleryHtml = `
      <div class="modal-gallery">
        <div class="modal-slideshow ${proj.isPortrait ? 'is-portrait' : ''}">
          ${proj.images.map((img, i) => `
            <img src="${img}" alt="${proj.title} screenshot ${i + 1}"
                 class="modal-slide-img ${i === 0 ? 'active' : ''}" data-index="${i}">
          `).join("")}
          <button class="modal-slide-btn modal-prev" aria-label="Previous">&#8249;</button>
          <button class="modal-slide-btn modal-next" aria-label="Next">&#8250;</button>
        </div>
        <div class="modal-gallery-dots">
          ${proj.images.map((_, i) => `
            <span class="modal-gallery-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
          `).join("")}
        </div>
        <p class="modal-img-counter"><span class="modal-img-current">1</span> / ${proj.images.length}</p>
      </div>
    `;
  }

  const overlay = document.createElement("div");
  overlay.id = "project-modal-overlay";
  overlay.innerHTML = `
    <div class="modal-box" role="dialog" aria-modal="true">
      <button class="modal-close-btn" aria-label="Close">&times;</button>
      <div class="modal-layout ${hasImages ? 'modal-layout--has-gallery' : ''}">
        ${galleryHtml}
        <div class="modal-content">
          <div class="modal-header">
            <div class="project-engine-badge" style="position:static;backdrop-filter:none;background:var(--card-bg);border:1px solid var(--card-border);border-radius:0.375rem;padding:0.25rem 0.5rem;">
              <img src="${proj.engineIcon}" alt="${proj.engine}" class="project-engine-icon">
              <span class="project-engine-name">${proj.engine}</span>
            </div>
            ${proj.badge ? `<div class="project-badge" style="position:static;">${proj.badge}</div>` : ""}
          </div>
          <h2 class="modal-title">${proj.title}</h2>
          <p class="modal-description">${proj.description}</p>
          <div class="modal-tags">${allTags}</div>
          ${storeBtns ? `<div class="project-links-row modal-links">${storeBtns}</div>` : ""}
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Animate in
  requestAnimationFrame(() => overlay.classList.add("modal-visible"));

  // Prevent body scroll
  document.body.style.overflow = "hidden";

  // Close handlers
  const close = () => closeProjectModal(overlay);
  overlay.querySelector(".modal-close-btn").addEventListener("click", close);
  overlay.addEventListener("click", e => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", function escHandler(e) {
    if (e.key === "Escape") { close(); document.removeEventListener("keydown", escHandler); }
  });

  // Modal slideshow controls
  if (hasImages) {
    let mIdx = 0;
    const mImgs = overlay.querySelectorAll(".modal-slide-img");
    const mDots = overlay.querySelectorAll(".modal-gallery-dot");
    const counter = overlay.querySelector(".modal-img-current");

    function goModal(newIdx) {
      mImgs[mIdx].classList.remove("active");
      if (mDots[mIdx]) mDots[mIdx].classList.remove("active");
      mIdx = (newIdx + mImgs.length) % mImgs.length;
      mImgs[mIdx].classList.add("active");
      if (mDots[mIdx]) mDots[mIdx].classList.add("active");
      if (counter) counter.textContent = mIdx + 1;
    }

    overlay.querySelector(".modal-prev").addEventListener("click", () => goModal(mIdx - 1));
    overlay.querySelector(".modal-next").addEventListener("click", () => goModal(mIdx + 1));
    mDots.forEach(dot => {
      dot.addEventListener("click", () => goModal(parseInt(dot.dataset.index)));
    });

    // Auto advance in modal
    if (_modalSlideTimer) clearInterval(_modalSlideTimer);
    _modalSlideTimer = setInterval(() => goModal(mIdx + 1), 3500);
  }
}

function closeProjectModal(overlay) {
  if (_modalSlideTimer) { clearInterval(_modalSlideTimer); _modalSlideTimer = null; }
  overlay.classList.remove("modal-visible");
  document.body.style.overflow = "";
  setTimeout(() => overlay.remove(), 300);
}
