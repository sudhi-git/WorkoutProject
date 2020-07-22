var exerciseCount = 1;
var currentExercise = getExerciseDetails(exerciseCount);
var changeExercise = false;

var x = setInterval(function(){
    var workoutVideo;
    if(changeExercise){
        currentExercise = getExerciseDetails(exerciseCount);
        workoutVideo = document.getElementById('workoutVideo');
        workoutVideo.src = currentExercise.video;
        workoutVideo.load();
        workoutVideo.play();
        changeExercise = false;
    }
    document.getElementById('currentWorkout').innerHTML = 'Current Workout: ' + currentExercise.currentWorkout;
    document.getElementById('nextWorkout').innerHTML = 'Next Workout: ' + currentExercise.nextWorkout;
    

    var workoutTime = getSeconds(currentExercise.exerciseTime);
    var restTime = 0;
    if(workoutTime < 0){
        restTime = getSeconds(currentExercise.restTime);
        if(restTime < 0){
            exerciseCount++;
            changeExercise = true;
        }else{
            document.getElementById('restTime').innerHTML = 'Rest Time: ' + restTime;
        }
    }else{
        restTime = 0;
        document.getElementById('countdown').innerHTML = 'Countdown: ' + workoutTime;
    }
    if(exerciseCount == 14){
        clearInterval(x);
        workoutVideo = document.getElementById('workoutVideo');
        workoutVideo.pause();
        workoutVideo.removeAttribute("src");
        workoutVideo.load();
    }
}, 100)

function getExerciseDetails(count){
    var exerciseDetails = {};
    var exerciseTime = 30000;
    var restTime = 10000;
    var currentTime = new Date().getTime();
    exerciseDetails.exerciseTime = currentTime + exerciseTime;
    exerciseDetails.restTime = exerciseDetails.exerciseTime + restTime;
    switch (count){
        case 1:
            exerciseDetails.currentWorkout = 'Jumping Jacks';
            exerciseDetails.nextWorkout = 'Wall Sit';
            exerciseDetails.video = 'JumpingJacks.mp4'
            break;
        case 2:
            exerciseDetails.currentWorkout = 'Wall Sit';
            exerciseDetails.nextWorkout = 'Push Ups';
            exerciseDetails.video = 'WallSit.mp4'
            break;
        case 3:
            exerciseDetails.currentWorkout = 'Push Ups';
            exerciseDetails.nextWorkout = 'Crunches';
            exerciseDetails.video = 'PushUps.mp4'
            break;
        case 4:
            exerciseDetails.currentWorkout = 'Crunches';
            exerciseDetails.nextWorkout = 'Step Up';
            exerciseDetails.video = 'Crunches.mp4'
            break;
        case 5:
            exerciseDetails.currentWorkout = 'Step Up';
            exerciseDetails.nextWorkout = 'Squats';
            exerciseDetails.video = 'StepUps.mp4'
            break;
        case 6:
            exerciseDetails.currentWorkout = 'Squats';
            exerciseDetails.nextWorkout = 'Triceps';
            exerciseDetails.video = 'Squats.mp4'
            break;
        case 7:
            exerciseDetails.currentWorkout = 'Triceps';
            exerciseDetails.nextWorkout = 'Planks';
            exerciseDetails.video = 'Triceps.mp4'
            break;
        case 8:
            exerciseDetails.currentWorkout = 'Planks';
            exerciseDetails.nextWorkout = 'High Knees';
            exerciseDetails.video = 'Planks.mp4'
            break;
        case 9:
            exerciseDetails.currentWorkout = 'High Knees';
            exerciseDetails.nextWorkout = 'Lunges';
            exerciseDetails.video = 'HighKnees.mp4'
            break;
        case 10:
            exerciseDetails.currentWorkout = 'Lunges';
            exerciseDetails.nextWorkout = 'Push Ups + Rotation';
            exerciseDetails.video = 'Lunges.mp4'
            break;
        case 11:
            exerciseDetails.currentWorkout = 'Push Ups + Rotation';
            exerciseDetails.nextWorkout = 'Right Side Plank';
            exerciseDetails.video = 'PushUpRotation.mp4'
            break;
        case 12:
            exerciseDetails.currentWorkout = 'Right Side Plank';
            exerciseDetails.nextWorkout = 'Left Side Plank';
            exerciseDetails.video = 'SidePlanks.mp4'
            break;
        case 13:
            exerciseDetails.currentWorkout = 'Left Side Plank';
            exerciseDetails.nextWorkout = 'Done';
            exerciseDetails.video = 'SidePlanks.mp4'
            break;            

    }
    return exerciseDetails;
}

function getSeconds(time){
    var now = new Date().getTime();
    var diff = time - now;
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return seconds;
}

