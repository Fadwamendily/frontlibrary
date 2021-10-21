const port = 5000
const serverurl = 'http://localhost:' + port
export const requests = {
 
 
    userapi: serverurl + '/users',
    bookapi: serverurl + '/books',
    fileapi: serverurl + '/files',
    categoriesapi:serverurl+'/categories',
    languagesapi:serverurl+'/languages',
}