import React from "react";

export default function Font() {
  return (
    <div>
      <p className="text-xs">Hello World</p>
      <p className="text-sm">Hello World</p>
      <p className="text-base">Hello World</p>
      <p className="text-lg">Hello World</p>
      <p className="text-xl">Hello World</p>

      <p className="text-2xl">Hello World</p>
      <p className="text-3xl">Hello World</p>

      {/* text-4xl to text-9xl */}

      <p className="text-sm/12">So I started to walk into the water...</p>
      <p className="text-sm/7">So I started to walk into the water...</p>
      <p className="text-sm/22">So I started to walk into the water...</p>

      <p className="text-[20px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <br />
      <br />

      <p className="text-lg md:text-2xl lg:4xl  indent-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis numquam
        at voluptate voluptatem! Facere repellat quasi sequi ratione, tempora
        exercitationem adipisci aut quas at voluptatum consectetur perferendis
        sed nemo molestiae!
      </p>
      <br />
      <br />

      <p className="font-sans md:font-serif">Lorem ipsum dolor sit amet...</p>

      <p className=" diagonal-fractions text-2xl">1/2 3/4 5/6</p>

      <p className="tracking-widest">Lorem ipsum dolor sit amet...</p>
      <ul className="list-disc">
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>
    <br /><br />
        <p className=" underline text-red-600 decoration-blue-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
}
