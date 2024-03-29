import { ReactComponent as Logo } from './logo.svg';
import './App.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
// 
const items = [
  { text: '首页', path: '' },
  { text: '解决方案', path: 'solution' },
  { text: '关于我们', path: 'about' },
  { text: '企业合作', path: 'cooperation' },
  { text: '企业旅游', path: 'tourism' },
  { text: '加入我们', path: 'career' },
]

export default function App() {
  const [navBarClass, setNavBarClass] = useState('')

  const onScroll = useCallback(() => {
    let className = window.scrollY > 0 ? ' nav-bar-white' : ''

    if (className !== navBarClass) {
      setNavBarClass(className)
    }

  }, [navBarClass])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <>
      <ScrollToTop />
      <nav className={`nav${navBarClass}`}>
        <div className='left'>
          <Logo className='logo' />
          {items.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-item${isActive ? ' nav-item-active' : ''}`}
            >
              {item.text}
            </NavLink>
          ))}
          <a href='http://user.520uct.com/' target='_blank' className='nav-item' rel="noreferrer">登陆/注册</a>
        </div>
        <p className='tel'>全国服务热线: 400-109-0166</p>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}
