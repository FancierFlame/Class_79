var name_of_students=[];

function submit(){
    
    var name_of_students_1 = document.getElementById("name_of_student_1").value;
    var name_of_students_2 = document.getElementById("name_of_student_2").value;
    var name_of_students_3 = document.getElementById("name_of_student_3").value;
    var name_of_students_4 = document.getElementById("name_of_student_4").value;

    name_of_students.push(name_of_students_1);
    name_of_students.push(name_of_students_2);
    name_of_students.push(name_of_students_3);
    name_of_students.push(name_of_students_4);

    console.log(name_of_students);

    document.getElementById("div_names").innerHTML = name_of_students;
    document.getElementById("sort_button").style.display = "inline-block";
    document.getElementById("submit_button").style.display = "none";

}

    function sort_name() {
        name_of_students.sort()
        document.getElementById("div_names").innerHTML = name_of_students;
        console.log(name_of_students);
    }