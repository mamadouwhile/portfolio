import {
    Github,
    Eye,
    Sparkles,
} from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Distri2B",
        category: "Développement Web",
        description:
            "Développement du site e-commerce de Distri2B avec Symfony et React. Gestion des produits, du stock et du parcours client complet.",
        image: "/projects/distri2b.png",
        tags: ["Symfony", "React", "MySQL", "API Platform"],
        accentColor: "from-blue-500 to-cyan-600",
        status: "Terminé",
        highlights: [
            "Développement full-stack (frontend et backend)",
            "Mise en place d'une API REST avec Symfony",
            "Interface moderne et réactive avec React",
        ],
    },
    {
        id: 2,
        title: "07ZR",
        category: "Tests & Automatisation",
        description:
            "Participation au développement du site 07ZR en React. Réalisation des tests automatisés avec Selenium (Java) et des tests de charge avec JMeter.",
        image: "/projects/07zr.png",
        tags: ["React", "Selenium", "Java", "JMeter", "CI/CD"],
        accentColor: "from-emerald-500 to-teal-600",
        status: "En production",
        highlights: [
            "Création et maintenance de composants React",
            "Automatisation des tests fonctionnels avec Selenium",
            "Tests de charge avec JMeter",
        ],
    },
    {
        id: 3,
        title: "Mecazen",
        category: "Tests & Automatisation",
        description:
            "Réalisation d’un test de charge complet du site Mecazen avec JMeter et BrowserStack. Analyse des performances, compatibilité multi-navigateurs et optimisation du parcours utilisateur.",
        image: "/projects/mecazen.png",
        tags: ["JMeter", "BrowserStack", "Performance Testing", "QA"],
        accentColor: "from-orange-500 to-amber-600",
        status: "Terminé",
        highlights: [
            "Scénarios de test de charge simulant des centaines d’utilisateurs",
            "Tests cross-browser avec BrowserStack",
            "Analyse et interprétation des métriques de performance",
        ],
    },
];

const categoryColors = {
    "Développement Web":
        "from-blue-500/20 to-cyan-600/20 text-blue-600 border-blue-500/30",
    "Tests & Automatisation":
        "from-emerald-500/20 to-teal-600/20 text-emerald-600 border-emerald-500/30",
};

export const ProjectsSection = () => {
    const [showAll, setShowAll] = useState(false);
    const [activeFilter, setActiveFilter] = useState("Tous");
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const filteredProjects =
        activeFilter === "Tous"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    const displayedProjects = showAll
        ? filteredProjects
        : filteredProjects.slice(0, 3);
    const categories = ["Tous", ...new Set(projects.map((p) => p.category))];

    const ProjectHighlights = ({ highlights }) => (
        <div className="space-y-2">
            {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{h}</span>
                </div>
            ))}
        </div>
    );

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative min-h-screen py-20 bg-gradient-to-br from-background via-background to-primary/5"
        >
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
                {/* Titre */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Sparkles className="h-4 w-4" />
                        Mes Projets
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        Portfolio de <span className="text-primary">Projets</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Une sélection de projets qui illustrent mes compétences en
                        développement web et en automatisation des tests.
                    </p>
                </motion.div>

                {/* Filtres */}
                <div className="flex justify-center mb-12 flex-wrap gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-6 py-3 rounded-full text-sm font-medium border transition-all duration-300 ${
                                activeFilter === cat
                                    ? "bg-primary text-white border-primary"
                                    : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Liste des projets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {displayedProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="group bg-background border border-border rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                        >
                            <div className="relative h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-3 left-3">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${categoryColors[project.category]}`}
                                    >
                                        {project.category}
                                    </span>
                                </div>
                                <div className="absolute top-3 right-3 bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-medium">
                                    {project.status}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <ProjectHighlights highlights={project.highlights} />
                                <div className="flex flex-wrap gap-2 mt-4 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3 mt-auto">
                                    <button
                                        disabled
                                        className="flex-1 bg-primary/40 text-white/80 text-sm py-2 rounded-lg text-center cursor-not-allowed"
                                    >
                                        <Eye size={16} className="inline mr-1" />
                                        Voir le site
                                    </button>
                                    <button
                                        disabled
                                        className="border border-border text-sm py-2 px-4 rounded-lg text-muted-foreground cursor-not-allowed"
                                    >
                                        <Github size={16} className="inline mr-1" />
                                        Code
                                    </button>
                                </div>
                            </div>
                            <div className={`h-1 bg-gradient-to-r ${project.accentColor}`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
