document.getElementById("degreeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const degree = document.getElementById("degree").value;
    const resultElement = document.getElementById("result");

    let paragraph = "<p>Information about this course is coming soon. Note that, universities are businesses and businesses run on profit, make proper research about your chosen degree or career prospects.</p>";

    // You can add more cases for different degrees here
    if (degree.toLowerCase().includes("engineering")) {
        paragraph = "<p>Engineering degrees often lead to promising career opportunities.</p>";
    } else if (degree.toLowerCase().includes("computer science")) {
        paragraph = "<p>Computer Science degrees are in high demand in the tech industry.</p>";
    }else if (degree.toLowerCase().includes("science")) {
        paragraph = "<p>Computer Science degrees are in high demand in the tech industry.</p>";
    }
    else if (degree.toLowerCase().includes("computer science")) {
        paragraph = "<p>Computer Science degrees are in high demand in the tech industry.</p>";
    }
    
    resultElement.innerHTML = paragraph;
});
// Show the custom modal
const modal = document.getElementById("customModal");
modal.style.display = "block";

// Close the modal when the "x" is clicked
const closeBtn = document.querySelector(".close");
closeBtn.onclick = function() {
modal.style.display = "none";
};

// Close the modal when the user clicks outside the modal
window.onclick = function(event) {
if (event.target === modal) {
    modal.style.display = "none";
}
};
