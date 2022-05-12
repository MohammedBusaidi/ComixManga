import './header-item.styles.scss';

const HeaderItem = () => {
    return (
        <div className='header-item-container'>
       <div className='header-background-image' style={{
         backgroundImage: `url({http://www.fwpodcasts.com/ma/FWTeamUp/header-FWTeamUp.jpg})`
       }} />
       <div className='body'>
         <h2>ShopNow</h2>
       </div>
     </div>
    )

}

export default HeaderItem;