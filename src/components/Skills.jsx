import { motion } from 'framer-motion'
import { CodeBracketIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript (ES6)', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Express.js', level: 75 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3 / Tailwind CSS', level: 90 },
    { name: 'Bootstrap 5', level: 85 },
    { name: 'PHP', level: 70 },
    { name: 'SQL / MySQL', level: 75 },
    { name: 'Firebase', level: 70 },
    { name: 'RESTful APIs', level: 80 },
    { name: 'Git / GitHub', level: 85 }
  ]

  const softSkills = [
    'Problem Solving',
    'Critical Thinking',
    'Team Collaboration',
    'Communication Skills',
    'Attention to Detail',
    'Adaptability'
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <CodeBracketIcon className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Technical Skills</h3>
            </div>

            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <UserGroupIcon className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Soft Skills</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-gray-700 dark:text-gray-300 text-center font-medium">
                    {skill}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills 