const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let noClickCount = 0; // Biến đếm số lần nhấn nút No

yesBtn.addEventListener("click", () => {
    question.innerHTML = "I Love You Too!";
    gif.src = "https://i.pinimg.com/originals/55/3d/42/553d42bea9b10e0662a05aa8726fc7f4.gif"; // Đổi gif
    yesBtn.style.display = "none"; // Ẩn nút Yes
    noBtn.style.display = "none"; // Ẩn nút No
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute"; // Đảm bảo nút có thể di chuyển
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    
    noClickCount++; // Tăng biến đếm khi nhấn nút No
});
