
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./PrescriptionFormModal.scss";

const PrescriptionFormModal = ({ open, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [prescription, setPrescription] = useState("");
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Prevent background scrolling when modal is open
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, contact, prescription, file };
    setSubmitted(true);
    onSubmit && onSubmit(formData);
    setTimeout(() => {
      setName("");
      setContact("");
      setPrescription("");
      setFile(null);
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  const modalContent = (
    <div className="prescription-modal__backdrop" onClick={onClose}>
      <div className="prescription-modal__content" onClick={e => e.stopPropagation()}>
        <button className="prescription-modal__close" onClick={onClose}>&times;</button>
        <h2>Upload Your Prescription</h2>
        {submitted ? (
          <div className="prescription-modal__confirmation">
            <span role="img" aria-label="check">✅</span>
            Prescription submitted! We will contact you soon.
          </div>
        ) : (
          <form className="prescription-modal__form" onSubmit={handleSubmit}>
            <label>
              Your Name:
              <input
                type="text"
                value={name}
                required
                onChange={e => setName(e.target.value)}
                placeholder="Full Name"
              />
            </label>
            <label>
              Contact Info (Phone/Email):
              <input
                type="text"
                value={contact}
                required
                onChange={e => setContact(e.target.value)}
                placeholder="e.g. 0700 123456 / email@example.com"
              />
            </label>
            <label>
              Prescription Details:
              <textarea
                value={prescription}
                required
                onChange={e => setPrescription(e.target.value)}
                placeholder="List your prescribed medicines & instructions"
              />
            </label>
            <label>
              Or Upload Prescription File (optional):
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={e => setFile(e.target.files[0])}
              />
            </label>
            <button type="submit" className="prescription-modal__submit-btn">Submit Prescription</button>
          </form>
        )}
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
};

export default PrescriptionFormModal;