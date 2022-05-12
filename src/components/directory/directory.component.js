import { Fragment } from 'react';
import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const categories = [
  {
    id: 1,
    title: "Comics",
    imageUrl: "https://cdn.discordapp.com/attachments/686978325738029076/966366143658999828/unknown.png",
    route: 'shop/comics'
  },
  {
    id:2,
    title: "Manga",
    imageUrl: "https://cdn.discordapp.com/attachments/686978325738029076/966361490670121020/unknown.png",
    route: 'shop/manga'
  },
  {
    id: 3,
    title: "Novels",
    imageUrl: "https://cdn.discordapp.com/attachments/686978325738029076/966365385165242368/unknown.png",
    route: 'shop/novels'
  },
  {
    id: 4,
    title: "Figures",
    imageUrl: "https://cdn.discordapp.com/attachments/686978325738029076/966370781196091392/unknown.png",
    route: 'shop/figures'
  },
  {
    id: 5,
    title: "FunkoPops",
    imageUrl: "https://cdn.discordapp.com/attachments/686978325738029076/966365647611232387/unknown.png",
    route: 'shop/funkopops'
  },
]

const Directory = () => {
  
    return(
      <Fragment>
        <div className='directory-container'>
     {categories.map((category) => (
       <DirectoryItem key= {category.id} category={category} />
     ))}
     </div>
     </Fragment>
    )
}
export default Directory;