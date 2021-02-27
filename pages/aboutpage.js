import React from "react";
import Link from "next/link";
import axios from "axios";

export default function AboutPage({ data }) {
  return (
    <div>
      <h1>About</h1>
      <p>This is information about lukes family</p>
      <p>this is lukes family</p>
      {data.map((el) => (
        <p>{el}</p>
      ))}
      <br />
      <br />
      <Link href="/index">Index</Link>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get("http://localhost:3400/test/data");
  const data = res.data;
  return {
    props: {
      data: data,
    },
  };
};
