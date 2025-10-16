import { React, useState } from "react";
import styles from "./NoteListComponent.module.css";
import EditNoteModal from "../EditNoteModal/EditNoteModal";

function NoteListComponent({ notes, onDeleteNote, onUpdateNote }) {
  
  const [openRows, setOpenRows] = useState([]);

  const [isModalOpen, setIsModalOpen ] =  useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editModalValues, setEditModalValues] = useState({title: '', body: ''});


  const toggleExpandedRow = (index) => {
    if (openRows.includes(index)) {
      let newArr = openRows.filter((item) => item != index);
      setOpenRows(newArr);
      return;
    }
    setOpenRows([...openRows, index]);
  };

  function toggleIsCompleted(index, noteItem) {
    noteItem.isCompleted = !noteItem.isCompleted;
    onUpdateNote(index, noteItem);
  }

  return (
    <div>
      <h3>Note list</h3>
      {notes.length > 0 ? (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((item, index) => {
              return (
                  <tr key={index}>
                    <td
                      onClick={() => toggleIsCompleted(index, item)}
                      style={{ minWidth: "500px" }}
                      className={`text-left ${
                        item.isCompleted ? styles.strike : undefined
                      }`}
                    >
                      {item.title}
                      <div
                        className={`${styles.noteDetails} ${
                          openRows.includes(index) ? styles.expanded : ""
                        }`}
                      >
                        {item.body}
                      </div>
                    </td>

                    <td style={{ minWidth: "200px", display: "flex" }}>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm m-1"
                        onClick={() => {
                          toggleExpandedRow(index);
                        }}
                      >
                        {openRows.includes(index) ? "Up" : "Down"}
                      </button>
                      
                      
                      <button 
                        type="button" 
                        className="btn btn-info btn-sm m-1"
                        onClick={
                          ()=>{
                           setEditIndex(index);
                           setEditModalValues(prev => ({...prev, title: item.title , body: item.body})) 
                           setIsModalOpen(true);
                          }
                        }
                      >
                        Edit
                      </button>
                      
                      
                      <button
                        type="button"
                        id={`delete-btn-${index}`}
                        className="btn btn-danger btn-sm m-1"
                        onClick={() => onDeleteNote(index)}
                      >
                        Delete
                      </button>
                      
                    </td>
                  </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Note notes available</p>
      )}

      <EditNoteModal 
        isOpen={isModalOpen} 
        editFormNote={editModalValues}
        onClose={()=> setIsModalOpen(false)}  
        onSave={
          ()=>{
            onUpdateNote(editIndex, {
              title: editModalValues.title,
              body : editModalValues.body
            });
            setIsModalOpen(false);
          }
        }
        onChangeNote={setEditModalValues} 
      />        
    </div>
  );
}

export default NoteListComponent;
