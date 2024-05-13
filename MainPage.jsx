import './MainPage.css'
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';
export default function MainPage(){
    return(
        <>
        <div className='main-page'>
        <header className='header'>
           <Header/>
           <div className='header_favorites'>
           <Favorites/>
           </div>
           <div className='header_search'>
           <SearchBox/>
           </div>
           </header>
           <main className='main-page_content'>
            <Movies/>
           </main>
        </div>
        </>
    )
}