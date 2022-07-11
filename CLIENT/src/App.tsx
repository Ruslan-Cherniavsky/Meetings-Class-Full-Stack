import { Route, Routes, Link } from 'react-router-dom'
import { useState, useMemo } from 'react'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Contact } from './pages/Contact'
import { Ref_Form } from './pages/Ref_Form'
import { Ref_Table } from './pages/Ref_Table'

import { UserContext } from "./UserContext";

function App() {
  const [team, setTeam] = useState("")
  const [dataGlobal, setDataGlobal] = useState("")

  const providerValue = useMemo(() => ({ team, setTeam, dataGlobal, setDataGlobal }), [team, setTeam, dataGlobal, setDataGlobal])

  return <>
    <Header />

    <main className="container content">

      <UserContext.Provider value={providerValue}>

        <Routes >
          <Route path="/contact" element={<Contact />} />
          <Route path="/ref_form" element={<Ref_Form />} />
          <Route path="/ref_table" element={<Ref_Table />} />
        </Routes>

      </UserContext.Provider>
    </main>

    <Footer />
  </>;

}

export default App;
