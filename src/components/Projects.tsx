import { motion } from "framer-motion";
import { ExternalLink, Home, Package, Users } from "lucide-react";

const projects = [
  {
    title: "Plateforme de Service à Domicile",
    description: "Application Full Stack permettant de connecter des prestataires de services à domicile avec des clients. Interface intuitive et système de réservation en temps réel.",
    tech: ["Spring Boot", "React", "MySQL"],
    icon: Home,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Gestion de Stock Hospitalier",
    description: "Application web de gestion des stocks pour le secteur hospitalier. Suivi en temps réel des inventaires, alertes automatiques et rapports détaillés.",
    tech: ["Laravel", "MySQL", "PHP"],
    icon: Package,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Système de Gestion Client",
    description: "Solution CRM complète pour la gestion de la relation client. Tableau de bord analytique, suivi des interactions et automatisation des tâches.",
    tech: ["ASP.NET", "SQL Server", "C#"],
    icon: Users,
    gradient: "from-orange-500 to-red-500",
  },
];

const Projects = () => {
  return (
    <section id="projets" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="group h-full bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 border border-border/50">
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
