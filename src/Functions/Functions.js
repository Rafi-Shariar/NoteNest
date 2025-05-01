import { v4 } from 'uuid';
function saveNote(category, title, details) {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
  
    const newNote = {
        id: v4(),
        category,
        title,
        details,
        lastEdited: new Date().toLocaleString(),
      };
  
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  function getAllNotes() {
    const notes = localStorage.getItem("notes");
    return notes ? JSON.parse(notes) : [];
  }
  
  function editNote(index, updatedCategory, updatedTitle, updatedDetails) {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
  
    if (notes[index]) {
      notes[index].category = updatedCategory;
      notes[index].title = updatedTitle;
      notes[index].details = updatedDetails;
      notes[index].lastEdited = new Date().toLocaleString(); // update time
  
      localStorage.setItem("notes", JSON.stringify(notes));
    } else {
      console.warn("No note found at index", index);
    }
  }
  
  function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
  }

export {saveNote,getAllNotes,editNote,deleteNote};