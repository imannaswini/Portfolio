import React, { useState, useEffect, useRef } from 'react';

// HELPER COMPONENTS (Normally in separate files, but combined for single-file structure)

// SVG Icon Components
const GithubIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const LinkedinIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const MailIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);

const ExternalLinkIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

const GraduationCapIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 002-2v-5"></path>
    </svg>
);

// DATA (Customize this with your own information)
const portfolioData = {
    name: "MANNASWINI",
    headline: [
        "B.Tech CSE Student",
        "Full-Stack Developer",
        "Generative AI Enthusiast"
    ],
    about: "B.Tech CSE student passionate about building full-stack web applications and exploring Generative AI. Skilled in modern web technologies, cloud computing, and creating solutions that blend usability with innovation.",
    experience: [
        {
            role:  "Project Contributor",
            company: "Dev/Track Club",
            duration: "March 2024 - Present",
            description: [
                "Collaborated in two full project cycles, delivering intuitive UI/UX designs and ensuring seamless user experiences across devices."
            ]
        },
        
        {
            role: "Project Contributor",
            company: "Open Source Connect India (OSCI)",
            duration: "August 2025 - Present",
            description: [
                "Contributed to Open Source Connect India by setting up the React.js frontend for Inboxly, a real-time messaging application, implementing reusable UI components and state management for smooth live chats."
            ]
        }
    ],
    education: [
        {
            degree: "Bachelor of Technology in Computer Science",
            university: "Reva University",
            duration: "2023 - 2027",
            details: "CGPA: 8.0/10 (until 4th Semester)."
        },
        {
            degree: "Class XII",
            university: "Narayana PU College",
            duration: "2021 - 2023",
            details: "Percentage:79%"
        },
        {
            degree: "Class X",
            university: "Auxilium School",
            duration: "2013 - 2021",
            details: "Percentage:89%"
        }

    ],
    skills: {
        "Languages": [
            { name: "C", icon: "https://img.icons8.com/color/48/000000/c-programming.png" },
            { name: "Java", icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" },
            { name: "Python", icon: "https://img.icons8.com/color/48/000000/python--v1.png" },
        ],
        "Frontend": [
            { name: "React", icon: "https://img.icons8.com/color/48/000000/react-native.png" },
            { name: "Next.js", icon: "https://img.icons8.com/color/48/000000/nextjs.png" },
            { name: "Streamlit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" }
        ],
        "Backend": [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
        ],
        "Database": [
            { name: "MySQL", icon: "https://img.icons8.com/color/48/000000/mysql-logo.png" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
        ],
        "Tools": [
            { name: "Git", icon: "https://img.icons8.com/color/48/000000/git.png" },
            { name: "GitHub", icon: "https://img.icons8.com/fluency/48/github.png" },
            { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
        ]
    },
    projects: [
        {
            title: "Heart Disease Prediction System",
            description: "Developed a machine learning model with a Streamlit frontend to predict heart disease risk from patient data, featuring real-time input and explainable AI visualizations.",
            tags: ["Python", "Machine Learning", "Streamlit", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Plotly"],
            liveUrl: "https://heartprediction1.streamlit.app/",
            githubUrl: "https://github.com/imannaswini/HeartPrediction.git",
            // imageUrl: "https://placehold.co/600x400/1e293b/94a3b8?text=Heart+Disease+Prediction"
            
        },
        {
            title: "Real-time Chat Application",
            description: "A web-based chat app using Socket.IO for real-time bidirectional communication. Users can join rooms and send messages instantly.",
            tags: ["React", "Node.js", "Socket.IO", "Tailwind CSS"],
            liveUrl: "#",
            githubUrl: "https://github.com/imannaswini/RealTimeChatApp.git",
            // imageUrl: "https://placehold.co/600x400/1e293b/94a3b8?text=Chat+App"
        },
        {
            title: "Resume Analyzer",
            description: "An intelligent Streamlit web application that automates resume screening. It calculates a relevance score for a resume against a job description, identifies skill gaps, and provides a streamlined interface for both students and recruiters.",
            tags: ["Streamlit","Python","SQLite","Machine Learning","Scikit-learn","TfidfVectorizer","cosine_similarity","pypdf","python-docx","passlib","streamlit-extras"], 
            liveUrl: "#",
            githubUrl: "https://github.com/imannaswini/resume.git",
            // imageUrl: "https://placehold.co/600x400/1e293b/94a3b8?text=Dashboard"
        },
        {
            title: "Kerala Migrant Health Record",
            description: "A unified digital health platform designed to bridge the healthcare gap for migrant workers in Kerala. It features role-based portals for Government officials, Hospitals, and Workers, enabling secure health record management, real-time disease surveillance, and automated generation of digital health ID cards.",
            tags: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Recharts", "Lucide React", "REST API", "Full Stack"],
            liveUrl: "#",
            githubUrl: "https://github.com/imannaswini/dhr"
        },
    ],
    contact: {
        email: "iammannaswini@gmail.com",
        linkedin:"https://www.linkedin.com/in/mannaswini-p-a-7s7r7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/imannaswini",
        resumeUrl: "https://drive.google.com/file/d/1o--bn3GCByhdHL3JZ4WprxPgaLZmZkpM/view?usp=drive_link", // <-- ADD YOUR RESUME LINK HERE
        formspreeEndpoint: "https://formspree.io/f/mgvnorgy" // IMPORTANT: Replace with your Formspree endpoint
    }
};

// Custom hook for typing animation
const useTypingEffect = (words, typeSpeed = 150, deleteSpeed = 100, delay = 1200) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];
            const updatedText = isDeleting
                ? currentWord.substring(0, text.length - 1)
                : currentWord.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === currentWord) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delay]);

    return text;
};

