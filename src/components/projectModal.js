import React from "react"
import { Modal } from "react-bootstrap"

const ProjectModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>My modal</Modal.Header>
      <Modal.Body>
        <button onClick={handleClose}>Close</button>
      </Modal.Body>
    </Modal>
  )
}

export default ProjectModal
