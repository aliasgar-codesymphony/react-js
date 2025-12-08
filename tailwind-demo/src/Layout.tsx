import React from "react";

export default function Layout() {
  return (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
      sapiente laboriosam quo molestias sint fugit in recusandae velit minima,
      assumenda nihil quisquam ex autem quia iure libero maiores, repellat non.
      <div className="bg-blue-400 inline-block">Hii there , how are you?</div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
      accusantium libero voluptatem mollitia consequuntur ut excepturi placeat
      voluptas odit quas earum obcaecati assumenda, minus minima est quae unde,
      quis iusto?
      <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
      sapiente laboriosam quo molestias sint fugit in recusandae velit minima,
      assumenda nihil quisquam ex autem quia iure libero maiores, repellat non.
      <div className="bg-blue-400 inline">Hii there , how are you?</div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
      accusantium libero voluptatem mollitia consequuntur ut excepturi placeat
      voluptas odit quas earum obcaecati assumenda, minus minima est quae unde,
      quis iusto?
      <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
      sapiente laboriosam quo molestias sint fugit in recusandae velit minima,
      assumenda nihil quisquam ex autem quia iure libero maiores, repellat non.
      <div className="bg-blue-400 block">Hii there , how are you?</div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
      accusantium libero voluptatem mollitia consequuntur ut excepturi placeat
      voluptas odit quas earum obcaecati assumenda, minus minima est quae unde,
      quis iusto?
      <br />
      <br />
      <p className="inline-flex items-baseline">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quas
        asperiores,{" "}
        <span className="self-center mx-1">
          <img
            src="https://images.pexels.com/photos/32560151/pexels-photo-32560151.jpeg"
            className=" h-5 w-5 rounded-full"
          />
        </span>
        velit tenetur dolor repellat illum nobis a, porro maxime, culpa incidunt
        saepe reprehenderit aperiam ullam laudantium? Vel, officia explicabo?
      </p>
      <span className="m-5 border-2 h-50 w-100 text-center inline-grid grid-cols-3 gap-4">
        <span className="bg-red-300">1</span>
        <span className="bg-red-300">2</span>
        <span className="bg-red-300">3</span>
        <span className="bg-red-300">4</span>
        <span className="bg-red-300">5</span>
      </span>
      <span className="m-5 border-2 h-50 w-100 text-center inline-grid grid-cols-3 gap-4">
        <span className="bg-red-300 invisible">1</span>
        <span className="bg-red-300">2</span>
        <span className="bg-red-300 hidden">3</span>
        <span className="bg-red-300">4</span>
        <span className="bg-red-300 ">5</span>
      </span>
      <br />
      <a href="#" className="m-5 sr-only focus:not-sr-only">
        click
      </a>
      <br />
      <br />
      <div dir="rtl">
        <img
          src="https://images.pexels.com/photos/31254178/pexels-photo-31254178.jpeg"
          className="h-50 w-50 float-start"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
          exercitationem dicta sunt illum fugiat quo ullam voluptatum fuga
          necessitatibus! Placeat optio quidem porro dicta, libero eos maiores
          adipisci consequuntur illo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laboriosam ex accusamus tempora debitis voluptatibus
          eos libero alias sit. Perspiciatis rerum veritatis facere unde
          voluptatum quod delectus. Officia iusto voluptates sint.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <img
          src="https://images.pexels.com/photos/31254178/pexels-photo-31254178.jpeg"
          className=" h-100 w-100 float-left"
        />
        <img
          src="https://images.pexels.com/photos/31254178/pexels-photo-31254178.jpeg"
          className="h-50 w-50 float-right"
        />
        <p className="clear-both">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
          exercitationem dicta sunt illum fugiat quo ullam voluptatum fuga
          necessitatibus! Placeat optio quidem porro dicta, libero eos maiores
          adipisci consequuntur illo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laboriosam ex accusamus tempora debitis voluptatibus
          eos libero alias sit. Perspiciatis rerum veritatis facere unde
          voluptatum quod delectus. Officia iusto voluptates sint.
        </p>
      </div>
      <div className="m-5 bg-blue-300 w-60 h-60 overflow-auto">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          expedita quo quaerat minus, optio rem debitis minima pariatur hic nam
          saepe distinctio id necessitatibus vitae quia aut dignissimos laborum
          repellat? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Incidunt expedita quo quaerat minus, optio rem debitis minima pariatur
          hic nam Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Libero blanditiis ut tempore magnam id sint voluptatum molestiae,
          omnis, alias voluptate ratione obcaecati eaque aperiam at molestias
          quas esse nemo minus.
        </p>
      </div>
      <div className="m-5 w-170 bg-red-300 overflow-x-auto">
        <div className="inline-flex gap-2">
          <div className="w-30 h-30 bg-green-300  ">1</div>
          <div className="w-30  bg-green-300 ">1</div>
          <div className="w-30 bg-green-300 ">1</div>
          <div className="w-30 bg-green-300 ">1</div>
          <div className="w-30 bg-green-300 ">1</div>
          <div className="w-30 bg-green-300 ">1</div>
          <div className="w-30 bg-green-300 ">1</div>
          <div className="w-30 bg-green-300 ">1</div>
        </div>
      </div>


      <div className="m-5 bg-blue-300 w-60 h-60 overflow-clip">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          expedita quo quaerat minus, optio rem debitis minima pariatur hic nam
          saepe distinctio id necessitatibus vitae quia aut dignissimos laborum
          repellat? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Incidunt expedita quo quaerat minus, optio rem debitis minima pariatur
          hic nam Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Libero blanditiis ut tempore magnam id sint voluptatum molestiae,
          omnis, alias voluptate ratione obcaecati eaque aperiam at molestias
          quas esse nemo minus.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
