const data = [
  {
    id: 1,
    types: ["Java"],
    languages: ["java", "mysql"],
    title: "Scheduling System",
    shortDesc: "Sophisticated JavaFX application for appointment management with a robust MySQL backend.",
    fullDesc: [
      "Developed a comprehensive JavaFX application for WGU Software II, enabling organizations to efficiently manage customers and appointments via an intuitive GUI.",
      "Implemented JDBC for seamless MySQL database integration, showcasing real-time data in interactive tables and forms."
    ],
    splashImage: "/assets/scheduling.png",
    largeImage: "/assets/scheduling.png",
    githubURL: "https://github.com/RubyMineshaft/scheduling_system",
    demoURL: null,
    bullets: [
      "Integrated resource bundles for automatic language translation based on system defaults.",
      "Enhanced code readability and maintainability using Lambda expressions.",
      "Implemented time zone conversions from UTC to system time, with validation against EST business hours before updating records."
    ]
  },
  {
    id: 2,
    types: ["JavaScript", "React"],
    languages: ["javascript", "react", "scss", "html"],
    title: "Personal Portfolio",
    shortDesc: "Dynamic portfolio showcasing web development expertise, built with React and SCSS.",
    fullDesc: [
      "This portfolio site, showcasing my projects and skills, is built with React and features a responsive design utilizing SCSS mixins and media queries.",
      "Integrated EmailJS for seamless contact form functionality and material-ui for modern icons, enhancing user experience."
    ],
    splashImage: "/assets/portfolio.png",
    largeImage: "/assets/portfolio.png",
    githubURL: "https://github.com/RubyMineshaft/portfolio",
    demoURL: "http://mattetress.com",
    bullets: [
      "Leveraged React hooks for efficient state management.",
      "Enhanced UI with CSS animations for smooth transitions and slider functionality.",
      "Designed with a mobile-first approach ensuring responsiveness across all devices.",
      "Implemented iTyped.js for engaging typing effects on the homepage."
    ]
  },
  {
    id: 3,
    types: ["Ruby", "Rails", "JavaScript"],
    languages: ["ruby", "rails", "javascript", "html", "bootstrap", "postgresql"],
    title: "ArtHub",
    shortDesc: "Innovative event sharing platform for artists, built with Rails and jQuery.",
    fullDesc: [
      "ArtHub is a unique platform for artists to share events, create portfolios, and connect with the community. Users can sign up via email or Facebook, and save events of interest.",
      "The platform incorporates a Rails API, ActiveModel Serializers, and integrates AWS S3 for reliable attachment management."
    ],
    splashImage: "/assets/arthub-splash.png",
    largeImage: "/assets/arthub-full.png",
    githubURL: "https://github.com/RubyMineshaft/arthub-rails",
    demoURL: "https://arthub-rails.herokuapp.com/",
    bullets: [
      "Implemented OAuth authentication with Omniauth-Facebook gem.",
      "Enhanced interactivity with AJAX using jQuery and JavaScript.",
      "Managed complex data relationships with ActiveModel Serializers.",
      "Utilized AWS S3 for secure and scalable attachment storage."
    ]
  },
  {
    id: 4,
    types: ["Ruby"],
    languages: ["ruby", "bootstrap", "html", "postgresql"],
    title: "DreamCatcher",
    shortDesc: "Elegant dream journal application leveraging Sinatra and PostgreSQL.",
    fullDesc: [
      "DreamCatcher is an engaging online dream journal allowing users to log, share, and comment on dreams. Built with the Sinatra framework and interfaced with PostgreSQL via Sinatra ActiveRecord.",
      "Designed for a seamless user experience, it features private and public dream logging and a robust tagging system for exploration."
    ],
    splashImage: "/assets/dreamcatcher-thumb.png",
    largeImage: "/assets/dreamcatcher-full.png",
    githubURL: "https://github.com/RubyMineshaft/dreamcatcher-sinatra-app",
    demoURL: "http://dreamcatcher-sinatra.herokuapp.com/",
    bullets: [
      "Implemented secure session-based user authentication using bcrypt gem.",
      "Designed an intuitive and visually appealing UI with Bootstrap 4.",
      "Ensured data integrity and persistence with ActiveRecord and PostgreSQL."
    ]
  },
  {
    id: 5,
    types: ["React", "Ruby", "Rails", "JavaScript"],
    languages: ["javascript", "react", "redux", "rails", "html", "css", "postgresql"],
    title: "TVPal",
    shortDesc: "Comprehensive TV tracking application utilizing React and Rails, integrated with theMovieDB API.",
    fullDesc: [
      "TVPal is a versatile web application for tracking and discovering TV shows, powered by React and Rails. It interfaces with theMovieDB API to display popular, top-rated, and airing shows, and supports user search functionality.",
      "The backend, built with Ruby on Rails, handles user account creation and authentication, providing a secure and seamless user experience."
    ],
    splashImage: "/assets/tvpal-thumb.png",
    largeImage: "/assets/tvpal-full.png",
    githubURL: "https://github.com/RubyMineshaft/tv-pal",
    demoURL: "https://tv-pal.herokuapp.com/",
    bullets: [ 
       "Employed Redux Thunk middleware for efficient asynchronous API calls and action dispatching.", 
       "Built a RESTful API using Ruby on Rails following the MVC pattern.", 
       "Implemented React Router for dynamic component rendering.", 
       "Ensured secure user authentication with JWT."
    ]
  },
  {
    id: 6,
    types: ["Java"],
    languages: ["java"],
    title: "Inventory System",
    shortDesc: "Robust inventory management system developed for WGU Software I.",
    fullDesc: [
      "Developed a comprehensive inventory management system for WGU Software I, enabling users to manage products and parts, and track inventory levels efficiently.",
      "The application follows provided mock-ups for the GUI and ensures smooth user interactions, despite lacking data persistence."
    ],
    splashImage: "/assets/inventory-thumb.png",
    largeImage: "/assets/inventory.png",
    githubURL: "https://github.com/RubyMineshaft/InventorySystem",
    demoURL: null,
    bullets: [
      "Built with JDK: Java 11.0.10 and JavaFX 11.0.2.",
      "Enabled search functionality for parts/products by ID or name.",
      "Provided an intuitive and user-friendly interface for inventory management."
    ]
  },
  {
    id: 7,
    types: ["Ruby"],
    languages: ["ruby"],
    title: "SeaLife",
    shortDesc: "Informative CLI gem for exploring marine life, leveraging Nokogiri for web scraping.",
    fullDesc: [
      "SeaLife is an educational command line interface gem that scrapes data from Oceana's Marine Life Encyclopedia using Nokogiri, providing detailed information about various marine animals.",
      "This project marked my first exploration into Ruby OOP principles, resulting in a functional and engaging CLI tool."
    ],
    splashImage: "/assets/sealife-thumb.png",
    largeImage: "/assets/sealife-full.png",
    githubURL: "https://github.com/RubyMineshaft/sea_life",
    demoURL: "https://rubygems.org/gems/sea_life",
    bullets: [
      "Developed a procedural CLI adhering to Ruby OOP principles and best practices.",
      "Leveraged Nokogiri for efficient web scraping from Oceana's Marine Encyclopedia."
    ]
  },
  {
    id: 8,
    types: ["Python", "Django", "React", "TypeScript"],
    languages: ["python", "django", "typescript", "react", "html", "css"],
    title: "Prize Voucher Redemption System",
    shortDesc: "A robust system for generating and redeeming prize vouchers for OGS-sponsored in-person tournaments, enhancing player retention and new registrations.",
    fullDesc: [
      "Developed a comprehensive prize ticket redemption system for OGS-sponsored in-person tournaments, significantly boosting player retention and attracting new registrations.",
      "The backend is built with Python and Django Rest Framework, while the frontend is crafted using TypeScript and React."
    ],
    splashImage: "/assets/prize_thumb.png",
    largeImage: "/assets/prize1.png",
    githubURL: "https://github.com/online-go/online-go.com/tree/2bc202057c41f11578c9ca5d6c8204afd335e524/src/views/Prizes",
    demoURL: "https://online-go.com/redeem",
    bullets: [
      "Designed and implemented API endpoints using Django Rest Framework, facilitating seamless communication between the frontend and backend.",
      "Created serializers and models to manage prize ticket data efficiently.",
      "Developed secure and efficient code generation algorithms to ensure unique prize codes.",
      "Built a responsive frontend with TypeScript and React, enabling tournament directors to generate printer-friendly vouchers.",
      "Implemented CRUD functionalities for managing prize tickets and batches, ensuring ease of use for administrators.",
    ]
  },

];

export function getAllProjects() {
  return data;
}

export function getProjectType(type) {
  return data.filter(project => project.types.includes(type));
}

export function getTypes() {
  let arr = ["All"];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].types.length; j++) {
      const type = data[i].types[j];
      if (!arr.includes(type)) {
        arr.push(type);
      }
    }
  }
  return arr;
}