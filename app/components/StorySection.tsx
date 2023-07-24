import { Button } from "./basic/Button";

function register() {
    const el = document.getElementById('home');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function StorySection(){
    return(
        <section id="story" className="flex flex-col gap-10 items-center bg-slate-100 min-h-[600px] p-10">
        <h2 className="text-4xl font-normal leading-10 w-full lg:px-16">Our Story</h2>

        <article className="lg:px-16">
          <h3 className="font-bold text-base leading-6 pb-4">Founded on a wish</h3>
          <p>Fusce vel sapien molestie, sagittis enim non, luctus purus. Phasellus tortor neque, finibus a condimentum eu, aliquam sit amet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor neque, finibus a condimentum eu, aliquam sit amet sapien. </p>
        </article>

        <article className="lg:px-16">
          <h3 className="font-bold text-base leading-6 pb-4">Out of the head</h3>
          <p>Fusce vel sapien molestie, sagittis enim non, luctus purus. Phasellus tortor neque, finibus a condimentum eu, aliquam sit amet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor neque, finibus a condimentum eu, aliquam sit amet sapien. </p>
        </article>

        <article className="lg:px-16">
          <h3 className="font-bold text-base leading-6 pb-4">Making it true</h3>
          <p>Fusce vel sapien molestie, sagittis enim non, luctus purus. Phasellus tortor neque, finibus a condimentum eu, aliquam sit amet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor neque, finibus a condimentum eu, aliquam sit amet sapien. </p>
        </article>

        <div className="bg-white border border-blue-400 text-blue-400 rounded-xl text-center shadow-xl py-3 w-auto xs:w-[300px] sm:w-[400px] lg:w-[600px]">
          <p className="lg:text-3xl lg:leading-10">We're just getting started!</p>
          <p className="lg:text-3xl lg:leading-10">Be a part of our next chapter.</p>
        </div>

        <div className="w-auto xs:w-[260px]">
          <Button kind="primary" label="Register" click={() => register()}/>
        </div>
      </section>
    )
}