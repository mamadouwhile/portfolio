import React, { useState, useEffect } from 'react';
import { Briefcase, Code, User, Download, Calendar, Sparkles, Target, Github, Linkedin, Mail, Star } from 'lucide-react';

export const AboutSection = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [counter, setCounter] = useState(0);

    const achievements = [
        { number: "10+", label: "Projets Académiques", icon: <Briefcase className="h-5 w-5" />, suffix: "" },
        { number: "2", label: "Ans d'Expérience", icon: <Calendar className="h-5 w-5" />, suffix: "+" },
        { number: "100", label: "Motivation", icon: <Target className="h-5 w-5" />, suffix: "%" },
        { number: "Étudiant", label: "En Informatique", icon: <User className="h-5 w-5" />, suffix: "" },
    ];

    const techStack = [
        { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Vue.js"] },
        { category: "Backend", items: ["PHP", "Symfony", "MySQL", "Node.js"] },
        { category: "Tests & Outils", items: ["Selenium", "JMeter", "Git", "PhpStorm", "VS Code"] },
    ];

    const features = [
        "Curieux et passionné d'informatique",
        "Code propre et structuré",
        "Apprentissage continu",
        "Travail d'équipe et communication",
        "Rigueur dans les tests et la qualité",
        "Capacité d’adaptation rapide",
    ];

    const socialLinks = [
        { icon: <Github className="h-5 w-5" />, href: "#" },
        { icon: <Linkedin className="h-5 w-5" />, href: "#" },
        { icon: <Mail className="h-5 w-5" />, href: "#contact" },
    ];

    useEffect(() => {
        const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => setCounter(prev => (prev + 1) % 4), 2000);
        return () => clearInterval(interval);
    }, []);

    const tabContent = {
        personal:
            "Étudiant en informatique passionné par le développement web et l'automatisation de tests. J’aime concevoir des projets pratiques et comprendre le fonctionnement des systèmes logiciels.",
        professional:
            "Je me spécialise dans le développement web avec React et Symfony, ainsi que dans les tests automatisés avec Selenium et JMeter. J’ai participé à plusieurs projets académiques et personnels qui m’ont permis de consolider mes bases en algorithmique et en conception logicielle.",
        approach:
            "Mon approche repose sur l’apprentissage continu, la pratique quotidienne du code et la recherche de solutions efficaces. J’accorde une grande importance à la qualité, à la clarté du code et à la collaboration.",
    };

    return (
        <section id="about" className="py-20 md:py-28 px-4 sm:px-6 relative bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ease-out" style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }} />
                <div className="absolute w-80 h-80 bg-secondary/5 rounded-full blur-3xl transition-all duration-1500 ease-out" style={{ transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)` }} />
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            <div className="container mx-auto max-w-7xl relative">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
                        <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                        <span className="text-base font-semibold text-primary tracking-wide">À PROPOS DE MOI</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Un Développeur en</span>
                        <span className="block text-primary animate-pulse">Apprentissage Constant</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Je combine <span className="text-primary font-semibold">créativité</span>, <span className="text-primary font-semibold">logique</span> et <span className="text-primary font-semibold">rigueur</span> pour créer des solutions web modernes et efficaces.
                    </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-12">
                    <div className="xl:col-span-2 space-y-8">
                        <div className="bg-card/50 border border-border rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                                    <img src="/profil.jpeg" alt="Mahamadou Dembele" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h2 className="text-3xl font-bold mb-2">Mahamadou Dembele</h2>
                                    <p className="text-primary text-lg font-semibold mb-4">Étudiant en Informatique | Développeur Web Junior & Testeur Automatisé</p>
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        {achievements.map((achievement, index) => (
                                            <div key={index} className="p-3 rounded-xl bg-background/50 border border-border hover:border-primary/30 transition-all duration-300">
                                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                                    {achievement.icon}
                                                    <div>
                                                        <div className="font-bold text-lg">{achievement.number}{achievement.suffix}</div>
                                                        <div className="text-xs text-muted-foreground">{achievement.label}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex border-b border-border mb-6">
                                {['personal', 'professional', 'approach'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-300 ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                ))}
                            </div>
                            <div className="min-h-[120px]">
                                <p className="text-muted-foreground leading-relaxed">{tabContent[activeTab]}</p>
                            </div>
                        </div>

                        <div className="bg-card/50 border border-border rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Code className="h-6 w-6 text-primary" />Compétences Techniques
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {techStack.map((stack, index) => (
                                    <div key={index} className="bg-background/50 border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                        <h4 className="font-semibold text-lg mb-3">{stack.category}</h4>
                                        <ul className="space-y-2">
                                            {stack.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                                    • {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-card/50 border border-border rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6 text-center">Entrons en Contact</h3>
                            <a href="#contact" className="block w-full p-4 bg-primary text-primary-foreground rounded-xl text-center font-semibold hover:bg-primary/90 transition-all duration-300">
                                Me Contacter
                            </a>
                            <div className="mt-6 p-4 bg-background/50 rounded-xl border border-border">
                                <h4 className="font-semibold mb-3 text-center">Réseaux</h4>
                                <div className="flex justify-center gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a key={index} href={social.href} className="p-2 bg-background rounded-lg text-muted-foreground hover:text-primary transition-all duration-300">
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-card/50 border border-border rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Star className="h-5 w-5 text-primary" />Ce Qui Me Distingue</h3>
                            <div className="space-y-3">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-background/50 transition-all duration-300">
                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                        <span className="text-sm text-muted-foreground">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-card/60 border border-border rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
                            <div className="flex items-center justify-between mb-3">
                                <span className="font-semibold text-green-600">Disponible</span>
                                <span className="text-sm bg-green-500/10 text-green-600 px-2 py-1 rounded-lg">
                  Pour de nouveaux projets
                </span>
                            </div>
                            <p className="text-xs text-muted-foreground text-center bg-background/50 rounded-lg p-2">
                                ⚡ Réponse rapide assurée
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
