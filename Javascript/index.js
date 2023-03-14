const form = document.querySelector('#contact'); 
const container = document.querySelector('.container'); 
const subContainer = document.querySelector('.sub-container'); 
const successContainer = document.querySelector('.upload-successful'); 
const disputeResultForm = document.querySelector('span.dispute-result form');
const disputeResultElement = document.querySelector('span.dispute-result');
const disputeUploadSuccessfulElement = document.querySelector('.dispute-upload-successful');
const uploadBtn = document.querySelector('.upload-result-mobile');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  // Change the style of the container to show the success message
  subContainer.style.display = 'none';
  successContainer.style.display = 'block';
});



// Add an event listener for when the form is submitted
disputeResultForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Change the CSS styling for both elements
  disputeResultElement.style.display = 'none';
  disputeUploadSuccessfulElement.style.display = 'block';
});


uploadBtn.addEventListener('click', () => {
    uploadBtn.style.display = 'none';
    subContainer.style.display = 'block';
  });