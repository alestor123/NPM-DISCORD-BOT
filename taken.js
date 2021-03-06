var axios = require('axios');
module.exports = async msg=> {
if(msg.content.startsWith('avail')&&msg.content.split(' ')[1]){
try {
if(await axios.get(`https://registry.npmjs.org/${msg.content.split(' ')[1]}`)) msg.reply('Its taken')}
catch(err) {
if(err.response.status==404) msg.reply('Yup its available')
}}}