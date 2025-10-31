import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { useTheme } from "next-themes";

const WelcomeScreen = ({ onWelcomeComplete }) => {
    const [phase, setPhase] = useState(0);
    const [exitAnimation, setExitAnimation] = useState(false);
    const [typedText, setTypedText] = useState("");
    const { theme } = useTheme();

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
    const portfolioUrl = "mahamadouwhile";

    const welcomeMessages = [
        "Développeur Web & Testeur Automaticien",
        "Créateur d’expériences numériques",
        "Passionné par la qualité et la performance",
    ];

    // Séquençage
    useEffect(() => {
        const timers = [
            setTimeout(() => setPhase(1), 1000),
            setTimeout(() => setPhase(2), 2000),
            setTimeout(() => {
                setExitAnimation(true);
                setTimeout(onWelcomeComplete, 1000);
            }, 5500),
        ];
        return () => timers.forEach(clearTimeout);
    }, [onWelcomeComplete]);

    // Animation du texte tapé
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
            }, 60);
            return () => clearInterval(typingInterval);
        }
    }, [phase]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: {
            scale: 1.1,
            opacity: 0,
            transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const cursorVariants = {
        blinking: {
            opacity: [0, 0, 1, 1],
            transition: { duration: 1, repeat: Infinity },
        },
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center text-center overflow-hidden"
            style={{ backgroundColor: currentColors.background }}
            variants={containerVariants}
            initial="hidden"
            animate={exitAnimation ? "exit" : "visible"}
        >
            {/* 🌈 Orbe de fond animé */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full blur-[150px]"
                style={{
                    background: `radial-gradient(circle, ${currentColors.secondary}, transparent 70%)`,
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                    rotate: [0, 360],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* 💻 Icône principale avec effet lumineux */}
            {phase >= 0 && (
                <motion.div
                    variants={fadeUp}
                    className="flex flex-col items-center mb-6"
                >
                    <motion.div
                        className="p-6 rounded-full border-2 shadow-lg"
                        style={{
                            borderColor: currentColors.secondary,
                            color: currentColors.secondary,
                        }}
                        animate={{
                            scale: [1, 1.05, 1],
                            textShadow: [
                                `0 0 10px ${currentColors.secondary}`,
                                `0 0 20px ${currentColors.secondary}`,
                                `0 0 10px ${currentColors.secondary}`,
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Code2 className="w-10 h-10" />
                    </motion.div>
                </motion.div>
            )}

            {/* 💬 Texte principal */}
            {phase >= 1 && (
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-4"
                    style={{ color: currentColors.primary }}
                    variants={fadeUp}
                >
                    Bienvenue sur{" "}
                    <motion.span
                        style={{ color: currentColors.link }}
                        animate={{
                            textShadow: [
                                `0 0 5px ${currentColors.link}`,
                                `0 0 15px ${currentColors.link}`,
                                `0 0 5px ${currentColors.link}`,
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        mon portfolio
                    </motion.span>
                </motion.h1>
            )}

            {/* 🖋️ Typing animation */}
            {phase >= 2 && (
                <motion.div variants={fadeUp} className="font-mono text-lg mt-2">
                    <motion.span style={{ color: currentColors.link }}>
                        {typedText}
                    </motion.span>
                    <motion.span
                        className="ml-1 h-5 w-0.5 inline-block"
                        style={{ backgroundColor: currentColors.link }}
                        variants={cursorVariants}
                        animate="blinking"
                    />
                    <p
                        className="text-sm opacity-70 mt-3"
                        style={{ color: currentColors.muted }}
                    >
                        (Développé avec passion par Mahamadou)
                    </p>
                </motion.div>
            )}
        </motion.div>
    );
};

export default WelcomeScreen;
