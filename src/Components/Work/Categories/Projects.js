export const internshipProjects = [
    {
        title: "Bond Analysis Automation",
        date: "June 2021 - August 2021",
        company: "TD Securities",
        role: "Summer Analyst Intern",
        description: `As part of the Quantitative and Modeling Analytics team, I primarily worked one-on-one with a supervisor on Project FIRST. This project
        involved the development of a Python script to automate bond analysis and produce daily relative value analysis reports 
        for the strategy team. The script would run automatically at the start
        of each day to produce a PDF report showing yield curves, the richest and cheapest bonds, and various other analytical data about
        bonds. These analytics were based off of the Nelson Siegel model and curve calculated for that day. Prior to this automation, bond analysis reports
        were produced manually using an Excel spreadsheet with extensive VBA code.
        
        During development of the script, my tasks involved investigating TD Securities's internal UQL library, which was built in
        C++ and adapted into a Python library. Understanding the library was crucial to integrating its functions into the overall script, as many
        were pertinent to conducting bond analytics, such as functions that assisted in building the Nelson-Siegel curve. Similarly, I worked to translate
        the VBA code in the bond analysis Excel spreadsheet to Python. In addition to combining existing resources and building upon
        existing code, I helped contribute a endpoint to a REST API where bond information is pulled.
        Together, I integrated these resources into one cohesive script, which was formatted using LaTeX. Although I primarily worked with a singular supervisor,
        throughout these efforts, I had the opportunity to work with people around the globe, including Paris, Singapore, and London.
        
        A large emphasis was put on the flexibility of the final program. In addition to developing the script, I created a configuration file that could be
        used to adjust the script's function for different types of bonds. For example, while the script was developed to handle American treasury government bonds, it was adapted to
        also handle Australian government treasury bonds. Other configurations included controlling what was produced in the final report and aesthetic changes for easier
        readability.

        Ultimately, the final script produced integrated a variety of resources, including REST APIs, internal servers, and large amounts of data in order
        to create a flexible, adaptable, and easy-to-use piece of software.
        `,
        descriptionExtend: "",
        technology: "VS Code, UQL library, Internal APIs and Servers, Excel",
        languages: "Python, VBA, LaTeX",
        id: 0
    },
    {
        title: "Social Media Application",
        date: "January 2021 - April 2021",
        company: "Digital Capital Solutions",
        role: "Software Engineer Intern",
        description: `I worked with a team of 4 people to create
        a social media application where users can share posts with each other, including images and text. 
        Users have the ability to follow each other; create, edit, and delete posts; edit their profiles; search for other
        users (with various search filters), and like and comment on other posts.

        We had weekly standup meetings and were assigned 1-2 tasks to complete each week. My specific tasks involved 
        building out the infrastructures for user profiles and posts (including comments), generally working on UI, and enabling user 
        interactions via liking posts, commenting, and following others.`,
        descriptionExtend: "",
        technology: "React Native, Android Studio, Firebase Realtime Database",
        languages: "JavaScript",
        id: 1
    },
    {
        title: "PreHealthPivot Website",
        date: "July 2020 - January 2021",
        company: "PreHealthPivot",
        role: "Website Editing and Development Intern",
        description: `In the main development project, I worked with a team of 3 people to build a custom website for PreHealthPivot, based on their current
        site on SquareSpace. The custom site was recommended due to the limitations that building on SquareSpace was imposing, such as difficulty
        integrating a backend, limits in API usage, etc. The team and I used React as our primary building tool, and we mainly built out the front end and matched
        the appearance to the current site using CSS and Bootstrap styling. I continued this project in January 2021 and began to build out site functionality,
        including the incorporation of Firebase Realtime Database, implementing user authentication and authorization, enabling responsive views, and 
        building new custom sections for the website, amongst other similar tasks.
        
        Before the main development project, I also worked with another intern to implement a new feature on the current site: we imbedded a Google form into
        the site and designed a Python script that called Google Sheets API and SendGrid API to automatically email recipients once they completed the form.`,
        descriptionExtend: "",
        technology: "React, React Bootstrap, Firebase Realtime Database",
        languages: "JavaScript, Python",
        id: 2
    },
    {
        title: "Mobile Town Application Template",
        date: "July 2020 - August 2020",
        company: "Digital Capital Solutions",
        role: "Software Engineer Intern",
        description: `I worked with a team of 6 people, 4 of which held a software engineer role, to create
        a mobile town app template. This means that the mobile application would serve as a central hub for any city/township to provide
        information and resources to its citizens. Through the app, citizens can create user accounts, find official documents,
        receive live news and alerts, amongst other capabilities.

        We had weekly standup meetings and were assigned 2-3 tasks to complete each week. My specific tasks included
        coding a side menu to frame the entire app, integrating OpenWeather API for live weather data, designing and 
        coding a template for a tab holding forms and documents, and designing and coding a template for the home page
        of the app.`,
        descriptionExtend: "",
        technology: "React Native, Android Studio, Figma, OpenWeather API",
        languages: "JavaScript",
        id: 3
    },
    {
        title: "IT Acceleration Projects",
        date: "May 2019 - August 2019",
        company: "ResMed",
        role: "IT Acceleration Intern",
        description: `As an IT Acceleration intern, I completed a series of projects devoted towards improving the efficiency and effectiveness of the IT department. These
        tasks were both administrative and technical in nature. Here, I discuss three projects specifically: Early Adopters Program, listserv cleaning, and drafting of technical documentation.
        `,
        descriptionExtend: [
            `(1) Regarding the Early Adopters Program, I worked with another intern to initiate a program where project managers could post listings about what they were working on before they went live, and
            interested employees throughout ResMed's global workforce could then reach out and offer to test their project and offer feedback; in this task, we had to reach out to project managers, understand their
            projects and goals, and design and implement a platform for the program via SharePoint Online.`,

            `(2) The listserv cleaning task was needed because ResMed's listserv database was filled with outdated/obsolete
            listservs. My task over the summer was to reach out to all listserv owners in the IT department globally, record information regarding what listservs they intenteded to keep and any updates they wanted, and draft 
            PowerShell scripts to filter, update, and delete listservs based on the information collected. I worked with a Senior Endpoint Systems Engineer to accompilsh this task.`,
            
            `(3) At the time, the IT department
            was generating a new site on SharePoint Online due to many obsolete/inefficient features of the previous site; one of my roles in hepling to implement this new site was to draft technical documentation for the 
            technologies that the IT department and company as a whole was using. This task involved meeting with company experts in these technologies, understanding what should be conveyed to the people using these technologies,
            creating/managing attached documents/guides for these technologies, and designing and creating the SharePoint pages to reflect this information, keeping in mind UI/UX principles for easy usage.`
        ],
        technology: "Excel, SharePoint Online, SnapComms",
        languages: "PowerShell, VBA",
        id: 4
    }
]

