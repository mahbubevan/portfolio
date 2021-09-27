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

export function getProjectIds()
{
    const fullPath = path.join(dbDir,'projects.json')
    const fileContents = fs.readFileSync(fullPath,'utf8')
    const fileObject = Object.entries(JSON.parse(fileContents.toString()))
    
    return fileObject.map(val=>{
        return{
            params:{
                id:val[0]
            }
        }
    })
}

export async function getProjectDetails(id)
{
    const fullPath = path.join(dbDir,'projects.json')
    const fileContents = fs.readFileSync(fullPath,'utf8')
    const fileObject = Object.entries(JSON.parse(fileContents.toString()))
    const singleData = fileObject.filter(val=>{
        return val[0]===id
    })

    return singleData
}