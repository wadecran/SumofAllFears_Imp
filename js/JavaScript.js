//Generates a random whole number where both min and max are inclusive
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

$("#mainF").submit(function (e) {
    e.preventDefault();
});

//Populates the inputs
$("#num1").val(getRandom(1, 100));
$("#num2").val(getRandom(1, 100));
$("#num3").val(getRandom(1, 100));
$("#num4").val(getRandom(1, 100));
$("#num5").val(getRandom(1, 100));



$("#btnStart").on("click", function () {
    //Checks if all inputs are filled out with numbers, if not populates the input with a random int
    if (isNaN(parseInt($("#num1").val()))) {
        $("#num1").val(getRandom(1, 100));
    }
    if (isNaN(parseInt($("#num2").val()))) {
        $("#num2").val(getRandom(1, 100));
    }
    if (isNaN(parseInt($("#num3").val()))) {
        $("#num3").val(getRandom(1, 100));
    }
    if (isNaN(parseInt($("#num4").val()))) {
        $("#num4").val(getRandom(1, 100));
    }
    if (isNaN(parseInt($("#num5").val()))) {
        $("#num5").val(getRandom(1, 100));
    }
    if (isNaN(parseInt($("#sumIn").val()))) {
        $("#sumIn").val(getRandom(2, 200));
    }
    //Populates array with the 5 numbers
    let nums = new Array();
    nums.push(Number($("#num1").val()));
    nums.push(Number($("#num2").val()));
    nums.push(Number($("#num3").val()));
    nums.push(Number($("#num4").val()));
    nums.push(Number($("#num5").val()));

    //Takes the target sum and assigns it to k
    let k = Number($("#sumIn").val());

    //initializes message for output
    let message = `No solution for the sum value of ${k} was found`;

    for (let n = 0; n < nums.length - 1; n++) {
        //If any number in the array is larger then K we can ignore it
        if (nums[n] > k)
            continue;

        //Subtracts current index from sum and sets up to find the remainder
        let sub = k - nums[n];

        //Changes the output if a solution is found
        if (nums.indexOf(sub, n + 1) > -1) {
            message = `A solution was found for the sum value with ${nums[n]} + ${nums[nums.indexOf(sub, n + 1)]} = ${k}`;
            break;
        }
    }

    $("#output").html(`<p class="animate__animated animate__fadeIn">${message}</p>`);
});

//Randomize the five numbers 1-100
$("#btnRandom").on("click", function () {
    $("#num1").val(getRandom(1, 100));
    $("#num2").val(getRandom(1, 100));
    $("#num3").val(getRandom(1, 100));
    $("#num4").val(getRandom(1, 100));
    $("#num5").val(getRandom(1, 100));
});

//Clears all inputs
$("#btnClear").on("click", function () {
    $("#num1").val("");
    $("#num2").val("");
    $("#num3").val("");
    $("#num4").val("");
    $("#num5").val("");
    $("#sumIn").val("");
});
