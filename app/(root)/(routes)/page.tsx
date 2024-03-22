import { CategoryList, Container } from "@/components";
import { FiCheckCircle } from "react-icons/fi";


const Page = () => {
    return (
        <>
            <HomeBanner />
            <CompanyNumbers />
            <CategoryList />
        </>
    );
}


const HomeBanner = () => {
    return (
        <div style={{ backgroundImage: "url('./images/home-banner.jpg')" }} className=" w-full min-h-[200px]  lg:min-h-[350px] bg-no-repeat bg-cover">
            <div className="grid grid-cols-1 md:grid-cols-3 text-slate-900">
                <div className="col-span-2 px-[20px] py-[15px] md:px-[40px] md:py-[20px] lg:px-[100px] lg:py-[40px] flex flex-col justify-normal md:justify-start gap-2  md:gap-4">
                    <div className="flex flex-col">
                        <div className="text-2xl md:text-4xl  lg:text-6xl font-semibold">Rotex</div>
                        <div className="text-xl md:text-2xl lg:text-4xl font-medium">Automation Valves</div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center text-[.8em] md:text-[1em] lg:text-lg font-base">
                            <FiCheckCircle color="" />
                            COMMERCIAL VEHICLE APPLICATION
                        </div>
                        <div className="flex gap-2 items-center text-[.8em] md:text-[1em] lg:text-lg font-base">
                            <FiCheckCircle color="" />
                            PASSENGER CAR APPLICATION
                        </div>
                        <div className="flex gap-2 items-center text-[.8em] md:text-[1em] lg:text-lg font-base">
                            <FiCheckCircle color="" />
                            BUILD TO SPECS / BUILD TO PRINT
                        </div>
                        <div className="flex gap-2 items-center text-[.8em] md:text-[1em] lg:text-lg font-base">
                            <FiCheckCircle color="" />
                            BESPOKE DESIGN
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const CompanyNumbers = () => {
    return (
        <div className="flex flex-col gap-4 justify-center my-4">
            <div className="text-slate-900 font-base underline text-lg text-center">Let The Number Do Talking</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-[4em]">
                <div className="flex justify-center items-center flex-col gap-2">
                    <div className="text-teal-600 font-semibold text-4xl">9,000+</div>
                    <div className="text-slate-900 text-sm ">Total number of Customers</div>
                </div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <div className="text-teal-600 font-semibold text-4xl">90+ Lacs</div>
                    <div className="text-slate-900 text-sm">No. of products Supplied</div>
                </div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <div className="text-teal-600 font-semibold text-4xl">9,000+</div>
                    <div className="text-slate-900 text-sm">Total number of Countries</div>
                </div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <div className="text-teal-600 font-semibold text-4xl">33</div>
                    <div className="text-slate-900 text-sm">No of utility patent</div>
                </div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <div className="text-teal-600 font-semibold text-4xl">83+</div>
                    <div className="text-slate-900 text-sm">No. of Countries</div>
                </div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <div className="text-teal-600 font-semibold text-4xl">21+</div>
                    <div className="text-slate-900 text-sm">No. of Certifications</div>
                </div>
            </div>
        </div>
    )
}

export default Page;