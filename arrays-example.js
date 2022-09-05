let brotherOne = "Johnny";
let brotherTwo = "Jimmy";
let brotherThree = "James";

console.log(`We are three brothers: ${brotherOne}, ${brotherTwo}, ${brotherThree}.`)

const brothers = ["Johnny", "Jimmy", "James"];

console.log(`We are three brothers: ${brothers[0]}, ${brothers[1]}, ${brothers[2]}.`)

const brothersExpanded = [
    {
        firstName: "Johnny",
        weight:     150,
    },
    {
        firstName: "Jimmy",
        weight:     160,
    },
    {
        firstName: "James",
        weight:     170
    }
];

console.log(
    `We are three brothers: ${brothersExpanded[0]}, ${brothersExpanded[1]}, ${brothersExpanded[2]}`
)

console.log(
    `We are three brothers and we weigh: ${brothersExpanded[0].weight}, ${brothersExpanded[1].weight}, and ${brothersExpanded[2].weight}.`
)
