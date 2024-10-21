export const ProjectDetailsData = [
  {
    title: "My Blog",
    image: "/image1.png",
    client: "Myself",
    role: "Fullstack and Design",
    note: "It is still under development, I still need to add a good design for it and implement authorization!",
    githubLink: "https://github.com/ananda17gb/anandas-blog",
    deploymentLink: "https://anandaawblog.vercel.app/",
    sections: [
      {
        subtitle: "Project Overview",
        description:
          "This project is a web-based blog page for me to express anything that I want to tell to the world. On it I can create, edit, delete, and read the blog that I've made on the website while other people can read the blogs that I've written on the website. It is built using React and Tailwind CSS as the frontend and Firebase as the backend resulting to what it is now.",
      },
      {
        subtitle: "Problem Statement",
        description:
          "In today's digital world, many people wish to share their thoughts and ideas online, but creating a personal blog often requires technical skills or relying on third-party platforms that may not offer full control over the content. Existing solutions might be too complex for users who want a simple interface or too restrictive in terms of customization and ownership. This project addresses the need for a personal, user-friendly platform where I can easily manage my content without relying on external blogging services and also I can make it as my personal project.",
      },
      {
        subtitle: "How It Is Done",
        description:
          "The blog is built using React for a dynamic, component-based frontend, which allows smooth page transitions and reactivity without full-page reloads. Tailwind CSS is used to style the components, providing a clean and customizable design that adapts to different screen sizes which I choose for faster development. And for the backend, Firebase is utilized for user authentication, database, and storage. Firebase’s Firestore Cloud handles the database, Firebase Authentication ensures secure login functionality for me as the blog owner and Firebase Storage as the storage I use for this project. The combination of these technologies provides a seamless experience for both the blog creator and the readers and giving me a somewhat easy development experience. And for the design I use Figma with existing online blog pages as a reference",
      },
      {
        subtitle: "What Would It Looks Like In The Future",
        description:
          "In the future I see this project to be a platform for me (and probably my dad too because he also interested in this idea) to share our thoughts to this website and other people can read it, give comments, likes it, share it and those sort of things.",
      },
    ],
  },
  {
    title: "My Music Display",
    image: "/image3.png",
    client: "Myself",
    role: "Fullstack and Design",
    note: "It is still under development, I still need to add a good design for it!",
    githubLink: "https://github.com/ananda17gb/MusicDisplay",
    deploymentLink: "https://anandamusicdisplay.vercel.app/",
    sections: [
      {
        subtitle: "Project Overview",
        description:
          "This project is a web-based platform where I can upload and display my personal music for the world to listen to. It is built using React and Tailwind CSS for a modern and responsive frontend, and Firebase for the backend. What makes this project unique is the integration between Firebase Storage and Firebase Firestore Cloud. When I upload a song to Firebase Storage, the system automatically extracts metadata (such as song title, duration, the song's mp3, etc.) and saves it to Firebase Firestore Cloud, streamlining the process of organizing and displaying my music.",
      },
      {
        subtitle: "Problem Statement",
        description:
          "For a hobbyist independent musician and aspiring software developer like myself, creating a music display website felt like a natural step. It allows me to share my music while also sharpen my development skills through new projects. Before building this site, I would typically upload my music to platforms like Instagram and SoundCloud, but having my own platform gives me complete control and the freedom to customize it however I like. While some may see this as an unnecessary effort, for me, it's a creative outlet that merges my passions for music and coding. This project simplifies music sharing by automating metadata organization and streamlining how I manage and display my work, without relying on multiple third-party platforms.",
      },
      {
        subtitle: "How It Is Done",
        description:
          "The frontend is developed using React for building reusable components and Tailwind CSS to ensure the site has a sleek, responsive design across all devices. Firebase serves as the backend, handling both storage and database functionality. Music files are uploaded to Firebase Storage, and upon upload, a server-side function automatically extracts the metadata and stores it in Firebase Firestore Cloud. This integration allows the music data to be displayed dynamically on the platform, making the process seamless.",
      },
      {
        subtitle: "What Would It Looks Like In The Future",
        description:
          "In the future I see this project to be similar as any other music streaming platform, such as Soundcloud, where people can like my music and see the likes count, add comments, share it, etc.",
      },
    ],
  },
  {
    title: "Food Order App",
    image: "/image4.png",
    client: "Course Project",
    role: "Fullstack and Design",
    note: "",
    deploymentLink: "",
    githubLink: "https://github.com/ananda17gb/arjunachicken-foodorderapp",
    sections: [
      {
        subtitle: "Project Overview",
        description:
          "This project is a mobile-based food ordering app developed for Arjuna Chicken, a local restaurant near Telkom. While it simulates the process of placing an order, it is not (yet) intended for actual use at the restaurant. Instead, it was created as part of a final project assignment, where we were tasked with building an application that demonstrates the use of data structures, specifically a linked list. Although this version doesn't implement the linked list functionality, it has more features compared to the other versions of the project. The app mimics a food order management system used by restaurant cashiers, where the cashier selects orders and the details are saved in a database the restaurant can also add menu to the app database from the database. We built the app using Flutter for the frontend and integrated the Google Sheets API to serve as a simple backend database for storing orders and adding more menu.",
      },
      {
        subtitle: "Problem Statement",
        description:
          "Many small restaurants, such as Arjuna Chicken, lack technical knowledge to implement digital food ordering systems to manage their orders efficiently. Although such systems are available commercially (and actually they use QRIS) they can be costly and somewhat complex for small businesses to adopt. This project aims to address this gap by providing a lightweight and simple food order management app that simulates the features of a professional system, making it easier for restaurants to visualize and manage their orders digitally without investing in expensive infrastructure.",
      },
      {
        subtitle: "How It Is Done",
        description:
          "The mobile app was developed using Flutter, which allowed us to build a cross-platform application with a single codebase for both Android and iOS but we opted for Android instead of iOS because we know that the restaurant has more Android phones than iOS. The interface is designed to be user-friendly, allowing cashiers to select food items from a menu, adjust quantities, add menu and submit orders. Google Sheets is used as the backend to store and manage order and menu data. This is accomplished through the Google Sheets API, which integrates with the app to allow real-time updates of orders. The app also features basic order tracking and menu addition, where the cashier can review and modify orders and add any menu to the app. Although this version of the project does not implement linked list functionality, it demonstrates a functional food order management system with all the essential features.",
      },
    ],
  },
  {
    title: "Sunset Snack",
    image: "/image2.png",
    client: "CCI The Hack",
    role: "Frontend",
    note: "",
    githubLink: "https://github.com/athilaramdani/sunsetsnack",
    deploymentLink: "https://sunsetsnack.vercel.app/",
    sections: [
      {
        subtitle: "Project Overview",
        description:
          "SunsetSnack is a marketplace website where users can purchase surplus food and beverages from local restaurants, cafes, and similar establishments. The platform aims to help reduce food waste by connecting users with businesses offering discounted, unsold items. As you can imagine what a marketplace is and basically this website is just like Tokopedia of food. The website was developed as part of a group project for 'CCI The Hack' a student event hosted by the CCI student activity unit. The project followed a structured development process, including planning with Software Requirements Specifications (SRS) and continued through to deployment. SunsetSnack was built using NextJS for the frontend, PostgreSQL for the database, Firebase Storage for managing media, Firebase Auth for user authentication, and Tailwind CSS for styling. Our team consisted of five members: one designer (Muhammad Aqeel Jabbar), two frontend developers (me and Arief Setiawan), one fullstack developer (Athila Ramdani Saputra), and one team member responsible for documentation and business management (Gavin Benjiro Ramadhan). Shoutout to all of us to finish this project even though in the end we didn't won but atleast we get a taste on how to work as a team on developing an application.",
      },
      {
        subtitle: "Problem Statement",
        description:
          "Food waste is a significant issue for local restaurants, cafes, and similar businesses, leading to both financial losses and environmental harm. These businesses often have unsold surplus food at the end of the day, which is typically discarded. SunsetSnack aims to address this problem by offering a platform where businesses can sell surplus food to users at discounted prices, reducing waste while offering affordable meals to the community.",
      },
      {
        subtitle: "How It Is Done",
        description:
          "The development of SunsetSnack was a collaborative effort. We used NextJS to create a dynamic and responsive frontend that provides a seamless user experience. The backend relies on PostgreSQL, even though we first started using MySQL but then we change it to Postgre, to manage data related to user accounts, orders, inventory from participating businesses and other stuff. Firebase Storage is integrated to handle media assets, such as product images, while Firebase Auth ensures secure user authentication and login. Tailwind CSS was used for styling, allowing for a clean and modern UI. Throughout the project, we adhered to a detailed planning process involving documentation such as Software Requirements Specifications (SRS) and frequent team coordination to ensure smooth progress. Our team consisted of five members who contributed across different areas: design, frontend, fullstack development, and business documentation, making this a well-rounded group project.",
      },
    ],
  },
  {
    title: "Solitaire Game: Western Double-Six Domino",
    image: "/noimage.jpg",
    client: "Course Project",
    role: "Coding",
    note: "",
    deploymentLink: "",
    githubLink: "https://github.com/ananda17gb/Domino",
    sections: [
      {
        subtitle: "Project Overview",
        description:
          "The Solitaire Game: Western Double-Six Domino is a group project developed as part of the Algorithm Programming course at Telkom University, in collaboration with I Nyoman Manutama Surya Jagadhita. This game implements the traditional double-six domino gameplay using modular programming design principles. The project consists of well-defined subprograms to manage various game functionalities, including tile management, score tracking, and winner determination. Each tile in the game is represented by an object containing two sections, with a total of 28 tiles. The game is designed to enhance algorithmic thinking by employing various search and sorting algorithms, including sequential and binary search, as well as Selection Sort and Insertion Sort for data organization. We used Go as the programming language of choice to make this game.",
      },
      {
        subtitle: "Problem Statement",
        description:
          "The Western double-six domino game poses several challenges, such as ensuring fair gameplay through proper tile management, efficient tracking of player scores, and accurate determination of game winners based on specific rules. Additionally, the program must adhere to modular design principles, utilizing subprograms and proper data structures while implementing key algorithms to enhance game performance and functionality. This project aims to create an engaging and interactive game experience while reinforcing concepts of algorithm design and modular programming.",
      },
      {
        subtitle: "How It Is Done",
        description:
          "The project is structured to follow modular programming practices, breaking down functionalities into subprograms with clear parameters and specifications. The domino set is scrambled using the random() function from the math/rand package, ensuring that the gameplay is unpredictable. The program employs arrays and custom-defined data types to manage tile states and player scores. Players can interact with the game by selecting and replacing tiles, restarting the game, and tracking scores. The program implements both sequential and binary search algorithms for locating tiles and includes Selection Sort and Insertion Sort to organize tile values for efficient gameplay. Additionally, the application tracks game statistics, allowing players to view their highest scores and overall performance, making it a comprehensive and engaging domino experience.",
      },
    ],
  },
  {
    title: "Visit Temajuk",
    image: "/temajuk.png",
    client: "Innovilage Project",
    role: "UI/UX and a little bit of coding and problem solving",
    note: "",
    deploymentLink: "https://visittemajuk.com/",
    githubLink: "",
    sections: [
      {
        subtitle: "Project Overview",
        description:
          "Visit Temajuk is a web application developed as part of the Innovilage Project, aimed at promoting the Temajuk area as a travel destination. The project was created using Flutter for the frontend and Firebase for data management. Firebase serves as the backend to store essential data, including images, text descriptions, and user authentication information. The app features an engaging and user-friendly interface that highlights the beauty and attractions of Temajuk, making it easier for users to explore and plan their visits. And also shoutout to Mrs. Gia and Mr. Indra as our guide throughout this project",
      },
      {
        subtitle: "Problem Statement",
        description:
          "The main challenge was to create a comprehensive and visually appealing website that effectively showcases the Temajuk area to potential visitors. Initially, our team was not selected to participate in the Innovilage Project, but due to unforeseen circumstances, we were given the opportunity to develop the website. We faced the task of designing a site that is not only informative but also user-friendly, while managing data storage and user authentication through Firebase. Additionally, the need for multilingual support led us to manually translate content instead of using automated translation services, ensuring a more accurate and contextually appropriate representation of information and is free, unless we count the human labour.",
      },
      {
        subtitle: "How It Is Done",
        description:
          "The development of Visit Temajuk was a collaborative effort between I Nyoman Manutama Surya Jagadhita, Bryan Dhaniel, Romario Viegaz Fransisco Marcal, and myself. We chose Flutter as the tech stack due to our varying levels of experience with React, allowing us to leverage Romario's confidence in Flutter to build the application. The app integrates Firebase for data storage and user authentication, ensuring that content is easily managed and accessible. Instead of relying on the Google Translate API, we opted for a manual translation process to enhance accuracy and contextual relevance. The project involved careful planning and design to create a seamless user experience, ultimately resulting in an effective platform to promote Temajuk as a travel destination.",
      },
    ],
  },
];
