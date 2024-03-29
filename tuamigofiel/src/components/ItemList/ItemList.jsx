import Item from "../Item/Item"

const ItemList = ({productos}) => {
    return (
        <div className="list">
             {productos.map(prod => <Item key={prod.id} prod={prod} />)}
        </div>
    )
}
export default ItemList 