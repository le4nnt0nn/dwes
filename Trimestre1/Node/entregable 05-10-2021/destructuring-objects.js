const user = { name: "John", email: "john@example.com",city: "Phoenix", state: "AZ", country: "USA"};
const { name, email, ...rest } = user;

console.log(rest);