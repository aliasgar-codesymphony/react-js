import React from "react";

export default function Sizing() {
  return (
    <>
      <div className="bg-blue-400 w-24">Hello</div>
      <div className="bg-blue-400 w-32">Hello</div>
      <div className="bg-blue-400 w-40">Hello</div>
      <div className="bg-blue-400 w-48">Hello</div>
      <div className="bg-blue-400 w-56">Hello</div>
      <div className="bg-blue-400 w-xl">Hello</div>

      <div className="flex">
        <div className="w-1/2 bg-purple-400">1</div>
        <div className="w-1/2  bg-purple-400">2</div>
      </div>

      <div className="flex">
        <div className="w-2/6 bg-purple-400">1</div>
        <div className="w-4/6  bg-purple-400">2</div>
      </div>

      <div className=" w-full md:w-auto bg-yellow-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
      </div>

      <div className="h-50 bg-red-400 min-w-100">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Accusamus voluptatem autem
        nulla voluptates maxime ipsum vitae vel quam eum beatae, commodi
        recusandae blanditiis voluptas quis cumque pariatur voluptatum.
        Reprehenderit, ex. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Accusamus voluptatem autem nulla voluptates maxime ipsum vitae vel
        quam eum beatae, commodi recusandae blanditiis voluptas
      </div>

      <div className="h-50 bg-red-400 max-w-100 ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Accusamus voluptatem autem
        nulla voluptates maxime ipsum vitae vel quam eum beatae, commodi
        recusandae blanditiis voluptas quis cumque pariatur voluptatum.
        Reprehenderit, ex. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Accusamus voluptatem autem nulla voluptates maxime ipsum vitae vel
        quam eum beatae, commodi recusandae blanditiis voluptas
      </div>

      <br />
      <div className="w-100 min-h-50 bg-yellow-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Accusamus voluptatem autem
        nulla voluptates maxime ipsum vitae vel quam eum beatae, commodi
        recusandae blanditiis voluptas quis cumque pariatur voluptatum.
        Reprehenderit, ex. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Accusamus voluptatem autem nulla voluptates maxime ipsum vitae vel
        quam eum beatae, commodi recusandae blanditiis voluptas quis cumque
        pariatur voluptatum. Reprehenderit, ex. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Accusamus voluptatem autem nulla
        voluptates maxime ipsum vitae vel quam eum beatae, commodi recusandae
        blanditiis voluptas quis cumque pariatur voluptatum. Reprehenderit,
      </div>
      <div className=" w-100 max-h-50 bg-yellow-400">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        voluptatem autem nulla voluptates maxime ipsum vitae vel quam eum
        beatae, commodi recusandae blanditiis voluptas quis cumque pariatur
        voluptatum. Reprehenderit, ex. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Accusamus voluptatem autem nulla voluptates maxime
        ipsum vitae vel quam eum beatae, commodi recusandae blanditiis voluptas
        quis cumque pariatur voluptatum. Reprehenderit, ex. Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Accusamus voluptatem autem nulla
        voluptates maxime ipsum vitae vel quam eum beatae, commodi recusandae
        blanditiis voluptas quis cumque pariatur voluptatum. Reprehenderit,
      </div>
    </>
  );
}
