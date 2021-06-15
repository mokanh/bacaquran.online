import fs from 'fs'
import path from 'path'
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

export default (req, res) => {
  const fileContent = fs.readFileSync(path.join(serverRuntimeConfig.PROJECT_ROOT, `./data/surah/${req}.json`), 'utf8')
  return fileContent
}