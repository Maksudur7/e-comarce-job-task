// import { useContext } from "react";
// import { AuthContex } from "../../Auth provider/AuthProvider";

import Swal from "sweetalert2";


const Card = (element) => {
    // console.log(element?.element?.title)
    // const { users } = useContext(AuthContex)
    // console.log(users.email)

    const handelCard = (datas) => {
        const datass = []
        const datasLocalstroj = JSON.parse(localStorage.getItem('datasStroj'))
        if (!datasLocalstroj) {
            datass.push(datas)
            localStorage.setItem('datasStroj', JSON.stringify(datass))
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Donation has been Successfuly',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            datass.push(...datasLocalstroj, datas)
            localStorage.setItem('datasStroj', JSON.stringify(datass))
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Donation has been Successfuly',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure>
                    <img className="h-52" src={element?.element?.thumbnail} alt="Shoes" />
                </figure>

                <div className="card-body  text-start">
                    <h2 className="card-title">{element?.element?.title}</h2>
                    <p>{element?.element?.description}</p>
                    <hr />
                    <div className="grid grid-cols-2 text-start">
                        <div>
                            <p><span className="font-bold">Price :</span> {element?.element?.price} $</p>
                            <p><span className="font-bold">Brand :</span> {element?.element?.brand} </p>
                            <p><span className="font-bold">Category :</span> {element?.element?.category} </p>

                        </div>
                        <div>
                            <p><span className="font-bold">Discount :</span> {element?.element?.discountPercentage} %</p>
                            <p><span className="font-bold">Rating :</span> {element?.element?.rating} </p>
                            <p><span className="font-bold">Stock :</span> {element?.element?.stock} </p>
                        </div>
                    </div>

                    <div className="card-actions">
                        <button
                            onClick={() => handelCard(element?.element)}
                            className="btn btn-neutral hover:border-0 hover:border-b-4 hover:bg-white hover:text-black">add to cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;