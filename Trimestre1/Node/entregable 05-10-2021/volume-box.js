const cube = {
    width: 4,
    length: 2,
    height: 2,
};

function volumeOfBox(obj) {
    return obj.length * obj.width * obj.height;
};

console.log(volumeOfBox(cube));