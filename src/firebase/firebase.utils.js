import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDuThFGkXAhk7W15-f63Qet_7jpODR7UR4',
  authDomain: 'crwn-db-da334.firebaseapp.com',
  databaseURL: 'https://crwn-db-da334.firebaseio.com',
  projectId: 'crwn-db-da334',
  storageBucket: '',
  messagingSenderId: '978645061850',
  appId: '1:978645061850:web:f1c01323364aac8456d5e3',
  measurementId: 'G-NFB6Y87CZK'
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()
  
  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.error('Error creating user', err.message)
    } 
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
