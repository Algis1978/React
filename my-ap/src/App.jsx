import { useEffect, useState } from "react"

export default function App() {
  //useEffect hukas iš react leidžia paleisti paruoštą komponntą.
  //localStorage priklauso narsykles JS

  const [field, setfield] = useState([])
  // Į masyvą fieldCopy pridedma daug objektų animal:what.
  const add = (what) => {
    const fieldCopy = field.slice();
    fieldCopy.push({animal:what})
    setfield(fieldCopy)
    console.log(fieldCopy)
  }
  //jei įrašomas tuščias masyvas [] tai callback funkcija pasleidžia vieną kartą, kai atvaizduojamas paruoštas komponentas.
  useEffect(()=> {
    console.log("atvaizduota")
  }, [])

  return (
  <>
  <div className="field">
   <div>
      {field.map((fieldAnimal) =>{})}
   </div>
   <button className="mygtukas" onClick= {() => add("cow")}>Pridėti karvę</button>
   <button className="mygtukas" onClick= {() => add("sheep")}>Pridėti avį</button>
   <button className="mygtukas" onClick= {() => add("chicken")}>Pridėti vištą</button>
   </div>
  </>
  )
}



