import multer from 'multer'
import { v4 } from 'uuid'
import { extname, resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename: (request, file, callback) => {
      const fileName = `${v4()}${extname(file.originalname)}`
      return callback(null, fileName)
    },
  }),
}