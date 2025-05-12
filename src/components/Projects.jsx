import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo } from 'react'
import { 
  CodeBracketIcon, 
  ArrowTopRightOnSquareIcon, 
  StarIcon, 
  EyeIcon, 
  CalendarIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('date')
  const [sortOrder, setSortOrder] = useState('desc')
  const [visibleProjects, setVisibleProjects] = useState(6)

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my work and skills. Built with React.js and Tailwind CSS, featuring smooth animations using Framer Motion, dark mode support, and a contact form with Formspree integration. Includes sections for projects, skills, experience, and education.',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Formspree', 'Vite', 'React Router'],
      image: '/projects/portfolio.png',
      github: 'https://github.com/sejal2621/portfolio',
      live: 'https://sejalbajaj.netlify.app',
      featured: true,
      category: 'web',
      highlights: [
        'Responsive design with Tailwind CSS',
        'Dark/Light mode toggle',
        'Smooth page transitions with Framer Motion',
        'Contact form with Formspree integration',
        'Project showcase with filtering and search'
      ],
      date: '2024',
      views: '500+'
    },
    {
      title: 'Weather App',
      description: 'A responsive weather application built with vanilla JavaScript that provides real-time weather information. Features include city search, current weather display with temperature, humidity, and wind speed, and automatic geolocation detection. Uses OpenWeatherMap API for accurate weather data and provides a clean, intuitive interface.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeatherMap API', 'Geolocation API', 'Fetch API'],
      image: '/projects/weather-app.png',
      github: 'https://github.com/sejal2621/weather-app',
      live: 'https://sejal2621.github.io/weather-app/',
      featured: true,
      category: 'web',
      highlights: [
        'Real-time weather data with OpenWeatherMap API',
        'City search functionality',
        'Current weather display (temperature, humidity, wind)',
        'Geolocation support for local weather',
        'Responsive design with modern UI'
      ],
      date: '2023',
      views: '1.2k+'
    },
    {
      title: 'Notes App',
      description: 'A modern notes application built with React.js that allows users to create, edit, and organize their notes efficiently. Features include note categorization, search functionality, and local storage persistence. The app provides a clean, intuitive interface with real-time updates.',
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Local Storage', 'Context API'],
      image: '/projects/notes-app.png',
      github: 'https://github.com/sejal2621/notes-app',
      live: 'https://sejal2621.github.io/notes-app/',
      featured: true,
      category: 'web',
      highlights: [
        'Create, edit, and delete notes',
        'Note categorization and organization',
        'Search functionality',
        'Local storage persistence',
        'Responsive and modern UI'
      ],
      date: '2024',
      views: '300+'
    },
    {
      title: 'Music App',
      description: 'A feature-rich music player application that allows users to play, pause, and manage their music collection. Built with JavaScript, it includes audio controls, playlist management, and a modern, responsive design. Features include audio visualization and keyboard shortcuts.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Web Audio API', 'Local Storage'],
      image: '/projects/music-app.png',
      github: 'https://github.com/sejal2621/music-app',
      live: 'https://sejal2621.github.io/music-app/',
      featured: true,
      category: 'web',
      highlights: [
        'Audio playback controls',
        'Playlist management',
        'Audio visualization',
        'Keyboard shortcuts',
        'Responsive design'
      ],
      date: '2024',
      views: '400+'
    },
    {
      title: 'Todo App',
      description: 'A feature-rich todo application that helps users manage their tasks efficiently. Built with vanilla JavaScript, it includes task creation, editing, and deletion with local storage persistence. Features a clean, intuitive interface with responsive design for easy task management.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage API', 'DOM Manipulation'],
      image: '/projects/to-do-list.png',
      github: 'https://github.com/sejal2621/todo-app',
      live: 'https://sejal2621.github.io/todo-app/',
      featured: false,
      category: 'web',
      highlights: [
        'CRUD operations for tasks',
        'Task creation and management',
        'Local storage for data persistence',
        'Responsive and intuitive UI',
        'Clean and modern design'
      ],
      date: '2023',
      views: '800+'
    },
    {
      title: 'Password Generator',
      description: 'A secure random password generator that creates strong, customizable passwords. Built with JavaScript, it allows users to specify password length and include/exclude different character types. Features include copy-to-clipboard functionality and password strength indicators.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Clipboard API', 'DOM Manipulation'],
      image: '/projects/random-password-generator.png',
      github: 'https://github.com/sejal2621/password-generator',
      live: 'https://sejal2621.github.io/password-generator/',
      featured: false,
      category: 'web',
      highlights: [
        'Customizable password length',
        'Character type selection',
        'Copy to clipboard feature',
        'Password strength indicator',
        'Clean and intuitive interface'
      ],
      date: '2023',
      views: '500+'
    },
    {
      title: 'Age Calculator',
      description: 'An interactive age calculator that computes precise age based on birth date. Built with JavaScript, it provides detailed age breakdown including years, months, and days. Features include input validation, real-time calculation, and a user-friendly interface.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Date API', 'Form Validation'],
      image: '/projects/age-calculator.png',
      github: 'https://github.com/sejal2621/age-calculator',
      live: 'https://sejal2621.github.io/age-calculator/',
      featured: false,
      category: 'web',
      highlights: [
        'Precise age calculation',
        'Detailed age breakdown',
        'Input validation',
        'Real-time updates',
        'Clean and intuitive interface'
      ],
      date: '2024',
      views: '250+'
    },
    {
      title: 'Toast Notification',
      description: 'A customizable toast notification system built with JavaScript that provides elegant, non-intrusive notifications. Features include different notification types (success, error, warning, info), auto-dismiss, and smooth animations. Easily integrable into any web application.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation', 'CSS Animations'],
      image: '/projects/toast-notification.png',
      github: 'https://github.com/sejal2621/toast-notification',
      live: 'https://sejal2621.github.io/toast-notification/',
      featured: false,
      category: 'web',
      highlights: [
        'Multiple notification types',
        'Customizable appearance',
        'Auto-dismiss functionality',
        'Smooth animations',
        'Easy integration'
      ],
      date: '2024',
      views: '200+'
    },
    {
      title: 'QR Code Generator',
      description: 'A user-friendly QR code generator that creates QR codes for URLs, text, and contact information. Built with JavaScript, it provides instant QR code generation with the ability to download the generated codes. Features include error handling and a clean, minimalist interface.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'QR Code API', 'DOM Manipulation'],
      image: '/projects/qr-code-generator.png',
      github: 'https://github.com/sejal2621/qr-code-generator',
      live: 'https://sejal2621.github.io/qr-code-generator/',
      featured: false,
      category: 'web',
      highlights: [
        'Instant QR code generation',
        'Support for URLs and text',
        'Download generated QR codes',
        'Error handling and validation',
        'Clean, minimalist interface'
      ],
      date: '2023',
      views: '300+'
    },
    {
      title: 'Tic Tac Toe Game',
      description: 'A classic Tic Tac Toe game built with JavaScript, featuring a clean interface and game state management. Includes player turn indicators, win detection, and a reset option. The game is responsive and works seamlessly across all devices.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation', 'Game Logic'],
      image: '/projects/tic-tac-toe.png',
      github: 'https://github.com/sejal2621/tic-tac-toe',
      live: 'https://sejal2621.github.io/tic-tac-toe/',
      featured: false,
      category: 'web',
      highlights: [
        'Interactive game board',
        'Player turn indicators',
        'Win detection',
        'Game reset functionality',
        'Responsive design'
      ],
      date: '2023',
      views: '200+'
    },
    {
      title: 'Rock Paper Scissors Game',
      description: 'An interactive Rock Paper Scissors game with a modern UI and engaging animations. Features include score tracking, game history, and computer opponent with random choice generation. Built with vanilla JavaScript for optimal performance.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation', 'Game Logic'],
      image: '/projects/rock-paper-scissors-game.png',
      github: 'https://github.com/sejal2621/rock-paper-scissors',
      live: 'https://sejal2621.github.io/rock-paper-scissors/',
      featured: false,
      category: 'web',
      highlights: [
        'Interactive game interface',
        'Score tracking',
        'Game history',
        'Computer opponent',
        'Responsive design'
      ],
      date: '2023',
      views: '150+'
    },
    {
      title: 'Quiz App',
      description: 'An interactive quiz application that tests users knowledge with multiple-choice questions. Features include score tracking, timer, and immediate feedback. The app provides a fun and engaging way to learn and test knowledge.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation', 'Local Storage'],
      image: '/projects/quiz-app.png',
      github: 'https://github.com/sejal2621/quiz-app',
      live: 'https://sejal2621.github.io/quiz-app/',
      featured: false,
      category: 'web',
      highlights: [
        'Multiple choice questions',
        'Score tracking',
        'Timer functionality',
        'Immediate feedback',
        'Responsive design'
      ],
      date: '2023',
      views: '180+'
    },
    {
      title: 'Calculator',
      description: 'A fully functional calculator application with a modern, clean interface. Features include basic arithmetic operations, keyboard support, and a responsive design. Built with JavaScript for smooth calculations and user interaction.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation', 'Event Handling'],
      image: '/projects/calculator.png',
      github: 'https://github.com/sejal2621/calculator',
      live: 'https://sejal2621.github.io/calculator/',
      featured: false,
      category: 'web',
      highlights: [
        'Basic arithmetic operations',
        'Keyboard support',
        'Clear and delete functions',
        'Error handling',
        'Responsive design'
      ],
      date: '2023',
      views: '250+'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'featured', label: 'Featured' }
  ]

  const sortOptions = [
    { id: 'date', label: 'Date' },
    { id: 'views', label: 'Views' },
    { id: 'title', label: 'Title' }
  ]

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 3)
  }

  const filteredAndSortedProjects = useMemo(() => {
    // First filter the projects
    let filtered = projects
    if (activeFilter === 'featured') {
      filtered = projects.filter(project => project.featured)
    } else if (activeFilter !== 'all') {
      filtered = projects.filter(project => project.category === activeFilter)
    }

    // Then apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query)) ||
        project.highlights.some(highlight => highlight.toLowerCase().includes(query))
      )
    }

    // Finally sort the results
    return [...filtered].sort((a, b) => {
      let comparison = 0
      switch (sortBy) {
        case 'date':
          comparison = a.date.localeCompare(b.date)
          break
        case 'views':
          comparison = parseInt(a.views) - parseInt(b.views)
          break
        case 'title':
          comparison = a.title.localeCompare(b.title)
          break
        default:
          comparison = 0
      }
      return sortOrder === 'asc' ? comparison : -comparison
    })
  }, [activeFilter, searchQuery, sortBy, sortOrder])

  const displayedProjects = filteredAndSortedProjects.slice(0, visibleProjects)
  const hasMoreProjects = visibleProjects < filteredAndSortedProjects.length

  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const projectCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const imageVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        {/* Search and Filter Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <FunnelIcon className="h-5 w-5" />
                Filter
              </button>
              <button
                onClick={toggleSortOrder}
                className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                {sortOrder === 'asc' ? (
                  <ArrowUpIcon className="h-5 w-5" />
                ) : (
                  <ArrowDownIcon className="h-5 w-5" />
                )}
                Sort
              </button>
            </div>
          </div>
        </motion.div>

        {/* Project Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={projectCardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    variants={imageVariants}
                    initial="initial"
                    whileHover="hover"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  />
                  {project.featured && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium"
                    >
                      Featured
                    </motion.div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index }}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        {project.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <EyeIcon className="h-4 w-4" />
                        {project.views}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                        title="View Code"
                      >
                        <CodeBracketIcon className="h-5 w-5" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                          title="Live Demo"
                        >
                          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMoreProjects && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center"
          >
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={loadMoreProjects}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Load More Projects
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <ChevronDownIcon className="h-5 w-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}

        {filteredAndSortedProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400">
              No projects found matching your search criteria.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects 