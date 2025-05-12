import { motion } from 'framer-motion'
import { BriefcaseIcon } from '@heroicons/react/24/outline'

const Experience = () => {
  const experiences = [
    {
      title: 'Freelance Web Developer',
      company: 'Upwork · Remote',
      period: '2022 – 2025',
      responsibilities: [
        'Developed responsive, scalable, and user-centric websites using React.js, JavaScript, HTML, CSS, and modern UI frameworks.',
        'Delivered custom web solutions to clients in the USA, UK, and Singapore, aligning with their business goals.',
        'Ensured on-time, on-budget delivery with a 95% client satisfaction rate.',
        'Fostered strong client relationships, resulting in a 20% increase in repeat business and referrals.'
      ]
    }
  ]

  const extracurricular = [
    {
      title: 'Co Captain',
      organization: 'University Badminton Team',
      period: '2022 – 2023',
      description: 'Led and managed the university badminton team, organizing practices and coordinating team activities.'
    },
    {
      title: 'Personal Interest',
      organization: 'Reading',
      period: 'Ongoing',
      description: 'Enjoys reading fiction and self-growth books to continuously learn and develop personally.'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3">
              <BriefcaseIcon className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {exp.company}
                </p>
                <p className="text-primary mt-2">{exp.period}</p>
                <ul className="mt-4 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-2 text-gray-600 dark:text-gray-400"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Extracurricular Activities */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3">
              <BriefcaseIcon className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Extracurricular Activities</h3>
            </div>

            {extracurricular.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {activity.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {activity.organization}
                </p>
                <p className="text-primary mt-2">{activity.period}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience 