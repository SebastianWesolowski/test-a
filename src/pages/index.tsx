import { useContext } from "react";

import { Seo } from "@/components";

import { StyleContext } from "@/context/contextType/StyleContext";
import { Layout } from "@/layout/Layout";

const Homepage = (): JSX.Element => {
  const { space } = useContext(StyleContext);

  return (
    <Layout>
      <Seo />
      <main>
        <div className='container mx-auto my-2 sm:my-4' style={{ paddingBottom: `${space}px` }}>
          <div className='relative mx-auto flex max-w-3xl flex-col items-center text-center'>
            <h2 id='social-impact-heading' className='text-3xl font-extrabold tracking-tight text-black sm:text-4xl'>
              <span className='block sm:inline'>Title</span>
            </h2>
            <p className='mt-3 text-xl text-black'>Text</p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Homepage;
