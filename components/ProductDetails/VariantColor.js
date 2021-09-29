import Link from 'next/link'
import { setClassName } from '../../utils/setClassName'

function VariantColor({variants, selectVariant, selected}){
    return (
        <div className="products-color-switch">
            <span>Color:</span>
            <ul>
                {
                    variants.options.map((item, i)=>(
                        <li key={item.id} className={selected===item.id ? 'active' : (!selected && i===0) ? 'active' : ''}>
                            <Link href="#">
                                <a 
                                    onClick={e => {
                                        e.preventDefault()
                                        selectVariant(item)
                                    }} 
                                    title={item.name}
                                    className={setClassName(item.name)}></a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )    
}

export default VariantColor