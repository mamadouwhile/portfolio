import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

export const NotFound = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen px-6 bg-background text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6"
            >
                {/* Big 404 Number */}
                <motion.h1
                    className="text-[8rem] sm:text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 leading-none"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    404
                </motion.h1>

                {/* Text and Message */}
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    Page non trouvée
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto text-base sm:text-lg">
                    Oups 😅 Il semble que la page que vous cherchez n’existe pas ou a été déplacée.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <Link
                        to="/"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-medium shadow-lg shadow-primary/20 hover:opacity-90 transition-all duration-300"
                    >
                        <Home className="h-5 w-5" />
                        Retour à l’accueil
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-accent hover:bg-accent/40 text-foreground font-medium transition-all duration-300"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Page précédente
                    </button>
                </div>
            </motion.div>

            {/* Decorative floating shapes (optional aesthetic touch) */}
            <motion.div
                className="absolute inset-0 -z-10 flex justify-center items-center overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 1.2 }}
            >
                <div className="w-[400px] h-[400px] bg-gradient-to-r from-primary to-purple-600 rounded-full blur-[120px]" />
            </motion.div>
        </section>
    );
};
