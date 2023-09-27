import Swal from 'sweetalert2'

const getLocalStroge = () => {
    let items = localStorage.getItem("cart");
    if (items) {
        return JSON.parse(items);
    } else {
        return [];
    }
};

const SavetoLs = (cart) => {
    let stringCart = JSON.stringify(cart);

    localStorage.setItem("cart", stringCart);
}
const SavetoLocalstroge = (id) => {
    let cart = getLocalStroge();

    cart.push(id);


    SavetoLs(cart)


};
const HandleToaddProducts = (id) => {

    SavetoLocalstroge(id)

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cart Added done !',
        showConfirmButton: true,
        timer: 2500
    })
}
const deleteproducts = (id) => {
    let item = getLocalStroge();

    let reamining = item.filter(item => item !== id);

    SavetoLs(reamining)

    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Cart remove done !',
        showConfirmButton: true,
        timer: 3000,
    })



}
export { getLocalStroge, HandleToaddProducts, deleteproducts };
