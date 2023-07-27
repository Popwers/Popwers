const today = new Date();
const readme = `
# ${Math.floor(Math.random() * 2) + 1 % 2 === 0 ? "✌️" : "👋"} Hey, I'm Lionel !

- 💼 A full stack web developer and graphic designer working as a freelancer!
- 🌱 Based in Reunion Island, I'm a web and design enthusiast.
- 📫 Want to reach me for your projects? Just send me an email at: lionel.bataille@mystudio.digital
- 👉 Check my website : [mystudio.digital](https://mystudio.digital/)
<br>

## My Stack
### Basic
<div>
	<img src="https://skillicons.dev/icons?i=html,css,sass,js,ts,php,mysql" alt="Icon of html, css, sass, js, ts, php and mysql">
</div>

### Frameworks
<div>
	<img src="https://skillicons.dev/icons?i=wordpress,nodejs,vite,react,nextjs,redux,vue,nuxtjs,symfony" alt="Icon of wordpress, nodejs, vite, react, nextjs, redux, vue, nuxtjs and symfony">
</div>

### Tools
<div>
	<img src="https://skillicons.dev/icons?i=git,github,docker,figma" alt="Icon of git, github, docker and figma">
</div>

## Visitors
Thanks for visiting my profile !<br>
<br>
<img style="background-color: #000; padding: 10px; border-radius: 10px" src="https://profile-counter.glitch.me/Popwers/count.svg" />

Last update on ${today.toDateString()}

This README.md is updated with ${Math.floor(Math.random() * 2) + 1 % 2 === 0 ? "🫶" : "❤️"} by my personal bot ${Math.floor(Math.random() * 2) + 1 % 2 === 0 ? "🤖" : "👾"}
`;

console.log(readme);
