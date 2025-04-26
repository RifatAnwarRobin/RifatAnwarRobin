const config = {
    name: "Rifat Anwar",
    title: "Senior Python Odoo Developer",
    email: "rifatanwarrobin@gmail.com",
    github: "RifatAnwarRobin",
    linkedin: "rifat-anwar-robin", 
    streamlit: "https://share.streamlit.io/user/rifatanwarrobin",
    pypi: "https://pypi.org/user/rifat-anwar/",
    lastUpdated: "2025-04-27 1:20 UTC",
    
    // Theme colors
    colors: {
        light: {
            primary: "#ffffff",
            secondary: "#f8f9fa",
            accent: "#007bff",
            text: "#212529",
            textLight: "#6c757d",
            navBg: "rgba(255, 255, 255, 0.9)"
        },
        dark: {
            primary: "#0a192f",
            secondary: "#112240",
            accent: "#64ffda",
            text: "#ccd6f6",
            textLight: "#8892b0",
            navBg: "rgba(10, 25, 47, 0.9)"
        }
    },

    education: [
        {
            school: "Daffodil International University",
            degree: "Bachelor of Science in Computer Science & Engineering",
            period: "2017 - 2021",
            description: [
                "CGPA: 3.54 out of 4.00",
                "Thesis: Machine Learning-based Unemployment Rate Prediction",
                "Did Problem Solving in URI online judge, Codeforces, Heakerank ,and LeetCode"
            ],
            icon: "fas fa-graduation-cap"
        },
        {
            school: "Abdul Kadir Mollah City College",
            degree: "Higher Secondary Certificate (HSC)",
            period: "2014 - 2016",
            description: [
                "Science Group",
                "GPA: 5.00 out of 5.00",
                "Special: Golden A+ (more than 80% marks in all subjects)"
            ],
            icon: "fas fa-school"
        },
        {
            school: "Gana Bangla High School",
            degree: "Secondary School Certificate (SSC)",
            period: "2012 - 2014",
            description: [
                "Science Group",
                "GPA: 5.00 out of 5.00",
                "Special: Golden A+ (More than 80% marks in all subjects)"
            ],
            icon: "fas fa-school"
        }
    ],

    projects: [
        {
            title: "Image Processing Tool",
            description: "Developed a tool for background removal and image manipulation with advanced features like alpha matting, flipping, and resizing with a specific ratio.",
            technologies: ["Python", "Streamlit", "Pillow"],
            github: "https://github.com/RifatAnwarRobin/image_background_remover",
            live: "https://removebg-by-rifat.streamlit.app/"
        },
        {
            title: "Number to Words Converter Library",
            description: "Created a Python library to convert numerical amounts into words following Bangladeshi and Indian numeric systems (lakh, crore).",
            technologies: ["Python", "PyPI","num2words"],
            github: "https://github.com/RifatAnwarRobin/num2words-BD-INR",
            live: "https://pypi.org/project/num2words-BD-INR/"
        },
        {
            title: "Python Decorator Library",
            description: "Published a Python decorator on PyPI to ignore the interpretation of any function and treat it as a commented code.",
            technologies: ["Python", "PyPI", "Decorators"],
            // github: "https://github.com/RifatAnwarRobin/python-decorator",
            live: "https://pypi.org/project/function-comment/"
        },
        {
            title: "Automated DB Backup Solution",
            description: "Designed an automated SQL backup and restoration system using Bash scripting for enhanced data security and management.",
            technologies: ["Bash", "PostgreSQL"],
            github: "https://github.com/RifatAnwarRobin/odoo-scripts",
            live: ""
        },
        {
            title: "Odoo E-commerce Review System",
            description: "Engineered a review system with workflows, analytics, approval layer, and moderation tools in Odoo eCommerce.",
            technologies: ["Python", "Odoo", "PostgreSQL"],
            github: "",
            live: ""
        },
        {
            title: "ML Unemployment Prediction",
            description: "Developed predictive models to analyze unemployment trends using machine learning for my university thesis.",
            technologies: ["Python", "Machine Learning", "Data Mining"],
            github: "",
            live: ""
        }
    ],

    experience: [
        {
            company: "Metamorphosis Ltd.",
            title: "Senior Python Odoo Developer",
            period: "June 2022 - Present",
            description: [
                "Lead the development of custom Odoo ERP solutions",
                "Design and implement scalable modules",
                "Collaborate with stakeholders to gather requirements",
                "Architect and develop workflow automation solutions",
                "Manage end-to-end development lifecycle"
            ],
            icon: "fas fa-building"
        },
        {
            company: "Itqan Analytics & Software Limited",
            title: "Junior Developer",
            period: "November 2021 - April 2022",
            description: [
                "Participated in software development projects focusing on analytical solutions",
                "Applied programming fundamentals to solve real-world business challenges",
                "Developed proficiency in various development tools and methodologies",
            ],
            icon: "fas fa-chart-line"
        },
        {
            company: "Itinerary Holidays",
            title: "Data Analyst & Group Travel Coordinator",
            period: "March 2021 - November 2021",
            description: [
                "Analyzed business data generated from different tours and events",
                "Organized and hosted corporate and group tours"
            ],
            icon: "fas fa-plane"
        }
    ],
    
    skills: [        
        {
            name: "Python",
            icon: "devicon-python-plain colored",
            level: 95
        },
        {
            name: "Odoo Framework",
            icon: "fas fa-cogs",
            level: 90
        },
        {
            name: "XML & QWeb",
            icon: "fas fa-code",
            level: 90
        },
        {
            name: "FastAPI",
            icon: "fas fa-bolt",
            level: 80
        },
        {
            name: "REST APIs",
            icon: "fas fa-network-wired",
            level: 80
        },
        {
            name: "PostgreSQL",
            icon: "devicon-postgresql-plain colored",
            level: 70
        },
        {
            name: "Machine Learning",
            icon: "fas fa-brain",
            level: 70
        },
        {
            name: "Streamlit",
            icon: "devicon-streamlit-plain colored",
            level: 70
        },
        {
            name: "JavaScript (OWL 2.0)",
            icon: "devicon-javascript-plain colored",
            level: 60
        },
        {
            name: "Django",
            icon: "devicon-django-plain-wordmark",
            level: 60
        }
    ]
};

export default config;