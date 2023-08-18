import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatProvider from "./Context/ChatProvider";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <ChatProvider>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/chats" element={<Chatpage />} />
            </Routes>
          </ChatProvider>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
