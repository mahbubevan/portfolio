export const shortDetails = (str,len) => {
    return str.length > len ? str.substr(0,len-1) + '...' : str 
}