// Custom hook for scroll animations
const useScrollAnimation = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.scroll-animate');
        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);
};


// PARTICLE CANVAS COMPONENT
const ParticleCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const resizeHandler = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        window.addEventListener('resize', resizeHandler);

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.size > 0.1) this.size -= 0.03;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw() {
                ctx.fillStyle = 'rgba(148, 163, 184, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function init() {
            for (let i = 0; i < 80; i++) {
                particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
            }
        }

        function handleParticles() {
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(148, 163, 184, ${1 - distance / 100})`;
                        ctx.lineWidth = 0.2;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
                if (particles[i].size <= 0.1) {
                    particles.splice(i, 1);
                    i--;
                }
            }
        }
        
        let animationFrameId;
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            handleParticles();
            animationFrameId = requestAnimationFrame(animate);
        }

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeHandler);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />;
};


// MAIN APP COMPONENT
export default function App() {
    const [activeSection, setActiveSection] = useState('home');
    const typedHeadline = useTypingEffect(portfolioData.headline);
    useScrollAnimation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        phone: '',
        message: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState(null); // 'sending', 'success', 'error'

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus('sending');
        try {
            const response = await fetch(portfolioData.contact.formspreeEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setSubmissionStatus('success');
                setFormData({ name: '', email: '', role: '', phone: '', message: '' }); // Clear form
                setTimeout(() => setSubmissionStatus(null), 5000); // Reset status after 5s
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmissionStatus('error');
        }
    };

    const sectionRefs = {
        home: useRef(null),
        about: useRef(null),
        experience: useRef(null),
        education: useRef(null),
        skills: useRef(null),
        projects: useRef(null),
        contact: useRef(null),
    };
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-50% 0px -50% 0px' }
        );
        
        const currentRefs = Object.values(sectionRefs);
        currentRefs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });
        
        return () => {
          currentRefs.forEach((ref) => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
          });
        };
    }, []);

    const navLinks = [
        { id: 'home', title: 'Home' },
        { id: 'about', title: 'About' },
        { id: 'experience', title: 'Experience' },
        { id: 'education', title: 'Education' },
        { id: 'skills', title: 'Skills' },
        { id: 'projects', title: 'Projects' },
        { id: 'contact', title: 'Contact' },
    ];

    return (
        <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
                body {
                    font-family: 'Inter', sans-serif;
                }
                .fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .scroll-animate {
                    opacity: 0;
                }
                .blinking-cursor {
                    animation: blink 1s step-end infinite;
                    color: #67e8f9; /* Tailwind cyan-300 */
                }
                @keyframes blink {
                    from, to {
                        color: transparent;
                    }
                    50% {
                        color: #67e8f9;
                    }
                }
            `}</style>

            <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm shadow-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="text-2xl font-bold text-cyan-400">
                            {portfolioData.name.split(' ')[0]}
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    className={`text-lg font-medium transition-colors duration-300 ${activeSection === link.id ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'}`}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <section ref={sectionRefs.home} id="home" className="relative min-h-screen flex items-center justify-center text-center">
                    <ParticleCanvas />
                    <div className="z-10 scroll-animate">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Hi, I am <span className="text-cyan-400">{portfolioData.name}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto min-h-[3rem] md:min-h-[2rem]">
                            {typedHeadline}
                            <span className="blinking-cursor">|</span>
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#projects" className="bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition duration-300">
                                View My Work
                            </a>
                             <a 
                                href={portfolioData.contact.resumeUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="border-2 border-cyan-500 text-cyan-500 font-bold py-3 px-6 rounded-lg hover:bg-cyan-500 hover:text-white transition duration-300"
                            >
                                View Resume
                            </a>
                            <a href="#contact" className="bg-slate-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-600 transition duration-300">
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section ref={sectionRefs.about} id="about" className="py-24 scroll-animate">
                    <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
                    <div className="max-w-3xl mx-auto text-lg text-slate-400 text-center leading-relaxed">
                        <p>{portfolioData.about}</p>
                    </div>
                </section>

                {/* Experience Section */}
                <section ref={sectionRefs.experience} id="experience" className="py-24 scroll-animate">
                    <h2 className="text-3xl font-bold text-center mb-16">Experience</h2>
                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-700"></div>
                        {portfolioData.experience.map((job, index) => (
                            <div key={index} className="relative mb-12">
                                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                    <div className="w-1/2 px-4">
                                    </div>
                                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900"></div>
                                    <div className="w-1/2 px-4">
                                        <div className={`bg-slate-800 p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                            <p className="text-sm text-slate-400 mb-1">{job.duration}</p>
                                            <h3 className="text-xl font-bold text-cyan-400">{job.role}</h3>
                                            <p className="text-md font-semibold text-slate-300 mb-3">{job.company}</p>
                                            <ul className={`list-disc list-inside text-slate-400 space-y-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                                {job.description.map((point, i) => <li key={i}>{point}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section ref={sectionRefs.education} id="education" className="py-24 bg-slate-800/50 rounded-lg scroll-animate">
                    <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
                    <div className="max-w-3xl mx-auto space-y-8">
                        {portfolioData.education.map((edu, index) => (
                            <div key={index} className="flex items-start gap-6">
                                <div className="bg-cyan-400/10 p-3 rounded-full flex-shrink-0">
                                    <GraduationCapIcon className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-100">{edu.degree}</h3>
                                    <p className="font-semibold text-cyan-400 mb-1">{edu.university}</p>
                                    <p className="text-sm text-slate-400 mb-2">{edu.duration}</p>
                                    <p className="text-slate-400">{edu.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                {/* Skills Section */}
                <section ref={sectionRefs.skills} id="skills" className="py-24 scroll-animate">
                    <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
                    <div className="max-w-4xl mx-auto space-y-12">
                        {Object.entries(portfolioData.skills).map(([category, skills]) => (
                            <div key={category}>
                                <h3 className="text-xl font-semibold text-center text-cyan-400 mb-6">{category}</h3>
                                <div className="flex flex-wrap justify-center items-center gap-8">
                                    {skills.map((skill) => (
                                        <div key={skill.name} className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110">
                                            <img src={skill.icon} alt={`${skill.name} logo`} className="w-16 h-16" />
                                            <span className="font-medium">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section ref={sectionRefs.projects} id="projects" className="py-24 scroll-animate">
                    <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioData.projects.map((project, index) => (
                            <div key={index} className="bg-slate-800 rounded-lg overflow-hidden group transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                                {/* <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" /> */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                                    <p className="text-slate-400 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="bg-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-end space-x-4">
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                            <GithubIcon className="w-6 h-6" />
                                        </a>
                                        {/* <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                            <ExternalLinkIcon className="w-6 h-6" />
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section ref={sectionRefs.contact} id="contact" className="py-24 scroll-animate">
                    <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
                    <p className="text-slate-400 text-center max-w-2xl mx-auto mb-10">
                        Have a question, a project idea, or just want to connect? Fill out the form below and I will get back to you as soon as possible.
                    </p>
                    <div className="max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" name="role" value={formData.role} onChange={handleInputChange} placeholder="Company / Institution" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number (Optional)" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                            </div>
                            <div>
                                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message" rows="5" required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" disabled={submissionStatus === 'sending'} className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-600 transition duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed">
                                    {submissionStatus === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                        <div className="mt-6 text-center h-6">
                            {submissionStatus === 'success' && <p className="text-green-400">Thank you! Your message has been sent successfully.</p>}
                            {submissionStatus === 'error' && <p className="text-red-400">Something went wrong. Please try again later.</p>}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-8 border-t border-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
                    <div className="flex justify-center space-x-6 mb-4">
                        <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><GithubIcon className="w-6 h-6" /></a>
                        <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><LinkedinIcon className="w-6 h-6" /></a>
                        <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-cyan-400 transition-colors"><MailIcon className="w-6 h-6" /></a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
