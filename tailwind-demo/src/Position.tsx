import React from "react";

export default function Position() {
  return (
    <>
      <div className="bg-green-400 w-100 h-50 relative top-10 left-10">
        Relative: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Voluptatibus praesentium saepe nulla inventore et cum, aut autem at.
        Assumenda itaque incidunt voluptatibus nemo adipisci omnis ipsam nulla
        tempora dolores fugit.
      </div>
      <br /> <br />
      <br />
      <div className="bg-green-400 w-100 h-50 relative">
        <p className="absolute ">
          Absolute: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptatibus praesentium saepe nulla inventore et cum, aut autem at.
          Assumenda itaque incidunt voluptatibus nemo adipisci omnis ipsam nulla
          tempora dolores fugit.
        </p>
      </div>
    </>
  );
}
