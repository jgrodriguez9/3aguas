import Link from 'next/link'

function VariantSize({variants, selectVariant, selected}){
    return (
        <div className="products-size-wrapper">
            <span>Talla:</span>

            <ul>

                {
                    variants.options.map((item, i)=>(
                        <li key={item.id} className={selected===item.id ? 'active' : (!selected && i===0) ? 'active' : ''}>
                            <Link href="#">
                                <a 
                                    onClick={e => {
                                        e.preventDefault()
                                        selectVariant(item)
                                    }}>
                                        {item.name}
                                </a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default VariantSize