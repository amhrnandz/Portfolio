// For light and dark theme
const content = document.querySelector("#content");
const theme_switch = document.querySelector("#theme-switch");

theme_switch.addEventListener("click", () => {
    content.classList.toggle('dark-theme');
})

// For tab selection
const buttons = document.querySelectorAll("button");

buttons.forEach(selected => selected.addEventListener("click", (e) => {
    buttons.forEach(button => {
        const button_id = button.getAttribute('id');
        const content = document.getElementById(`content-${button_id}`);
        if (button === selected) {
            button.classList.add("button--selected");
            content.classList.remove("content-right--hidden");
        } else {
            button.classList.remove("button--selected");
            content.classList.add("content-right--hidden");
        }
    })
}))