export const classProjects = [
    {
        title: "Creative Corner (Expanded)",
        date: "February 2021 - April 2021",
        class: "Database Systems (CS 4750)",
        role: "Software Developer",
        description: `Loosely based on a past hackathon project (see Other tab), this project involved building a website where users could post and share
        stories with one another. Users could post and edit stories as well as browse other stories and give comments on them. 
        I worked in a team of 5 individuals, including myself, over the course of a semester.
        `,
        specific: `
        My specific tasks within the project included contributing to the posting and editing mechanisms for user stories, building the search
        functionality with filters, and improving the overall UI and design of the application. Additionally, another team member and I led the effort
        towards creating thorough documentation for our website.
        `,
        technology: "Vim, SSH",
        languages: "PHP, SQL",
        deploymentLink:"http://cs.virginia.edu/~alc3pf/ajax/project/index.php",
        id: 0
    },
    {
        title: "Textbook Exchange",
        date: "February 2020 - April 2020",
        class: "Advanced Software Development Techniques (CS 3240)",
        role: "Requirements Manager and General Developer",
        description: `I worked in a team of 5 individuals, including myself, to build a web application for students to post, browse, and exchange textbooks amongst
        one another. This was a semester-long project and incorporated agile development, where we would have weekly standups with an assigned TA as our supervisor. We
        used Django as our full-stack framework with PostgreSQL as our backend and practiced continuous integration and test-driven development by using Travis CI; our
        application was hosted on the cloud PaaS Heroku. Our frontend work consisted mainly of HTML and Bootstrap 4, with some CSS styling. Within the project,
        we created data models for our backend, integrated APIs such as Google Sign-in and SendGrid Email API, and received and incorporated feedback regarding user experience.
        `,
        specific: `
        My specific tasks as the requirements manager included leading the process of requirements elicitation and 
        collecting stakeholder data with the help of my team via a survey with Google Forms and individual interviews
        and drafting and managing a spreadsheet with user stories and story points. My individual assignment
        was to write the official requirements documentation for our group project, which included results and data from the requirements elicitation process,
        organization of functional requirements ordered by priotization, a list of nonfunctional requirements and constraints, and all planned/potential features
        for the project. 
        
        My specific tasks as a developer included setting up our backend PostgreSQL server in the context of Django, developing the form and functionality for posting textbook advertisements,
        creating the profile page and user model, designing and implementing the textbook advertisement page, enabling image upload for textbook advertisements, and improving
        basic user experience qualities throughout the site. As a note, Heroku's database is ephemeral in nature, so uploaded images would disappear after a day or two; to fix this,
        I incorporated AWS S3 to store images. However, we did not include this feature into our final product due to trial limitations.
        `,
        technology: "Django, Travis CI, Heroku, PostgreSQL, Bootstrap 4",
        languages: "Python, HTML/CSS",
        deploymentLink:"https://textbooks-exchange.herokuapp.com/",
        id: 1
    },
    {
        title: "College Mario",
        date: "October 2018 - November 2018",
        class: "Introduction to Programming (CS 1110)",
        role: "Co-programmer",
        description: `I worked with a partner to create a Mario-like game using Pygame. This was the final project for the first introductory CS course I had taken at 
        university. We used Pygame in the context of a specific file created by our instructors, which modified and created some methods that we were expected to mainly use.
        Our project was a platformer game, much like regular Mario, but with a "college" spin, in that the character was a student, and items in the game would relate to that context (e.g.,
        collecting money to save up for paying off student loans).`,
        specific: 
        `
        Functional tasks included setting up a game display environment to show graphics to the player,
        incorporating a scrolling screen that moves with the player, designing enemies to move back and forth, and incorporating jumping physics (i.e., the characters should accelerate downwards
        as they fall.).
        `,
        technology: "Pygame",
        languages: "Python",
        deploymentLink:"",
        id: 2
    }
]

