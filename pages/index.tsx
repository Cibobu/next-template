import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import LazyComponent from '../components/LazyComponent'
import { useDebounce } from '../helper'
import { useTodoServices } from '../services'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const router = useRouter()
  const todoServices = useTodoServices()

  const [val, setVal] = useState("")
  const [status, setStatus] = useState("")

  // callback params harus berurutan dengan params yg di listen
  useDebounce((newVal, newStatus) => {
    console.log(newVal, newStatus)
  }, 
  // params yg di listen
  [val, status], 
  // time delay
  400)

  useEffect(()=>{
    todoServices.getTodos()
      .then((res)=>{
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <input 
        type="text" 
        placeholder="debounce process example" 
        onChange={(e) => setVal(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">none</option>
        <option value="ACTIVE">Active</option>
        <option value="INACTIVE">Inactive</option>
      </select>

      <button onClick={()=>router.push("/dashboard/home")}>Go to Dashboard</button>

      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
      <LazyComponent>
        <div style={{border: '1px solid red'}}>
          <div>TESS</div>
          <div>TESS</div>
          <div>TESS</div>
        </div>
      </LazyComponent>
        
    </div>
  )
}

export default Home