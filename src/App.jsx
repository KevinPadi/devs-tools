import { Cards } from "./components/Cards";
import resources from './db/resources.json'

function App() {
  return (
    <div className="bg-neutral-950 mx-auto px-4">
      <h1 className="text-center font-medium text-5xl text-neutral-200 pt-5">
        Devs tools
      </h1>
      <div className="grid gap-4 w-full" style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))'
      }}>
        {resources.data.map((item, index) => (
          <div key={index} className="w-full max-w-sm mx-auto">
            <Cards
              title={item.name}
              description={item.description}
              categories={item.categories}
              url={item.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

