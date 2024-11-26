function typeText(textContainer, text, time, charIndex = 0) {
  textContainer.textContent = text.slice(0, charIndex);

  if (charIndex < text.length) {
    setTimeout(() => typeText(textContainer, text, time, charIndex + 1), time);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const firstBlock = document.querySelector(".first");
  const secondBlock = document.querySelector(".second");
  const readBtn = document.querySelector(".js-read");
  const title = document.querySelector(".js-title");
  const titleText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  const paragraph = document.querySelector(".js-paragraph");
  const text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio in aspernatur reprehenderit excepturi velit dolor aperiam, nostrum voluptatem quaerat accusamus ut expedita, possimus iure. Quo nam eveniet iure sint quae.Magni, saepe nam. Nesciunt, reprehenderit velit autem praesentium veniam fugit ducimus modi corrupti at sapiente dignissimos ex quam molestias labore illum facere suscipit distinctio amet eligendi? Totam nisi rerum dolor? Eligendi qui eos autem sit eius maxime ex rerum eum, aspernatur nesciunt officia obcaecati odit, sint ipsum! Id, corrupti numquam recusandae non similique cumque rem atque, quam, vel inventore sed. Voluptatem quibusdam similique amet quae? At, sit. Animi, ratione veniam vero eligendi repudiandae temporibus doloribus dicta quia quis in! Iusto exercitationem ullam fugiat quo qui voluptate incidunt vel numquam animi. Eaque blanditiis ea labore, veniam hic, iusto recusandae consequuntur temporibus dolorum dicta voluptas. Minima laborum quas fugiat itaque similique voluptatem ut adipisci vel obcaecati? Molestias laboriosam ex pariatur voluptatum perferendis.";
  const timeOut = titleText.length * 20;

  readBtn.addEventListener("click", () => {
    firstBlock.classList.add("hidden");
    secondBlock.classList.remove("hidden");
    typeText(title, titleText, 20);
    setTimeout(() => typeText(paragraph, text, 10), timeOut);
  });

});
