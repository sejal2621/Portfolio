import { motion } from 'framer-motion'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

const About = () => {
  const education = [
    {
      degree: 'BS Computer Science',
      institution: 'Begum Nusrat Bhutto Women University Sukkur (BNB-WU)',
      period: '2020 – 2024',
      description: 'Focused on computer science fundamentals and modern web development practices.'
    }
  ]

  const certifications = [
    {
      title: 'Complete JavaScript Programming: From Novice to Expert',
      institution: 'Udemy',
      period: '2023',
      link: 'https://www.udemy.com/certificate/UC-715be259-4fa2-40ec-81fc-f5a23bc982ce/'
    },
    {
      title: 'The Complete JavaScript Course: From Zero to Expert',
      institution: 'Udemy',
      period: '2023',
      link: 'https://www.udemy.com/certificate/UC-ca508bb6-6a18-40ea-b68f-876c908eb952/'
    },
    {
      title: 'JavaScript Fundamentals',
      institution: 'GreatStack',
      period: '2023',
      link: 'https://quiz.greatstack.dev/validate/jsbsgymigCLtIhUe29zWu3PBXf1AqjW2'
    },
    {
      title: 'Graphic Design and Mobile Application Developer',
      institution: 'IBA Sukkur',
      period: '2022',
      link: 'https://drive.google.com/file/d/1kQxG4j7ydJCJuBKRyRQwUwXAO2VEM5lG/view'
    },
    {
      title: 'Become a JavaScript Pro',
      institution: 'Udemy',
      period: '2022',
      link: 'https://www.udemy.com/course/javascript-pro/'
    },
    {
      title: 'JavaScript & React.js Bootcamp',
      institution: 'Microsoft Learn Student Ambassador',
      period: '2022',
      link: 'https://drive.google.com/file/d/1GXVs74OZuw2gCekMzkCsrk7rlqsur42f/view?usp=drive_link'
    },
    {
      title: 'MERN Stack Development Training',
      institution: 'IT Industry Readiness Bootcamp Program at Sukkur IBA University',
      period: '2022',
      link: 'https://drive.google.com/file/d/1bbs_jB8Lrf1gzZzJav7m5FBlSFpjrw_R/view?usp=drive_link'
    },
    {
      title: 'IT Industry Academia Bridge Program',
      institution: 'In collaboration with Hazza Institute of Technology',
      period: '2022',
      link: 'https://drive.google.com/file/d/15HIahqvoNXQTR88V2UBPMX9GcpVCr3no/view?usp=drive_link'
    },
    {
      title: 'Introduction to ES6+',
      institution: 'Scrimba',
      period: '2022',
      link: 'https://scrimba.com/learn/es6'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <AcademicCapIcon className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h4>
                <p className="text-primary font-medium">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <BriefcaseIcon className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                >
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-lg p-2"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="text-primary font-medium">{cert.institution}</p>
                    <p className="text-gray-600 dark:text-gray-400">{cert.period}</p>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 