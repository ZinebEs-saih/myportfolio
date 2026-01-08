import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <footer id="contact" className="py-20 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Me <span className="text-primary">Contacter</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-md mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12"
        >
          <a
            href="mailto:zineb.essaih24@gmail.com"
            className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary transition-colors group"
          >
            <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
              <Mail className="h-5 w-5" />
            </div>
            <span className="font-medium">zineb.essaih24@gmail.com</span>
          </a>

          <a
            href="tel:+212605757608"
            className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary transition-colors group"
          >
            <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
              <Phone className="h-5 w-5" />
            </div>
            <span className="font-medium">+212 605 757 608</span>
          </a>

          <div className="flex items-center gap-3 text-primary-foreground/80">
            <div className="p-3 rounded-full bg-primary/20">
              <MapPin className="h-5 w-5" />
            </div>
            <span className="font-medium">Casablanca, Maroc</span>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-primary-foreground/10 mb-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 Zineb Es-saih. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://ma.linkedin.com/in/zineb-es-saih-09891a20b"
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-primary-foreground/70 hover:text-primary-foreground" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary/20 transition-colors"
              aria-label="GitHub"
            >
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
