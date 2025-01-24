import main from '../../../public/assets/main.png'

export const HomePage = () => {
  return (
    <main className="main">
      <div>
        <h1 className="main-text">Rick & Morty</h1>
        <img className="main-img" src={main} alt="main"></img>
      </div>
    </main>
  )
}
