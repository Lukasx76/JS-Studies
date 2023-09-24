const paragraphTags = document.querySelectorAll("p");
const styles = getComputedStyle(document.body);
const bodyBackgroundColor = styles.backgroundColor;


// set the color of the paragraph to white and its background to another one
for (let p of paragraphTags){
    p.style.backgroundColor = bodyBackgroundColor
    p.style.color = "#fff";
}