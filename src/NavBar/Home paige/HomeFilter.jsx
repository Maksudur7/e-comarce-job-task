import { useForm } from "react-hook-form"
import useCard from "../../CostomHook/useCard";
import { useEffect } from "react";

const HomeFilter = ({ setFindDataFilter }) => {
    const [datas] = useCard()
    // console.log(datas)
    const {
        register,
        handleSubmit,
    } = useForm()
    // const searchName = datas.find(element => element.price > 0)
    // console.log(searchName)
    useEffect(() => {
        setTimeout(() => {
            setFindDataFilter(datas)

        }, 1 * 500);
    }, [datas, setFindDataFilter])
    const onSubmit = (data) => {
        console.log(data.filter)
        if (data.filter === "0-100") {
            const searchName = datas.filter(element => element.price > 0 && element.price < 100)
            console.log(searchName)
            setFindDataFilter(searchName)
        }
        else if (data.filter === "100-1000") {
            const searchName = datas.filter(element => element.price > 100 && element.price < 1000)
            console.log(searchName)
            setFindDataFilter(searchName)
        }
        else if (data.filter === "1000-2000") {
            const searchName = datas.filter(element => element.price > 1000 && element.price < 2000)
            console.log(searchName)
            setFindDataFilter(searchName)
        }
        else {
            setFindDataFilter(datas)
        }


    }
    return (
        <div>
            <form onChange={handleSubmit(onSubmit)} >
                <select className="relative m-0 w-[100px]  py-2 -mt-4 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary" {...register("filter")} name="filter" id="">
                    <option value="All">All</option>
                    <option value="0-100">0-100 $</option>
                    <option value="100-1000">100-1000 $</option>
                    <option value="1000-2000">1000-2000 $</option>
                </select>
            </form>
        </div>
    );
};

export default HomeFilter;