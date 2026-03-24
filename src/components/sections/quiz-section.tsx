'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShoppingBag, 
  TrendingUp, 
  Globe,
  Users,
  Target,
  Star
} from 'lucide-react'

interface Question {
  id: number
  question: string
  options: {
    text: string
    icon?: React.ReactNode
    scores: {
      basis: number
      seo: number
      shop: number
    }
  }[]
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Was ist das Hauptziel Ihrer Website?',
    options: [
      {
        text: 'Online-Präsenz & Informationen für Kunden',
        icon: <Globe className="w-5 h-5" />,
        scores: { basis: 3, seo: 1, shop: 0 }
      },
      {
        text: 'Neue Kunden über Google gewinnen',
        icon: <Users className="w-5 h-5" />,
        scores: { basis: 1, seo: 3, shop: 0 }
      },
      {
        text: 'Produkte direkt online verkaufen',
        icon: <ShoppingBag className="w-5 h-5" />,
        scores: { basis: 0, seo: 0, shop: 3 }
      }
    ]
  },
  {
    id: 2,
    question: 'Benötigen Sie einen Online-Shop?',
    options: [
      {
        text: 'Nein, nur eine Informationsseite',
        scores: { basis: 3, seo: 1, shop: 0 }
      },
      {
        text: 'Vielleicht später möglich',
        scores: { basis: 1, seo: 2, shop: 1 }
      },
      {
        text: 'Ja, ich möchte Produkte verkaufen!',
        scores: { basis: 0, seo: 0, shop: 3 }
      }
    ]
  },
  {
    id: 3,
    question: 'Wie wichtig ist, dass Kunden Sie auf Google finden?',
    options: [
      {
        text: 'Nicht wichtig - meine Kunden kennen mich',
        icon: <Target className="w-5 h-5" />,
        scores: { basis: 3, seo: 0, shop: 0 }
      },
      {
        text: 'Etwas wichtig - gefunden werden ist gut',
        icon: <TrendingUp className="w-5 h-5" />,
        scores: { basis: 1, seo: 3, shop: 1 }
      },
      {
        text: 'Sehr wichtig - ich brauche neue Kunden!',
        icon: <Star className="w-5 h-5" />,
        scores: { basis: 0, seo: 3, shop: 1 }
      }
    ]
  },
  {
    id: 4,
    question: 'Welche Funktionen sind für Sie wichtig?',
    options: [
      {
        text: 'Kontaktformular, Öffnungszeiten, Leistungen',
        scores: { basis: 3, seo: 1, shop: 0 }
      },
      {
        text: 'Blog, News, Google Ranking verbessern',
        scores: { basis: 0, seo: 3, shop: 0 }
      },
      {
        text: 'Produktkatalog, Warenkorb, Zahlungen',
        scores: { basis: 0, seo: 0, shop: 3 }
      }
    ]
  },
  {
    id: 5,
    question: 'Wie würden Sie Ihr Unternehmen beschreiben?',
    options: [
      {
        text: 'Lokales Geschäft, Handwerker oder Dienstleister',
        icon: <Globe className="w-5 h-5" />,
        scores: { basis: 2, seo: 2, shop: 0 }
      },
      {
        text: 'Wachsendes Unternehmen mit Expansionsplänen',
        icon: <TrendingUp className="w-5 h-5" />,
        scores: { basis: 0, seo: 3, shop: 1 }
      },
      {
        text: 'Online-Shop oder Produktverkauf geplant',
        icon: <ShoppingBag className="w-5 h-5" />,
        scores: { basis: 0, seo: 0, shop: 3 }
      }
    ]
  }
]

