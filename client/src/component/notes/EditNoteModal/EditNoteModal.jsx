import React, { useState } from "react";

function EditNoteModal({isOpen, editFormNote, onChangeNote, onClose, onSave}) {
  

    if (!isOpen)
        return null

    return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            

        <form>
          <div className="form-group">
            <label htmlFor="title" className="col-form-label">Title:</label>
            <input 
                type="text" 
                className="form-control" 
                id="title"
                value={editFormNote.title}
                onChange={e => onChangeNote({...editFormNote, title: e.target.value})}
            />
            <label htmlFor="note-body" className="col-form-label">Body:</label>
            <textarea 
                type="text" 
                className="form-control" 
                id="note-body"
                value={editFormNote.body}
                rows="4"
                onChange={e=> onChangeNote({...editFormNote, body: e.target.value})}
            />
          </div>
        </form>



          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={onClose}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={onSave}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditNoteModal;
