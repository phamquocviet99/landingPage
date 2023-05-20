import React, { useState } from "react";

export default function ContentPerson({ person }) {
  const [show, setShow] = useState(false);
  return (
    <div
      onMouseLeave={() => setShow(false)}
      onMouseEnter={() => setShow(true)}
      className=" rounded-lg bg-white shadow-lg h-fit p-7 max-w-[400px]"
    >
      <p className="text-2xl font-medium text-blue-800">{person?.name}</p>
      <ul className={`mt-5  ${!show && "hidden duration-500"}`}>
        {person?.experience?.map((index, key) => (
          <li className="mt-3 text-base">{index}</li>
        ))}
      </ul>
    </div>
  );
}
