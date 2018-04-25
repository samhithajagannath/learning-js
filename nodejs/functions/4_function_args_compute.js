function sum(marks) {
  let sum = 0;
  marks.forEach(marks_per_subject => {
    sum += marks_per_subject;
  });
  return sum;
}

const sumArrow = marks => {
  let sum = 0;
  marks.forEach(marks_per_subject => {
    sum += marks_per_subject;
  });
  return sum;
};

const marks = [23, 45, 67, 88, 43, 100];
// const marks = [1, 2, 3];
console.log(sum(marks));
console.log(sumArrow(marks));
