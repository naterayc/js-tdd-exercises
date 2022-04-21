const greetPeople = (people) => {
  const greeting = "Hello ";
  let listOfGreetings = [];
  people.forEach((person) => {
    listOfGreetings.push(greeting + person);
  });

  return listOfGreetings;
}

module.exports = {
  greetPeople
};

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
