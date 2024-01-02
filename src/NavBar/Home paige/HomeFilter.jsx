import { useForm } from "react-hook-form"

const HomeFilter = ({ datas, setFindDataFilter }) => {
    console.log(datas)
    const {
        register,
        handleSubmit,
    } = useForm()
    // const searchName = datas.find(element => element.price > 0)
    // console.log(searchName)
    const onSubmit = (data) => {
        console.log(data)
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
        else{
            setFindDataFilter(datas)
        }
        

    }
    return (
        <div>
            <form onChange={handleSubmit(onSubmit)} >
                <select {...register("filter")} name="filter" id="">
                    <option value="0-100">0-100 $</option>
                    <option value="100-1000">100-1000 $</option>
                    <option value="1000-2000">1000-2000 $</option>
                </select>
            </form>
        </div>
    );
};

export default HomeFilter;