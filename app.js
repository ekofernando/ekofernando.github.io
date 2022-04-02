// Initialize Firebase 
var config = {
    apiKey: "9R1Y4AAYbh2RMp0gHSiNUhPAY8fUYkyudRPTMknY",
    authDomain: "mcuesp8266-cbef0-default-rtdb.firebaseio.com",
    databaseURL: "https://mcuesp8266-cbef0-default-rtdb.firebaseio.com",
    projectId: "mcuesp8266-cbef0-default-rtdb",
    storageBucket: "mcuesp8266-cbef0-default-rtdb.appspot.com",
    messagingSenderId: "104313484945"
};


firebase.initializeApp(config);


const dbRef = firebase.database();

function myfuction(e) {

    var servoRef = dbRef.ref(e.dataset.servo + "/");

    servoRef.set({
        value: e.value
    });
}

HTMLElement.prototype.serialize = function () {
    var obj = {};
    var elements = this.querySelectorAll("input, select, textarea");
    for (var i = 0; i < elements.length; ++i) {
        var element = elements[i];
        var name = element.name;
        var value = element.value;

        if (name) {
            obj[name] = value;
        }
    }
    return JSON.parse(JSON.stringify(obj));
}

function saveServo() {

    var element = document.getElementById("MyID");
    element.classList.add("active");
    var count = document.getElementById("count").value;
    var input = document.getElementsByName('fld_btp01[]');
    var k = [];
    for (var i = 0; i < input.length; i++) {
        var a = input[i];
        k.push(a.value);
    }
    localStorage.setItem("SERVO_CD", k);
    if (k.length > 0) {
        alert("confirm identity successfully");
        setTimeout(() => {
            element.classList.remove("active");
        }, 1000);
        window.location.href = window.location.href;
    } else {
        alert("confirm identity successfully");
        setTimeout(() => {
            element.classList.remove("active");
        }, 1000);
    }
}

function ResetServo() {
    var answer = window.confirm("Reset Configuration ?");
    if (answer) {
        var element = document.getElementById("MyID");
        element.classList.add("active");
        localStorage.clear();
        alert("Reset Configuration successfully");
        setTimeout(() => {
            element.classList.remove("active");
        }, 1000);
        window.location.href = window.location.href;
    }
    else {
        //some code
    }

}
// const usersRef = dbRef.child('users');
// const userListUI = document.getElementById("userList");

// usersRef.on("child_added", snap => {

//     let user = snap.val();

//     let $li = document.createElement("li");
//     $li.innerHTML = user.name;
//     $li.setAttribute("child-key", snap.key);
//     $li.addEventListener("click", userClicked)
//     userListUI.append($li);

// });


// function userClicked(e) {

//     var userID = e.target.getAttribute("child-key");

//     const userRef = dbRef.child('users/' + userID);
//     const userDetailUI = document.getElementById("userDetail");

//     userDetailUI.innerHTML = ""

//     userRef.on("child_added", snap => {


//         var $p = document.createElement("p");
//         $p.innerHTML = snap.key + " - " + snap.val()
//         userDetailUI.append($p);


//     });

// }

