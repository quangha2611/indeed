var questions = document.getElementsByClassName("question__ques");
    var i;
    for (i = 0; i < questions.length; i++) {    
        questions[i].addEventListener("click", function() {
        var answer = this.nextElementSibling;
        answer.classList.toggle("show");
    });
}