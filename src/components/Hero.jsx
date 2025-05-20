import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  // Add your resume URL here
  const resumeUrl = 'https://drive.google.com/uc?export=download&id=1TOrGwuJPO7QQtarGSLyI7gQxDmtT2j76'
  
  const contactInfo = [
    {
      icon: <EnvelopeIcon className="h-5 w-5" />,
      text: 'sejalbajaj003@gmail.com',
      href: 'mailto:sejalbajaj003@gmail.com'
    },
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      text: '+92 324 3515772',
      href: 'tel:+923243515772'
    },
    {
      icon: <MapPinIcon className="h-5 w-5" />,
      text: 'Karachi, Sindh',
      href: 'https://maps.google.com/?q=Karachi+Sindh'
    }
  ]

  const handleResumeClick = (e) => {
    e.preventDefault()
    window.location.href = resumeUrl
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-light to-white dark:from-dark dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                Available for opportunities
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Hi, I'm{' '}
                <span className="text-primary relative">
                  Sejal Bajaj
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute -bottom-2 left-0 h-1 bg-primary"
                  />
                </span>
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
              Frontend Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
              Passionate Frontend Developer with hands-on experience in building responsive web applications using JavaScript, React.js, and modern frameworks. Known for delivering pixel-perfect UI and optimizing performance.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://linkedin.com/in/sejal-bajaj"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group flex items-center justify-center min-w-[120px]"
              >
                LinkedIn
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://github.com/sejal2621"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-secondary hover:bg-secondary/90 group flex items-center justify-center min-w-[120px]"
              >
                GitHub
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <button
                onClick={handleResumeClick}
                className="btn-primary bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 group flex items-center justify-center min-w-[120px]"
              >
                <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                Resume
              </button>
            </div>

            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <span className="text-primary group-hover:scale-110 transition-transform">
                    {info.icon}
                  </span>
                  <span>{info.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary p-1 animate-spin-slow group-hover:animate-none transition-all duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              
              {/* Profile image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <img
                  src="/profile/profile.jpeg"
                  alt="Sejal Bajaj"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback initials */}
                <div className="absolute inset-0 hidden items-center justify-center bg-gray-200 dark:bg-gray-700">
                  <span className="text-4xl font-bold text-gray-400 dark:text-gray-500">SB</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors duration-300" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl group-hover:bg-secondary/30 transition-colors duration-300" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full mx-auto relative">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 