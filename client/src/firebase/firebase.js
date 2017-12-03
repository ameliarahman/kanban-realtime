const firebase = require('firebase')
const config = {
  apiKey: 'AIzaSyCl0CjoR-u6a38DNWu447cuZg-hq-sokCM',
  authDomain: 'kanban-36e62.firebaseapp.com',
  databaseURL: 'https://kanban-36e62.firebaseio.com',
  projectId: 'kanban-36e62',
  storageBucket: 'kanban-36e62.appspot.com',
  messagingSenderId: '174555718717'
}
firebase.initializeApp(config)

const db = firebase.database()

module.exports = db
