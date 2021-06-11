(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-frans]'),
      closeModalBtn: document.querySelector('[data-modal-close-frans]'),
      modal: document.querySelector('[data-modal-frans]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
          document.body.classList.toggle('modal-open'); 
          refs.modal.classList.toggle('backdrop--hidden');
    }
  })();