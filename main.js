var firebaseConfig = {
    apiKey: "AIzaSyCwHqUmbgnmScMKXmPSy04naIV7-X4TMyE",
    authDomain: "trainscheduler-b2f78.firebaseapp.com",
    databaseURL: "https://trainscheduler-b2f78.firebaseio.com",
    projectId: "trainscheduler-b2f78",
    storageBucket: "trainscheduler-b2f78.appspot.com",
    messagingSenderId: "196737315134",
    appId: "1:196737315134:web:b354e907095d010c"
  };
 
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  $('#Btn').on("click", function() {
    
    var trainName =$("#nameInput").val().trim();
    var destination =$("#desInput").val().trim();
    var firstTrain =moment($("#timeInput").val().trim(), "hh:mm").format("hh:mm");
    var frequency =$("#freqInput").val().trim();
    
    var newTrain = {
        name: trainName,
        place: destination,
        ftrain: firstTrain,
        freq: frequency
      }

    database.ref().push(newTrain);
    console.log(newTrain.name);
   
    $("#nameInput").val("");
    $("#desInput").val("");
    $("#timeInput").val("");
    $("#freqInput").val("");
  });
  
  database.ref().on("child_added", function(Snapshot) {
    console.log(Snapshot.val());
  });