import { useState } from "react";
import { useForm } from "react-hook-form"
import useCard from "../../CostomHook/useCard";
import HomeFilter from "./HomeFilter";
import Card from "./Card";

const Home = () => {
    const [datas] = useCard()
    const [findData, setFindData] = useState(datas)
    const [findDataFilter, setFindDataFilter] = useState(datas)
    console.log(findData)
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => {
        console.log(data.search)
        const searchName = datas.find(element => element.title === data.search)
        setFindData(searchName)
        console.log(searchName)
    }
    console.log(datas)
    return (
        <>
            <HomeFilter datas={datas} setFindDataFilter={setFindDataFilter}></HomeFilter>
            <div>
                <div className="mb-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                            <input
                                {...register("search")}
                                name="search"
                                type="search"
                                className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon1" />

                            <button
                                className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                                type="button"
                                id="button-addon1"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    findData ? <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg h-[300px] w-full" src={findData.thumbnail} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{findData.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{findData.description}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{findData.price}$</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {findData.price}
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div> :
                        findDataFilter ? findDataFilter.map((element, indexOf) => <Card key={indexOf} element={element}></Card>)
                            :
                            datas.map((element, indexOf) => <Card key={indexOf} element={element}></Card>)

                }



            </div>
        </>
    );
};

export default Home;