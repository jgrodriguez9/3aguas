import Link from 'next/link'
import { setClassName } from '../../utils/setClassName'
import React from "react";

function CategoriesList({categories}){
    return (
        <div >
            <span>Categories:</span>
                {
                    categories.map((item, index)=>(
                        <span key={item.id}>
                             <Link href="#">
                                <a onClick={e => e.preventDefault()}>{item.name}</a>
                            </Link>
                            {index < categories.length - 1 && ', '}
                        </span>
                    ))
                }
        </div>
    )    
}

export default CategoriesList