const songs = [
  { id: 1, name: 'cop' },
  { id: 2, name: 'greenday' },
  { id: 3, name: 'coldplay' },
]

function App() {
  //根组件
  return (
    <div className="App">
      <ul>
        {songs.map((song) => (
          <li>{song.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
