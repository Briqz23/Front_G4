
const toastTrigger = document.getElementById('OK-Toast')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)
    
    toast.show()
  })
}
