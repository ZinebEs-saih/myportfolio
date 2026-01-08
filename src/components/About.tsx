import { motion } from "framer-motion";
import { GraduationCap, Code, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="apropos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            À <span className="gradient-text">Propos</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Colonne gauche : Présentation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Je suis <span className="text-foreground font-medium">Développeuse Full Stack Java & React</span>, 
                passionnée par la conception d’applications web modernes, performantes et orientées utilisateur.
                Je poursuis actuellement un <span className="text-foreground font-medium">Master 1 en Génie Informatique & Big Data</span> 
                à l’ENSA Berrechid.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                J’ai renforcé mes compétences techniques à travers le 
                <span className="text-foreground font-medium"> Bootcamp JobinTech à l’Université Internationale Averroès (UIA)</span>, 
                une formation intensive axée sur le développement Full Stack avec 
                <span className="text-foreground font-medium"> Java, Spring Boot, React et les API REST</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Mon parcours a débuté par un <span className="text-foreground font-medium">Diplôme de Technicien Spécialisé en Développement Informatique </span> 
                obtenu à l’<span className="text-foreground font-medium"> ISTICG</span>, 
                suivi d’une <span className="text-foreground font-medium">Licence Professionnelle en Informatique Médicale</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Cette progression m’a permis d’acquérir une solide base technique, une grande rigueur analytique 
                et une capacité à travailler sous pression, notamment dans des environnements exigeants.
              </p>
            </motion.div>

            {/* Colonne droite : Cartes */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Master 1 Génie Informatique
                  </h3>
                  <p className="text-sm text-muted-foreground">
                     Big Data – ENSA Berrechid
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Bootcamp JobinTech – UIA
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Java • Spring Boot • React • API REST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Parcours Informatique
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Technicien Spécialisé (ISTICG) & Licence Professionnelle  (FSAC)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
