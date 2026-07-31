<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:ff6a00,100:ee0979&height=200&section=header&text=Assignment%20and%20Project%20Services&fontSize=30&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Instant%20Price%20Calculator%20and%20Direct%20Contact&descAlignY=55&descSize=16" width="100%"/>

<br/>

![HTML5](https://img.shields.io/badge/HTML5-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white)

<img src="https://img.shields.io/github/stars/AbdulAzeemHashmi/assignment-2-static-webpage?style=social" alt="stars"/>
<img src="https://img.shields.io/github/forks/AbdulAzeemHashmi/assignment-2-static-webpage?style=social" alt="forks"/>
<img src="https://img.shields.io/github/last-commit/AbdulAzeemHashmi/assignment-2-static-webpage?color=ee0979" alt="last commit"/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=EE0979&center=true&vCenter=true&width=650&lines=Instant+Price+Calculator;Deadline+Based+Quoting+Logic;Direct+Gmail+and+WhatsApp+Contact;Fully+Responsive+Static+Webpage" alt="Typing SVG" />

<br/>

🔗 **Live Demo:** [assignment-2-static-webpage-silk.vercel.app](https://static-webpage-6mnb563dj-aah18751.vercel.app/)

<a href="https://static-webpage-6mnb563dj-aah18751.vercel.app/">
<img src="https://img.shields.io/badge/🚀%20Try%20it%20Live-Visit%20Site-ee0979?style=for-the-badge" alt="try it live"/>
</a>

</div>

<br/>

> 📘 A responsive static webpage offering assignment and project services with instant price calculation and direct contact options.

<div align="center">
<img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" width="380" alt="webpage animation"/>
</div>

---

## 📖 About The Project

This is a single page static website built as part of the **Codoc IT Internship Development Programme, Assignment 2**. It serves as a professional service page where students can:

- 💰 Check pricing for assignments and projects based on deadline urgency
- 📩 Send direct messages via Gmail using a contact form
- 📱 Connect instantly via WhatsApp for quick inquiries

The page is fully responsive and works seamlessly on desktop, tablet, and mobile devices.

---

## ✨ Features

<div align="center">

| Feature | Description |
|---------|-------------|
| 💰 **Price Calculator** | Select "Assignment" or "Project", pick a deadline date, and get an instant price quote in PKR |
| 📩 **Contact Form** | Sends messages directly to abdulazeem7982@gmail.com via Gmail's mailto functionality |
| 📱 **WhatsApp Integration** | One click button to start a chat on WhatsApp at +92 322 8535002 |
| 📐 **Responsive Design** | Optimized for all screen sizes using CSS Flexbox, Grid, and Media Queries |
| 🧭 **Semantic HTML** | Clean, accessible markup using header, nav, main, section, and footer tags |
| 🎨 **Modern UI** | Professional color scheme with hover effects and smooth transitions |

</div>

<br/>

## 💰 Pricing Logic

The calculator works out the price based on how many days remain until the deadline.

<div align="center">

```mermaid
flowchart TD
    A[📅 Pick Deadline Date] --> B{Type?}
    B -->|📝 Assignment| C{Days Remaining}
    B -->|🗂️ Project| D{Days Remaining}
    C -->|🟢 7 or more| E[100 PKR]
    C -->|🟡 3 to 6| F[200 PKR]
    C -->|🔴 0 to 2| G[500 PKR]
    D -->|🟢 More than 7| H[1000 PKR]
    D -->|🔴 7 or fewer| I[2000 PKR]
    A -->|⚠️ Past Date| J[Warning Shown]
```

</div>

**📝 Assignments**

- 🟢 7 or more days remaining, 100 PKR
- 🟡 3 to 6 days remaining, 200 PKR
- 🔴 0 to 2 days remaining, 500 PKR

**🗂️ Projects**

- 🟢 More than 7 days remaining, 1000 PKR
- 🔴 7 or fewer days remaining, 2000 PKR

If the selected deadline date is in the past, the calculator shows a warning and does not return a price. ⚠️

<br/>

## 🛠️ Built With

<div align="center">

- 🧱 **HTML5**, semantic markup structure
- 🎨 **CSS3**, custom styling with Flexbox, Grid, and responsive media queries
- ⚙️ **JavaScript (Vanilla)**, price calculation logic and form handling
- 🌿 **Git and GitHub**, version control with feature branch workflow
- ▲ **Vercel**, deployment and hosting

<br/>

![HTML5](https://skillicons.dev/icons?i=html)
&nbsp;
![CSS3](https://skillicons.dev/icons?i=css)
&nbsp;
![JavaScript](https://skillicons.dev/icons?i=js)
&nbsp;
![Git](https://skillicons.dev/icons?i=git)
&nbsp;
![Vercel](https://skillicons.dev/icons?i=vercel)

</div>

<br/>

## 🚀 Deployment

This project is deployed on **Vercel** for free and reliable hosting.

🔗 **Live URL:** [static-webpage-silk.vercel.app](https://static-webpage-6mnb563dj-aah18751.vercel.app/)

<br/>

## 📂 Project Structure

```
static-webpage/
├── 📄 index.html   # Main HTML file
├── 🎨 style.css    # All styles and responsive design
├── ⚙️ script.js    # Price calculator and contact form logic
└── 📘 README.md    # Project documentation
```

<br/>

## 🔧 Git Workflow

This project follows a clean Git workflow as required by the assignment:

- 🌿 **Feature Branch:** `feature/website` was used for development
- 📝 **Meaningful Commits:** Each commit has a clear, descriptive message
- 🔀 **Merge to Main:** The feature branch was successfully merged into main

<br/>

## 💻 Getting Started

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/AbdulAzeemHashmi/static-webpage.git

# Navigate into the project folder
static-webpage

# Open index.html in your browser
```

No build tools or dependencies are required, it is a pure HTML, CSS, and JavaScript project. 🎉

<br/>

## 👨‍💻 Author

<table>
<tr>
<td>🧑‍💻 <b>Name</b></td>
<td>Abdul Azeem</td>
</tr>
<tr>
<td>🐙 <b>GitHub</b></td>
<td><a href="https://github.com/AbdulAzeemHashmi">@AbdulAzeemHashmi</a></td>
</tr>
<tr>
<td>✉️ <b>Email</b></td>
<td>abdulazeem7982@gmail.com</td>
</tr>
<tr>
<td>📱 <b>WhatsApp</b></td>
<td>+92 322 8535002</td>
</tr>
</table>

<br/>

## 📝 License

This project is built for educational purposes as part of the Codoc IT Internship Programme.

<br/>

## 🙏 Acknowledgments

- 🏢 Codoc IT Ltd. for providing the training and assignment guidelines
- 📚 All resources and documentation that helped in building this project

<br/>

<div align="center">

### ⭐ If you found this project helpful, consider giving it a star

<a href="https://github.com/AbdulAzeemHashmi/static-webpage/stargazers">
<img src="https://img.shields.io/badge/Star%20this%20repo-⭐-yellow?style=for-the-badge" alt="star this repo"/>
</a>

<br/><br/>

Made with 🧡 by Abdul Azeem for the Codoc IT Internship Development Programme.

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:ee0979,100:ff6a00&height=100&section=footer" width="100%"/>

</div>
