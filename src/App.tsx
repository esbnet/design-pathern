import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="flex flex-col w-auto h-20 text-lg text-center bg-green shadow-xl content-center justify-center">
        <h1 className="text-4xl"> Design Paterns </h1>
      </div>
      <div className="w-aunto shadow-xl">
        <div className="flex w-auto h-full  m-2 bg-blue justify-center items-stretch  rounded-lg shadow-xl p-10" >

          <div className="card m-2 bg-green w-56 p-2 rounded-lg shadow-xl opacity-90">
            <h2 className="bg-orange text-center shadow-xl">Criacionais</h2>
            <ul className="m-2 ">
              <li className="hover:text-gray-light"><Link to="/observer">Factory Method</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">Abstract Factory</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">Builder</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">Prototype</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">Singleton</Link></li>
            </ul>
          </div>

          <div className="card m-2 bg-yellow w-56 p-2  rounded-lg shadow-xl  opacity-90">
            <h2 className="bg-orange text-center shadow-xl ">Estruturais</h2>
            <ul className="m-2">
              <li className="hover:text-gray-light"><Link to="/observer">Adapter</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">Bridge</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">Composite</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">Decorator</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">Facade</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">Flyweight</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">Proxy</Link></li>
            </ul>
          </div>

          <div className="card m-2 bg-pink w-56 p-2  rounded-lg shadow-xl opacity-90">
            <h2 className="card-title bg-orange text-center shadow-xl">Comportamentais</h2>
            <ul className="m-2">
              <li className="hover:text-gray-light"><Link to="/observer">Chain of Responsibility</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">Command</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">Iterator</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">Mediator</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">Memento</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">Observer</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">State</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">Strategy</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">Template Method</Link></li>
              <li className="hover:text-gray-light"><Link to="/observer">Visitor</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}
