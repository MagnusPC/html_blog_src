let rotating = false;
let curr_rot = [0, 0];
let prev_mouse_pos = [0, 0];
let curr_mouse_pos = [0, 0];
const container = document.getElementById("cube-container");
const cube = document.getElementById("cube");
const rot_scale = 0.4;

container.addEventListener("mousedown", (event) => {
    rotating = true;
    prev_mouse_pos = [event.screenY, event.screenX];
});

document.addEventListener("mousemove", (event) => {

    if (rotating) {
        curr_mouse_pos = [event.screenY, event.screenX];
        curr_rot[0] += (curr_mouse_pos[0] - prev_mouse_pos[0]) * rot_scale;
        curr_rot[1] += (curr_mouse_pos[1] - prev_mouse_pos[1]) * rot_scale;
        cube.style.transform = "translateZ(-100px) rotateX(" + -curr_rot[0] + "deg) rotateY(" + curr_rot[1] + "deg)";
        prev_mouse_pos = curr_mouse_pos;
    }
});

document.addEventListener("mouseup", (event) => {
    rotating = false;
});