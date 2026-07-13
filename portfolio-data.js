// Portfolio Content Database - Atul Kumar Pandey
// Edit this file to swap out your personal details!
window.portfolioData = {
  profile: {
    name: "Atul Kumar Pandey",
    title: "Senior Software & Game Developer",
    bioTitle: "About Me",
    bioParagraphs: [
      "I'm a Senior Unity Developer with 4+ years of professional experience specialising in mobile build pipelines, WebGL optimisation, and real-time multiplayer networking. I focus on bridging the gap between clean C# architecture, advanced physics components, and fluid UI experiences.",
      "Throughout my career, I've successfully delivered end-to-end multi-platform games and metaverse projects across Android, iOS, WebGL, and PC. My expertise includes gameplay state machines, multiplayer engines like Photon PUN2 and Socket.IO, Firebase cloud integrations, and custom rendering optimisations."
    ],
    avatarFront: "/images/dp/20251118_210825.png",
    avatarBack: "/images/dp/20251118_210825.png",
    resumeUrl: "/Atul_Pandey_CV.pdf",
    typedStrings: ["Senior Unity Developer", "Multiplayer Specialist", "Mobile & WebGL Developer"]
  },

  socials: {
    linkedin: "https://www.linkedin.com/in/atul-unity-dev/",
    github: "https://github.com/AtulTeamMystic",
    email: "atul.pandey.local@gmail.com",
    phone: "+91 81308 53178"
  },

  projects: [
    {
      title: "Mystic Motors",
      description: "Published cross-platform racing game with spell-based combat, multi-map progression, and full monetisation stack (IAP, Unity Ads). Google/Apple/Guest SSO, Firestore leaderboards, Firebase push notifications, and Crashlytics. Live on both Android & iOS.",
      // Slideshow — 12 real screenshots
      images: [
        "/images/mystic motors/Screenshot_20260707_221735.png",
        "/images/mystic motors/Screenshot_20260707_221739.png",
        "/images/mystic motors/Screenshot_20260707_221749.png",
        "/images/mystic motors/Screenshot_20260707_221753.png",
        "/images/mystic motors/Screenshot_20260707_221756.png",
        "/images/mystic motors/Screenshot_20260707_221759.png",
        "/images/mystic motors/Screenshot_20260707_221816.png",
        "/images/mystic motors/Screenshot_20260707_221822.png",
        "/images/mystic motors/Screenshot_20260707_222145.png",
        "/images/mystic motors/Screenshot_20260707_222158.png",
        "/images/mystic motors/Screenshot_20260707_222207.png",
        "/images/mystic motors/Screenshot_20260707_222209.png"
      ],
      engine: "Unity 3D",
      engineIcon: "https://augustopolonio.vercel.app/unity_logo.png",
      tags: ["Unity 3D", "C#", "Firebase Auth", "Firestore", "Firebase Functions", "Realtime Database", "Google Login SDK", "Apple Login SDK", "Mobile Notifications", "Dedicated Server", "Crashlytics", "Frame Debugger", "Unity Profiler"],
      playStore: "https://play.google.com/store/apps/details?id=com.tecventures.mysticmotors",
      appStore: "https://apps.apple.com/app/id6612030544",
      link: "https://play.google.com/store/apps/details?id=com.tecventures.mysticmotors",
      featured: true
    },
    {
      title: "Adventure Trip: World Wonders",
      description: "Hidden-object puzzle game with 10+ timed levels across world wonder locations. Firebase Firestore for cloud save & progress sync; FCM for re-engagement push notifications. UI/UX designed in Figma and pixel-perfectly implemented in Unity.",
      images: [
        "/images/adventure trip/1.webp",
        "/images/adventure trip/2.webp",
        "/images/adventure trip/3.webp",
        "/images/adventure trip/4.webp",
        "/images/adventure trip/5.webp",
        "/images/adventure trip/6.webp"
      ],
      engine: "Unity 3D",
      engineIcon: "https://augustopolonio.vercel.app/unity_logo.png",
      tags: ["Unity 3D", "C#", "Firebase", "Figma", "FCM", "AppLovin SDK", "Google AdMob", "Firebase Analytics"],
      playStore: "https://play.google.com/store/apps/details?id=com.Point8Games.AdventureTripWondersoftheWorld",
      link: "https://play.google.com/store/apps/details?id=com.Point8Games.AdventureTripWondersoftheWorld"
    },
    {
      title: "Kitty Dash",
      description: "An endless runner mobile game where players control a running cat to collect coins, dodge obstacles, and purchase power-ups like magnets and shields. Features dynamic asset loading using local Unity Addressables for memory optimization and animations, and Google AdMob SDK integration for monetization.",
      images: [
        "/images/kitty dash/Screenshot_20260713_100206.png",
        "/images/kitty dash/Screenshot_20260713_100212.png",
        "/images/kitty dash/Screenshot_20260713_100215.png",
        "/images/kitty dash/Screenshot_20260713_100304.png",
        "/images/kitty dash/Screenshot_20260713_100309.png",
        "/images/kitty dash/Screenshot_20260713_100315.png",
        "/images/kitty dash/Screenshot_20260713_100327.png",
        "/images/kitty dash/Screenshot_20260713_100342.png",
        "/images/kitty dash/Screenshot_20260713_100347.png"
      ],
      engine: "Unity 3D",
      engineIcon: "https://augustopolonio.vercel.app/unity_logo.png",
      tags: ["Unity 3D", "C#", "Unity Addressables", "Google AdMob", "Endless Runner", "Mobile Optimization", "Asset Bundles", "Game Design"],
      isPortrait: true,
      link: null
    },
    /*
    {
      title: "Slot Game (WebGL)",
      description: "Zero-install browser slot game deployed via Unity WebGL. Dynamic payout logic served by REST API; DoTween-driven reel animations at 60fps. Figma-to-Unity UI pipeline with <2px layout deviation.",
      image: null,
      engine: "Unity WebGL",
      engineIcon: "https://augustopolonio.vercel.app/unity_logo.png",
      tags: ["Unity 3D", "WebGL", "DoTween", "REST API", "Figma"],
      webglLink: "https://slotgameunityweb.netlify.app/",
      link: "https://slotgameunityweb.netlify.app/"
    }
    */
  ],

  // Laboratory marquee — leave empty until you have dedicated screenshots for these
  laboratory: [],

  // Unreleased projects page — leave empty until ready
  unreleased: [],

  experience: [
    {
      company: "Tec Ventures",
      role: "Senior Unity Developer",
      timeline: "Apr 2024 – Present",
      bullets: [
        "Sole engineer on Mystic Motors — shipped end-to-end to Google Play & App Store; integrated Google/Apple/Guest Login, Firebase IAP, and Firestore leaderboards, achieving a live dual-platform monetised product within 4 months.",
        "Owned full mobile build pipeline (Android + iOS): CI builds, Firebase Crashlytics monitoring, and staged rollout — zero critical post-launch crashes across initial 1,000+ installs.",
        "Architected spell-based multiplayer combat loop with Photon PUN2; optimised network sync intervals, cutting observable input lag by ~35% versus naive approach.",
        "Mentored 1 junior developer on Unity best practices, code review standards, and Git branching strategy — reduced rework cycles by 50% within 2 sprints."
      ]
    },
    {
      company: "Abhiwan Technology Pvt Ltd",
      role: "Unity Developer → Mid-Level Unity Developer",
      timeline: "Mar 2021 – Mar 2024",
      bullets: [
        "Delivered 5 client-facing Unity projects in 3 years across mobile and PC — all shipped on schedule with zero scope-blocking bugs at handoff, earning repeat client contracts.",
        "Designed and built Classroom Metaverse: multi-platform (PC/Android/iOS) virtual classroom with Agora Voice SDK + Photon supporting 30+ concurrent users and real-time screen sharing.",
        "Cut API round-trips by ~40% in the 3D Instagram clone by replacing polling with Socket.IO event-driven architecture, directly reducing session load time from ~4s to ~2.5s.",
        "Took ownership of technical scoping for new feature requests — translated client briefs into sprint tasks, reducing estimation errors and preventing mid-sprint scope creep."
      ]
    }
  ],

  skills: [
    {
      category: "Engine & Language",
      icon: "🎮",
      color: "#9d7cd8",
      items: ["Unity 3D", "Unity 2D", "Unity WebGL", "C#", "C", "Unity Addressables"]
    },
    {
      category: "Multiplayer & Networking",
      icon: "🌐",
      color: "#38bdf8",
      items: ["Photon PUN2", "Dedicated Server", "Socket.IO", "WebSocket", "Agora Voice SDK"]
    },
    {
      category: "Backend & Cloud",
      icon: "☁️",
      color: "#fb923c",
      items: ["Firebase Auth", "Firestore", "Firebase Functions", "Realtime Database", "FCM", "Firebase Analytics", "REST API", "Google Login SDK", "Apple Login SDK"]
    },
    {
      category: "UI/UX & Design",
      icon: "🎨",
      color: "#f472b6",
      items: ["Figma", "DoTween", "Unity UI Toolkit", "Ready Player Me"]
    },
    {
      category: "DevOps & Tools",
      icon: "🛠️",
      color: "#34d399",
      items: ["Git", "Unity Cloud Build", "Firebase Crashlytics", "Android Studio", "Xcode", "Unity Profiler", "Frame Debugger"]
    },
    {
      category: "Monetization",
      icon: "💰",
      color: "#fbbf24",
      items: ["In-App Purchases (IAP)", "Unity Ads", "AppLovin SDK", "Google AdMob"]
    },
    {
      category: "Platforms",
      icon: "📱",
      color: "#a78bfa",
      items: ["Android", "iOS", "PC", "WebGL"]
    },
    {
      category: "AI Technologies",
      icon: "🤖",
      color: "#2dd4bf",
      items: ["ChatGPT Codex", "Antigravity", "Claude Code", "Efficient Prompting"]
    }
  ]
};


// Export for ES modules or keep global for browser loading
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.portfolioData;
}
