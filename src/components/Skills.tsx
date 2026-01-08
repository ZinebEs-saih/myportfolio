import { motion } from "framer-motion";

const skills = [
  // Langages
  { name: "Java", color: "bg-orange-500" },
  { name: "JavaScript", color: "bg-yellow-400" },
  { name: "HTML", color: "bg-orange-600" },
  { name: "CSS", color: "bg-blue-500" },

  // Frameworks
  { name: "Spring Boot", color: "bg-green-500" },
  { name: "React", color: "bg-sky-500" },

  // Bases de données
  { name: "MySQL", color: "bg-blue-600" },
  { name: "SQL Server", color: "bg-red-500" },

  // Architecture & concepts
  { name: "API REST", color: "bg-indigo-500" },
  { name: "MVC", color: "bg-purple-500" },

  // Modélisation
  { name: "UML", color: "bg-pink-500" },
  { name: "Merise", color: "bg-rose-500" },

  // Outils
  { name: "Git", color: "bg-orange-600" },
  { name: "GitHub", color: "bg-gray-700" },
  { name: "Postman", color: "bg-orange-400" },
  { name: "IntelliJ IDEA", color: "bg-red-600" },
  { name: "VS Code", color: "bg-blue-400" },
];

const Skills = () => {
  return (
    <section id="competences" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group"
            >
              <div className="flex items-center gap-3 px-6 py-4 bg-card rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300 border border-border/50">
                <div className={`w-3 h-3 rounded-full ${skill.color}`} />
                <span className="font-medium text-foreground">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
