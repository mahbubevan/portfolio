import fs from 'fs'
import data from '../db/projects.json'

export async function projectLists(){
    fs.readFileSync(data,(err,fileDescriptior)=>{
        if(!err && fileDescriptior){
            const dataObject = JSON.parse(fileDescriptior)
            return dataObject
        }else{
            false
        }
    })
    
}