const Product = (props) => {
    return (
        <div>
            <div className="card h-100 mb-3 bg-success">
                <a href="#"><img className="card-img-top" src={props.image} alt /></a>
                <div className="card-body">
                    <div className="text-center mt-2 mb-2">
                        <b><h5 className="card-title text-light">{props.judul}</h5></b>
                        <p className="card-text text-light">{props.isi}</p>
                    </div>
                    <div class="text-center"><a class="btn btn-outline-light mt-auto" href="#">Tukuen Saiki</a></div>
                </div>
            </div>
        </div>
    );
}

export default Product