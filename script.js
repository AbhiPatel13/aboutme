const COMMANDS = {
    id: 'uid=0(root) gid=0(root) groups=0(root)', help: 'Commands: <span class="code">about</span>, <span class="code">edu</span>, <span class="code">skills</span>, <span class="code">proj</span>, <span class="code">contact</span>, <span class="code">ltc</span>', proj: "<a href='https://www.technovichar.com' class='success link'>Blogging Site(Technovichar.com)</a>, <br> \
      <a href='https://abhipatel13.github.io/foodrecipy.github.io/' class='success link'>Food Recipe Website Using Recipe API</a>, <br> \
      <a href='https://abhipatel13.github.io/Web-Dev-1.github.io/' class='success link'>One Page Web Template</a>, <br> \
      <a href='https://abhipatel13.github.io/myprofile.github.io/' class='success link'>Resume Website</a><br>\
      <a href='https://abhipatel13.github.io/todolist.github.io/' class='success link'>Mini Websites Using JavaScript(TODOLIST)</a><br>\
      <a href='https://abhipatel13.github.io/bookfinder.github.io/' class='success link'>Book Finder Website</a><br>", about: "Hey! 👋<br>Hi, I'm ABHI, i'm a  Programmer, Web Developer and Beginner at Cyber Security , Also Interested in Freelancing,Startups and Digital Marketing.", 
      skills: '<span class="code">Languages:</span>Java, C, mysql, Javascript,NOSQL(MongoDB)<br><span class="code">Technical:</span>Kali Linux,GUI Design, Web Development, Operating System ,Computer Network,Learner of Cyber Security and Penetration Testing<br><span class="code">Tools:</span> Metasploit Framework, Nmap,Burpsuite,Wireshark,Password Cracking Tools,Wireless Attack Tools', edu: "L.D College of Engineering,Ahmedabad 2019-Running<br> ", contact: "You can contact me on any of Social Media Plateform:<br><a href='https://www.instagram.com/a__b__h__i__0/' class='success link'>Instagram</a> , <a href='https://twitter.com/technovichar' class='success link'>Twitter</a>", ltc: "Business opportunities are like buses, there's always another one coming.<br>You can find more details here:<br><a href='https://www.instagram.com/technovichar/' class='success link'>Instagram Page</a><br><a href='https://www.youtube.com/channel/UCS56eIXcZhTlDvEI7LgLmxw' class='success link'>Youtube Channel</a><br><a href='https://www.technovichar.com' class='success link'>Official Blog Website</a><br>"
}; let userInput, terminalOutput; let prevInputs = []; let lenUp = -1; const app = () => { userInput = document.getElementById("userInput"); terminalOutput = document.getElementById("terminalOutput"); document.getElementById("dummyKeyboard").focus(); console.log("Application loaded"); }; const execute = function executeCommand(input) {
    let output; input = input.toLowerCase(); if (input.length === 0) { return; }
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`; if (!COMMANDS.hasOwnProperty(input)) { output += `<div class="terminal-line">no such command: ${input}</div>`; console.log("Oops! no such command"); } else { output += COMMANDS[input]; }
    terminalOutput.innerHTML = `${terminalOutput.innerHTML
        }<div class="terminal-line">${output}</div>`; terminalOutput.scrollTop = terminalOutput.scrollHeight; userInput.innerHTML = input; prevInputs.push(input); lenUp = prevInputs.length - 1; document.getElementById('dummyKeyboard').value = ''
}; const key = function keyEvent(e) { const input = document.getElementById('dummyKeyboard').value; if (e.key === "Enter") { execute(input); userInput.innerHTML = ""; } }; const backspace = function backSpaceKeyEvent(e) {
    if (e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowUp' && e.key !== 'ArrowDown') { return; }
    if (e.key === 'ArrowUp' && lenUp !== -1) {
        document.getElementById('dummyKeyboard').value = prevInputs[lenUp]; lenUp--; if (lenUp < 0)
            lenUp = prevInputs.length - 1; return;
    } else if (e.key === 'ArrowDown' && lenUp !== -1) {
        lenUp++; if (lenUp === prevInputs.length)
            lenUp = 0; document.getElementById('dummyKeyboard').value = prevInputs[lenUp]; return;
    }
    userInput.innerHTML = userInput.innerHTML.slice(0, userInput.innerHTML.length - 1);
}; document.addEventListener("keydown", backspace); document.addEventListener("keypress", key); document.addEventListener("DOMContentLoaded", app);