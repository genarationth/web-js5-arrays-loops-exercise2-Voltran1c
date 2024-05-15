// Exercise #2
let Name1 = ["Sofia", "David", "Juan"];
let Name2 = ["Sara", "Augustin"];
let Queue = [...Name1,...Name2];
console.log(Queue);

Queue.splice(2, 0, "Renata");
console.log(Queue);

Queue.push("Elena");
console.log(Queue);