const packages = {
  basis: {
    name: 'Basis',
    price: '150',
    description: 'Perfekt für kleine Unternehmen, die eine professionelle Online-Präsenz benötigen.',
    features: [
      'Responsive Website Design',
      'Bis zu 5 Seiten',
      'Kontaktformular',
      'Mobile optimiert',
      'SSL-Zertifikat'
    ],
    link: 'https://buy.stripe.com/aFa7sK1znal46Yf4zOgMw0k',
    color: 'from-emerald-500 to-teal-500'
  },
  seo: {
    name: 'SEO',
    price: '199',
    description: 'Ideal für Unternehmen, die online gefunden werden wollen und mehr Kunden generieren möchten.',
    features: [
      'Alles aus Basis',
      'SEO-Optimierung',
      'Blog-System',
      'Google Analytics',
      'Performance-Optimierung'
    ],
    link: 'https://buy.stripe.com/14AeVc0vjctc1DVgiwgMw0l',
    color: 'from-orange-500 to-amber-500'
  },
  shop: {
    name: 'Shop',
    price: '279',
    description: 'Komplette E-Commerce-Lösung für Unternehmen, die Produkte online verkaufen möchten.',
    features: [
      'Alles aus SEO',
      'Online-Shop System',
      'Produktverwaltung',
      'Zahlungsintegration',
      'Bestellverwaltung'
    ],
    link: 'https://buy.stripe.com/3cI28qfqdbp8ciz5DSgMw0m',
    color: 'from-purple-500 to-pink-500'
  }
}

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResult, setShowResult] = useState(false)
  const [scores, setScores] = useState({ basis: 0, seo: 0, shop: 0 })

  const handleAnswer = (questionId: number, optionIndex: number) => {
    const newAnswers = { ...answers, [questionId]: optionIndex }
    setAnswers(newAnswers)

    // Calculate scores
    const newScores = { basis: 0, seo: 0, shop: 0 }
    Object.entries(newAnswers).forEach(([qId, optIdx]) => {
      const question = questions.find(q => q.id === parseInt(qId))
      if (question) {
        const option = question.options[optIdx]
        newScores.basis += option.scores.basis
        newScores.seo += option.scores.seo
        newScores.shop += option.scores.shop
      }
    })
    setScores(newScores)

    // Move to next question or show result
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300)
    } else {
      setTimeout(() => setShowResult(true), 300)
    }
  }

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      const newAnswers = { ...answers }
      delete newAnswers[questions[currentQuestion].id]
      setAnswers(newAnswers)
      
      // Recalculate scores
      const newScores = { basis: 0, seo: 0, shop: 0 }
      Object.entries(newAnswers).forEach(([qId, optIdx]) => {
        const question = questions.find(q => q.id === parseInt(qId))
        if (question) {
          const option = question.options[optIdx]
          newScores.basis += option.scores.basis
          newScores.seo += option.scores.seo
          newScores.shop += option.scores.shop
        }
      })
      setScores(newScores)
    }
    setShowResult(false)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResult(false)
    setScores({ basis: 0, seo: 0, shop: 0 })
  }

  const getResult = () => {
    if (scores.shop >= scores.seo && scores.shop >= scores.basis) {
      return 'shop'
    } else if (scores.seo >= scores.basis) {
      return 'seo'
    }
    return 'basis'
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welches Paket passt zu Ihnen?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Beantworten Sie ein paar kurze Fragen und wir empfehlen Ihnen das perfekte Paket für Ihre Bedürfnisse.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden">
                  <CardContent className="p-8">
                    {/* Progress */}
                    <div className="mb-8">
                      <div className="flex justify-between text-sm text-slate-300 mb-2">
                        <span>Frage {currentQuestion + 1} von {questions.length}</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="h-2 bg-slate-700 [&>div]:bg-gradient-to-r [&>div]:from-emerald-500 [&>div]:to-teal-500" />
                    </div>

                    {/* Question */}
                    <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                      {questions[currentQuestion].question}
                    </h3>

                    {/* Options */}
                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((option, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleAnswer(questions[currentQuestion].id, index)}
                          className={`w-full p-4 rounded-xl text-left transition-all duration-200 flex items-center gap-4 ${
                            answers[questions[currentQuestion].id] === index
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                              : 'bg-white/5 hover:bg-white/15 text-white border border-white/10'
                          }`}
                        >
                          {option.icon && (
                            <span className="flex-shrink-0">{option.icon}</span>
                          )}
                          <span className="font-medium">{option.text}</span>
                        </motion.button>
                      ))}
                    </div>

                    {/* Back button */}
                    {currentQuestion > 0 && (
                      <Button
                        variant="ghost"
                        onClick={goBack}
                        className="mt-6 text-slate-300 hover:text-white"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Zurück
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden">
                  <CardContent className="p-8">
                    {/* Success header */}
                    <div className="text-center mb-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.2 }}
                        className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <CheckCircle2 className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Ihr perfektes Paket!
                      </h3>
                      <p className="text-slate-300">
                        Basierend auf Ihren Antworten empfehlen wir Ihnen:
                      </p>
                    </div>

                    {/* Recommended package */}
                    {(() => {
                      const result = getResult()
                      const pkg = packages[result]
                      return (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="bg-gradient-to-br from-white/20 to-white/5 rounded-2xl p-6 border border-white/20 mb-6"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-3xl font-bold text-white">{pkg.name}</h4>
                            <div className="text-right">
                              <span className="text-4xl font-bold text-white">CHF {pkg.price}</span>
                              <span className="text-slate-300">/Monat</span>
                            </div>
                          </div>
                          <p className="text-slate-300 mb-4">{pkg.description}</p>
                          
                          <ul className="space-y-2 mb-6">
                            {pkg.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-slate-200">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          <Button
                            asChild
                            className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-semibold py-6 text-lg`}
                          >
                            <a href={pkg.link} target="_blank" rel="noopener noreferrer">
                              Jetzt starten
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </a>
                          </Button>
                        </motion.div>
                      )
                    })()}

                    {/* Score breakdown */}
                    <div className="bg-white/5 rounded-xl p-4 mb-6">
                      <h5 className="text-sm font-medium text-slate-300 mb-3 text-center">Ihre Ergebnisse im Überblick</h5>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { name: 'Basis', score: scores.basis, color: 'from-emerald-500 to-teal-500' },
                          { name: 'SEO', score: scores.seo, color: 'from-orange-500 to-amber-500' },
                          { name: 'Shop', score: scores.shop, color: 'from-purple-500 to-pink-500' }
                        ].map((pkg) => (
                          <div key={pkg.name} className="text-center">
                            <div className={`text-2xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                              {pkg.score}
                            </div>
                            <div className="text-xs text-slate-400">{pkg.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Restart button */}
                    <Button
                      variant="outline"
                      onClick={resetQuiz}
                      className="w-full border-white/20 text-white hover:bg-white/10"
                    >
                      Quiz wiederholen
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
