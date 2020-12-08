const content = [`
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit et debitis provident expedita illo deleniti aperiam recusandae minus? Molestiae labore quia totam ipsam sint sit architecto consequatur odit rem sapiente libero, velit eius sed consequuntur.
`,`I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice
pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean
shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small
batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral
direct trade hoodie ugh chambray, craft beer pork belly flannel tacos
single-origin coffee art party migas plaid pop-up.
`,`Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal
deep v hella biodiesel. Church-key listicle polaroid put a bird on it
chillwave palo santo enamel pin, tattooed meggings franzen la croix cray.
Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu
mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof
party hammock master cleanse pop-up truffaut, bicycle rights skateboard
affogato readymade sustainable deep v live-edge schlitz narwhal
`]
const links = document.querySelectorAll(".nav-item");
const cardContainer = document.querySelector('.card-text');
const aTags = document.querySelectorAll('a');

function displayContent(){
  clearContent();
  this.children[0].classList.add("active");
  if(this.innerText==="History"){
    cardContainer.innerText=content[0];
  }else if(this.innerText==="Vision"){
    cardContainer.innerText=content[1];
  }else{
    cardContainer.innerText=content[2];
  }
}
function clearContent(){
  cardContainer.innerText="";
  aTags.forEach(a=>{
    a.classList.contains("active")&& a.classList.remove("active");
  })
  console.log();
}

links.forEach(link => {
  link.addEventListener("click",displayContent)
});