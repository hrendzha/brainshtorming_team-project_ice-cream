(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-men]'),
      closeModalBtn: document.querySelector('[data-modal-close-men]'),
      modal: document.querySelector('[data-modal-men]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
          document.body.classList.toggle('modal-open'); 
          refs.modal.classList.toggle('backdrop--hidden');
    }
  })();