const votes1 = {
    upvotes: 13,
    downvotes: 0,
};

const votes2 = {
    upvotes: 2,
    downvotes: 33,
};

const votes3 = {
    upvotes: 132,
    downvotes: 132,
};

function getVoteCount(ob1) {
    return ob1.upvotes-ob1.downvotes
};

console.log(getVoteCount(votes1));
console.log(getVoteCount(votes2));
console.log(getVoteCount(votes3));