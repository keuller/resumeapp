import { Icons } from "~/lib/icons";

export default function StepsSection(){
    return(
        <section id="steps" className="flex flex-col gap-8 items-center justify-center bg-[#CCEDFF] min-h-[760px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:min-w-[780px] lg:justify-between">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center bg-white w-20 h-20 rounded-full shadow-lg">
              <img src={Icons.USER_BLUE} alt="user" width="33" />
            </div>
            <h2 className="font-semibold">Step 1</h2>
            <span>Create an account</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center bg-white w-20 h-20 rounded-full shadow-lg">
              <img src={Icons.EDIT_BLUE} alt="edit" width="33" />
            </div>
            <h2 className="font-semibold">Step 2</h2>
            <span>Fill out your resume</span>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center justify-center bg-white w-20 h-20 rounded-full shadow-lg">
              <img src={Icons.SHARE_BLUE} alt="share" width="33" />
            </div>
            <h2 className="font-semibold">Step 3</h2>
            <span>Share away</span>
          </div>
        </div>

        <div className="mt-2 lg:mt-10">
          <span className="leading-10 text-3xl lg:text-6xl">That so simple like this.</span>
        </div>
      </section>
    )
}