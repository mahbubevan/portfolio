import fs from 'fs'
import path from 'path'

const dbDir = path.join(process.cwd(),'db')

export async function projectLists(){
    const fullPath = path.join(dbDir,`projects.json`)
    const fileContents = fs.readFileSync(fullPath,'utf8')
    const fileObject = Object.entries(JSON.parse(fileContents.toString()))
    return {
        fileObject
    }
}