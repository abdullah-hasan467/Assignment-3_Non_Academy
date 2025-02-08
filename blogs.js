// Array of questions and answers
const questions = [
  {
    question: "Brief introduction about yourself",
    answer:
      "My name is Md. Abdullah Al Hasan, and I am a 24-year-old individual who recently graduated with a degree in Computer Science and Engineering (CSE). Born and raised in the serene locale of Sherpur, I have developed a deep-rooted connection with nature, being surrounded by the earthy scent of soil, the refreshing breeze, the rhythmic flow of rivers, and the embrace of hills and forests.My fervent passion lies in the acquisition of knowledge pertaining to computer technology. I find great joy in exploring various programming languages and enhancing my understanding of computer science concepts. The ever-evolving nature of this field enthralls me, driving me to continuously seek new avenues for learning and growth.Prior to my academic pursuits, I had the privilege of working as an animal rescuer in collaboration with the Bangladesh Forest Division. This experience was profoundly fulfilling, as there is no greater satisfaction than witnessing the safe return of animals to their natural habitats."
  },
  {
    question:
      "What inspired you to pursue a career in Computer Science and Engineering?",
    answer:
      "From a young age, I’ve always enjoyed solving puzzles, which sparked my interest in computers. When I got my first computer in class 6, I became fascinated with how things worked. I started learning programming languages like C, and creating small codes gave me immense joy. This hands-on experience drove me to pursue a career in computer science."
  },
  {
    question: "What is your most loved programming language and why?",
    answer:
      "My favorite programming language is C. It was the first language I learned, and it gave me a solid foundation in programming concepts. I love its simplicity and efficiency, and it allows me to understand how computers work at a low level. The satisfaction of writing clean, optimized code in C is unmatched for me."
  },
  {
    question: "What language would you suggest for a beginner?",
    answer:
      "For beginners, I would suggest starting with **Python**. It has a simple, readable syntax, which makes it easier to learn and understand. Python is also very versatile and widely used in various fields like web development, data science, artificial intelligence, and automation. Its strong community and abundance of learning resources make it a great choice for someone starting their programming journey."
  },
  {
    question: "What Skills You have actually?",
    answer:
      "My skills include proficiency in programming languages like C, C++, Python, Java, and Solidity, along with expertise in React Native, React, and Tailwind CSS. I have experience working with databases like MySQL and data visualization using Microsoft Power BI. Additionally, I possess strong soft skills such as leadership, adaptability, teamwork, and problem-solving abilities."
  }
];

// Shuffle function to randomize questions
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Populate the dropdown with shuffled questions
function populateQuestions() {
  let selectBox = document.getElementById("questionSelect");
  let shuffledQuestions = shuffleArray([...questions]);

  shuffledQuestions.forEach(q => {
    let option = document.createElement("option");
    option.value = q.answer;
    option.textContent = q.question;
    selectBox.appendChild(option);
  });
}

// Display answer when a question is selected
function showAnswer() {
  let selectBox = document.getElementById("questionSelect");
  let answerOutput = document.getElementById("answerOutput");

  answerOutput.textContent = selectBox.value;
}

// Call function to populate questions when page loads
window.onload = populateQuestions;
