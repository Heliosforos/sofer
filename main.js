const selectLeft = document.getElementById("select-left");
const selectRight = document.getElementById("select-right");
const textAreaLeft = document.getElementById("textarea-left");
const textAreaRight = document.getElementById("textarea-right");
function switcher(selectedOption) {
  switch (selectedOption) {
    case "English":
      return "English transcription";
    case "Spanish":
      return "Transcripción en español";
    case "German":
      return "Transkription auf Deutschen";
    case "French":
      return "Transcription en français";
  }
}
selectLeft.addEventListener("change", function name() {
  const selectedOption = selectLeft.value;
  textAreaLeft.placeholder = switcher(selectedOption);
});
selectRight.addEventListener("change", function name() {
  const selectedOption = selectRight.value;
  textAreaRight.placeholder = switcher(selectedOption);
});