export const hackCvilleProjects = [
    {
        title: "NormWear",
        date: "June 2020",
        type: "Group Project | 4 people | 1 week",
        description: `Normwear is a referral application where users accumulate points and win prizes based on how many people they can
        refer to the app. This project was meant to mimic real referral apps, so users have logins, can keep track of their points, and
        find information about the company (here, we made a fictional company called NormWear). We also implemented an admin dashboard where
        administrators can see user information, including login information and how many points each person has. Administrators can also use the 
        dashboard to mark who has received a reward. We used React and React Bootstrap for frontend development and used Firebase as our backend. Note
        that much of our coding was done on VS Code Live Share.`,
        technology: "React, React Bootstrap, Firebase",
        languages: "JavaScript, CSS",
        deploymentLink:"https://normwear.netlify.app/",
        presentationLink:"https://docs.google.com/presentation/d/1aX4uHfkF1-wStyJaIp9UMNbojFvghTApDKzGsbAn-t4/edit?usp=sharing",
        codeLink:"https://github.com/danielbaker129/client-scenario",
        id: 0
    },
    {
        title: "War-like Card Game",
        date: "May 2020",
        type: "Solo Project | 1 week",
        description: `This was one of two solo projects assigned to us during the second week of intensive training, while we were working on
        the project below, Restaurants on the Corner. The other project was to implement a user dashboard, and we were told to choose one to complete
        and ultimately present. I describe this card game as "war-like" because it implements the very basic functionalities of war, where the player and their
        robot opponent draw random cards, and whichever card as the highest suite wins; this game also keeps track of ties. However, the feature in war where
        players obtain the cards they win has not been implemented.`,
        technology: "React, React Bootstrap, Firebase",
        languages: "JavaScript, CSS",
        deploymentLink:"",
        presentationLink:"https://docs.google.com/presentation/d/1byX2LchKL3TqqGo11oaY4r6JvRE_HLngwNNEjvssmyE/edit?usp=sharing",
        codeLink:"https://github.com/alc823/war-card-game",
        id: 1
    },
    {
        title: "Restaurants on the Corner",
        date: "May 2020",
        type: "Group Project | 3 people | 1 week",
        description: `This project shows restaurants on the Corner in Charlottesville using Google Places API. Due to limitations 
        in the API usage, only 20 locations may show at a time. We also incorporated the Leaflet API to display a map of all the locations
        returned form the Google Places API request. Additional features include a search bar and progress on a filter function.
        Note that much of our coding was done on VS Code Live Share.`,
        technology: "React, React Bootstrap",
        languages: "JavaScript, CSS",
        deploymentLink:"",
        presentationLink:"",
        codeLink:"https://github.com/alc823/restaurant-application",
        id: 2
    },
    {
        title: "Intermittent Fasting Timer",
        date: "May 2020",
        type: "Group Project | 3 people | 1 week",
        description: `The Intermittent Fasting Timer is an application where users set a timer for how long they would like to fast, as a part of their
        intermittent fasting lifestyle. Users receive randomized encouraging phrases as the timer runs, and the timer runs with a graphic visual of their progress. Users
        have the option to stop the timer if they break the fast. This application also offers a history section, where users may view their past fasts and make
        notes about them. The records section allows users to see certain statistics about their fasts, including overall pass rate. Upon passing a fast,
        confetti flows down from the top of thet screen.`,
        technology: "React, React Bootstrap",
        languages: "JavaScript, CSS",
        deploymentLink:"https://intermittent-fasting-tracker.netlify.app/",
        presentationLink:"https://docs.google.com/presentation/d/10haG7otDNudpfjb3qYM5HbIGUA3qOvgXKfZCPuAENwo/edit?usp=sharing",
        codeLink:"https://github.com/colemanjenkins/intermittent-fasting-timer",
        id: 3
    },
    {
        title: "Note Taker",
        date: "May 2020",
        type: "Solo Project | Countdown",
        description: `This project was the second solo project assiged after the last technical Countdown session, right before the latter part of the program,
        when intensive training began. The note taker app was an exercise in getting accustomed to state; this app allows users to make notes, assign categories
        to each note, and filter notes by category. Again, some emphasis was put on making the application visually appealing; we were encouraged, with this project,
        to experiment with how much technical functionality we could implement as well.`,
        technology: "React",
        languages: "JavaScript, CSS",
        deploymentLink:"",
        presentationLink:"",
        codeLink:"https://github.com/alc823/noteTaker",
        id: 4
    },
    {
        title: "Random Quote Generator",
        date: "March 2020",
        type: "Solo Project | Countdown",
        description: `This project was the first solo project assigned after one of the technical Countdown sessions. The random quote generator
        displays different quotes at the click of a button. This was an introductory exercise to get our feet wet with React and get introduced to
        using state. A large emphasis of this mini-project was on experimenting with how visually appealing and unique we could make the app.`,
        technology: "React",
        languages: "JavaScript, CSS",
        deploymentLink:"",
        presentationLink:"",
        codeLink:"https://github.com/alc823/quoteGenerator",
        id: 5
    }
]

