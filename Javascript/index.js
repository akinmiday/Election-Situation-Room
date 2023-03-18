const form = document.querySelector('#contact'); 
const container = document.querySelector('.container'); 
const subContainer = document.querySelector('.sub-container'); 
const successContainer = document.querySelector('.upload-successful'); 
const disputeResultForm = document.querySelector('span.dispute-result form');
const disputeResultElement = document.querySelector('span.dispute-result');
const disputeUploadSuccessfulElement = document.querySelector('.dispute-upload-successful');
const uploadBtn = document.querySelector('.upload-result-mobile');
const disputeBtn = document.querySelector(".dispute-btn");
const wardUploaded = document.querySelector(".ward-uploaded");
const disputeResults = document.querySelectorAll(".dispute-result");


form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Check if validateVotes() returns true
    if (validateVotes()) {
      // Change the style of the container to show the success message

      const accreditedCount = parseInt(document.getElementById("numberofaccredited").value);
      const apcVotes = parseInt(document.querySelector('input[placeholder="APC"]').value);
      const pdpVotes = parseInt(document.querySelector('input[placeholder="PDP"]').value);
      const lpVotes = parseInt(document.querySelector('input[placeholder="LP"]').value);
      const snapshot = document.getElementById('snapshot').files[0];
      const polling_unit = document.getElementById('polling-unit-input').value;
      const lga = document.getElementById('lga-input').value;

      const formData = new FormData();
      formData.append("state", "LG")
      formData.append("accredited_voters", accreditedCount)
      formData.append("apc", apcVotes)
      formData.append("pdp", pdpVotes)
      formData.append("lp", lpVotes)
      formData.append("result_image", snapshot)
      formData.append("polling_unit", polling_unit)
      formData.append("lga", lga)
      
      // Submit the form
      axios.post("http://127.0.0.1:8000/collations/", formData,
      {headers: {
        "Content-Type": "multipart/form-data"
      }}
      ).then(res => {
      subContainer.style.display = 'none';
      successContainer.style.display = 'block';
      console.log(res.data)
    }).catch(err => console.log(err))
    }
  });


// Add an event listener for when the form is submitted
disputeResultForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Check if validateVotes() returns true
    if (validateDisputedVotes()) {
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


// Add a click event listener to the button
disputeBtn.addEventListener("click", () => {
  // Set the display style of "ward-uploaded" to "none"
  wardUploaded.style.display = "none";

  // Loop through each "dispute-result" element and set its display style to "block"
disputeResults.forEach(result => {
    result.style.display = "block";
  });
});

function validateDisputedVotes() {
  var apcVotes = parseInt(document.getElementById("apcVotes").value);
  var pdpVotes = parseInt(document.getElementById("pdpVotes").value);
  var lpVotes = parseInt(document.getElementById("lpVotes").value);
  var accreditedVoters = parseInt(document.getElementById("accreditedVoters").value);

  var totalVotes = apcVotes + pdpVotes + lpVotes;

  if (totalVotes > accreditedVoters) {
    // alert("Total votes cannot exceed number of accredited voters.");
    Swal.fire({
      title: 'Error',
      text: 'Total vote count cannot exceed accredited count.',
      icon: 'error',
      confirmButtonText: 'OK',
      customClass: {
      confirmButton: 'btn btn-primary'
      }
    });
    return false;
  }

else {return true;}
}