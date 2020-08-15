import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const Sentencer = require('sentencer')

const generateRandomAdjective = () => Sentencer.make('{{ adjective }}')

export { generateRandomAdjective }