export const otherProjects = [
    {
        title: "Recycle Buddy",
        associations: "HooHacks | Programmer",
        date: "March 2021",
        description: `I worked together with 3 other people in a 48-hour hackathon to develop a mobile application that employs machine
        learning algorithms to classify images of trash. The app allows a user to upload an image and uses an ensemble classifier hosted on a 
        Flask Rest API to classify the image as containing trash, a recyclable material, or a compostable material.   

        Our work was split into two parts. The first phase of development involved developing an adequate machine learning algorithm for image classification
        and creating a simple Rest API using Flask to host our algorithm. We decided on a Balanced Random Forest Classifier from the Scikit Learn python library and 
        trained this model on data obtained from Kaggle. We were able to achieve an accuracy of over 90%, so we moved onto encapsulating our ML work into a Flask app.

        Once the backend was completed, we began developing the mobile application using React Native. Our development was focused on Android machines since the majority
        of our team owned Windows machines. I was chiefly in charge of the functionality of the app while my teammates focused on design.

        One of the key challenges we ran into was transferring image data from our mobile application to our Flask server. While we did not resolve the exact issue
        before the deadline, we used a workaround. Instead of attempting to directly transfer image data between the two parties, we used Google Firebase Storage to 
        serve as the middle man, since it had good documentation and infrastructure for uploading and retrieving images. Our data flow was modified then so that our mobile
        application would upload an image to Firebase Storage and make a separate REST call to our Flask server, indicating that an image was uploaded and should be retrieved.
        The Flask server would then retrieve the image and return a prediction as the response to the REST call.
        
        All work was done virtually.`,
        technology: "React Native, Flask, Jupyter Notebook, Firebase Storage",
        languages: "Python, JavaScript",
        deploymentLink: "https://devpost.com/software/recycle-buddy-wkc32q",
        codeLink: "https://github.com/alc823/RecycleBuddies",
        id: 0
    },
    {
        title: "Creative Corner (Original)",
        associations: "RookieHacks | Co-designer and Co-programmer",
        date: "May 2020",
        description: `I participated in a hackathon hosted by Major League Hackers called RookieHacks. This hackathon was geared
        towards beginner hackers, but experienced hackers were welcome too, on one condition: they had to learn a new language through the
        hackathon. My partner and I both didn't know PHP, so we decided to try to use CakePHP to build a website for a shared passion of ours, 
        creative writing. Thus, Creative Corner was born. Creative Corner was based on a CakePHP Getting Started guide; the website
        is intended to act as a hub for creative writers to receive daily prompts, write stories, share their stories with others, and browse
        others' stories. We used Figma to design the application and CakePHP to code the app. We used MySQL for our backend. This hackathon project
        was expanded and built upon as a class project for Database Systems (CS 4750). See Class tab for more details.`,
        technology: "CakePHP, Figma, MySQL",
        languages: "HTML/CSS, PHP",
        deploymentLink:"https://devpost.com/software/rookiehacks101",
        codeLink:"https://github.com/stephanienmorton/Rookie-Hacks",
        id: 1
    }
]