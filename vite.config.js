import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions:{
      input: {
        index: "index.html",
        hello_world: "hello-world.html",
        TODO: "TodoList.html",
        table: "table.html",
        buttonCoba: "buttonCoba.html",
        formG: "formG.html",
        contact: "contact.html",
        task: "task.html",
        counter: "counter.html",
        note: "note.html"
      }
    }
  }
})
