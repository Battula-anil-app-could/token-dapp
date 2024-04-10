import { useEffect, useState } from 'react'
import { ethers } from 'hardhat'
import './App.css'

function App() {
  const [state, setCount] = useState({
    contract: null,
    provider: null,
    owner: null
  })


  useEffect(() => {
    const connectToMetaMask = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' })
          console.log('MetaMask wallet opened')
        } catch (error) {
          console.error('Error connecting to MetaMask:', error)
        }
      } else {
        console.error('MetaMask extension not detected')
      }
    }


    connectToMetaMask()
  }, [])
  return (
    <>
    <h1>hi anil</h1>
    </>
  )
}

export default App
