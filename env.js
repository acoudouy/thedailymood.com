export const projectName = 'Minty'

export const tagline = 'Turn Your Ideas Into Videos in Minutes with AI'

export const shortDescription = `Minty.so is an AI-powered service that simplifies video creation. Transform articles, briefs, or prompts into editable storyboards and professional videos with AI voice-over, stock footage, and more. Perfect for SEO agencies, content creators, and journalists aiming to produce engaging social media videos effortlessly.`

export const domain = 'https://minty.so'

export const logoUrl = '/logo.png'

export const URLBACK =
  process.env.NODE_ENV === 'production'
    ? 'https://backend.axolo.co/'
    : 'http://localhost:1337/'

export const URLFRONT =
  process.env.NODE_ENV === 'production' ? 'https://minty.so/' : 'http://localhost:3000/'
