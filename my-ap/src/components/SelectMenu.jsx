export default function SelectMenu() {
    return (
    <>
    <div className="selectForm">
    <h2>Pasirinkite išrūšiuoti gyvūnus pagal:</h2>
        <select>
        <option value="" disabled selected>Pasirinkite:</option>
        <option value="vardas">Pagal vardą</option>
        <option value="data">Pagal registracijos datą</option>
        </select>
        <button>Rūšiuoti</button>
    </div>
    </>
  )
}