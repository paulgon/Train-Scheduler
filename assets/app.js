var firebaseConfig = {
    apiKey: "AIzaSyC7YCUIp8EYiFh8tBISaDxBthMgndFzZo4",
    authDomain: "train-scheduler-6b141.firebaseapp.com",
    databaseURL: "https://train-scheduler-6b141.firebaseio.com",
    projectId: "train-scheduler-6b141",
    storageBucket: "",
    messagingSenderId: "915541223850",
    appId: "1:915541223850:web:985424c676051f36"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

//Allows the admin input information about trains and store into our database and display the information into a table in the same page of our inputs.

//1st. Step => Get the information about the train => forms //html
//2nd. Step => Grab each value from the form through submit event
$(".form").submit(function (event) {
    event.preventDefault();
    var trainName = $("input[name='train-name']").val();
    var destination = $("input[name='destination']").val();
    var firstTrainTime = $("input[name='first-train-time']").val();
    var frequency = $("input[name='frequency']").val();


//3rd. Step => Set info into Database
    database.ref("/trains").push({
        train: trainName,
        dest: destination,
        firstTrain: firstTrainTime,
        freq: frequency
    })
    $ ("input[name='train-name']").val('');
    $("input[name='destination']").val('');
    $("input[name='first-train-time']").val('');
    $("input[name='frequency']").val('');
});

database.ref("/trains").on("child_added", function(response){
// console.log(response.val()['-Lif-AFRHXyZhFN7-j2i'])
//4th. Step => Create dynamic elemnts of a table
//5th. Step => Append information to a table
$('tbody').append(
`
<tr scope="row">
  <td scope="col" colspan="2">${response.val().train}</td>
  <td scope="col" colspan="2">${response.val().dest}</td>
  <td scope="col" colspan="2">${response.val().firstTrain}</td>
  <td scope="col" colspan="2">${response.val().freq}</td>
<tr>
`
//string literals - ES6
)
})









