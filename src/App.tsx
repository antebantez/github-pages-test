import {
    Route,
    createHashRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

const router = createHashRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
        </>
    )
)

function App() {
    return <RouterProvider router={router} />
}

export default App
