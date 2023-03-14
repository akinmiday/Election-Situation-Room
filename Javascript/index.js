const form = document.querySelector('#contact'); 
const container = document.querySelector('.container'); 
const subContainer = document.querySelector('.sub-container'); 
const successContainer = document.querySelector('.upload-successful'); 
const disputeResultForm = document.querySelector('span.dispute-result form');
const disputeResultElement = document.querySelector('span.dispute-result');
const disputeUploadSuccessfulElement = document.querySelector('.dispute-upload-successful');
const uploadBtn = document.querySelector('.upload-result-mobile');


// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent the form from submitting normally

//   // Change the style of the container to show the success message
//   subContainer.style.display = 'none';
//   successContainer.style.display = 'block';
// });
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Check if validateVotes() returns true
    if (validateVotes()) {
      // Change the style of the container to show the success message
      subContainer.style.display = 'none';
      successContainer.style.display = 'block';
      
      // Submit the form
      event.target.submit();
    }
  });


// Add an event listener for when the form is submitted
disputeResultForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Check if validateVotes() returns true
    if (validateVotes()) {
  // Change the CSS styling for both elements
    disputeResultElement.style.display = 'none';
    disputeUploadSuccessfulElement.style.display = 'block';

      // Submit the form
      event.target.submit();
    }
});


uploadBtn.addEventListener('click', () => {
    uploadBtn.style.display = 'none';
    subContainer.style.display = 'block';
  });


// function validateVotes() {
//   // Get the vote count input elements
//   const apcVotes = parseInt(document.querySelector('input[placeholder="APC"]').value);
//   const pdpVotes = parseInt(document.querySelector('input[placeholder="PDP"]').value);
//   const lpVotes = parseInt(document.querySelector('input[placeholder="LP"]').value);

//   // Get the accredited count input element
//   const accreditedCount = parseInt(document.getElementById("numberofaccredited").value);

//   // Calculate the total vote count
//   const totalVotes = apcVotes + pdpVotes + lpVotes;

//   // Check if total vote count exceeds accredited count
//   if (totalVotes > accreditedCount) {
//     alert("Total vote count cannot exceed accredited count.");
//     return false; // Prevent form submission
//   }

//   return true; // Allow form submission
// }

function validateVotes() {
  // Get the vote count input elements
  const apcVotes = parseInt(document.querySelector('input[placeholder="APC"]').value);
  const pdpVotes = parseInt(document.querySelector('input[placeholder="PDP"]').value);
  const lpVotes = parseInt(document.querySelector('input[placeholder="LP"]').value);

  // Get the accredited count input element
  const accreditedCount = parseInt(document.getElementById("numberofaccredited").value);

  // Calculate the total vote count
  const totalVotes = apcVotes + pdpVotes + lpVotes;

  // Check if total vote count exceeds accredited count
  if (totalVotes > accreditedCount) {
    // Display a styled modal with the error message
    Swal.fire({
      title: 'Error',
      text: 'Total vote count cannot exceed accredited count.',
      icon: 'error',
      confirmButtonText: 'OK',
      customClass: {
      confirmButton: 'btn btn-primary'
      }
    });
    return false; // Prevent form submission
  }

  else
    {return true;} // Allow form submission
}


  