// orchestrate main layout, integrate router setup
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//layout
import NavBar from "./layouts/NavBar";

//pages
import HomePage from "./pages/HomePage";
import ContentPage from "./pages/ContentPage";
import NavigateBackButton from "./components/NavigateBackButton";

// dataset of celestial objects
const data = [
  {
    id: "mars",
    title: "Mars",
    content:
      "Known as the Red Planet, Mars has fascinated humans for centuries. It is home to the highest mountain in the solar system, Olympus Mons, and evidence suggests water once flowed on its surface.",
  },
  {
    id: "venus",
    title: "Venus",
    content:
      "Venus, our closest planetary neighbor, is shrouded in thick clouds of sulfuric acid, making it a hostile environment. Its surface temperatures are hot enough to melt lead.",
  },
  {
    id: "nebula",
    title: "Orion Nebula",
    content:
      "Located in the constellation of Orion, the Orion Nebula is a vibrant nursery where new stars are born. It is one of the brightest nebulae visible to the naked eye in the night sky.",
  },
  {
    id: "andromeda",
    title: "Andromeda Galaxy",
    content:
      "The Andromeda Galaxy is the closest spiral galaxy to our Milky Way and is on a collision course with it. In about 4 billion years, the two will merge into a single, larger galaxy.",
  },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar data={data} />}>
      <Route index element={<HomePage />} />
      {data.map((dataElement) => (
        <Route
          key={dataElement.id}
          path={`/content/${dataElement.id}`}
          element={<ContentPage data={dataElement} />}
        ></Route>
      ))}
    </Route>
  )
);

function App() {
  return (
    <div className="w-screen min-h-screen p-5 text-white bg-[#000f1c]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
