import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitter,
    Github,
    Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const validateForm = () => {
        if (!formData.name.trim()) {
            toast({ title: "Nom requis", variant: "destructive" });
            return false;
        }
        if (!formData.email.trim()) {
            toast({ title: "Email requis", variant: "destructive" });
            return false;
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            toast({ title: "Format d’email invalide", variant: "destructive" });
            return false;
        }
        if (!formData.message.trim() || formData.message.length < 10) {
            toast({
                title: "Le message doit contenir au moins 10 caractères",
                variant: "destructive"
            });
            return false;
        }
        return true;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xwpbojaj", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                toast({
                    title: "Message envoyé 🎉",
                    description: "Je vous répondrai dans les 24h.",
                    variant: "success",
                    className:
                        "bg-green-600 text-white dark:bg-green-500 border border-green-700 shadow-lg"
                });
                setFormData({ name: "", email: "", message: "" });
            } else throw new Error("Échec de l’envoi du message");
        } catch (error) {
            toast({
                title: "Une erreur est survenue",
                description:
                    "Réessayez ou envoyez-moi directement un mail à mdembele2711@gmail.com",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const socials = [
        {
            icon: Linkedin,
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/mahamadou-dembele/"
        },
        { icon: Twitter, label: "Twitter", url: "#" },
        { icon: Github, label: "GitHub", url: "https://github.com/mamadouwhile" },
        { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/mahdutern0" }
    ];

    return (
        <section
            id="contact"
            className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background relative"
        >
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary mb-3 sm:mb-4">
            Restons en contact
          </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                        Contactez-moi
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Vous avez un projet, une question ou souhaitez simplement échanger ? Écrivez-moi 👇
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Infos contact */}
                    <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-secondary/20 to-background border border-border space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-primary"></span>
                            Mes coordonnées
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 hover:bg-accent/30 rounded-xl transition-all">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <a
                                        href="mailto:mdembele2711@gmail.com"
                                        className="text-base font-medium hover:text-primary transition-colors"
                                    >
                                        mdembele2711@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 hover:bg-accent/30 rounded-xl transition-all">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Téléphone</p>
                                    <a
                                        href="tel:+33753813545"
                                        className="text-base font-medium hover:text-primary transition-colors"
                                    >
                                        +33 7 53 81 35 45
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 hover:bg-accent/30 rounded-xl transition-all">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Localisation</p>
                                    <span className="text-base font-medium">Angers, France</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <h4 className="font-medium mb-3 text-sm text-muted-foreground">Réseaux</h4>
                            <div className="flex gap-3">
                                {socials.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl bg-accent hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-primary"></span>
                            Envoyez-moi un message
                        </h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium text-muted-foreground"
                                >
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-1 px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/50 transition-all text-base"
                                    placeholder="Ex: Mahamadou Dembele"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium text-muted-foreground"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-1 px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/50 transition-all text-base"
                                    placeholder="exemple@email.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium text-muted-foreground"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full mt-1 px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/50 transition-all resize-none text-base"
                                    placeholder="Bonjour Mahamadou, je souhaite te proposer un stage..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20",
                                    isSubmitting && "opacity-80 cursor-not-allowed"
                                )}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        Envoi en cours...
                                    </>
                                ) : (
                                    <>
                                        Envoyer
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
