import React, { useContext, useEffect, useState } from 'react';
import './Bookmarks.css'

const Card = ({ item }) => {

  const [active, setActive] = useState(false)

  const addBookmark = () => {
    setActive(!active)
  }
  return <div>
    <h5><b>{item.headline}</b></h5>
    <p><small>{item.abstract}</small></p>
    <p>
      <img onClick={addBookmark}
        className={`icon ${active ? 'active' : ''}`}
        src="/bookmark.svg"/>
    </p>
  </div>
}

const Bookmarks = () => {
  const url = 'https://news-foniuhqsba-uc.a.run.app'
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(items => {
      setItems(items)
    })
  })

  return <div className="container">
    {items.map(item => <Card item={item}/>)}
  </div>
}

export default Bookmarks;