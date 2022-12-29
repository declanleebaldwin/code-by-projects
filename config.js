export const HOME_PAGE = {
  howItWorks: {
    title: "how it works?",
    paragraphs: [
      'Code By Projects is a personalised mentor programme which teaches you the skills you need to get hired in a real web developer role.',
      'Pick a project and get started.'
    ],
    link: false
  },
  projectImage: '/images/dev_focus.svg',
  projects: {
    title: "projects",
    paragraphs: [
      'Each project is broken down into tickets.',
      'A ticket represents a ticket you would get assigned in a real job and will have a set of requirements you need to fulfill.',
      'Each ticket will help you develop your skills as a web developer and most importantly help you become self reliant when it comes to solving problems.'
    ],
    link: {
      href: "/projects",
      text: 'Learn more.'
    }
  },
  mentors: {
    title: "mentors",
    paragraphs: [
      'Don’t worry if you get stuck, there will be plenty of help along the way.',
      'You will be assigned a mentor - this is supposed to replicate having a senior developer in a real job.',
      'With your mentor you can discuss your tickets, ask for code reviews or even go over a web development topic you are struggling with.'
    ],
    link: {
      href: "/mentors",
      text: 'Learn more.'
    }
  },
  pricing: {
    title: 'pricing',
    bullets: [
      'From £20/project.',
      'Try your first ticket for free.',
      'Mentor session £50/hour.'
    ]
  },
}

export const MENTOR_PAGE = {
  wereHereToHelp: {
    title: "We're here to help",
    paragraphs: [
      'Whether you’re stuck on a JavaScript topic, need guidance on how to approach a project or want a code review, our mentors are here to help.',
      'Mentors are available for 1-1 sessions to go through whatever you want.',
    ],
  },
  codeReviews: {
    title: 'code reviews',
    paragraphs: [
      'Like with any skill, building the right habits is vital to being successful. This is no different with learning to code.',
      'Code review help you build these habits.',
      'After you have completed a ticket or project, a Mentor can review your code and give you tips on where you can improve.',
      'There are always multiple ways to approach a problem, but picking the right way for the right reasons is part of what will make you a successful developer!',
    ],
    link: false
  },
  codeReviewImage: '/images/shared_workspace.svg',
  pricing: {
    title: 'pricing',
    bullets: [
      'Code Reviews £10/ticket',
      'Mentor session £50/hour ',
    ]
  },
  signUp: {
    title: 'sign up',
    paragraphs: [
      'Sign up and we’ll assign you a mentor to get started.'
    ],
    button: 'sign up'
  }
}

export const PROJECT_PAGE = {
  beginner: {
    title: 'Beginner',
  },
  intermediate: {
    title: 'Intermediate',
  },
  expert: {
    title: 'Expert',
  },
}

export const PROJECT_DIFFICULTIES = {
  beginner: 'beginner',
  intermediate: 'intermediate',
  expert: 'expert'
}

export const PROJECT_DETAILS_PAGE = {
  includedSection: {
    title: "What's included",
    paragraphs: [
      'Access to the project’s tickets which splits the project up into bitesize pieces',
      'GitHub repository, the repository is split into branches which relate to the tickets to make it easy to follow',
      'Each ticket has a ‘hints’ section which contains resources  to help you with that particular skill'
    ],
    link: false
  },
  exampleTicketSection: {
    title: 'Example Ticket',
    image: '/images/example_ticket.png',
    width: 569,
    height: 560
  },
  join: {
    title: 'join',
    paragraphs: [
      "Enter your email address and we'll send you the details to get started."
    ],
    button: 'join project'
  }
}

export const PROJECTS = {
  landing: {
    difficulty: PROJECT_DIFFICULTIES.beginner,
    imageSrc: '/images/landing_page.jpg',
    imageAlt: 'landing-page',
    title: 'Landing Page',
    desc: 'HTML / CSS',
    href: '/projects/landing',
    details: {
      makingSection: {
        title: 'What will you be making',
        paragraphs: [
          'You will be building a landing page for a travel blog.',
          'As this is a beginner project, the landing page only needs HTML and CSS.',
          'Understanding the fundamentals of web development is vital for your progression so no frameworks or libraries will be allowed.'
        ],
        link: {
          href: "https://lozsleisure.web.app/#/",
          text: 'View Site.'
        }
      },
      showcase: {
        video: {
          src: '/videos/landing_page_showcase.mp4'
        },
        image: false
      },
      pricing: {
        title: 'pricing',
        bullets: [
          '£20 for entire Project, no hidden fees',
          'Mentor session £50/hour ',
        ]
      },
    }
  },
  portfolio: {
    difficulty: PROJECT_DIFFICULTIES.beginner,
    imageSrc: '/images/portfolio.png',
    imageAlt: 'wiki',
    title: 'Portfolio',
    desc: 'HTML / CSS',
    href: '/projects/portfolio',
    details: {
      makingSection: {
        title: 'What will you be making',
        paragraphs: [
          'You will be building a portfolio which showcases your skills and provides links to your other projects.',
          'As this is a beginner project, the portfolio site only needs HTML and CSS.',
          'Understanding the fundamentals of web development is vital for your progression so no frameworks or libraries will be allowed.'
        ],
        link: {
          href: "https://declanleebaldwin.github.io/MyPortfolio/index.html",
          text: 'View Site.'
        }
      },
      showcase: {
        video: false,
        image: {
          src: '/images/portfolio_showcase.png'
        }
      },
      pricing: {
        title: 'pricing',
        bullets: [
          '£20 for entire Project, no hidden fees',
          'Mentor session £50/hour ',
        ]
      },
    }
  }
}