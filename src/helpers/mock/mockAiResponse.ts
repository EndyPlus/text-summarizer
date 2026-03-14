import getRandomNumber from "../utils/getRandomNumber";

const text1 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, atque iste quae at exercitationem voluptas expedita? Quia cupiditate tenetur et voluptates impedit placeat maiores doloremque ipsum inventore totam nemo accusamus soluta quod nesciunt tempora consequatur, sapiente recusandae consequuntur. Eius, nostrum dolores deleniti nisi sequi animi sapiente nihil architecto debitis porro.";
const text2 =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia in dolor neque. Exercitationem dolores rem incidunt labore commodi, hic, libero soluta eveniet ullam doloremque aliquid accusantium voluptates corrupti amet enim sit et minima.";
const text3 =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum fugiat in dicta debitis ipsam obcaecati deserunt quod optio recusandae fugit modi harum iste ab magnam iusto voluptatibus repudiandae illo cupiditate pariatur, earum laboriosam nemo est. Velit, exercitationem. Incidunt facilis modi, unde laudantium, velit aspernatur nobis reprehenderit et, alias ipsum distinctio ducimus temporibus dolore! Distinctio explicabo fugiat eos. Harum possimus quisquam a numquam. Quo quae, aspernatur eveniet voluptatum magni illum qui harum labore consectetur! Ad animi saepe repellat alias mollitia minus, eum dolore sed corporis maxime hic minima labore necessitatibus, pariatur optio veritatis error dolor vitae, nam nemo neque!";
const text4 =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae dicta facilis expedita placeat quas doloremque molestias porro deleniti explicabo iste, fugit eveniet optio ex! Beatae culpa odit fugiat officia architecto consectetur sed impedit blanditiis. Architecto, itaque ex iste dolor harum maiores facilis odit aut ullam eos ipsa non iure aliquid, eaque, amet accusantium quibusdam culpa rerum quidem quia autem! Quas quidem eligendi dolorum repellat impedit, facilis libero.";
const text5 =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, nemo accusantium id non dicta odio aspernatur distinctio. Sit repellendus pariatur, corporis nulla aspernatur fugiat delectus laborum aut deleniti aliquam eum, ea impedit amet repudiandae reprehenderit laboriosam iste libero incidunt animi. Quia, repudiandae? Tempora, repellendus aspernatur! Odio eos expedita nostrum soluta harum quas atque, vero rerum, explicabo quae corporis repellat libero eaque adipisci nisi unde deserunt officiis sit cupiditate neque deleniti. Voluptatem, nesciunt? Sint unde quod officia aperiam suscipit deleniti blanditiis voluptatibus mollitia distinctio, quaerat eum officiis fugiat repellat earum harum recusandae nihil a magnam quibusdam ab amet nostrum sequi. Exercitationem porro eveniet odit voluptatibus ducimus tenetur itaque temporibus. Quis iure excepturi soluta consequatur, qui, nemo consectetur obcaecati sequi dolor nisi neque accusantium odit.";

const getRandomText = () => {
  const textsArr = [text1, text2, text3, text4, text5];

  return textsArr[getRandomNumber(0, textsArr.length - 1)];
};

const responseObject = {
  success: true,
  error: undefined,
  data: getRandomText(),
};

export default async function mockAiResponse(): Promise<typeof responseObject> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(responseObject);
    }, 1500),
  );
}
