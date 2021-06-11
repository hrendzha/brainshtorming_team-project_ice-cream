(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-cont]'),
      closeModalBtn: document.querySelector('[data-modal-close-cont]'),
      modal: document.querySelector('[data-modal-cont]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
          document.body.classList.toggle('modal-open'); 
          refs.modal.classList.toggle('backdrop--hidden');
    }
  })();