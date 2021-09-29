import fs from 'fs'
import path from 'path'

const dbDir = path.join(process.cwd(),'db')

export async function additionaLists(){
    const fullPath = path.join(dbDir,`additional.json`)
    const fileContents = fs.readFileSync(fullPath,'utf8')
    const fileObject = Object.entries(JSON.parse(fileContents.toString()))
    return {
        fileObject
    }
}