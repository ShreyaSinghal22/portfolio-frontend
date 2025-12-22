
import './App.css'
import Bio from './sections/bio'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
 
function App() {

  return (
    <>
      <div className="container-md mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-3 md:p-7">
       <div className="">
        <Bio />
        <Skills/>
       </div>
       <div className="col-span-2">
         <Projects />
       </div>
      </div>
    </>
  )
}

export default App
