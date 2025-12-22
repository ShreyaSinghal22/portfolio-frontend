
import './App.css'
import Bio from './sections/bio'
import Skills from './sections/Skills'
 
function App() {

  return (
    <>
      <div className="container-md mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-3 md:p-7">
       <div className="border">
        <Bio />
        <Skills/>
       </div>
       <div className="border border-black col-span-2">col 2</div>
      </div>
    </>
  )
}

export default App
