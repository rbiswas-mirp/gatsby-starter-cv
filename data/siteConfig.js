module.exports = {
  siteTitle: 'Hi! I\'m Sanjana!',
  siteDescription: `Programmer, Web Developer, Cloud Architect`,
  keyWords: ['Sanjana Kokkonda', 'K Sanjana', 'Sanjana K'],
  authorName: 'Sanjana Kokkonda',
  twitterUsername: '',
  githubUsername: '',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Engineering Student, passionate about what I do. Always interested in how computers worked and how the sites were made. I started to study C++ and HTML by hobby. <br />
    In 2020, I started learning C++ and HTML. <<br />
    In 2021, I started learning C and Python. <br />
    I am currently an engineering student at NIT Warangal.`,
  skills: [
    {
      name: 'HTML',
      level: 50
    },
    {
      name: 'C++',
      level: 75
    },
    {
      name: 'Python',
      level: 60
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "NIT Warangal",
      begin: {
        month: 'July',
        year: '2020'
      },
      duration: null,
      occupation: "Chemical Engineering",
      description: "Currently pursuing my B.Tech in Chemical Engineering from NIT Warangal"
  
    },  {
      company: "+2",
      begin: {
        month: 'apr',
        year: '2019'
      },
      // duration: null,
      occupation: "+2",
      description: "+2 in Junior College"
  
    }, {
      company: "High School",
      begin: {
        month: 'apr',
        year: '2017'
      },
      // duration: 'null',
      occupation: "High School",
      description: "High School."
    },
  ],
  portifolio: [
    {
      image: "/images/gatsby-starter-cv.jpeg",
      description: "Project 1",
      url: "#"
    },
    {
      image: "/images/awesome-grid.jpeg",
      description: "Project 2",
      url: "#"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "#",
    linkedin: "#",
    github: "#",
    email: "#"
  },
  siteUrl: 'https://www.sanjanakokkonda.in',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}