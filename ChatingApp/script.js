let msg1 = [];
let msg2 = [];
let wa1 = document.querySelector('#wa1'), wa2 = document.querySelector('#wa2');
setInterval(() => {
    const d = new Date();
    const t = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    document.querySelectorAll(".time")[0].innerHTML = `${t} `;
    document.querySelectorAll(".time")[1].innerHTML = `${t}`;
    document.querySelectorAll(".time")[2].innerHTML = `${t}`;
    document.querySelectorAll(".time")[3].innerHTML = `${t}`;
    let a = document.createElement("span");
    a.innerHTML = `${msg1.length}`;
    wa2.appendChild(a);
    let b = document.createElement("span");
    b.innerHTML = `${msg2.length}`;
    wa1.appendChild(b);
    const wifi1 = document.querySelector("#wifi1");
    const wifi2 = document.querySelector("#wifi2");
    if (window.navigator.onLine != true) {
        wifi1.innerHTML = "<i class='bx bx-wifi-off'></i>";
        wifi2.innerHTML = "<i class='bx bx-wifi-off'></i>";
    } else {
        wifi1.innerHTML = "<i class='bx bx-wifi'></i>";
        wifi2.innerHTML = "<i class='bx bx-wifi-2'></i>";
    }
}, 0);
let h1 = document.querySelector('#home1'), h2 = document.querySelector('#home2');
let hB = document.querySelectorAll('.homeBtn');
let app = document.querySelectorAll('.app');
let apps = document.querySelectorAll('.apps');


let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");
let m1 = document.querySelector("#m1");
let m2 = document.querySelector("#m2");

m1.addEventListener('click', (e) => {
    e.preventDefault();
    if (inp1.value == null || inp1.value == "") {
        alert("Enter the Message First !")
    } else {
        const d = new Date();
        const t = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        msg1.push({ message: inp1.value })
        const m = document.createElement('ul');
        m.innerHTML = `<li>${inp1.value} <sub>${t}.</sub></li>`;
        apps[1].appendChild(m);
        const n = document.createElement('ol');
        n.innerHTML = `<li>${inp1.value} <sub>${t}.</sub></li>`;
        apps[0].appendChild(n);
        inp1.value = null;
    }
})
let del = document.querySelectorAll(".del");
del[0].addEventListener("click", () => {
    alert("Are u Sure You want to Delete All Messages .");
    apps[0].innerHTML = " ";
})
del[1].addEventListener("click", () => {
    alert("Are u Sure You want to Delete All Messages .");
    apps[1].innerHTML = " ";
})

m2.addEventListener('click', (e) => {
    e.preventDefault();
    if (inp2.value == null || inp2.value == "") {
        alert("Enter the Message First !")
    } else {
        const d = new Date();
        const t = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        msg2.push({ message: inp2.value })
        const m = document.createElement('ul');
        m.innerHTML = `<li>${inp2.value} <sub>${t}.</sub></li>`;
        apps[0].appendChild(m);
        const n = document.createElement('ol');
        n.innerHTML = `<li>${inp2.value} <sub>${t}.</sub></li>`;
        apps[1].appendChild(n);
        inp2.value = null;
    }
})
hB[0].addEventListener("click", () => {
    h1.style.display = "flex";
    app[0].style.display = "none";
})
hB[1].addEventListener("click", () => {
    h2.style.display = "flex";
    app[1].style.display = "none";
})
wa1.addEventListener("click", () => {
    h1.style.display = "none";
    app[0].style.display = "flex";
    app[0].style.top = "0px";
})
wa2.addEventListener("click", () => {
    h2.style.display = "none";
    app[1].style.display = "flex";
    app[1].style.top = "0px";
})


document.addEventListener('contextmenu',
    event => event.preventDefault()
);
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
    if (event.keyCode == 123) {
        event.preventDefault();
    }
});