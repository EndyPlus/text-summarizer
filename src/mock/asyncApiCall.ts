const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, atque iste quae at exercitationem voluptas expedita? Quia cupiditate tenetur et voluptates impedit placeat maiores doloremque ipsum inventore totam nemo accusamus soluta quod nesciunt tempora consequatur, sapiente recusandae consequuntur. Eius, nostrum dolores deleniti nisi sequi animi sapiente nihil architecto debitis porro.";

export default async function asyncApiCall() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(text);
    }, 1500),
  );
}
