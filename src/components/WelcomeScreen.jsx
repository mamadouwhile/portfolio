import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { useTheme } from "next-themes";

const WelcomeScreen = ({ onWelcomeComplete }) => {
    const [phase, setPhase] = useState(0);
    const [exitAnimation, setExitAnimation] = useState(false);
    const [typedText, setTypedText] = useState("");
    const { theme } = useTheme();

    // 🎨 Thèmes dynamiques
    const colors = {
        light: {
            primary: "hsl(222.2 47.4% 11.2%)",
            secondary: "hsl(211 100% 45%)",
            background: "hsl(0 0% 100%)",
            muted: "hsl(215.4 16.3% 46.9%)",
            link: "hsl(221.2 83.2% 53.3%)",
        },
        dark: {
            primary: "hsl(210 40% 98%)",
            secondary: "hsl(204 100% 60%)",
            background: "hsl(222.2 47.4% 11.2%)",
            muted: "hsl(215 20.2% 65.1%)",
            link: "hsl(217.2 91.2% 59.8%)",
        },
    };

    const currentColors = colors[theme] || colors.dark;

    // 🌐 Ton URL perso (modifie si tu veux)
    const portfolioUrl = "mahamadouwhile";

    // 💬 Messages qui défilent
    const welcomeMessages = [
        "Développeur Web & Testeur Automaticien",
        "Créateur d’expériences numériques",
        "Passionné par la qualité et la performance",
    ];

    // 🕒 Phases d'affichage
    useEffect(() => {
        const phase1 = setTimeout(() => setPhase(1), 800);
        const phase2 = setTimeout(() => setPhase(2), 1600);
        const phase3 = setTimeout(() => setPhase(3), 2400);
        const complete = setTimeout(() => {
            setExitAnimation(true);
            setTimeout(onWelcomeComplete, 1000);
        }, 5000);

        return () => {
            clearTimeout(phase1);
            clearTimeout(phase2);
            clearTimeout(phase3);
            clearTimeout(complete);
        };
    }, [onWelcomeComplete]);

    // ⌨️ Effet de texte tapé
    useEffect(() => {
        if (phase >= 2) {
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i <= portfolioUrl.length) {
                    setTypedText(portfolioUrl.substring(0, i));
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 40);
            return () => clearInterval(typingInterval);
        }
    }, [phase]);

    // 🎬 Animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
        exit: {
            y: "-100vh",
            opacity: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const contentVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    };

    const underlineVariants = {
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: { delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    };

    const cursorVariants = {
        blinking: { opacity: [0, 0, 1, 1], transition: { duration: 1, repeat: Infinity } },
    };

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <motion.div
                className="h-full w-full flex items-center justify-center p-4"
                style={{ backgroundColor: currentColors.background }}
                variants={containerVariants}
                initial="hidden"
                animate={exitAnimation ? "exit" : "visible"}
            >
                {/* 🌈 Arrière-plan animé */}
                <motion.div className="absolute inset-0 -z-10 overflow-hidden opacity-25">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full blur-[70px]"
                        style={{
                            background: `linear-gradient(to right, ${currentColors.primary}, ${currentColors.secondary})`,
                        }}
                        animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
                        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    />
                </motion.div>

                {/* 💡 Contenu principal */}
                <div className="w-full max-w-2xl mx-auto text-center px-4">
                    <motion.div className="space-y-6">
                        {phase >= 0 && (
                            <motion.div variants={contentVariants}>
                                <motion.div
                                    className="text-sm md:text-lg font-mono inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                                    style={{
                                        color: currentColors.primary,
                                        backgroundColor: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                                        borderColor: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                                    }}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                >
                                    <Code2 className="h-4 w-4" />
                                    {welcomeMessages[phase % welcomeMessages.length]}
                                </motion.div>
                            </motion.div>
                        )}

                        {phase >= 1 && (
                            <motion.h1
                                className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight"
                                style={{ color: currentColors.primary }}
                                variants={contentVariants}
                            >
                                Bienvenue sur <span className="text-blue-500">mon portfolio</span>
                            </motion.h1>
                        )}

                        {phase >= 2 && (
                            <motion.div className="text-base sm:text-lg md:text-xl font-light" style={{ color: currentColors.muted }} variants={contentVariants}>
                                <motion.div
                                    className="mt-4 font-mono flex justify-center items-center"
                                    style={{ color: currentColors.link }}
                                >
                                    {typedText}
                                    <motion.span
                                        className="ml-1 h-5 w-0.5 inline-block"
                                        style={{ backgroundColor: currentColors.link }}
                                        variants={cursorVariants}
                                        animate="blinking"
                                    />
                                </motion.div>
                                <motion.p className="mt-2 text-sm opacity-70">(Développé avec passion par Mahamadou)</motion.p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default WelcomeScreen;
