import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCard = () => {
    const axiosPublic = useAxiosPublic()
    const {data: datas = [], refetch} = useQuery({
        queryKey: ['cart'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/products')
            return res.data.products
        }
    })
    return [datas, refetch]
};

export default useCard;