import config from './config.js';

class PortfolioApp {
    constructor() {
        this.initializeTheme();
        this.initializeLoader();
        this.initializeNavigation();
        this.initializeSkills();
        this.initializeProjects();
        this.initializeExperience();
        this.initializeEducation();
        this.initializeTimeDisplay();
        this.fetchGitHubStats();
    }
    
    initializeTheme() {
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        const icon = themeToggle.querySelector('i');
        const savedTheme = localStorage.getItem('theme') || 'dark';
        body.classList.add(`${savedTheme}-theme`);
        icon.classList.toggle('fa-sun', savedTheme === 'dark');
        icon.classList.toggle('fa-moon', savedTheme === 'light');
    
        themeToggle.addEventListener('click', () => {
            const isLight = body.classList.toggle('light-theme');
            body.classList.toggle('dark-theme', !isLight);
            
            icon.classList.toggle('fa-sun', !isLight);
            icon.classList.toggle('fa-moon', isLight);
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }
    
    initializeNavigation() {
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times');
        });
    
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.add('fa-bars');
                hamburger.querySelector('i').classList.remove('fa-times');
            }
        });
    
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                
                if(anchor.getAttribute('href') !== '#') {
                    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                    navLinks.classList.remove('active');
                    hamburger.querySelector('i').classList.add('fa-bars');
                    hamburger.querySelector('i').classList.remove('fa-times');
                }
            });
        });
    }

    initializeLoader() {
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 1000);
        });
    }
    
    initializeEducation() {
        const educationGrid = document.getElementById('educationGrid');
        educationGrid.innerHTML = config.education.map(edu => `
            <div class="education-card">
                <div class="education-header">
                    <div class="education-icon">
                        <i class="${edu.icon}"></i>
                    </div>
                    <div class="education-title">
                        <h3>${edu.school}</h3>
                        <div class="education-degree">${edu.degree}</div>
                        <div class="education-period">${edu.period}</div>
                    </div>
                </div>
                <ul class="education-description">
                    ${edu.description.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    initializeSkills() {
        const skillsGrid = document.getElementById('skillsGrid');
        skillsGrid.innerHTML = config.skills.map(skill => `
            <div class="skill-card">
                <div class="skill-header">
                    <i class="${skill.icon} skill-icon"></i>
                    <h3 class="skill-name">${skill.name}</h3>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                </div>
            </div>
        `).join('');
    }

    initializeProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        projectsGrid.innerHTML = config.projects.map(project => `
            <div class="project-card">
                <div class="project-header">
                    ${project.title ? `<i class="fas fa-folder project-folder"></i>` : ''}
                    <div class="project-links">
                        ${project.github ? `<a href="${project.github}" target="_blank" aria-label="GitHub repository"><i class="fab fa-github"></i></a>` : ''}
                        ${project.live ? `<a href="${project.live}" target="_blank" aria-label="Live project"><i class="fas fa-external-link-alt"></i></a>` : ''}
                    </div>
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <ul class="project-tech">
                    ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    initializeExperience() {
        const experienceContainer = document.getElementById('experienceContainer');
        experienceContainer.innerHTML = config.experience.map((exp, index) => `
            <div class="experience-item ${index === 0 ? 'active' : ''}">
                <div class="experience-header">
                    <i class="${exp.icon}"></i>
                    <h3 class="job-title">${exp.title} <span class="job-company">@ ${exp.company}</span></h3>
                    <span class="job-period">${exp.period}</span>
                </div>
                <ul class="job-description">
                    ${exp.description.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            </br>
        `).join('');
    }

    initializeTimeDisplay() {
        const timeDisplay = document.getElementById('currentTime');
        const lastUpdated = document.getElementById('lastUpdated');
        
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toISOString().replace('T', ' ').slice(0, 19) + ' UTC';
            timeDisplay.textContent = timeString;
        };

        updateTime();
        setInterval(updateTime, 1000);
        lastUpdated.textContent = config.lastUpdated;
    }

    async fetchGitHubStats() {
        try {
            const response = await axios.get(`https://api.github.com/users/${config.github}`);
            const stats = response.data;
            
            const githubStats = document.getElementById('githubStats');
            githubStats.innerHTML = `
                <div class="stats-grid">
                    <div class="stat-item">
                        <i class="fas fa-users"></i>
                        <span>${stats.followers}</span>
                        <p>Followers</p>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-code-branch"></i>
                        <span>${stats.public_repos}</span>
                        <p>Repositories</p>
                        <i><p>[Note: My previous GitHub account was flagged for no proper reason(support ticket was not that helpful) and I lost all my contributions. I'm currently working on rebuilding my GitHub profile.]</p></i>
                    </div>
                </div>
            `;
        } catch (error) {
            console.error('Error fetching GitHub stats:', error);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});

// Handle visibility changes
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        const timeDisplay = document.getElementById('currentTime');
        const now = new Date();
        timeDisplay.textContent = now.toISOString().replace('T', ' ').slice(0, 19) + ' UTC';
    }
});