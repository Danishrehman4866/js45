              //QUESTION 1

// var arr = [];
// arr[0] = "Danish"
// arr[1] = "Afridi"
// arr[2] = "Shadab"

            //Question 2

// var arr = [];
// var arr = new Array(4);
// arr[0];
// arr[1];
// arr[2];
// arr[3];

           //Question 3

// var arr = ["Danish Rehman"]

           //Question 4

// var arr = [20]

          //Question 5

// var arr = [false]

         //Question 6

// var arr = ["Danish" , 20 , true ,undefined]

        //Question 7

// var arr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M", "Phil", "PhD"]
// document.write("Qualification" + "<br>");
// document.write("1 ) " + arr[0] + "<br>")
// document.write("2 ) " + arr[1] + "<br>")
// document.write("3 ) " + arr[2] + "<br>")
// document.write("4 ) " + arr[3] + "<br>")
// document.write("5 ) " + arr[4] + "<br>")
// document.write("6 ) " + arr[5] + "<br>")
// document.write("7 ) " + arr[6] + "<br>")
// document.write("8 ) " + arr[7] + "<br>")
// document.write("9 ) " + arr[8] + "<br>")

       //Question 8

// var student = ["Danish" , "Afridi" , "Shadab"];
// var arr = [ 320 , 230 , 480];
// document.write("Score of "  + student[0] + " " + "is" + " " + arr[0] + ". Percentage : "  + arr[0]/500*100 +"%" + "<br>")
// document.write("Score of "  + student[1] + " " + "is" + " " + arr[1] + ". Percentage : "  + arr[1]/500*100 +"%" + "<br>")
// document.write("Score of "  + student[2] + " " + "is" + " " + arr[2] + ". Percentage : "  + arr[2]/500*100 +"%" + "<br>")


          // Question 9
          
// var arr = ["red" , "blue" , "yellow" , "green"]
// document.write(arr + "<br>");
// var userOne = prompt("Add a color in the start")
// arr.unshift(userOne)
// document.write(arr  + "<br>");
// var userTwo = prompt("Add a color in the End" )
// arr.push(userTwo)
// document.write(arr  + "<br>");
// arr.unshift("black" , "white");
// document.write(arr  + "<br>");
// arr.shift()
// document.write(arr  + "<br>");
// arr.pop()
// document.write(arr  + "<br>");
// arr.splice(1, 3)
// document.write(arr  + "<br>");
// arr.splice(2 , 3 , "Grey" , )
// document.write(arr  + "<br>");

        // Question 10

// var studentScore = [320 , 230 , 480 , 120]
// document.write("Scores of Student : " + studentScore + "<br>")
// var ordered = studentScore.sort();
// document.write("Ordered Scores Of Students : " + ordered )


        //Question 11

// var cityName = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
// document.write("Cities list :" + "<br>" + cityName + "<br>" + "<br>");
// var arr = cityName.slice(2,4);
// document.write("Selected Cities List :" + "<br>" + arr );
 
         //Question 12

// var arr = ["This" , "is" , "my" , "cat"];
// document.write( "<b>" + "Array :" + "</b>" + "<br>" + arr + "<br>"+ "<br>" )
// var string = arr.join(" ")
// document.write("<b>" + "String :" + "</b>" + "<br>" + string)

         //Question 13

// arr = ["keyboard", "mouse" , "printer" , "moniter" ]
// document.write("Devices :" + "<br>" + arr + "<br>" + "<br>")
// for( i=0 ; i < arr.length ; i++) {
//   document.write("Out :" + "<br>" + arr[i]  +  "<br>");
// }

        //Question 14

// arr = ["keyboard", "mouse" , "printer" , "moniter" ]
// document.write("<br>" +"Devices :" + "<br>" + arr + "<br>" + "<br>")
// for( i=arr.length - 1; i >= 0  ; i--) {
//   document.write("Out :" + "<br>" + arr[i]  +  "<br />");
// }

        //Question 1

// var arr =  [["Danish"],[21],[true]];

       //Question 2

// var arr = [[0 , 1 , 2 , 3] , [1 , 0 , 1 , 2] , [2 , 1 , 0 , 1]]
// for (var row = 0 ; row < arr.length ; row++) {
//   document.write("<br />")
//   for (var col = 0 ; col < arr[row].length ; col++ ) {
//     document.write(arr[row][col] + " ")
//   }
// }

          //Question 3

// var arr = [[1 , 2 ,3] , [ 4 , 5 , 6] , [ 7 , 8 , 9 , 10]]
//  for ( var row = 0 ; row < arr.length ; row++ ) {
//    for ( var col = 0 ; col < arr[row].length ; col++) {
//      document.write(arr[row][col] + "<br>")
//    }
//  }

          //Question 4

// var userTable = +prompt("Enter a number to show it's multiplication table");
// var userlength = +prompt("Enter length multiplication table");
// document.write("Multiplication table of " + userTable  + " Length  " + userlength + " is : "  + "<br />");
// for (var i = 1 ; i <= userlength ; i++) {
//   document.write (userTable +  " x "  + i + " = "  + userTable*i + "<br>")
// };

          //Question 5

// var arr = ["apple" , "banana" , "mango" , "orange" , "strawberry"]; 
// for ( var i = 0 ; i < arr.length ; i++) {
//   document.write(arr[i] + "<br />");
// } for ( var j = 0 ; j < arr.length ; j++ ) {
//   document.write ("Element at index " + j + " is " + arr[j] + "<br>")
// };

           //Question 6

// document.write("<b>" +  "Counting :" + "</b>" + "<br>") ;
// for ( i = 0 ; i <= 15 ; i++) {
//   document.write(i + ", " );
// }
// document.write("<br>" + "<b>" +  "Reverse Counting :" + "</b>" + "<br>") ;
// for ( i = 10 ; i >= 0 ; i--) {
//   document.write(i + ", ")
// }
// document.write("<br>" + "<b>" +  "Even :" + "</b>" + "<br>") ;
// for ( i = 0 ; i <= 20 ; i= i+2) {
//   document.write(i + ", ")
// }
// document.write("<br>" + "<b>" +  "Odd :" + "</b>" + "<br>") ;
// for ( i = 1 ; i <= 20 ; i= i+2) {
//   document.write(i + ", ")
// }
// document.write("<br>" + "<b>" +  "Series :" + "</b>" + "<br>") ;
// for ( i = 2 ; i <= 20 ; i= i+2) {
//   document.write(i + "k, ") 
// }

           //Question 7

// var arr =  ["cake", "apple pie", "cookie", "chips", "patties"]
// var user = prompt("Welcome to ABC Sweet Bakery. What do you want to order Sir")
// isMatch = false
// for ( i = 0 ; i < arr.length ; i++) {
//   if (user===arr[i]) {
//     alert("cookie is available at index " + i + " in our bakery")
//     isMatch = true
//     break
//   }
// } if (isMatch===false) {
//   alert("We are sorry. " + user + " is  not available in our bakery")
// }

             //Question 8

// var arr = [24, 53, 78, 91, 12];
// document.write("Array items :" + arr + "<br >")
// document.write("The Largest number is : " + Math.max(...arr) + "<br />" + "<br />"  );

             //Question 9

// var arr = [24, 53, 78, 91, 12];
// document.write("Array items :" + arr + "<br >")
// document.write("The Smallest number is : " + Math.min(...arr) + "<br />"); 

             //Question 10

// for ( var i = 5 ; i <= 100 ; i = i + 5) {
//   document.write(i + ",")
// }

       