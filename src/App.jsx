import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";


function App() {
  return (
    <Box
      minH="100vh"
      bgImage={"url('C:\Users\barat\OneDrive\Desktop\monaco editor\monaco-editor\src\assest\image\img.webp')"}
      bgSize="cover"
      bgPosition="center"
      color="gray.500"
      px={6}
      py={8}
    >
      <CodeEditor />
    </Box>
  );
}

export default App;
