function getReport(){

    var grade = "";  //declare a variable for grade
    var  result="";  //declare a variable for result

    //read the marks
    var m1 = document.getElementById('m1').value;
    var m2 = document.getElementById('m2').value;
    var m3 = document.getElementById('m3').value;
    var m4 = document.getElementById('m4').value;
    
    //calculate the total marks (using double notation technique)
     var totalMarks = m1 - (- m2) - (- m3) - (- m4);
    
    //get the average marks
    var averageMarks = totalMarks / 4;                  
    
    //find the grade and result using the ternary operator inside the switch statement                  
    switch(
    
        
            //usage of ternary operator inside switch

            (averageMarks > 60 && averageMarks <= 100) ? 1 : 
            (averageMarks > 50 && averageMarks < 60) ? 2 : 
            (averageMarks > 40 && averageMarks < 50) ? 3 : 0 
          )
            
            {
                case 1 :grade = "A";result="First Class";break;
                case 2 :grade = "B"; result="Second Class";break;
                case 3 :grade = "C"; result="Third Class";break;
                case 0 :grade = "D"; result="Fail";break;
            }
            
        
    //display the results   
    document.getElementById('txtStudentName').value = document.getElementById('txtName').value;
    document.getElementById('txtStudentClass').value = document.getElementById('txtClass').value;
    document.getElementById('txtTotalMarks').value = totalMarks;
    document.getElementById('txtAvgMarks').value = averageMarks;
    document.getElementById('txtGrade').value = grade;
    document.getElementById('txtResult').value = result;

} //end of function getReport