(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-ice-coffee-open]'),
    closeModalBtn: document.querySelector('[data-modal-ice-coffee-close]'),
    modal: document.querySelector('[data-modal-ice-coffee]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
        document.body.classList.toggle('modal-open'); 
        refs.modal.classList.toggle('backdrop--hidden');
  }
})();