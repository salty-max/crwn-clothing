import React from 'react'

import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h2 className="title">{title}</h2>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...item }) => (
            <CollectionItem key={id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default CollectionPreview