import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_BASE } from 'api'

import styles from './Login.module.css'

import Input from 'components/Input'
import { UserContext } from 'context/User'

export default function Login(){
  const navigate = useNavigate()
  const { name, setName, email, setEmail, password, setPassword, setId } = useContext(UserContext)
  

  const createAccount = async () => {

    const params = {
      email: email,
      name: {
        firstname: name,
        lastname: ''
      },
      password: password
    }

    await axios.post(`${API_BASE}/users`, params).then((resp) => {
     
     if(resp.status === 200){
      setId(resp.data.id)
      navigate('/')
     }
     
    })
  }

  return(
    <section className={styles.sign}>     
      <div className={styles.form_login}>
        <div className="w-full h-100">            
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Create your fake account</h1>
          <form className="mt-6">
            <Input 
              label="Name" 
              type="text" 
              placeholder="Enter name" 
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="Enter email address" 
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input 
              label="Password" 
              type="password" 
              placeholder="Enter password" 
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <button className={styles.btn_login} onClick={() => createAccount()}>
              Create
            </button>
          </form>               
        </div>
      </div>    
    </section>
  )
}