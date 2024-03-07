function showSalary(users, age) {
  const filteredUsers = users.filter(user => user.age <= age);
  const userSalaries = filteredUsers.map(user => `${user.name}, ${user.balance}`);
  return userSalaries.join('\n');
}
