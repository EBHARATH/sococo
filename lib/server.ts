import app from './app';
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log('express server is listening on port' +PORT);
});